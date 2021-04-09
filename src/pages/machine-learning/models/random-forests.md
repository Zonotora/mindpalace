---
slug: /machine-learning/models/random-forests
tags: ["chalmers", "machine-learning"]
lastModified: 2021-04-09
created: 2021-04-02
title: Random Forests
header: [{"depth":1,"name":"What is random forests?","link":"What-is-random-forests?"},{"depth":1,"name":"The learning algorithm","link":"The-learning-algorithm"},{"depth":1,"name":"Prediction","link":"Prediction"},{"depth":1,"name":"Hyperparameters","link":"Hyperparameters"},{"depth":1,"name":"References","link":"References"}]
---

# What is random forests?

Random forests @{wiki} have very similar performance compared to boosting on many problems, but they are easier to train and tune. Trees are usually noisy which is why @(bagging)(bagging) comes in handy. Each tree is identically distributed in bagging. The @(bias)(bias) of the bagged trees will because of that have the same value as the individual trees.

Random forests main idea is to improve the variance reduction by reducing the correlation between the trees it is built upon. By letting trees grow through a process of random selection of the input variables this can be achieved.

Random forests and tree based models in general have little need for feature normalization. Random forests often work well without complicated setup and provides more robust results than a single decision tree. They work very well for tabulated data but not images, signals or text. They can be computationally heavy depending on how many different trees they are made up of, and are obviously more computationally heavy than a single decision tree. They are as well not as easy to interpret as single decision trees.

Scikit-learn has a random forest classifier @{sklearnc} and a random forest regressor @{sklearnr}.

# The learning algorithm
Each tree in the ensemble is trained on its own training set through the technique bagging. Instead of consider all the possible features of the data set we only consider a subset, typically $ \sqrt{|F_{total}|} $, when we are building a tree branch.

# Prediction
For regression we use the average value as the output.

For classification we use voting or averaging of the probabilities as output.

# Hyperparameters
We can choose how many trees we want our model to consist of. More trees result in a slower model but more accurate because we take advantage of the fundamental idea of ensembles in relation to decision trees. We can also choose how many features we should consider when we build new tree nodes. The standard hyperparameters for decision trees apply here as well.

# References
{wiki}:
    title: Random forest
    url: https://en.wikipedia.org/wiki/Random_forest

{sklearnc}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html

{sklearnr}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html