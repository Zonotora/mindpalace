---
slug: /distributed-systems
tags: []
lastModified: 2022-01-09
created: 2022-01-09
title: Distributed Systems
header: [{"depth":1,"name":"Resources","link":"Resources"},{"depth":1,"name":"Clocks","link":"Clocks"},{"depth":1,"name":"Cristian's algorithm","link":"Cristian's-algorithm"},{"depth":1,"name":"Berkeley algorithm","link":"Berkeley-algorithm"},{"depth":2,"name":"Consistent cut","link":"Consistent-cut"},{"depth":2,"name":"Logical clocks","link":"Logical-clocks"},{"depth":2,"name":"Active monitoring","link":"Active-monitoring"},{"depth":2,"name":"Passive monitoring","link":"Passive-monitoring"},{"depth":1,"name":"MapReduce","link":"MapReduce"},{"depth":1,"name":"Replication","link":"Replication"},{"depth":1,"name":"Fault tolerance","link":"Fault-tolerance"},{"depth":1,"name":"CAP theorem","link":"CAP-theorem"}]
---

# Resources
http://csis.pace.edu/~marchese/CS865/


# Clocks
In an asynchronous distributed system there is no notion of global clock. Events cannot be ordered according to some real order.
We can only talk about causal event ordering, that is if one event affects the outcome of another event. Sending always precedes receiving the message. Event ordering is transitive, e.g. if $ a \to b $ and $ b \to c $, then $ a \to c $.

# Cristian's algorithm
https://en.wikipedia.org/wiki/Cristian%27s_algorithm

Cristian's algorithm is a method for clock synchronization. The algorithm in steps:
1. $ P $ requests the time from $ S $ a; time $ t_0 $
2. After receiving the request from $ P $, $ S $ prepares a response and appends the time $ T $ from its own clock
3. $ P $ receives the response at time $ t_1 $ then sets its time to be $ T + \frac{RTT}{2} $, where $ RTT = t_1 - t_0 $


# Berkeley algorithm
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
