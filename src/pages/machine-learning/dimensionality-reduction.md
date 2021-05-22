---
slug: /machine-learning/dimensionality-reduction
tags: ["machine-learning"]
lastModified: 2021-05-19
created: 2021-05-16
title: Dimensionality Reduction
header: [{"depth":1,"name":"t-SNE","link":"t-SNE"},{"depth":1,"name":"Applications","link":"Applications"},{"depth":2,"name":"Recommender system","link":"Recommender-system"},{"depth":3,"name":"Colloborative filtering","link":"Colloborative-filtering"},{"depth":2,"name":"Word empeddings","link":"Word-empeddings"},{"depth":3,"name":"Pre-training","link":"Pre-training"},{"depth":1,"name":"References","link":"References"}]
---

In short, dimensionality reduction is reducing a high-dimensional dataset into a low-dimensional dataset. This is used for getting a better understanding of the data via visualization, reducing the need for storage, make the algorithms run faster and the learning easier. One famous technique of dimensionality reduction is principle component analysis. It is based on finding new basis vectors that are ordered in a way so that the first principle component has the highest priority (we see most of the variance in that direction). @(Principle component analysis)(principle-component-analysis) (PCA) is implemented using the technique @(Singular value decomposition)(singular-value-decomposition) (SVD). There is more efficient ways to implement this, and Scikit-learn uses a technique called @(low-rank matrix factorization)(low-rank-matrix-factorization). Other techniques involving SGD could be easier to implement in pratice than the low-rank matrix factorization.

# t-SNE
Measures similarities to locals points (local structure). @{tsnegoogle} @{tsne}

# Applications
Recommender systems like the ones used in Netflix, YouTube or Amazon for example.

## Recommender system
Could be framed in different ways:
- binary classification
- regression
- ranking

There are two main approaches for building recommender system:
- $ content \space based $  recommend items that are similar to my selected items
- $ collaborative \space filtering $ recommend items that are similar to my history

### Colloborative filtering
We can divide the feedback cycle into two categories:
- $ explicit $ could be some direct rating on some history item
- $ implicit $ could be any kind of interaction between items and the user

One problem with colloborative filtering is @(cold start)(cold-start). Matrix factorization in colloborative filtering is a bit different than when used in dimensionality reduction. Here it is used to predict and fill the missing cells. E.g. if we have user as a column vector and movies as a row vector we want to map each user to every movie with some probability of likeness.


## Word empeddings
Two high-level approaches to word empeddings:
- $ end \space to \space end \space training $ we train the embeddings in with other parts of the model. The embeddings will be specialized for this task.
- $ pre \space training $ we train the embeddings in a more general sense so we can use them in other applications

### Pre-training
How can we pre-train word embeddings? In some sense, words that can be represented in similar contexts are assumed to have similar meanings and behave similarly. The model will thus build on this intuition. We could build on statistics, e.g. @(word-word co-occurrence matrix)(word-word-co-occurrence-matrix), and then use a matrix factorization step. GloVe @{glove} is a famous matrix-based word embedding training method.

# References

{tsnegoogle}:
    title: Visualizing Data Using t-SNE
    url: https://www.youtube.com/watch?v=RJVL80Gg3lA

{tsne}:
    title: t-distributed stochastic neighbor embedding
    url: https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding

{glove}:
    url: https://nlp.stanford.edu/projects/glove/