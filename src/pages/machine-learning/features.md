---
slug: /machine-learning/features
tags: []
lastModified: 2021-04-03
created: 2021-04-02
title: Features
header: [{"depth":2,"name":"Feature preprocessing","link":"Feature-preprocessing"},{"depth":3,"name":"Pruning","link":"Pruning"},{"depth":2,"name":"Evaluating","link":"Evaluating"},{"depth":2,"name":"Cross Validation","link":"Cross-Validation"}]
---

## Feature preprocessing
An important concept of machine learning like many other problems there is some sort of "garbage in, garbage out". Machine learning may seems to magically classify data and solve all sorts of problems but if the data you put in to a machine learning model are out of context you can expect the model to perform out of context as well. One example is to have a very easy feature representation of an image (100x100) where you put every pixel into a 30.000 dimensional vector (three values for every pixel). In doing so we lose all locality information. It is therefore an important aspect to consider when designing learning models, i.e. how robust they are to noisy features. Redundant features is not good either (two features are redudant if they are highly correlated). It is as well important to observe that when the training sample N is small the chance of getting seeminly correlated data is increased even though the data are independent.

### Pruning
The principle of pruning is as follows, if you have a binary feature that only appears a small number of times $ K $ you can simply remove them from consideration. You have to be careful to not overuse the technique of pruning because before we end up with no interesting data. @(Normalization)(normalization) is also important.


## Evaluating
It is very fair to say that achieving a high accuracy for a model is you want in most cases, however, in some cases it is better to let a little "bad" data through. For spotting problems (X versus not-X) there are better success with a metrics of precision/recall instead of accuracy for this reason. Thus, having a metric producing confidence is probably better in these cases.

## Cross Validation



