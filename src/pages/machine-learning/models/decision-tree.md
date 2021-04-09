---
slug: /machine-learning/models/decision-tree
tags: ["chalmers", "machine-learning"]
lastModified: 2021-04-09
created: 2021-03-21
title: Decision Tree
header: [{"depth":1,"name":"What is a decision tree?","link":"What-is-a-decision-tree?"},{"depth":1,"name":"The learning algorithm","link":"The-learning-algorithm"},{"depth":1,"name":"Best split","link":"Best-split"},{"depth":1,"name":"Drawbacks","link":"Drawbacks"},{"depth":1,"name":"References","link":"References"}]
---

# What is a decision tree?

Decision tree @{wiki} is a classic model of learning and well suited for binary classification. The decision tree is made up of guesses where each node represents a guess and the path to each node the binary decision. Each non-terminal node has two children which corresponds to answering "no" or "yes". The questions can be seen as **_features_** and the rating is called the **_label_**. Decision trees can output probabilities as well.

Scikit-learn has decision tree models @{sklearn} @{sklearnc} @{sklearnr}.


# The learning algorithm

The learning algorithm can be simplified to:

- select the best feature F that corresponds to the best split (creating subsets)
- create a (sub)tree with F as the root
- repeat

To not get an infinite recursion loop we have some base cases like checking similarity in each subset, checking max depth, etc.

# Best split

It is best to split each set into homogeneous (little varaiation) subsets. There are a couple of techniques for determining the homogeneity of one set, for classification the most popular are: information gain or the gini score and for regression we can consider the variance (a subset with small variance).

# Drawbacks
Decision trees tend to overfit and thus produce bad generalizations. They are usually not useful on their own because of this. However when used in ensembles e.g. in the popular model random forests they perform well.

# References
{wiki}:
    title: Decision tree
    url: https://en.wikipedia.org/wiki/Decision_tree

{sklearn}:
    title: Decision Trees
    url: https://scikit-learn.org/stable/modules/tree.html

{sklearnc}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html

{sklearnr}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html
