---
slug: /algorithms/algorithms
tags: ["wip"]
lastModified: 2022-04-01
created: 2021-09-12
title: Algorithms
header: [{"depth":1,"name":"Introduction","link":"Introduction"},{"depth":2,"name":"Techniques","link":"Techniques"},{"depth":3,"name":"Dynamic programming","link":"Dynamic-programming"},{"depth":3,"name":"Memoization","link":"Memoization"},{"depth":3,"name":"Divide-and-conquer","link":"Divide-and-conquer"},{"depth":2,"name":"Metrics","link":"Metrics"},{"depth":2,"name":"Definition of efficiency","link":"Definition-of-efficiency"},{"depth":2,"name":"Polynomial running time","link":"Polynomial-running-time"},{"depth":1,"name":"Asymptotic order of growth","link":"Asymptotic-order-of-growth"},{"depth":2,"name":"Asymptotic upper bound","link":"Asymptotic-upper-bound"},{"depth":2,"name":"Asymptotic lower bound","link":"Asymptotic-lower-bound"},{"depth":2,"name":"Asymptotic tight bound","link":"Asymptotic-tight-bound"},{"depth":2,"name":"Properties","link":"Properties"},{"depth":3,"name":"Transitivity","link":"Transitivity"},{"depth":3,"name":"Sum","link":"Sum"},{"depth":1,"name":"Types of algorithms","link":"Types-of-algorithms"},{"depth":1,"name":"Algorithm development strategies","link":"Algorithm-development-strategies"},{"depth":1,"name":"Recurrence","link":"Recurrence"},{"depth":2,"name":"Different cases","link":"Different-cases"},{"depth":1,"name":"NP","link":"NP"},{"depth":2,"name":"NP-complete","link":"NP-complete"}]
---


# Introduction

## Techniques

### Dynamic programming
We have to come up with smaller subproblems, and each of these smaller subproblems can be easily solved. The solution to the original problem can easily be deduced when we know the solution to each of the subproblems.
We want that three conditions hold, namely

1. There should be a polynomial number of subproblems.
2. The solutions should yield a solution to the original problem.
3. We should be able to build up solutions using a recurrence.


### Memoization

### Divide-and-conquer


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

# Types of algorithms
1. Greedy
    - greedy algorithm stays ahead
    - exchange argument
2. Dynamic programming
    - Defining the objective value
    - Computing the objective value

# Algorithm development strategies
1. **Brute force**. Some straightforward approach that tests all the possibilities.
- **Smaller instances**. If we are able to solve smaller instances of the problem, can we use these to solve the overall problem?
- **Greedy approaches**. Try different greedy approaches and find counter examples. Find valuable hints in the counter examples.


# Recurrence
If $ T(n) $ denotes the running time of an algorithm designed in a divide-and-conquer style, then $ T(n) $ will follow the recurrence relation

$$
T(n) \leq q T(n/2) + cn, \quad n > 2, T(2) \leq c
$$
where $ q $ is the recursive calls used.

## Different cases

We have different cases when $ q = 1, q = 2 $ and $ q > 2 $.

When we have $ q > 2  $, then any function $ T(\cdot) $ that satisfies the above equation is bounded by

$$
O(n^{\log_2 q})
$$

When we have $ q = 1  $, then any function $ T(\cdot) $ that satisfies the above equation is bounded by

$$
O(n)
$$

When we have $ q = 2  $, then any function $ T(\cdot) $ that satisfies the above equation is bounded by

$$
O(n \log n)
$$

# NP

NP (Nondeterministic polynomial) is a class of problems which we can denote as $ \mathcal{NP} $.
NP is the class of all decision problems that easily can be verified in polynomial time given some advice in addition to the input. This advice is usually a solution. The verification does not solve the problem in polynomial time, just checks that in fact it is a valid solution to the problem.
 We denote the class of all polynomial algorithms as $ \mathcal{P} $. We notice that $ \mathcal{P} \sube \mathcal{NP} $. One question we might ask ourselves is whether there exists a problem in $ \mathcal{NP} $ that does not belong to $ \mathcal{P} $. Does $ \mathcal{P} = \mathcal{NP} $?
There is a general belief that this is not the case and regarded as a working hypothesis in the field. This question is regarded as one of the most famous problems in computer science.

There is a contrast between finding a solution and checking if a solution is correct.

## NP-complete
