---
slug: /os/processes-and-threads
tags: []
lastModified: 2021-09-16
created: 2021-09-11
title: Processes And Threads
header: [{"depth":1,"name":"Processes","link":"Processes"},{"depth":2,"name":"The model","link":"The-model"},{"depth":2,"name":"Creation","link":"Creation"},{"depth":2,"name":"State","link":"State"},{"depth":2,"name":"Implementation","link":"Implementation"},{"depth":1,"name":"Threads","link":"Threads"}]
---

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

When the operating system is booting a number of different processes are created. These could be foreground applications or background processes, also called @(daemons)(daemons). In UNIX(-like) there is only one system call to create a new process: `fork()`. This call duplicates the running process and the two processes will after the call, have the same memory image, environment, the same open files.

## State
A process may be in the following states:
1. Running (using the CPU)
2. Ready (temporarily stopped to let another process run, but runnable)
3. Blocked (unable to run until some external event happens)

The first and second state are almost the same, both signaling that they want to be run. It is just a matter of which process the operating system chooses to "switch to" at that time instant. The third state will not run even if the CPU is idle. In systems like UNIX when a process reads from a pipe or special file and there is no input available the process is automatically blocked. Transitions from state 1 and state 2 is dependent on the process scheduler. There are many different algorithms to choose from when implementing the process schduler, each optimizing some requirement. There is, however no algorithm that excels in every aspect which leads to tradeoffs.

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

In some system the CPU time is split up between...

## POSIX threads
IEEE defines a standard for writing portable threaded programs and most UNIX system supports it.

| Call | Description |
| - | - |
| Pthread_create | Creates a new thread |
| Pthread_exit   | Terminates the thread |
| Pthread_join   | Waits for a thread to exit |
| Pthread_yield  | Release CPU for another thread |
| Pthread_attr_init | Create and initialize a thread's attribute structure |
| Pthread_attr_destroy | Remove a thread's attribute structure |

## Implementation
A thread may be implemented in either the user space or the kernel. If the implementation is in the user space it has the advantage of not needing the operating system to support threading (the kernel). A @(thread table)(thread-table) is needed as well, which has a similar function to the kernel's process table.