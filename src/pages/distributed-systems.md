---
slug: /distributed-systems
tags: []
lastModified: 2022-01-10
created: 2022-01-09
title: Distributed Systems
header: [{"depth":1,"name":"Resources","link":"Resources"},{"depth":1,"name":"Definition","link":"Definition"},{"depth":1,"name":"Naming","link":"Naming"},{"depth":2,"name":"Name resolution","link":"Name-resolution"},{"depth":3,"name":"Broadcasting","link":"Broadcasting"},{"depth":3,"name":"Forwarding pointers","link":"Forwarding-pointers"},{"depth":3,"name":"Home-based naming","link":"Home-based-naming"},{"depth":3,"name":"Distributed Hash Table (DHT)","link":"Distributed-Hash-Table-(DHT)"},{"depth":2,"name":"Flat naming","link":"Flat-naming"},{"depth":2,"name":"Structured naming","link":"Structured-naming"},{"depth":3,"name":"Name spaces","link":"Name-spaces"},{"depth":2,"name":"Attribute-based naming","link":"Attribute-based-naming"},{"depth":1,"name":"Architectures","link":"Architectures"},{"depth":2,"name":"Placement","link":"Placement"},{"depth":2,"name":"Communication paradigm","link":"Communication-paradigm"},{"depth":3,"name":"Middleware","link":"Middleware"},{"depth":3,"name":"Indirect communication","link":"Indirect-communication"},{"depth":2,"name":"Client-server architecture","link":"Client-server-architecture"},{"depth":2,"name":"Peer-to-peer (P2P)","link":"Peer-to-peer-(P2P)"},{"depth":2,"name":"Tiered architecture","link":"Tiered-architecture"},{"depth":2,"name":"Layering","link":"Layering"},{"depth":2,"name":"Micro services","link":"Micro-services"},{"depth":2,"name":"Docker","link":"Docker"},{"depth":1,"name":"Mutual exclusion","link":"Mutual-exclusion"},{"depth":1,"name":"Election","link":"Election"},{"depth":1,"name":"Clocks","link":"Clocks"},{"depth":2,"name":"Cristian's algorithm","link":"Cristian's-algorithm"},{"depth":2,"name":"Berkeley algorithm","link":"Berkeley-algorithm"},{"depth":2,"name":"Consistent cut","link":"Consistent-cut"},{"depth":2,"name":"Logical clocks","link":"Logical-clocks"},{"depth":2,"name":"Active monitoring","link":"Active-monitoring"},{"depth":2,"name":"Passive monitoring","link":"Passive-monitoring"},{"depth":1,"name":"MapReduce","link":"MapReduce"},{"depth":1,"name":"Consistency","link":"Consistency"},{"depth":1,"name":"Replication","link":"Replication"},{"depth":1,"name":"Fault tolerance","link":"Fault-tolerance"},{"depth":1,"name":"CAP theorem","link":"CAP-theorem"},{"depth":1,"name":"The Eight Fallacies of Distributed Systems","link":"The-Eight-Fallacies-of-Distributed-Systems"}]
---

# Resources
http://csis.pace.edu/~marchese/CS865/

# Definition
A distributed system is a computing environment in which multiple different components are spread out across multiple computers (computing devices) on a network. Together they split up the work, coordinating  the job to be more effectively executed than if it was to be executed on a single machine.

# Naming
Naming is used to uniquely identify a resource. This could be processes, remote objects etc. Names are mapped to an entity's location using name resolution. An example is an **url** that fetches the IP address, port and file path. An **identifier** is a name that uniquely identify an entity. A **true identifier** refers to at most one entity, each entity is referred to by at most one identifier and an identifier always refers to the same entity.

## Name resolution
The process of looking up a name is called **name resolution**. There are multiple ways to go from name to entity/machine. Below are four different ways. At its core we have a closure mechanism that is the initial place to start looking for the entity.

### Broadcasting
When broadcasting we send a message to all entities and the entity that is associated with the identifier responds with its current address. This is used in the Address Resolution Protocol (ARP). However it is not scalable to large networks as it floods the network with broadcast messages.

### Forwarding pointers
Forwarding Pointers enables locating mobile entities. Mobile entities move from one access point to another. When an entity moves from location $ A $ to location $ B $, it leaves behind a reference (in $ A $) to its new location $ B $. The resolve the address we follow up the chain of pointers to reach the entity and we update the entity's reference once the present location is found. Drawbacks to this is of course that long chains lead to long resolution delays and are prone to failure. Every item in the chain must work, if one fails every item after the failing item fails.

### Home-based naming
Each entity is assigned a home node
* Home node is typically static (has fixed access point and address)
* Home node keeps track of current address of the entity

Entity-home interaction:
* Entity’s home address is registered at a naming service
* Entity updates the home about its current address (foreign address) whenever it moves

Name resolution
* Client contacts the home to obtain the foreign address
* Client then contacts the entity at the foreign location

### Distributed Hash Table (DHT)
DHT is a class of decentralized distributed system that provides a lookup service similar to a hash table. We have a key-value pair stored in the nodes participating in the DHT and the responsibility to map keys to values are distributed across the nodes.

## Flat naming
In flat naming identifiers are simply random bits of strings. Flat name does not contain any information on how to locate an entity.

## Structured naming
Names are arranged in a specific order, e.g. file systems. Structured names are divided into **name spaces**, which is a directed graph consisting of **leaf nodes** and **directory nodes** where each leaf represents an entity and each directory nodes represents a collection of leaf and/or other directory nodes.

### Name spaces
Name spaces could be divided into three different layers:
1. **Global layer**. Consists of high-level directories that are managed by different administrations.
2. **Administrational layer**. Consists of mid-level directories that are managed by an administration.
3. **Managerial layer**. Consists of low-level directories within a single administration.

## Attribute-based naming
It could be convenient to look up entities based on their attributed than on their name, but this tends to be expensive by nature. However we could combine this with traditional structured naming to get better performance.

# Architectures
How to we organize our program? There are many different approaches:
1. **System-oriented** (processes and threads $ \implies $ inter-process communication)
2. **Object-based** architectures (problem-oriented)
3. **Resource-based** architectures
4. **Event-based** architectures

Basically we can make a distinction between software and hardware architectures, the latter concerning how a distributed system should be placed on different machines while the former concerns the logical organization of the system. This could be how entities interact with each other, how they are structured, how they can be made independent etc.

## Placement
Placement is important for performance. If a data center is physically closer the performance will increase due to better delay, bandwidth etc. Placement maps entities to actual physical distributed infrastructures. It should be studied carefully depending on need of the application.

## Communication paradigm
Communication paradigms are different ways of communicating between entities to provide the requested service.

### Middleware
A middleware is a service (library) that sits on the client and the server to make all implementation details easier by abstracting away different concepts.

### Indirect communication
Indirect communication uses middleware to provide a **one-to-many** communication and to reduce the **space coupling** (we know in advance where the procedure is) as well as the **time coupling** (a process should be explicitly waiting to accept requests for procedure calls on the receiver). Different types of indirect communication is: **group communication**, **publish-subscribe** and **message queues**.

## Client-server architecture
An important class of organizations of distributed systems is how machines should be divided into clients and servers. A client is an entity that sends requests to a server and expects that the server will produce a result that is returned to the client. The functionality is split up into smaller modules, increasing modularity. Client-server architectures are often centralized. In cases we see a decentralized approach every entity acts both as a server and a client in different situations. There is an equal role between each entity. This is what constitute peer-to-peer systems.

## Peer-to-peer (P2P)
In peer-to-peer systems the processes are organized into an overlay network which is a logical network where every entity has a list of all the other entities in the network that it may communicate with.

## Tiered architecture
A tiered architecture is useful to organize the functionality of a service by placing it on different servers. A tiered architecture gives rise to a vertical splitting of services.

## Layering
By partitioning a complex system into different layers we may reduce the overall complexity (hides complexity) of the system making it easier to implement and maintain. A layered approach gives rise to a horizontal splitting of services. Upper layers utilize services of lower layers. Distributed systems can be divided into three different layers: **platform** (provides a common service for the higher layers), **middleware** (provides common models that the application programmer may take advantage of by abstracting away e.g. communication mechanisms) and **applications**.

## Micro services
## Docker
The benefits of using docker is the following
1. Local development environments can be set up that are exact replicas of a live environment/server.
2. It simplifies collaboration by allowing anyone to work on the same project with the same settings, irrespective of the local host environment.
3. Multiple development environments can be run from the same host each one having different configurations, operating systems, and software.
4. Projects can be tested on different servers.
5. It gives you instant application portability. Build, ship, and run any application as a portable container that can run almost anywhere.

So it allows for **ease-of-use** (anyone can package their application on any device and be sure that will run unmodified anywhere else), **speed** (they run on the kernel in a sandboxed environment without simulating the whole operating system), **modularity** (it is easy to break up the application into smaller parts in individual containers) and **scalability** (it is easy to link these containers making it easy to scale and update components independently of each other).


# Mutual exclusion

# Election

# Clocks
In an asynchronous distributed system there is no notion of global clock. Events cannot be ordered according to some real order.
We can only talk about causal event ordering, that is if one event affects the outcome of another event. Sending always precedes receiving the message. Event ordering is transitive, e.g. if $ a \to b $ and $ b \to c $, then $ a \to c $.

## Cristian's algorithm
https://en.wikipedia.org/wiki/Cristian%27s_algorithm

Cristian's algorithm is a method for clock synchronization. The algorithm in steps:
1. $ P $ requests the time from $ S $ a; time $ t_0 $
2. After receiving the request from $ P $, $ S $ prepares a response and appends the time $ T $ from its own clock
3. $ P $ receives the response at time $ t_1 $ then sets its time to be $ T + \frac{RTT}{2} $, where $ RTT = t_1 - t_0 $


## Berkeley algorithm
https://en.wikipedia.org/wiki/Berkeley_algorithm

Berkeley algorithm is a method for clock synchronization. The algorithm in steps:
1. A leader is chosen via an election process
2. The leader polls the clients who reply with their time in a similar way of Cristian's algorithm
3. The leader observes the $ RTT $ of the messages and averages the clock times ignoring any value outside some threshold (to avoid extreme outliers)
4. The leader sends the amount of time each client must adjust to be synchronized to avoid further uncertainty regarding $ RTT $.

## Consistent cut
A cut is consistent if for any event $ e $ included in the cut, any event $ e' $ that causally precedes $ e $ is also included in the cut.
We must know the causal ordering of events to detect an inconsistent cut. Given a global clock in place we check the timestamp of each event $ RC(e) $ and compute the clock condition $ a \to b \implies RC(a) < RC(b) $. If there is no global clock we use logical clocks and vector clocks.

## Logical clocks
Each process keeps a local value of a logical clock that counts how many events in a distributed computation casually precedes the current event at the current process.

## Active monitoring
Active monitoring or distributed snapshot is when a monitor $ p_0 $ requests a snapshot of all other processes $ p_i, i \neq 0 $. These processes records its state and stops any ongoing distributed computation. It relays the snapshot message on all its outgoing channels, and starts to record all incoming messages after the first snapshot message. When the process has received snapshot messages from all other processes it stops the recording and sends the snapshot to $ p_0 $.

## Passive monitoring
In passive monitoring we use processes' local histories to construct consistent global states (cuts).


# MapReduce
https://en.wikipedia.org/wiki/MapReduce

# Consistency

# Replication
https://en.wikipedia.org/wiki/Replication_(computing)

Replication in computing involves sharing information to ensure consistency between redundant resources (software or hardware components) to improve reliability, fault-tolerance, or accessibility.

# Fault tolerance
https://en.wikipedia.org/wiki/Fault_tolerance

# CAP theorem
https://en.wikipedia.org/wiki/CAP_theorem

CAP theorem states that only two of the following three guarantees may hold in a distributed data store.
1. **Consistency**. Every read receives the most recent write or an error.
2. **Availability**. Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
3. **Partition tolerance**. The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.

For example, if a network partition failure happens, it must be decided whether to
1. Cancel the operation and thus decrease the availability but ensure consistency.
2. Proceed with the operation and thus provide availability but risk inconsistency.

# The Eight Fallacies of Distributed Systems
1. The network is reliable
2. Latency is zero
3. Bandwidth is infinite
4. The network is secure
5. Topology doesn't change
6. There is one administrator
7. Transport cost is zero
8. The network is homogeneous