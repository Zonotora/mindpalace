---
slug: /machine-learning/keywords
tags: ["chalmers", "machine-learning", "keywords"]
lastModified: 2021-05-03
created: 2021-03-22
title: Keywords
header: [{"depth":1,"name":"Bias","link":"Bias"},{"depth":1,"name":"Nonresponse bias","link":"Nonresponse-bias"},{"depth":1,"name":"Stacking","link":"Stacking"},{"depth":1,"name":"Bagging","link":"Bagging"},{"depth":1,"name":"Spinning","link":"Spinning"},{"depth":1,"name":"Inductive bias","link":"Inductive-bias"},{"depth":1,"name":"Cross-validation","link":"Cross-validation"},{"depth":1,"name":"Normalization","link":"Normalization"},{"depth":2,"name":"Feature normalization","link":"Feature-normalization"},{"depth":2,"name":"Example normalization","link":"Example-normalization"},{"depth":1,"name":"Approximation error","link":"Approximation-error"},{"depth":1,"name":"Estimation error","link":"Estimation-error"},{"depth":1,"name":"Bias-variance trade-off","link":"Bias-variance-trade-off"},{"depth":1,"name":"Imbalanced data","link":"Imbalanced-data"},{"depth":1,"name":"Feature selection","link":"Feature-selection"},{"depth":1,"name":"Embedded methods","link":"Embedded-methods"},{"depth":1,"name":"Regularization methods","link":"Regularization-methods"},{"depth":1,"name":"Feature imputation","link":"Feature-imputation"},{"depth":1,"name":"The Widrow-Hoff algorithm","link":"The-Widrow-Hoff-algorithm"},{"depth":1,"name":"Crowdsourcing","link":"Crowdsourcing"},{"depth":1,"name":"Deep learning","link":"Deep-learning"},{"depth":1,"name":"Backpropagation","link":"Backpropagation"},{"depth":1,"name":"Intrinsic evaluation","link":"Intrinsic-evaluation"},{"depth":1,"name":"Extrinsic evaluation","link":"Extrinsic-evaluation"}]
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
- semisupervised learning
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
- AUC score
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
- linear classifiers
- linearly separable
- least-square regression
- widrow-hoff
- inter-annotator agreement
- chance-corrected agreement measure
- chance agreement probability
- objective function
- regularizer
- unconstrained optimization
- constrained optimization
- gradient
- batch
- early stopping
- logistic
- sigmoid
- tanh
- ReLu
- log odds
- likelihood function
- log loss
- maximum a posteriori
- Gaussian prior
- Laplace prior
- one-versus-rest
- one-versus-one
- softmax
- cross-entropy loss
- margin
- structural risk minimization theorem
- feedforward neural network
- multilayer perceptron
- input units/nodes
- hidden units/nodes
- output units/nodes
- activation
- universal approximation theorem
- minibatch
- adaptive
    - adam
    - adagrad
    - RMSProp
- dropout
- data augmentation
- AdaBoost
- gradient boosting
- pseudo-residual
- residual
- learning rate
- ensemble size
- measure
- downstream task
- word error rate
- BLEU
- overlap-based metric
- humans-in-the-loop
- true positives
- false positives
- true negatives
- false negatives
- coefficient of determination
- confidence score
- search engine
- ranking systems
- precision at k
- scorer
- ranker
- feature extraction
- SIFT
- translational invariance
- spotting patterns
- convolutinal filters
- pooling
- fully connected layers
- dense layers
- redidual connections
- normalizations
- kernel
- feature map
- vanishing gradients
- exploding gradients
- mathematical instability
- batch normalization
- transfer learning
- freeze and unfreeze model
- fine-tune model
- catastrophic forgetting
- clustering (flat and hierachical)
- k-means
- k-medoids
- mean shift
- Gaussian mixture
- DBSCAN
- agglomerative (clustering)
- divisive (clustering)

# Bias

# Nonresponse bias

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

# The Widrow-Hoff algorithm
```python
w = [0, ..., 0]
for i in range(N): # N epochs
    for (x[i], y[i]) in the training set
        g = w * x[i]
        error = g - y[i]
        w = w - learning_rate * error * x[i]
return w
```

# Crowdsourcing
A common technique for annotating data. It uses a large pool of non-expert annotators to annotate the data.

# Deep learning
Deep learning is a neural network with many hidden layers. The universal approximation theorem states that one hidden layers should be enough to approximate any function, but it is often more practical to stack many hidden layers on each other.

# Backpropagation
Backpropagation is the trick of using the gradients of the weights of layers occuring later in the hierarchy to compute the gradient when using the chain rule.

# Intrinsic evaluation
Intrinsic evaluation is the performance measured in isolation using some metric computed automatically.

# Extrinsic evaluation
How does one change to the predictor affect the performance?