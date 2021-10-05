---
slug: /os/keywords
tags: ["keywords"]
lastModified: 2021-10-05
created: 2021-09-05
title: Keywords
header: [{"depth":1,"name":"Spin lock","link":"Spin-lock"},{"depth":1,"name":"Synchronization","link":"Synchronization"},{"depth":1,"name":"Livelock","link":"Livelock"},{"depth":1,"name":"Starvation","link":"Starvation"},{"depth":1,"name":"Deadlock","link":"Deadlock"},{"depth":1,"name":"Preemptable resource","link":"Preemptable-resource"},{"depth":1,"name":"Nonpreemptable  resource","link":"Nonpreemptable--resource"},{"depth":1,"name":"Static relocation","link":"Static-relocation"},{"depth":1,"name":"Dynamic relocation","link":"Dynamic-relocation"},{"depth":1,"name":"Memory compaction","link":"Memory-compaction"}]
---

- shell
- GUI (Graphical User Interface)
- kernel mode / supervisor mode
- user mode
- SATA (Serial ATA)
- disk driver
- multiplexing
- mainframes
- batch system
- multiprogramming
- spooling (Simultaneous Peripheral Operation On Line)
- timesharing
- MULTICS
- cloud computing
- UNIX
- UNIX-like
- BSD (Berkeley Software Distribution)
- POSIX
- System V
- MINIX
- Linux
- LSI (Large Scale Integration)
- microcomputers
- DOS (Disk Operating System)
- network operating systems
- distributed operating systems
- X Window System (X11)
- program counter
- stack pointer
- PSW (Program Status Word)
- pipeline
- superscalar CPU
- system call
- multithreading
- hyperthreading (intel's name for multithreading)
- cores
- CPU (Graphical Processing Unit)
- cache lines
- cache hit
- L1 cache
- L2 cache
- RAM (Random Access Memory)
- core memory
- ROM (Read Only Memory)
- EEPROM (Electrically Erasable PROM)
- flash memory
- SSD (Solid State Disk)
- virtual memory
- MMU (Memory Management Unit)
- context switch
- process switch
- device driver
- I/O port space
- busy waiting
- interrupt
- waiting (busy, blocking)
- interrupt vector
- DMA (Direct Memory Access)
- PCI (Peripheral Component Interconnect Express)
- ISA (Industry Standard Architecture)
- shared bus architecture
- serial bus architecture
- DMI (Direct Media Interface)
- USB (Univeral Serial Bus)
- SCSI (Small Computer System Interface)
- plug and play
- BIOS (Basic Input Output System)
- PDA (Personal Digital Assistent)
- hard real-time system
- soft real-time system
- process
- address space
- process table
- core image
- command interpreter
- child process
- interprocess communication (IPC)
- UID (User IDentification)
- GID (Group IDentification)
- superuser
- Administrator
- directory
- working directory
- file descriptor
- root file system
- special file (UNIX)
- block special file
- character special file
- pipe
- rwx bits (read, write, execute)
- prompt
- PID (Process IDentifier)
- UNIX system calls
- text segment
- REF: data segment
- stack segment
- i-nodes
- partitions
- minor devices
- API (Application Programming Interface)
- shared libraries
- DLL (Dynamic-Link Library)
- monolithic system
- microkernel
- CMS (Conversational Monitor System)
- shared hosting
- type 1 hypervisor
- type 2 hypervisor
- host operating system
- guset operating system
- paravirtualization
- JVM (Java Virtual Machine)
- exokernel
- multiprocessor
- pseudoparallelism
- REF: multiprogramming
- REF: daemons
- process scheduler
- process table
- process control blocks (PCB)
- REF: interrupt vector
- short-term scheduler
- long-term scheduler
- dispatcher
- worker thread
- REF: thread table
- trap
- wrapper
- jacket
- REF: upcall
- pop-up thread
- scheduler
- scheduling algorithms
- REF: compute-bound (CPU-bound)
- REF: I/O-bound
- REF: nonpreemptive
- REF: suspended
- REF: quantum
- UMA (Uniform Memory Access)
- NUMA (Nonuniform  Memory  Access)
- cache line
- cache-coherence protocol
- crossbar switch
- REF: mutual exclusion
- REF:atomic
- priority inversion problem
- producer-consumer or bounded buffer problem
- futex
- condition variables
- monitor (synchronization primitive)
- message passing
- barrier (synchronization mechanism)
- RCU (Read-Copy-Update)
- banker’s algorithm
- memory hierarchy
- memory manager
- swapping
- virtual memory
- REF: free lists
- REF: bitmaps


# Spin lock
A lock that uses busy waiting.

# Synchronization
To make sure that certain event chains do not occur.

# Livelock
A situation where no process is blocked but events are happening with no progress.

# Starvation
A situation where a process run indefinitely but fail to make any progress due to unfairness.

# Deadlock
A situation where all processes are blocked waiting for each other and will remain in that state indefinitely.

# Preemptable resource
A resource that **can** be taken away from another process without any bad effects.

# Nonpreemptable  resource
A resource that **cannot** be taken away from another process without any bad effects.

# Static relocation
A method for relocation every memory address during the load process with a constant, the constant being the first physical memory address the program was loaded into.

# Dynamic relocation
A method for mapping a process' address space onto different phsyical memory parts.

# Memory compaction
A technique to move all processes in memory down as far as possible to avoid memory holes.