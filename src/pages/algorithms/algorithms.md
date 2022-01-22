---
slug: /algorithms/algorithms
tags: []
lastModified: 2022-01-22
created: 2021-09-12
title: Algorithms
header: [{"depth":1,"name":"Introduction","link":"Introduction"},{"depth":2,"name":"Metrics","link":"Metrics"},{"depth":2,"name":"Definition of efficiency","link":"Definition-of-efficiency"},{"depth":2,"name":"Polynomial running time","link":"Polynomial-running-time"},{"depth":1,"name":"Asymptotic order of growth","link":"Asymptotic-order-of-growth"},{"depth":2,"name":"Asymptotic upper bound","link":"Asymptotic-upper-bound"},{"depth":2,"name":"Asymptotic lower bound","link":"Asymptotic-lower-bound"},{"depth":2,"name":"Asymptotic tight bound","link":"Asymptotic-tight-bound"},{"depth":2,"name":"Properties","link":"Properties"},{"depth":3,"name":"Transitivity","link":"Transitivity"},{"depth":3,"name":"Sum","link":"Sum"}]
---

# Introduction

## Metrics
Worst-case running time is the largest possible running time an algorithm may have. In some cases it may not be a good measure for efficiency, e.g. if the algorithm runs well on 99.9 % of the input but very badly on 0.1 % of the input. We could make use of average-case running time instead in some cases but it depends. The goal when studying algorithms is thus to find the bound of the worst-case or average-case (or some other metric) running times to evaluate how performant the algorithm is.

Brute-force solution is a solution where we try every single possibility to see if it works.

## Definition of efficiency
If an algorithm at an analytical level achieves much better worst-case performance than a brute-force solution we say that the algorithm is efficient (or more efficient at least).

## Polynomial running time
A polynomial running time algorithm has a scaling property which means that if the input size increases from $ N $ to $ 2N $ the bound of the algorithm increases from $ cN^d $ to $ c(2N)^d = c \cdot 2^dN^d $. The slowdown is therefore a factor of $ 2^d $; this is a constant however, but indicate that we have better scaling behavior with smaller polynomials. Problems with polynomial-time bounds tend to be efficient while the opposite is true if there is no known polynomial-time bound for an algorithm. Problems with polynomial-time bounds tend to be efficient while the opposite is true if there is no known polynomial-time bound for an algorithm.

# Asymptotic order of growth

Somewhat unclear..

## Asymptotic upper bound
Let $ T(n) $ be the worst-case running time of an algorithm of size $ n $. $ T(n) $ is bounded by another function $ f(n) $, $ T(n) is O(f(n)) $, there there exists some constant $ c > 0, n_0 \geq 0 $ so that for all $ n \geq n_0 $ we have $ T(n) \leq c \cdot f(n) $. It could also be written like $ T(n) = O(f(n)) $, but we should be careful with this because there is no equality (the relation is not reflexive). The function $ T $ is **asymptotically upper-bounded** by $ f $. Generally we want to find the **lowest** upper bound to a function, e.g. every bound above a valid bound is also valid as upper bounds. It is correct to say that $ T(n) = pn^2 + qn + r $ is $ O(n^3) $ since $ (p + q + r)n^2 \leq cn^3 $ for some constant $ c > 0 $.

## Asymptotic lower bound
If we have proven that the worst-case running time of $ T(n) $ is $ O(f(n)) $ we want to show that this is the best possible bound, the tightest bound. We then say that $ T(n) $ is $ \Omega(f(n)) $ if there exists some constants $ \epsilon > 0 $ and $ n_0 \geq 0 $ so that for all $ n \geq n_0 $ we have $ T(n) \geq \epsilon \cdot f(n) $. It is correct to say that $ T(n) = pn^2 + qn + r $ is $ \Omega(n) $ since $ pn^2 \geq pn $.

## Asymptotic tight bound
If we can show that the running time $ T(n) $ of an algorithm has the asymptotic upper bound $ O(f(n)) $ and the asymptotic lower bound $ \Omega (f(n)) $, we know that $ T $ behave just like $ f $ in terms of growth within a constant factor, denoted $ \varTheta(f(n)) $. If $ T(n) = pn^2 + qn + r $ we know $ O(n^2) $ and $ \Omega(n^2) $.
We may obtain an asymptotically tight bound of two functions $ f(n) $ and $ g(n) $ if the ratio between these functions converges to a positive constant when $ n \to \infty $. Thus
$$
\underset{n \to \infty}{\lim} \frac{f(n)}{g(n)} = c > 0
$$

## Properties

### Transitivity
1. If $ f = O(g) $ and $ g = O(h) $ then $ f = O(h) $.
- If $ f = \Omega(g) $ and $ g = \Omega(h) $ then $ f = \Omega(h) $.

### Sum
If $ f = O(h) $ and $ g = O(h) $ then $ f + g = O(h) $.
