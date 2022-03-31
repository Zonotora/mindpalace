---
slug: /machine-learning/evaluation
tags: []
lastModified: 2021-05-03
created: 2021-04-30
title: Evaluation
header: [{"depth":1,"name":"Classifiers","link":"Classifiers"},{"depth":2,"name":"Confusion matrix","link":"Confusion-matrix"},{"depth":2,"name":"Precision and recall","link":"Precision-and-recall"},{"depth":2,"name":"F-score","link":"F-score"},{"depth":2,"name":"Sensitivity and specificity","link":"Sensitivity-and-specificity"},{"depth":2,"name":"True positive rate and false positive rate","link":"True-positive-rate-and-false-positive-rate"},{"depth":1,"name":"Regressors","link":"Regressors"},{"depth":2,"name":"Mean squared error","link":"Mean-squared-error"},{"depth":2,"name":"Mean absolute error","link":"Mean-absolute-error"},{"depth":2,"name":"Coefficient of determination","link":"Coefficient-of-determination"},{"depth":1,"name":"Loss versus quality metric","link":"Loss-versus-quality-metric"},{"depth":1,"name":"References","link":"References"}]
---

There are two types of evaluation @(intrinsic evaluation)(intrinsic-evaluation) and @(extrinsic evaluation)(extrinsic-evaluation). By comparing to a golden standard we do intrinsic evaluation.

# Classifiers
$$
\text{accuracy} = \frac{\text{number of correct}}{N}
$$

$$
\text{error rate} = \frac{\text{number of incorrect}}{N}
$$


## Confusion matrix
Confusion matrix are also one way to measure how the classifer interpret different classes, and their relations with each other @{confusion} @{wikiconfusion}.


## Precision and recall
Precision and recall are commonly used in various classifier problems for evaluation. Scikit-learn provides this functionality @{precision} @{recall}.
$$
P = \frac{TP}{TP + FP} \qquad R = \frac{TP}{TP + FN}
$$

## F-score
F-score is a combination of precision and recall @{f1}.
$$
F = \frac{2 \cdot P \cdot R}{P + R}
$$

## Sensitivity and specificity
$$
Sen = \frac{TP}{TP + FN} \qquad Spe = \frac{TN}{TN + FP}
$$

## True positive rate and false positive rate

$$
TPR = \frac{TP}{TP + FN} \qquad FPR = \frac{FP}{FP + TN}
$$

# Regressors

## Mean squared error

$$
MSE = \frac{1}{N} \sum_{i=1}^N (y_i - \hat y_i)^2
$$


## Mean absolute error

$$
MAE = \frac{1}{N} \sum_{i=1}^N |y_i - \hat y_i |
$$

## Coefficient of determination
Both $ MSE $ and $ MAE $ depend on scale which makes it hard to tell if the regressor behaves well, instead we can use the coefficient of determination


$$
R^2 = 1 - \frac{\sum_{i=1}^N (y_i - \hat y_i)^2}{\sum_{i=1}^N (y_i - \bar y)^2}
$$

# Loss versus quality metric
For regression, $ MSE $ is often used as both the quality metric and the loss function.

For classification we often use different metrics. The reason for this is that it is mathematically challenging to optimize the accuracy or the error rate.

# References
{confusion}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html

{wikiconfusion}:
    url: https://en.wikipedia.org/wiki/Confusion_matrix

{precision}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.precision_score.html

{recall}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.recall_score.html

{classreport}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.classification_report.html

{f1}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.f1_score.html