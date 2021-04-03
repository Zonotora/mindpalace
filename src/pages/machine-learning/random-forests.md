---
slug: /machine-learning/random-forests
tags: []
lastModified: 2021-04-03
created: 2021-04-02
title: Random Forests
header: []
---

Random forests have very similar performance compared to boosting on many problems, but they are easier to train and tune. Trees are usually noisy which is why @(bagging)(bagging) comes in handy. Each tree is identically distributed in bagging. The @(bias)(bias) of the bagged trees will because of that have the same value as the individual trees which .

 Random forests main idea is to improve the variance reduction by reducing the correlation between the trees it is built upon. By letting trees grow through a process of random selection of the input variables this can be achieved.