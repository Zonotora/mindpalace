---
slug: /os/processes-and-threads
tags: []
lastModified: 2022-03-31
created: 2021-09-11
title: Processes And Threads
header: [{"depth":1,"name":"Introduction","link":"Introduction"},{"depth":2,"name":"Amdahl's Law","link":"Amdahl's-Law"},{"depth":1,"name":"Processes","link":"Processes"},{"depth":2,"name":"The model","link":"The-model"},{"depth":2,"name":"Creation","link":"Creation"},{"depth":2,"name":"State","link":"State"},{"depth":2,"name":"Implementation","link":"Implementation"},{"depth":1,"name":"Threads","link":"Threads"},{"depth":2,"name":"Implicit threading","link":"Implicit-threading"},{"depth":2,"name":"POSIX threads","link":"POSIX-threads"},{"depth":2,"name":"Implementation user space","link":"Implementation-user-space"},{"depth":2,"name":"Implementation kernel","link":"Implementation-kernel"},{"depth":2,"name":"Scheduler activations","link":"Scheduler-activations"},{"depth":2,"name":"Pop-up thread","link":"Pop-up-thread"},{"depth":1,"name":"Processes and threads in Linux","link":"Processes-and-threads-in-Linux"},{"depth":1,"name":"Scheduling","link":"Scheduling"},{"depth":2,"name":"Process behaviour","link":"Process-behaviour"},{"depth":2,"name":"Categories of scheduling","link":"Categories-of-scheduling"},{"depth":2,"name":"Algorithms used in batch systems","link":"Algorithms-used-in-batch-systems"},{"depth":2,"name":"Algorithms used in interactive systems","link":"Algorithms-used-in-interactive-systems"},{"depth":2,"name":"Policy","link":"Policy"}]
---

# Introduction
Concurrent is not the same as parallel. Concurrent means that we feel that many processes run at the same time, but they actually do not. The kernel switch so fast between each process that we feel that they run at the same time. Parallel execution means that the processes are actually run in parallel. They are executed at the same time on different CPU cores.

## Amdahl's Law
Amdahl's law state the performance gain by adding CPU cores to an execution that has both serial and parallel components. It could be stated in a formula:
$$
\text{speedup} \leq \frac{1}{S + \frac{(1-S)}{N}}
$$

where $ S $ is the *serial portion* and $ N $ is the *processing cores*.

As an example, suppose that an application has a section that is 75% parallel and 25% serial, then moving from 1 to 2 cores has
$$
\text{speedup} \leq \frac{1}{0.25 + \frac{(1-0.25)}{2}} = 1.6
$$

Thus the speedup cannot be greater than $ 1.6 $.

# Processes
A process is one of the oldest and most important abstractions in an operating system. They support (pseudo) concurrent operations even when there is only one CPU available. In a multiprogramming system the CPU switches between processes very quickly only running each for a couple of (multiple of) milliseconds. Thus, at any given time only one process is running, but because of the fast switching between processes it gives the illusion of concurrent execution.

## The model
A process is an instance of an executing program including information about the program counter, variables and registers. The os can therefore switch between processes in a rapid manner and save each process' state so the next time that process starts executing it can go on from where it left. The rapid switching of processes is called @(multiprogramming)(multiprogramming). Processes in UNIX form a tree structure, while this is not the case in Windows.

## Creation
Four main events can cause processes to be generated:
1. System initialization.
2. Calling a process-creation system call from a running process.
3. A user request.
4. Initiation of a batch job.

When the operating system is booting a number of different processes are created. These could be foreground applications or background processes, also called @(daemons)(daemons). In UNIX(-like) there is only one system call to create a new process: `fork()`. This call duplicates the running process and the two processes will after the call, have the same memory image, environment, the same open files. To fork in C we do the following:

```c
int main() {
    pid = fork()
    // if pid=0 we are the child process
    // else we are the parent process
    if (pid == 0) {
        // child
    }
    else {
        // parent
    }
}

```
We need to wait for the child process to completely remove the process from memory once it has finished. We do this by the `waitpid` system call.
A zombie process is a process which has finished, but not been successfully terminated from its parent (waited). A process will when it dies, send the `SIGCHLD` signal to its parent indicating that the parent can wait for the child process to exit it successfully.
We can't kill zombie processes with the `SIGKILL` signal as zombie processes are already dead. Instead we have to send the `SIGCHLD` signal to the parent process. We can do this by the `kill` command as follows:
```bash
kill -s SIGCHILD pid
```
If the parent is not programmed to handle this signal, we have to kill the parent process. Zombie processes of a terminated process will be inherited by `init`, which will become the new parent. `init` is the first process started and has $ \text{pid} = 1 $. `init` will wait for each zombie child process periodically, making them exit gracefully.
If we do not free up any zombie processes, they will start taking up a majority of the available pids on the system, which eventually will block us from creating new processes.


```c
// pid_t waitpid(pid_t pid, int *status, int options);
// pid     0: Wait for any child process whose process
//            group ID is equal to that of the calling process.
//        -1: Wait for any child process.
//       > 0: Wait for the child whose process ID is equal to
//            the value of pid.
//      < -1: Wait for any child process whose process group
//            ID is equal to the absolute value of pid.
waitpid(pid, &status, 0);
```

By default this system call is blocking. To prevent this we can pass the flag option `WNOHANG`. This tells `waitpid` to return immediately if there is no child processes ready to be noticed.
```c
// pid_t waitpid(pid_t pid, int *status, int options);
// options    WNOHANG: Return immediately
//          WUNTRACED: Additionally return if a child has
//                     stopped.
//         WCONTINUED: Additionally return if a stopped child
//                     has been resumed by the signal SIGCONT
waitpid(pid, &status, WNOHANG);
```

Here is an example of a signal handler that will take care of background child processes when they are finished:
```c
// handler for SIGCHLD, the signal that indicates that at
// least one child process has been terminated
void background_wait(int s) {
    int wpid, status;
    while (1) {
        // check if there are some processes that have
        // finished running and finish them then return
        wpid = waitpid(-1, &status, WNOHANG);

        // there are some processes that are not finished
        // or no processes at all return
        if (wpid <= 0)
            return;
    }
}
```

The `SIGCHLD` handler must be set up before a child process is forked. We need to have a loop here because we don't know how many child processes that have exited.



## State
A process may be in the following states:
1. Running (using the CPU)
2. Ready (temporarily stopped to let another process run, but runnable)
3. Blocked (unable to run until some external event happens)

The first and second state are almost the same, both signaling that they want to be run. It is just a matter of which process the operating system chooses to "switch to" at that time instant. The third state will not run even if the CPU is idle. In systems like UNIX when a process reads from a pipe or special file and there is no input available the process is automatically blocked. Transitions from state 1 and state 2 is dependent on the process scheduler. There are many different algorithms to choose from when implementing the process scheduler, each optimizing some requirement. There is, however no algorithm that excels in every aspect which leads to tradeoffs.

## Implementation
The operating system maintains a table with one process per entry. Each entry contains important information about the process' state, like the stack pointer, memory allocation, program counter, open files, scheduling information and other useful information. This information is needed to allow the operating system to start the process again after being the blocked or ready state as if it was never there. The @(interrupt vector)(interrupt-vector) assists in maintaining multiple processes on each CPU. This table shows some of the usual information which is used in a process table entry:

| Process management | Memory management | File management |
| - | - | - |
| Registers | Pointer to text segment info | Root directory
| Program counter | Pointer to data segment info | Working directory
| Program status word | Pointer to stack segment info | File descriptors
| Stack pointer |  | User ID
| Process state |  | Group ID
| Priority |  |
| Scheduling parameters |  |
| Process ID |  |
| Parent process |  |
| Process group |  |
| Signals |  |
| Time when process started |  |
| CPU time used |  |
| Children's CPU time |  |
| Time of next alarm |  |


# Threads
A thread is just like a process, but with one major difference: it shares the same address space with other threads of the same process. That means every thread of a process will also share the same global variables. A thread has the same states as a process:

- running
- blocked
- ready
- terminated

There are a couple of multithreading models:
- Many-to-One
- One-to-One
- Many-to-Many

## Implicit threading
Program correctness may become very difficult to assure as the number of threads increase leading to management of threads by the programmer becoming hard to sustain. This leads to thread management being done by compilers or run-time libraries instead of the programmers.

## POSIX threads
IEEE defines a standard for writing portable threaded programs and most UNIX system supports it.

| Call | Description |
| - | - |
| Pthread_create | Creates a new thread |
| Pthread_exit   | Terminates the thread |
| Pthread_join   | Waits for a thread to exit |
| Pthread_yield  | Release CPU for another thread |
| Pthread\_attr_init | Create and initialize a thread's attribute structure |
| Pthread\_attr_destroy | Remove a thread's attribute structure |

## Implementation user space
A thread may be implemented in either the user space or the kernel. If the implementation is in the user space it has the advantage of not needing the operating system to support threading (the kernel). A @(thread table)(thread-table) is needed as well, which has a similar function to the kernel's process table. Invoking threading operations in user space is just local procedures, which certainly is more efficient than making a kernel call, because no trapping is needed, no context switching and the memory cache does not need to be flushed. The threading algorithm may be customized as well in a more flexible manner. However, there are few problems. Namely, how to implement blocking system calls. Letting one thread make a blocking system call will stop all threads, because it blocks the whole process. Another problem is that if a thread starts running it never stops if it does not want to. Precisely, a thread must give up the CPU voluntarily so that other threads also can work, because there is no clock interrupts making it impossible to schedule round-robin. Solutions to overcome this is often messy. The general argument against user space threading is that threads are used to make blocking calls, so that other code can run meanwhile the application is waiting for a certain task. But implementing blocking behaviour is messy.

## Implementation kernel
A kernel implementation of threading does not need a run-time system for each threads as well as no thread table in each process. The kernel keeps track of each thread with a thread table of its own. Every mutating operation involving threading is updated in the thread table. The thread table stores each thread's registers, state, among other information (the same information as user space threads but different location). The process table is still used alongside the thread table. Every blocking call in each thread is implemented as a system call. When a thread is blocked, the kernel may run a thread from the same process or a thread from another process. But this all comes with a greatly increased cost, which is why some systems recycle threads. That is, when a thread is destroyed it is marked as not runnable, but the data structure remains untouched. When a new thread is created later on, it can reuse the recycled thread's data structure to save some overhead.

## Scheduler activations
To use the best of both worlds, a concept called scheduler activations was developed. They try to mimic the functionality of kernel threads, but with performance more alike of user threads. Nonblocking system calls and checks in advance should not be necessary to make certain system calls. When a thread is blocking because of a system call or a page fault, other threads within the same process should be able to run. The kernel creates a certain number of virtual processors for each process. The user space run-time is then allowed to allocate threads to the processors. The basic idea behind scheduler activations then follows a mechanism called @(upcall)(upcall).


## Pop-up thread
A pop-up thread is a thread that is created to handle a new request meanwhile the parent thread continues to handle new incoming requests.



# Processes and threads in Linux
The kernel represents processes as tasks internally. A task represents any execution context, therefore making no distinction between a process and a thread. This is unlike most OS approaches. A single-threaded process will hence be represented as one task, and a multithreaded process will have one task for each thread. Linux identifies each process with its PID. For each process a process descriptor is active in memory for as long as the process is active. It contains information needed to manage all processes, e.g. scheduling parameters, open file descriptors with more. The information can be split up in a few broad categories:
1. **Scheduling parameters** Includes process priority, consumed CPU time and consumed sleep time which are used to determine which process to run next.
2. **Memory image** Pointers to the page tables and text, data, and stack segments of a process when the process is in memory. When it is not it instead contains the location on the disk. This also includes visibility information about each data block.
3. **Signals** Which signals should be caught, ignored, blocked and active.
4. **Machine registers** Traps to the kernel are stored here.
5. **System call state** The current system call is stored here.
6. **File descriptor table** Involved file descriptors for a system call.
7. **Accounting** General limits the kernel puts on each process, like maximum stack size for each process.
8. **Kernel stack** The kernel stack which is used to handle kernel parts by a process.
9. **Other** Current process state with more.

When a new process is created a new process descriptor is created which contains information that mostly is filled in by the parent process often based upon its own values. Linux checks for an available PID, assigns it, and updates the PID hash-table to point to the new task. The semantics of the the instruction `fork` say that no memory is shared between the parent and the child, but that means that we need to copy these structures. Linux avoids this by giving each child its own empty structure but pointing them to the parent with read-only access. The structures are only allocated once the child attempts to write to these read-only parent structures. Then being marked with both read and write access. Linux introduces a system call `clone` not found in any other version of UNIX, to deal with many of the issues arising from threads when for example forking.


# Scheduling

When a computer is constructed to allow multiple processes to run at the same time, each process constantly competes for CPU time. If one process is the only one in ready state, the competition is easy. But when there a more than one process in ready state and only CPU is available the operating system has to decide which process to execute next. The component making this decision is the scheduler which uses a scheduling algorithm to decide which process to execute next. Scheduling most often applies to both processes and threads.

## Process behaviour
To be able to construct a good scheduling algorithm one needs to analyze how different processes utilize the CPU. Some processes spend a considerable amount of time computing. These processes are called @(CPU-bound)(CPU-bound). Other processes are mostly waiting for I/O and they are called @(I/O-bound)(I/O-bound) processes. I/O-bound activity is defined as when a process enters blocked state while waiting for an external device to finish. One observation is that CPU-bound processes have long CPU bursts (occupies the CPU for longer period of time) while I/O-bound processes have short CPU bursts (occupies the CPU for shorter period of time). Thus, the principal idea is to let I/O-bound processes higher priority to run so that they can issue disk requests and keep the disk busy while the CPU is doing some other computation. If there are no available processes after a process exits, an idle process provided by the system is usually run. Scheduling algorithms can be divided into two different groups: @(nonpreemptive)(nonpreemptive) and @(preemptive)(preemptive) depending on how the deal with clock interrupts. A nonpreemptive scheduling algorithm picks a process to run until it blocks. It could in fact run for several hours nonstop. A preemptive scheduling algorithm picks a process to run for a fixed amount of time. When that fixed period of time has finished the process is @(suspended)(suspended) and the algorithm picks another process to run instead.

## Categories of scheduling
There are three different environments worth distinguishing when talking about scheduling. These are
1. Batch
2. Interactive
3. Real time

In **batch** systems long waiting times are often acceptable, which means a nonpreemptive or a preemptive (with a long fixed duration) is suitable. They are applicable in corporate mainframes. When there are **interative** users involved in the system, preemption is necessary to keep one process from dominating the CPU usage. In **real time** systems there is often no need to have preemptive scheduling, because the processes run in such environment know that they are not going to use the compute resources for a long time and blocks quickly. Because there are different use cases, the goal of the scheduling algorithm differs as well.

**General System**
- Fairness
- Policy enforcement
- Balance

**Batch**
- Throughput
- Turnaround time (time for a batch to finish)
- CPU utilization

**Interative**
- Response time
- User experience (proportionality)

**Real time**
- Deadlines
- Predictability

## Algorithms used in batch systems

**Nonpreemptive first-come, first-served**. Here we have a single queue of ready processes. The first process that enters the queue may run for how much as it wants, then when terminated or blocked, the next process that started (the next process in the queue) gets to run. As more processes start they are put onto the end of the queue. When a blocked process becomes ready, it is also put onto the end of the queue. The disadvantages with this is that processes with short CPU time but that are I/O bound and placed after a long CPU bound process will have to wait until their turn, even though that could have run simultaneously with the long CPU bound process.

**Shortest job first**. This is another nonpreemptive algorithm that run times are known beforehand. The scheduler picks the shortest of these run times first. If we have four jobs A,B,C,D with runtimes 8,4,4,4 minutes the turnaround time for each one of these is 8,12,16,20 respectively if we run them in the order given. If we use the shortest job first we instead run A last, reducing the mean of the turnaround times. It is an optimal solution if every job is available simultaneously.

**Shortest remaining time left**. This is a preemptive version of the shortest job first. The scheduler chooses the process with the smallest run time remaining. Again we must know the run times in advance. This algorithm favors new processes with small run time.

## Algorithms used in interactive systems

**Round-robin scheduling**. One of the classics (oldest, fairest and most widely used). Each process gets a time interval called `quantum` during which it is allowed to run. If the process is still running at the end of the quantum the scheduler gives the CPU to another process. Otherwise, the schedule switching occurs when the process blocks or terminates as usual. The scheduler keeps a list of all the processes. When a process has finished its quantum it is put at the end of the list. Setting the quantum to a reasonable length is often a tradeoff between switching to much (context switch overhead) and not giving short interactive requests time to run (longer quantum length). In practice 20-50 msec is often used.

**Priority scheduling**. In this algorithm a process is assigned a priority of how important it is. The scheduler switches to the process with the highest priority. It is often convenient to use round-robin in combination with priority scheduling and use priority classes. Within each class round-robin is used, but for each class priority scheduling is used.

**Other**
- Multiple queues
- Shortest process next (similar to shortest job first, but for interactive systems)
- Guaranteed scheduling
- Lottery scheduling
- Fair-share scheduling

## Policy
Because no scheduler algorithm is best in all cases there is a need to separate the logic of the scheduling mechanism from the scheduling policy. The scheduling algorithm in of itself becomes parametrized in a way which makes it more flexible and can depend on the scenario instead of being fixed.