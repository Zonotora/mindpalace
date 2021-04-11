---
slug: /machine-learning/linear-classifiers-regressors
tags: []
lastModified: 2021-04-11
created: 2021-04-11
title: Linear Classifiers Regressors
header: [{"depth":1,"name":"Binary linear classifier","link":"Binary-linear-classifier"},{"depth":1,"name":"Linear regression","link":"Linear-regression"},{"depth":1,"name":"Bias","link":"Bias"},{"depth":1,"name":"Different models","link":"Different-models"},{"depth":2,"name":"Classifiers","link":"Classifiers"},{"depth":2,"name":"Regressors","link":"Regressors"},{"depth":1,"name":"References","link":"References"}]
---

# Binary linear classifier

A binary linear classifiers is defined as follows

$$
score = \pmb w \cdot \pmb x
$$

where $ \pmb x $ is the feature vector we want to classify and $ \pmb w $ is the vector which the classifier thinks is important. It will returns the first class if the score is greater than zero, else the other class. If a data set is linearly inseparable a linear classifier often has a hard time of optimal learning.

# Linear regression
Similarly like the linear classifier, a linear regression model calculate its score like this

$$
y = \pmb w \cdot \pmb x
$$

where $ \pmb x $ is the encoded feature vector and $ \pmb w $ is the weights. The output $ y $ is now numerical.

In linear-squares regression with the error function

$$
\pmb w^* =  \arg \min_{\pmb w} \frac{1}{N} \sum_{i=1}^{N} (y_i - \pmb w \cdot \pmb x_i)^2
$$
The error function finds the weight vector that minmizes the squared error over the training set. For each training instance we look at the predicted value and calculate the distance of it between the labeled value.


# Bias

A linear classifier could be expressed with a bias term and will in such cases look like this

$$
score = \pmb w \cdot \pmb x + b
$$

where $ b $ is the bias (often also called offset or intercept).

# Different models

## Classifiers
- perceptron

## Regressors
- linear regression @{linearreg}
- ridge @{ridge}
- lasso @{lasso}
- linear SVR @{svr}

# References
{linearreg}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html

{ridge}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html

{lasso}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html

{svr}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html