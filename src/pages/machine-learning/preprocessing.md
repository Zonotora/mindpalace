---
slug: /machine-learning/preprocessing
tags: []
lastModified: 2021-04-08
created: 2021-04-02
title: Preprocessing
header: [{"depth":2,"name":"Feature preprocessing","link":"Feature-preprocessing"},{"depth":3,"name":"Pruning","link":"Pruning"},{"depth":2,"name":"Scaling and normalization","link":"Scaling-and-normalization"},{"depth":4,"name":"Min-Max scaling","link":"Min-Max-scaling"},{"depth":4,"name":"Standard scaling","link":"Standard-scaling"},{"depth":4,"name":"Length normalization","link":"Length-normalization"},{"depth":4,"name":"Other transformations","link":"Other-transformations"},{"depth":2,"name":"Missing values","link":"Missing-values"},{"depth":2,"name":"Evaluating","link":"Evaluating"},{"depth":2,"name":"Debugging","link":"Debugging"}]
---

# Feature preprocessing
An important concept of machine learning like many other problems there is some sort of "garbage in, garbage out". Machine learning may seems to magically classify data and solve all sorts of problems but if the data you put in to a machine learning model are out of context you can expect the model to perform out of context as well. One example is to have a very easy feature representation of an image (100x100) where you put every pixel into a 30.000 dimensional vector (three values for every pixel). In doing so we lose all locality information. It is therefore an important aspect to consider when designing learning models, i.e. how robust they are to noisy features. Redundant features is not good either (two features are redudant if they are highly correlated). It is as well important to observe that when the training sample N is small the chance of getting seeminly correlated data is increased even though the data are independent.

Generally we need to do some preprocessing for categorical values in a data set, because almost every library uses numerical values. One-hot encoding is a very common way of dealing with categorical values and converting them to numerical ones. A direct integer encoding tends to work poorly in machine learning algorithms. We would give mathematical properties to each value even though there are none. It would create an unnecessary ordering which may mislead the machine learning algorithm.

Magnitude differences can be a problem, but that depends on which machine learning algorithm that is used. It usually ***strongly*** affects many models like linear models,  neural networks, models based on distance or similarity (kNN, SVC, etc...). However, tree-based predictors will ignore any scaling differences (they will adapt to the new scaling), because they consider thresholds of one feature at a time.

Scikit-learn provides a number of ways to preprocess the data @{sklearn}.

## Pruning
The principle of pruning is as follows, if you have a binary feature that only appears a small number of times $ K $ you can simply remove them from consideration. You have to be careful to not overuse the technique of pruning because before we end up with no interesting data. @(Normalization)(normalization) is also important.

# Scaling and normalization

## Min-Max scaling
Sqeeze the scale so that it is between zero and one.

$$
f_{new} = \frac{f - f_{min}}{f_{max} - f_{min}}
$$

## Standard scaling
Use mean value and standard deviation to scale. After this transformation the mean value will be zero and the standard deviation will be one.

$$
f_{new} = \frac{f - \overline f}{\sigma f}
$$

## Length normalization
The length of the feature vector will be one after this transformation.

$$
x_{new} = \frac{x}{| x |}
$$

## Other transformations
We may try logarithms, square root, etc...

# Missing values
If there are missing values in some data row or column, we could just remove those instances. This is considered the brute force approach and will work fine if we have a lot of data. A more sophisticated method is @(feature imputation)(feature-imputation).


# Evaluating
It is very fair to say that achieving a high accuracy for a model is you want in most cases, however, in some cases it is better to let a little "bad" data through. For spotting problems (X versus not-X) there are better success with a metrics of precision/recall instead of accuracy for this reason. Thus, having a metric producing confidence is probably better in these cases.

# Debugging
- Generalization of test data
- Train/test data mismatch
- The learning algorithm
- Adequate representation
- Enough data

# References

{sklearn}:
    title: Preprocessing data
    url: https://scikit-learn.org/stable/modules/preprocessing.html