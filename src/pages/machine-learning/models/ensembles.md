---
slug: /machine-learning/models/ensembles
tags: ["machine-learning"]
lastModified: 2021-04-30
created: 2021-04-02
title: Ensembles
header: [{"depth":1,"name":"What is an ensemble?","link":"What-is-an-ensemble?"},{"depth":1,"name":"Training","link":"Training"},{"depth":1,"name":"Boosting","link":"Boosting"},{"depth":1,"name":"References","link":"References"}]
---

# What is an ensemble?

Ensembles @{wiki} are machine learning models that combine several other models. Ensembles often have great accuracy. If an ensemble is built by many different classifiers each with an accuracy of 0.6. The errors of each model are independent. Thus, there is a greater probability that the classifiers (because of diversity) can complement each other. It is often not very realistic to assume that the errors are independent .

An ensemble could use the average of all the different models as the final prediction value. It could also use a technique called @(stacking)(stacking).

Scikit-learn has many useful methods for managing ensembles @{sklearn}.

# Training
One idea is called @(bagging)(bagging). In that approach we take the original training set and sample from it. Thus, we get a number of new training sets. It is normally done with replacement which may result in one instance ending up many times in the new sample or not at all. Another useful techique is called @(spinning)(spinning). It craetes new training sets by randomly picking subsets of features. This is often done without replacement. We could combine both ideas.

# Boosting
There are two popular boosting algorithms, @(AdaBoost)(adaboost) and @(gradient boosting)(gradientboosting), where AdaBoost being the most popular. Both are supported by Scikit-learn @{adaboost} @{gradientboostingc} @{gradientboostingr}. AdaBoost works by giving each instances which are misclassified a higher importance after each iteration before the next one. Unlike bagging, we may overfit the model if we add more trees to a boosting algorithm.


# References
{wiki}:
    title: Ensemble learning
    url: https://en.wikipedia.org/wiki/Ensemble_learning

{sklearn}:
    title: Ensemble methods
    url: https://scikit-learn.org/stable/modules/ensemble.html

{adaboost}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostClassifier.html

{gradientboostingc}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html

{gradientboostingr}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html