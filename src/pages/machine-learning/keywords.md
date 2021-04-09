---
slug: /machine-learning/keywords
tags: ["chalmers", "machine-learning", "keywords"]
lastModified: 2021-04-09
created: 2021-03-22
title: Keywords
header: [{"depth":1,"name":"Bias","link":"Bias"},{"depth":1,"name":"Stacking","link":"Stacking"},{"depth":1,"name":"Bagging","link":"Bagging"},{"depth":1,"name":"Spinning","link":"Spinning"},{"depth":1,"name":"Inductive bias","link":"Inductive-bias"},{"depth":1,"name":"Cross-validation","link":"Cross-validation"},{"depth":1,"name":"Normalization","link":"Normalization"},{"depth":2,"name":"Feature normalization","link":"Feature-normalization"},{"depth":2,"name":"Example normalization","link":"Example-normalization"},{"depth":1,"name":"Approximation error","link":"Approximation-error"},{"depth":1,"name":"Estimation error","link":"Estimation-error"},{"depth":1,"name":"Bias-variance trade-off","link":"Bias-variance-trade-off"},{"depth":1,"name":"Imbalanced data","link":"Imbalanced-data"},{"depth":1,"name":"Feature selection","link":"Feature-selection"},{"depth":1,"name":"Embedded methods","link":"Embedded-methods"},{"depth":1,"name":"Regularization methods","link":"Regularization-methods"},{"depth":1,"name":"Feature imputation","link":"Feature-imputation"}]
---

- generalization
- generalization gap
- prediction
- training data
- induction
- test set
- regression
- classification
  - binary
  - multiclass
- ranking
- features
- labels
- histogram
- loss function
  - squared loss
  - absolute loss
  - zero/one loss
- parity (function)
- noise
- supervised learning
- unsupervised learning
- reinforcement learning
- validation set
- information gain
- cross-validation
- gini score
- support vector
- homogeneous
- committee
- weak learners
- boosting
- patch representation
- bag of words (text representation)
- shape representation
- meta features
- combinatorial transformations
- logarithmic transformation
- precision/recall metric
- accuracy metric
- f-measure
- sensitivity/specificity metric
- ROC curve
- AUC
- development data
- jack-knifing
- imbalanced data
- induced distribution
- feature selection https://en.wikipedia.org/wiki/Feature_selection
- predictive model
- LASSO
- elastic net
- ridge regression
- one-hot encoding
- TF-IDF
- mutual information
- hyperparameters
- grid search
- black box optimization
- automated machine learning (AutoML)
- stacking
- shallow decision tree
- random forests
- hypothesis space

# Bias

# Stacking

# Bagging
Is also called bootstrap aggregation. It is a technique for reducing variances for estimated prediction functions and does so by averaging a number of noisy but approximately unbiased models.

# Spinning
Based on the same idea as bagging and is also called feature bagging or random subspace learning.

# Inductive bias
The preference for one distinction over another. If the inductive bias is too far away from the concept that is being learned, the whole learning might fail.

# Cross-validation
Is sometimes called rotation estimation which by itself describes the behaviour very well. For example, if you break up your training data into 10 equally big partitions, you use the learning alogorithm on 9 of them and test on the remaining partition for 10 cycles. Thus, every partition will be the training set once. One disadvantage is that it is computationally expensive.

# Normalization
Is a good way of keeping the data consistent. There are two basic types of normalization: example and feature normalization.

## Feature normalization
Go through every feature and apply the same adjustment across all examples. There are two standard techniques to use: centering and scaling. Centering to keep the data set close around the origin. Scaling to make sure each feature has variance 1 across the training data.

## Example normalization
Go through every feature but adjust them individually. The standard technique is to make sure that each feature vector has the length of one. The advantages of example normalization is that comparisons between data sets are more straightforward.

# Approximation error
Will measure how well the model family is performing.

# Estimation error
Will measure how far off one classifer is from the optimal classifier of that type.

# Bias-variance trade-off
The trade-off between approximation and estimation error is usually called the bias/variance trade-off. The bias corresponding to the approximation error and the variance corrsponding to the estimation error.

# Imbalanced data
The imbalanced data problem refers to the problem where the distribution from which the data is taken has an imbalance. This is not good because machine learning algorithms will try to minimize the error, and thus, predict in favor of the imbalance majority. They can often achieve really good results by doing nothing. Hence, you probably not care about predicting accuracy.

# Feature selection


# Embedded methods
Embedded methods are used to learn which features best contribute to the learning of a model while it is being created. Common methods are regularization methods.

# Regularization methods
Regularization methods or penalization methods introduce additional constraints which makes the model bias toward fewer constraints.

# Feature imputation
It will try to fill any missing data. We could replace the missing value with a constant (e.g. the mean value), a random value or a prediction from the other values.