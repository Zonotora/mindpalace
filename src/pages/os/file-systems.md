---
slug: /os/file-systems
tags: []
lastModified: 2021-10-15
created: 2021-10-14
title: File Systems
header: [{"depth":1,"name":"Files","link":"Files"},{"depth":2,"name":"Access","link":"Access"},{"depth":2,"name":"Meta data","link":"Meta-data"},{"depth":2,"name":"Operations","link":"Operations"},{"depth":1,"name":"Directories","link":"Directories"}]
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
| Create | Creation of the file without no content but some of the attributes are set |
| Delete | When a file is not needed anymore we could free up its disk space by deleting it |
| Open | Loads the file's attributes and addresses for faster access later on into memory. This must be called before using the file |
| Close | When we no longer need to access the file we should free up its space in memory. |
| Read | Fetch the data more a file |
| Write | Write data to the file |
| Append | Append data to a file. This is a special case of write. |
| Seek | Repositions the file access pointer to a specific place in the file to allow reads from that position |
| Rename | Change the name of the file |
| Set attributes | Set attributes that are settable |
| Get attributes | List attributes |

# Directories

