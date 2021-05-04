---
slug: /machine-learning/paradigms
tags: ["chalmers", "machine-learning"]
lastModified: 2021-05-04
created: 2021-05-03
title: Paradigms
header: [{"depth":1,"name":"Supervised learning","link":"Supervised-learning"},{"depth":1,"name":"Unsupervised learning","link":"Unsupervised-learning"},{"depth":2,"name":"Clustering","link":"Clustering"},{"depth":3,"name":"Flat","link":"Flat"},{"depth":4,"name":"K-means","link":"K-means"},{"depth":4,"name":"DBSCAN","link":"DBSCAN"},{"depth":4,"name":"Evaluation","link":"Evaluation"},{"depth":5,"name":"Silhoutte score","link":"Silhoutte-score"},{"depth":5,"name":"Purity score","link":"Purity-score"},{"depth":5,"name":"Inverse purity score","link":"Inverse-purity-score"},{"depth":5,"name":"F-score","link":"F-score"},{"depth":3,"name":"Hierarchical","link":"Hierarchical"},{"depth":2,"name":"Statistical distribution","link":"Statistical-distribution"},{"depth":2,"name":"Representation","link":"Representation"},{"depth":1,"name":"Semisupervised learning","link":"Semisupervised-learning"},{"depth":1,"name":"Reinforcement learning","link":"Reinforcement-learning"},{"depth":1,"name":"References","link":"References"}]
---

# Supervised learning
Our model tries to imitate examples.


# Unsupervised learning
In unsupervised learning we do not have the labeled parts. In unsupervised learning we try to discover some patterns about the data: explore, visualize and understand.

Stanford has a good guide @{stanford}.

## Clustering
Clustering @{clusteringwiki} @{clustering} describes data by forming it into groups or hierarchies. The goal of clustering is to discover natural groups in a data set. A natural group is data points which are very much alike but different from other groups. Clustering is hard, because we don't there is typically no right answer and the clustering algorithm may come up with some pattern that is obvious in the dataset but is far from we want.

To evaluate similarity there are some different options. For vectorized data it is common to use Euclidean distance. We can divide clustering evaluation into two separate methods: internal and external. Internal evaluation will evaluate how cohesive and well-separated the data points in the cluster are and external evaluation will evaluate how well the algorithm performs to our objective. Is this clustering what we want?
### Flat

- $ Finding \space representatives $ Each cluster is characterized by a center. We can used different techniques, e.g. @(k-means)(k-means), @(k-medoids)(k-medoids) or @(mean shift)(mean shift), to get a center vector.

- $ Probabilistic \space approach $
Each cluster is represented by a distribution.

- $ Dense \space approach $
Find dense regions with algorithms like @(DBSCAN)(DBSCAN)

#### K-means
The formal definition of K-means is to find a partition $ S $ of the dataset, that minimizes the the loss function

$$
L(s) = \sum_{k=1}^K \sum_{x_i \in S_k} || x_i - \text{centroid}(S_k) ||^2
$$

which is called the residual sum of squares. Finding the partition is NP-hard unfortunately. We use @(Lloyd's algorithm)(lloyd's-algorithm) instead which approximate a solution. It will reach a steady state if iterating for enough cycles. The scikit-learn implementation @{kmeans}.

How to we choose the number of clusters?
- use our specific knowledge about the domain we are working with
- use approximation methods, e.g. @(the elbow method)(the-elbow-method)
- apply an evaluation method
- use some regularization for the loss function

#### DBSCAN
In comparison to the k-means cluster method which is in the family of representatives, DBSCAN just operates on raw data points and is in the family of density-based clustering methods. DBSCAN will look for the distances (any kind of distance measure) between data points and how close they are too each other. The algorithm is based on core points and outliers. We could for example say that a core point is a point with 4 points withing reachable range, and any outliers are points that are not reachable from any other points.

Some advantage over the k-means method is that we don't need to define the number of cluster we want, DBSCAN does not have any assumption about the shape of each cluster, DBSCAN can use any kind of distance metric, and DBSCAN may create noise points. However, DBSCAN is very sensitive to hyperparameter tuning and works poorly if the clusters differ in density.

#### Evaluation
How does one evaluate these types of approaches? The silhoutte score is one method.

##### Silhoutte score
The silhoutte score is defined like
$$
s_i = \frac{b_i - a_i}{\max (a_i, b_i)}
$$

where $ a_i $ is the average distance to other data points in the same cluster and $ b_i $ is the minimal average distance to another cluster.

##### Purity score

The purity score defines how pure each cluster is in relation to some standard class. It looks like

$$
\text{Purity} = \frac{1}{N} \sum_{k=1}^K \max_{i = 1}^{|C|} | S_k \cap C_i |
$$

One drawback of this approach is when we put every individual in its own cluster. Then we will get a purity of one.

##### Inverse purity score

$$
\text{Invserse Purity} = \frac{1}{N} \sum_{i=1}^{|C|} \max_{k = 1}^{K} | S_k \cap C_i |
$$

##### F-score
The @(F-score)(f-score) @{f-score} tries to be a balance of the purity score and the inverse purity score.


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
{stanford}:
    title: Welcome to the Deep Learning Tutorial
    author: Andrew Ng et al
    url: http://ufldl.stanford.edu/tutorial/

{clusteringwiki}:
    url: https://en.wikipedia.org/wiki/Cluster_analysis

{clustering}:
    url: https://scikit-learn.org/stable/modules/clustering.html

{kmeans}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html

{f-score}:
    url: https://en.wikipedia.org/wiki/F-score