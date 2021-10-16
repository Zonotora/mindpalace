---
slug: /os/file-systems
tags: []
lastModified: 2021-10-16
created: 2021-10-14
title: File Systems
header: [{"depth":1,"name":"Files","link":"Files"},{"depth":2,"name":"Access","link":"Access"},{"depth":2,"name":"Meta data","link":"Meta-data"},{"depth":2,"name":"Operations","link":"Operations"},{"depth":1,"name":"Directories","link":"Directories"},{"depth":1,"name":"Implementation","link":"Implementation"},{"depth":2,"name":"Files","link":"Files"},{"depth":3,"name":"Contiguous allocation","link":"Contiguous-allocation"},{"depth":3,"name":"Linked-list allocation","link":"Linked-list-allocation"},{"depth":3,"name":"I-nodes","link":"I-nodes"},{"depth":2,"name":"Directories","link":"Directories"}]
---

# Files

The file system consists of **Regular files**, **Directories**, **Character special files** and **Block special files**. Regular files are files that the user sees, generally ASCII or binary. A file will execute only if it has the correct format. A simple binary file from early UNIX has for example five sections: header, text, data, relocation bits and the symbol table. The header consists of a **magic number** that marks the file as executable or not. The text and data is the program itself which are loaded into memory when the program is executed and relocated by the relocation bits. The symbol table is for debugging. There are other kinds of binary files as well. Every operating system must recognize its own executable file.


## Access

Early operating systems could only access a file in a sequential manner, meaning they were forced to read the whole file and could not skip parts or read out of order.


## Meta data

Files have additional information about the file itself called the file's **attributes** or **metadata**. This information could be when the file was created, last modified and many more properties.


## Operations

There are a number of operations an operating system allow for storage and retrieval. The following operations are the most common.

| Operation | Description |
|-|-|
| Create | Creation of the file without no content but some of the attributes are set. |
| Delete | When a file is not needed anymore we could free up its disk space by deleting it. |
| Open | Loads the file's attributes and addresses for faster access later on into memory. This must be called before using the file. |
| Close | When we no longer need to access the file we should free up its space in memory. |
| Read | Fetch the data more a file. |
| Write | Write data to the file. |
| Append | Append data to a file. This is a special case of write. |
| Seek | Repositions the file access pointer to a specific place in the file to allow reads from that position. |
| Rename | Change the name of the file. |
| Set attributes | Set attributes that are settable. |
| Get attributes | List attributes. |

# Directories

Directories are used to organize files in multiple layers. Similarly to files, directories also have a number of operations allowed for storage and retrieval.

| Operation | Description |
|-|-|
| Create | Create the directory. Dot and DotDot directories are automatically created. |
| Delete | Delete the directory. Only empty directories can be deleted if not recursively forced. |
| Opendir | Lists all files and subdirectories in the directory. This puts the information in memory. |
| Closedir | When we no longer need to access the directory we should free up its space in memory. |
| Readdir | Returns the next entry in the directory. |
| Rename | Change the name of the directory. |
| Link | Linking allows a file to appear in more than one directory. |
| Unlink | Removes a directory entry. This is what UNIX uses to delete files. The file is removed if it is only present in one directory, else the link is removed. |


# Implementation

File systems exists on the disk. Disks could be divided into several different partitions with independent file systems. We could for example have Windows on one partition with its own file system and Linux on another partition with another file system one the same computer. Sector 0 on the disk is called the @(MBR)(mbr), which is used to boot the computer. This sector also contains information about all other partitions. Every partition starts with a @(boot block)(boot-block) even if they are not bootable, because they might in the future. So the first thing the MBR program does is to execute the boot block once it has located the active partition. One of the partitions is marked as active.

## Files

### Contiguous allocation

One of the simplest schemes is contiguous allocation. A file that is 50KB with 1KB disk blocks would allocate 50 consecutive blocks. This technique is very simple to implement because we only need to keep track of two things for each file, that is the disk address and the number of disk blocks. The performance is also very good because we only one seek is needed. The one drawback is that the disk over time becomes fragmented, holes in the disk address space. We could keep track of the holes to reuse the space but then we need to know the final size of the file to choose a hole that fits. So if the is small at the beginning and we place it at a hole that perfectly fits what do we do if the size of this file increases?

### Linked-list allocation

Another approach is to keep every block of a file as a linked list. This way the first block would point to the next, but does not need to be right after the first block. This would allow us to use every disk block. No space is lost due to fragmentation. Sequential reading would be fast, but random access slower. To get to block $ n $ we would have to read $ n - 1 $ blocks. To avoid this we could keep each pointer the disk blocks in a table in memory. However this also comes with the disadvantage of requiring very much memory for big tables since the whole table needs to be in memory at all time. The table is called @(FAT)(fat).

### I-nodes
Yet another approach is to associate each file with a data structure called **i-node (index-node)**. With the i-node we can locate every disk block of the file. The i-node lists the attributes and disk addresses of the file. In contrast with linked list, we only need to keep the i-node in memory when accessing the file. I-nodes are also much more memory efficient than linked list. With $ k $ files occupying $ n $ bytes we need to reserve $ kn $ bytes in total.

## Directories