---
slug: /machine-learning/hyperparameters
tags: ["chalmers", "machine-learning"]
lastModified: 2021-04-09
created: 2021-04-08
title: Hyperparameters
header: [{"depth":1,"name":"Definition","link":"Definition"},{"depth":1,"name":"Tuning","link":"Tuning"},{"depth":2,"name":"Grid search","link":"Grid-search"},{"depth":2,"name":"Random search","link":"Random-search"},{"depth":2,"name":"Other","link":"Other"},{"depth":1,"name":"References","link":"References"}]
---

# Definition
Hyperparameters control how learning algorithms work. In a decision tree the maximum depth is one hyperparameter. In neural networks two examples are the number of layers and the size of layers. A model often needs extensive tuning in order to work properly.

Scikit-learn provides some useful ways of determining hyperparameters @{sklearn}.

# Tuning
Tuning the hyperparameters could be very time-consuming and involve trial and error. There are however alternatives.

## Grid search
Grid search is one of them which is a brute force searching algorithm over a finite set of hyperparameter settings. All combinations are tested and the best is selected. This approach belongs to the more time-consuming ones. In a decision tree we could search for the best maximum tree depth.

## Random search
Random search @{bergstra} finds a set of hyperparameters with good performance a lot quicker than grid search. We define a distribution for each hyperparameter (thus we may need some understanding of how the hyperparameter work). We then iterate while picking samples randomly from each hyperparamter distribution.

## Other
There are more sophisticated methods as well @{snoek}.

# References

{sklearn}:
    title: Tuning the hyper-parameters of an estimator
    url: https://scikit-learn.org/stable/modules/grid_search.html

{bergstra}:
    author: James Bergstra and Yoshua Bengio
    year: 2012
    title: Random Search for Hyper-Parameter Optimization
    url: https://jmlr.csail.mit.edu/papers/volume13/bergstra12a/bergstra12a.pdf

{snoek}:
    author: Jasper Snoek, Hugo Larochelle and Ryan P. Adams
    year: 2012
    title: PRACTICAL BAYESIAN OPTIMIZATION OF MACHINE LEARNING ALGORITHMS
    url: https://arxiv.org/pdf/1206.2944.pdf