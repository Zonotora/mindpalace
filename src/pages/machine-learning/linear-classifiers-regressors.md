---
slug: /machine-learning/linear-classifiers-regressors
tags: ["chalmers", "machine-learning"]
lastModified: 2021-04-20
created: 2021-04-11
title: Linear Classifiers Regressors
header: [{"depth":1,"name":"Linear classifier","link":"Linear-classifier"},{"depth":2,"name":"Binary linear classifier","link":"Binary-linear-classifier"},{"depth":2,"name":"Logistic regression","link":"Logistic-regression"},{"depth":1,"name":"Multiclass classification","link":"Multiclass-classification"},{"depth":1,"name":"Linear regression","link":"Linear-regression"},{"depth":1,"name":"Keeping the model simple","link":"Keeping-the-model-simple"},{"depth":1,"name":"Bias","link":"Bias"},{"depth":1,"name":"Different models","link":"Different-models"},{"depth":2,"name":"Classifiers","link":"Classifiers"},{"depth":2,"name":"Regressors","link":"Regressors"},{"depth":1,"name":"References","link":"References"}]
---
# Linear classifier

## Binary linear classifier

A binary linear classifiers is defined as follows

$$
score = \pmb w \cdot \pmb x
$$

where $ \pmb x $ is the feature vector we want to classify and $ \pmb w $ is the vector which the classifier thinks is important. It will returns the first class if the score is greater than zero, else the other class. If a data set is linearly inseparable a linear classifier often has a hard time of optimal learning.

## Logistic regression
The name is somewhat confusing because it is a classifier. It is a linear classifier that gives probabilistic scores. To get probabilites we need to use a @(logistic)(logistic) or @(sigmoid)(sigmoid) function

$$
P(\text{positive output}|\pmb x) = \frac{1}{1 + e^{-score}}
$$

$$
P(\text{negative output}|\pmb x) = 1 - \frac{1}{1 + e^{-score}} = \frac{1}{1 + e^{score}}
$$

In a linear model with probabilites we can train the model by selecting features that assign a high probability to the data. Therefore, we need to adjust $ \pmb w $ so that each our output label gets a high probability.

Formally this is defined by the @(likelihood function)(likelihood-function)
$$
\mathcal{L}(\pmb w) = P(y_1|\pmb x_1) \cdots P(y_m|\pmb x_m)
$$

which translate to

$$
\mathcal{L}(\pmb w) = \frac{1}{1 + e^{-y_1 \cdot (\pmb w \cdot \pmb x_1)}} \cdots \frac{1}{1 + e^{-y_m \cdot (\pmb w \cdot \pmb x_m)}}
$$

in our case. We can convert this to the @(log loss)(log-loss) function by using log on each side.

# Multiclass classification
Two main ideas
- break down the problem into simplier pieces and create a classifer for each piece
- adjust the model to handle multiclass directly

There are two approaches we can use to convert a multiclass problem to a binary problem
- one-versus-rest @{onevsrest}
- one-versus-one @{onevsone}

Built in classifiers like the perceptron or logistic regression will to this autoamtically (one-versus-rest).

Instead of using the sigmoid we use the @(softmax)(softmax) function in the multiclass scenario.

$$
P(y_i|\pmb x) = \frac{e^{score_i}}{\sum_k e^{score_k}}
$$

when training, instead of using the log loss we get the @(cross-entropy loss)(cross-entropy-loss) instead.

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

However this could be quite expensive which is why stochastic gradient descent is often used in practice. In stochastic gradient descent we consider just a single instance
$$
f_i(\pmb w) = (\pmb w \cdot \pmb x_i - y_i) ^ 2
$$

Thus, the gradient of the least squared loss with respect to $ \pmb w $ is

$$
\nabla f_i (\pmb w) = 2 \cdot (\pmb w \cdot \pmb x_i - y_i) \cdot \pmb x_i
$$

# Keeping the model simple
We can keep the model simple by adding a regularization term to the linear regression model. By adding this term we can keep the weights small. For example, by penalizing the squared length we achieve

$$
\| \pmb w \| ^ 2 = w_1 \cdot w_1 + \ldots + w_n \cdot w_n = \pmb w \cdot \pmb w
$$

which is called a $ L_2 $ @(regularizer)(regularizer). Another common regularizer is

$$
\| \pmb w \| = | w_1 | + \ldots + | w_n |
$$

which is aclled a $ L_1 $ regularizer.

If we combine the loss function with the regularizer we get

$$
\frac{1}{N} \sum_{i=1}^{N} \text{Loss}(\pmb w, \pmb x_i, y_i) + \alpha \cdot \text{Regularizer}(\pmb w)
$$


# Bias

A linear classifier could be expressed with a bias term and will in such cases look like this

$$
score = \pmb w \cdot \pmb x + b
$$

where $ b $ is the bias (often also called offset or intercept).


# Different models

## Classifiers
- perceptron
- logistic regression

## Regressors
- linear regression @{linearreg} (no regularization)
- ridge @{ridge} (the combination of least squares loss with $ L_2 $ regularization)
- lasso @{lasso} (the combination of least squares loss with $ L_1 $ regularization)
- linear SVR @{svr}

# References
{onevsrest}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsRestClassifier.html

{onevsone}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsOneClassifier.html

{linearreg}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html

{ridge}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html

{lasso}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html

{svr}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html
