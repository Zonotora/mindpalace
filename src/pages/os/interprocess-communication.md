---
slug: /os/interprocess-communication
tags: []
lastModified: 2021-10-04
created: 2021-09-28
title: Interprocess Communication
header: [{"depth":1,"name":"Critical regions","link":"Critical-regions"},{"depth":1,"name":"Mutual exclusion with busy waiting","link":"Mutual-exclusion-with-busy-waiting"},{"depth":2,"name":"Hardware instructions","link":"Hardware-instructions"},{"depth":1,"name":"Mutual exclusion that blocks","link":"Mutual-exclusion-that-blocks"},{"depth":1,"name":"Semaphores","link":"Semaphores"},{"depth":1,"name":"Mutex","link":"Mutex"},{"depth":1,"name":"Avoid locks","link":"Avoid-locks"}]
---

# Critical regions

Race conditions arise when multiple processes want the modify the same resources. To avoid this we need some way to prohibit processes to modify some resource if that is already being modified by another process. This concept is called @(mutual exclusion)(mutual exclusion). A **critical region/section** is defined as the part of the program that could lead to race conditions, in other words the part which access the shared memory. To have a good solution to the critical section problem we need four conditions to hold

1. Only one process may access the critical region at a time
2. No assumptions should be made on the hardware (speeds and number of CPUs)
3. A process running outside its critical region should not block any other process
4. A process should not have to wait forever to enter its critical region

# Mutual exclusion with busy waiting
On a single-processor system one easy way to accomplish this is to disable clock interrupts just after entering the critical region and enable them just before leaving. With no clock interrupts the CPU will not switch to another process. Thus the process can be sure that it is the only process accessing the shared resource. However it is not an elegant solution to give user processes the power to disable clock interrupts, because one may never turn them on again. Also, with more CPUs disabling the interrupts will only disable them for the current CPU. Although the kernel itself may very well use this method for convenience when updating different data structures. But more sophisticated methods are needed for synchronization. Another solution may be to take turns with for example a variable that tells whether a process may enter its critical region, if it can't it just spins. This is not a good solution if the processes are running with different speed, because then the faster process needs to wait for the slower all the time. The following is Petersons's solution to mutual exclusion which avoids taking turns:

```c
#define FALSE  0
#define TRUE 1
#define N 2 /* number of processes */
int turn; /* whose turn is it? */
int interested[N]; /* all values initially 0 (FALSE) */

void enter_region(int process); /* process is 0 or 1 */
{
    int other; /* number of the other process */
    other = 1 − process; /* the opposite of process */
    interested[process] = TRUE; /* show that you are interested */
    turn = process; /* set flag */
    while (turn == process && interested[other] == TRUE)  /* null statement */ ;
}

void leave_region(int process) /* process: who is leaving */
{
    interested[process] = FALSE; /* indicate departure from critical region */
}
```

## Hardware instructions

Many processors nowadays support intructions that are @(atomic)(atomic). This instruction is the TSL (Test and Set Lock). The instruction guarantees that no other process can access the memory word until the instruction has finished, so the instruction effectively blocks the memeory bus until it is finished to prohibit other processes to access it while it is active. XCHG is another such instruction which exchanges the contents of two locations in an atomic way.

# Mutual exclusion that blocks
To avoid wasting CPU resources when a process is waiting for the lock we need to come up with another solution. A simple solution is to use `sleep()` and `wakeup()`

# Semaphores
A semaphore has a value where 0 represent that no wakeups were saved or above 0 which indicates that more than 0 wakeups are pending. Usually incrementing and decrementing are done through operations called `up` and `down`. These actions are executed in an atomic manner. The normal way to implement them as that is through system calls with the operating system briefly disabling all the interrupts while accessing the semaphore. Disabling all interrupts here should be of no harm because the access is only a few instructions. If the processor consists of multiple CPUs each semaphore should be protected by a lock variable as well with the hardware instructions (e.g. `TSL`).

# Mutex
A mutex is a simplified version of a semaphore when counting is not needed. They are only good for managing mutual exclusion. They can have two states: unlocked or locked. They can be implemented in user space if hardware instructions like `TSL` are available.

```assembly
mutex_lock:
    TSL REGISTER,MUTEX      % copy mutex to register and set mutex to 1
    CMP REGISTER,#0         % was mutex zero?
    JZE ok                  % if it was zero, mutex was unlocked, so return
    CALL thread_yield       % mutex is busy; schedule another thread
    JMP mutex_lock          % try again
ok: RET                     % retur n to caller; critical region entered

mutex_unlock:
    MOVE MUTEX,#0           % store a 0 in mutex
    RET                     % retur n to caller

```
We can see that if a process can not acquire the mutex, it will yield instead of busy waiting. This is especially important in user threads, because there is no clock that could stop threads that have run for too long. Thus a thread trying to acquire a lock by busy waiting will run forever and never acquire the lock, blocking other threads from being run.

# Avoid locks
We could let readers read the old or new version of the modified shared data while a writer writes to it, instead of a weird combiation.