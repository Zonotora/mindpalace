---
slug: /math/stochastic-processes
tags: []
lastModified: 2022-01-04
created: 2021-11-04
title: Stochastic Processes
header: [{"depth":1,"name":"Markov chains","link":"Markov-chains"},{"depth":2,"name":"Stationary distribution","link":"Stationary-distribution"},{"depth":2,"name":"Limiting distribution","link":"Limiting-distribution"},{"depth":1,"name":"Branching process","link":"Branching-process"},{"depth":2,"name":"Mean generation size","link":"Mean-generation-size"},{"depth":2,"name":"Variance of the generation size","link":"Variance-of-the-generation-size"},{"depth":2,"name":"Probability generating function","link":"Probability-generating-function"},{"depth":2,"name":"Sums of independent random variables","link":"Sums-of-independent-random-variables"},{"depth":2,"name":"Moments","link":"Moments"},{"depth":2,"name":"Extinction forever","link":"Extinction-forever"}]
---




# Markov chains

## Stationary distribution
A stationary distribution is such a distribution $ \pi $, that if the distribution over states at step $ k $ is $ \pi $, then also the distribution over states at step $ k+1 $ is $ \pi $. That is,
$$
\pi = \pi P
$$

## Limiting distribution
A limiting distribution is such a distribution $ \pi $ that no matter what the initial distribution is, the distribution over states converges to $ \pi $ as the number of steps goes to infinity:
$$
\lim_{k \to \infty} \pi^{(0)} P^k=\pi
$$
Also when a limiting distribution exists, it is always a stationary distribution. However, the converse is not true, a stationary distribution is not always a limiting distribution. Think of a state that is stationary but it is not certain that the chain converge to that state.

# Branching process
In a branching process all nonzero states are @(transient)(transient-state).


## Mean generation size

In a branching process the size of the nth generation is the sum of the individuals in the previous generation.

$$
Z_n = \sum_{i=1}^{Z_{n-1}} X_i
$$

The long-term generation size could be divided into three cases

$$
\underset{n \to \infty}{\lim} E(Z_n) = \underset{n \to \infty}{\lim} \mu^n =
\begin{cases}
0, & \text{if} \,\, \mu < 1\\
1, & \text{if} \,\,\mu = 1\\
\infty, & \text{if} \,\, \mu > 1\\
\end{cases}
$$


## Variance of the generation size

By the total law of variance the following holds
$$
\text{Var} (Z_n) = E[\text{Var} (Z_n \mid Z_{n-1}) ] + \text{Var} (E[Z_n \mid Z_{n-1}])
$$

## Probability generating function

In the discrete case, the probability generating function of the discrete random variable $ X $ is

$$
G(s) = E [s^X] = \sum_{k=0}^{\infty} s^k \Pr(X = k)
$$

We can see that $ G(1) = 1 $. If we do successive differentiations we obtain

$$
\begin{aligned}
G(0) &= \Pr(X = 0) \\
G'(0) &= \Pr(X = 1) \\
G''(0) &= 2\Pr(X = 2) \\
G^{(j)}(0) &= j!\Pr(X = j) \\
\end{aligned}
$$

This is useful for computing the probability given the generating function

$$
\Pr(X = j) = \frac{G^{(j)}(0)}{j!}
$$
So if we know the generating function of a distribution we can use this to find out what distribution we have.

## Sums of independent random variables

If we let $ Z = X_1 + \dots + X_n $, the probability generating function of $ Z $ is

$$
G_Z(s) = E[s^Z] = E[s^{X_1 + \dots + X_n}] = E(\prod_{k = 1}^n s^{X_k}) =\prod_{k = 1}^n E(s^{X_k}) = G_{X_1}(s) \cdots G_{X_n}(s)
$$

If $ X_k $ also is identically distributed we can simplify

$$
G_Z(s) = |G_X(s)|^n
$$

## Moments
We may find the mean and the variance with the probability generating function

$$
\begin{aligned}
G'(1) &= E[X] \\
G''(1) &= E[X^2] - E[X]
\end{aligned}
$$

which gives

$$
\begin{aligned}
E[X] &= G'(1) \\
\text{Var}(X) &= G''(1) + G'(1) - G'(1)^2 \\
\end{aligned}
$$

## Extinction forever

We can find the probability that a branching process may go extinct in the case $ \mu > 1 $, (when $ \mu \leq 1 $ the probability of going extinct is 1)
In general we can write the generating function for the nth generation as
$$
G_n(s) = G(G_{n-1}(s))
$$
However it is not as useful in practical terms, only for proving that the probability of eventual extinction is the smallest root of the equation
$$
s = G(s)
$$