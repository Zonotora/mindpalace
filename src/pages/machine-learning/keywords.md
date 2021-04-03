---
slug: /machine-learning/keywords
tags: []
lastModified: 2021-04-03
created: 2021-03-22
title: Keywords
header: [{"depth":2,"name":"Bias","link":"Bias"},{"depth":2,"name":"Bagging","link":"Bagging"},{"depth":2,"name":"Inductive bias","link":"Inductive-bias"},{"depth":2,"name":"Cross-validation","link":"Cross-validation"},{"depth":2,"name":"Normalization","link":"Normalization"},{"depth":3,"name":"Feature normalization","link":"Feature-normalization"},{"depth":3,"name":"Example normalization","link":"Example-normalization"}]
---

- generalization
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


## Bias

## Bagging
Is also called bootstrap aggregation. It is a technique for reducing variances for estimated prediction functions and does so by averaging a number of noisy but approximately unbiased models.

## Inductive bias
The preference for one distinction over another. If the inductive bias is too far away from the concept that is being learned, the whole learning might fail.


## Cross-validation
Is sometimes called rotation estimation which by itself describes the behaviour very well.

## Normalization
Is a good way of keeping the data consistent. There are two basic types of normalization: example and feature normalization.

### Feature normalization
Go through every feature and apply the same adjustment across all examples. There are two standard techniques to use: centering and scaling. Centering to keep the data set close around the origin. Scaling to make sure each feature has variance 1 across the training data.

### Example normalization
Go through every feature but adjust them individually. The standard technique is to make sure that each feature vector has the length of one. The advantages of example normalization is that comparisons between data sets are more straightforward.