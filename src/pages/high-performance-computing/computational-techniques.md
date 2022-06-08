---
slug: /high-performance-computing/computational-techniques
tags: ["wip"]
lastModified: 2022-06-08
created: 2022-04-06
title: Computational Techniques
header: [{"depth":1,"name":"Memory hierarchy","link":"Memory-hierarchy"},{"depth":1,"name":"Parallel programming models","link":"Parallel-programming-models"},{"depth":2,"name":"Multi-threaded programming (MT)","link":"Multi-threaded-programming-(MT)"},{"depth":2,"name":"Message Passing Interface (MPI)","link":"Message-Passing-Interface-(MPI)"},{"depth":2,"name":"Map-reduce (MR)","link":"Map-reduce-(MR)"},{"depth":2,"name":"Spark (SP)","link":"Spark-(SP)"},{"depth":3,"name":"Resilient Distributed Datasets (RDDs)","link":"Resilient-Distributed-Datasets-(RDDs)"},{"depth":1,"name":"Hadoop","link":"Hadoop"},{"depth":2,"name":"Hadoop Distributed File System (HDFS)","link":"Hadoop-Distributed-File-System-(HDFS)"},{"depth":1,"name":"RAID","link":"RAID"},{"depth":1,"name":"Bloom filters","link":"Bloom-filters"},{"depth":2,"name":"Cache behavior","link":"Cache-behavior"},{"depth":1,"name":"Tries","link":"Tries"},{"depth":1,"name":"Optimization ideas","link":"Optimization-ideas"}]
---


# Memory hierarchy
The following illustration shows how the memory is structured. At the top we have the CPU registers. Traversing down we go further away from the CPU and the access times get slower.
<div style="text-align: center;">
    <div> CPU registers </div>
    <div> | </div>
    <div> L1 cache </div>
    <div> | </div>
    <div> L2 cache </div>
    <div> | </div>
    <div> Main memory</div>
    <div> | </div>
    <div> Hard Drive</div>
</div>

Here is table showing the access times for each type of memory.

| Access times (ns) | Type |
| - | - |
| 1-2 | CPU registers |
| 3-10 | L1 cache |
| 25-50 | L2 cache |
| 30-90 | Main memory |
|  5-20 $ \quad (10^6) $ | Hard drive |

# Parallel programming models

## Multi-threaded programming (MT)

## Message Passing Interface (MPI)

## Map-reduce (MR)
- distributed hash table

## Spark (SP)

### Resilient Distributed Datasets (RDDs)
- lineage

# Hadoop

## Hadoop Distributed File System (HDFS)

# RAID
https://en.wikipedia.org/wiki/RAID

Redundant array of inexpensive disks (RAID) is a collection of methods to combine multiple disks into one or more logical units for the purpose of performance or redundancy.


# Bloom filters

Bloom filters are a probabilistic data structure for membership queries. There are two operations: inserting an item $ x $ and querying an item $ x $. If $ x $ is present in the bloom filter, the query will always be answered correctly. However, there is a probability of $ p $ that a query might be positive even though an item $ y $ is not present in the bloom filter. Thus, there exists no false negatives, but false positive do occur. Each item $ x $ has $ k $ different hash functions. They are used to fill in the bits in the bloom filter when inserting item $ x $, and used to query item $ x $.

<table class="no-padding">
  <tbody>
    <tr>
      <th>0</th>
      <th>0</th>
      <th style="background: #e86258">1</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th style="background: #e86258">1</th>
      <th>0</th>
      <th style="background: #e86258">1</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th style="background: #e86258">1</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
    </tr>
  </tbody>
</table>

If we assume uniform hashing and that $ n $ items have been inserted, then the probability that $ k $ positions are set for an item $ x $ when inserting item $ x $ is the follow
$$
\Pr (k \text{ positions set for } x) = (1- (1- \frac{1}{|b|})^{kn})^{k} \approx (1 - e ^ {- \frac{kn}{|b|}})^k
$$

Setting $ k $ to
$$
k = \ln 2 \cdot \frac{|b|}{n}
$$
will minimize the error probability. The following properties hold for optimal bloom filters:
$$
\begin{aligned}
p &= (0.6185)^{\frac{|b|}{n}} \\
|b| &= - \frac{n \ln (p)}{(\ln 2)^2} \\
k &= - \frac{\ln (p)}{\ln 2} \\
\end{aligned}
$$

Bloom filters can be multi-threaded with some care. Counting items where many items only have a frequency of 1 could be done in the following way with bloom filters

```python
from pybloom import BloomFilter
from collections import defaultdict

f = BloomFilter(capacity=len(X),error_rate=p)
d = defaultdict(int)

for x in X:
    if x in f:
        d[x] += 1
    else:
        f.add(x)

for x in d.keys():
    if (d[x] + 1) > tau:
        print(x, d[x])
```

## Cache behavior

# Tries

# Optimization ideas
If the current solution is too slow we might try out some general ideas to make it faster:

1. Change the problem
2. Refactor
    - Generally if we are using python, the shorter the program is the faster it is. Try to simplify and remove uneccesary code.
    - Use NumPy whenever you can
3. Compile
    - Cython
    - Numba
4. Optimize
    - Measure running time and identify hot spots better data structures. Constants may matter.
    - Think about the memory hierarchy. Often the theoretical computational complexity is misleading in the computers today.
5. Parallelize
    - based on structure of workload: data flow, computational effort, hardware, ...
    - Measure the serial and parallel parts if that is possible. Use Amdahl's to calculate the theoretical speedup.
    - Make use of SIMD instructions.
    - Choose suitable multiprogramming paradigm:
        - Multi-threading
        - Message passing
        - Map-reduce
        - Spark
        - ...
    - Use specialized frameworks that suits the problem in question.
    - Avoid oversubscription
    - Scale the solution by
        - Dedicated hardware: GPU, TPU
        - Clusters
        - Clouds

If the data is too big you need to parallelize the solution. Move the data to e.g.:
1. RAID with SSD
2. Cluster with local disks and HDFS