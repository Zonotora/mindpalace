---
slug: /machine-learning/paradigms
tags: ["chalmers", "machine-learning"]
lastModified: 2021-05-03
created: 2021-05-03
title: Paradigms
header: [{"depth":1,"name":"Supervised learning","link":"Supervised-learning"},{"depth":1,"name":"Unsupervised learning","link":"Unsupervised-learning"},{"depth":2,"name":"Clustering","link":"Clustering"},{"depth":3,"name":"Flat","link":"Flat"},{"depth":4,"name":"Finding representatives","link":"Finding-representatives"},{"depth":4,"name":"Probabilistic approach","link":"Probabilistic-approach"},{"depth":4,"name":"Dense approach","link":"Dense-approach"},{"depth":3,"name":"Hierarchical","link":"Hierarchical"},{"depth":2,"name":"Statistical distribution","link":"Statistical-distribution"},{"depth":2,"name":"Representation","link":"Representation"},{"depth":1,"name":"Semisupervised learning","link":"Semisupervised-learning"},{"depth":1,"name":"Reinforcement learning","link":"Reinforcement-learning"},{"depth":1,"name":"References","link":"References"}]
---

# Supervised learning
Our model tries to imitate examples.


# Unsupervised learning
In unsupervised learning we do not have the labeled parts. In unsupervised learning we try to discover some patterns about the data: explore, visualize and understand.

## Clustering
Clustering @{clusteringwiki} @{clustering} describes data by forming it into groups or hierarchies. The goal of clustering is to discover natural groups in a data set. A natural group is data points which are very much alike but different from other groups.

To evaluate similarity there are some different options. For vectorized data it is common to use Euclidean distance.
### Flat

#### Finding representatives
Each cluster is characterized by a center. We can used different techniques, e.g. @(k-means)(k-means), @(k-medoids)(k-medoids) or @(mean shift)(mean shift), to get a center vector.

#### Probabilistic approach
Each cluster is represented by a distribution.

#### Dense approach
Find dense regions with algorithms like @(DBSCAN)(DBSCAN)

### Hierarchical
There are two approaches, @(applomerative)(agglomerative) which is bottom-up and @(divisive)(divisive) which is top-down.


## Statistical distribution
We want to use our model to find data points that are highly unusual.




## Representation
We want to learn some new representation of the data, e.g. reducing the data set to lower dimensions.

It is good for visualization, and reducing the need for storage which makes the algorithm run faster and the learning easier.

# Semisupervised learning
Follows the same patterns as supervised learning, but we just don't have enough labeled data.

# Reinforcement learning


# References
{clusteringwiki}:
    url: https://en.wikipedia.org/wiki/Cluster_analysis

{clustering}:
    url: https://scikit-learn.org/stable/modules/clustering.html