---
slug: /math/series
tags: []
lastModified: 2022-01-07
created: 2022-01-05
title: Series
header: [{"depth":1,"name":"Arithmetic sum","link":"Arithmetic-sum"},{"depth":1,"name":"Geometric sum","link":"Geometric-sum"},{"depth":1,"name":"Geometric sum for probabilities","link":"Geometric-sum-for-probabilities"}]
---

# Arithmetic sum
The arithmetic sum of a sequence of numbers is
$$
\frac{n(a_1 + a_n)}{2}
$$
where $ a_1 $ is the smallest value in the sequence and $ a_n $ is the biggest value in the sequence.

# Geometric sum
When $ r \neq 1 $, the sum of the first $ n + 1 $ terms is
$$
a+ar+ar^{2}+ar^{3}+\cdots +ar^{n}=\sum _{k=0}^{n}ar^{k}=a\left({\frac {1-r^{n+1}}{1-r}}\right)
$$

# Geometric sum for probabilities
When $ r $ is between $ [0,1] $ we can write the geometric sum as
$$
\sum _{k=0}^{\infty } ar^k = \frac{a}{(1 - r)}
$$