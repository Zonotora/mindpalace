---
slug: /math/stochastic-processes
tags: []
lastModified: 2022-01-04
created: 2021-11-04
title: Stochastic Processes
header: [{"depth":1,"name":"Markov chains","link":"Markov-chains"},{"depth":2,"name":"Stochastic matrix","link":"Stochastic-matrix"},{"depth":2,"name":"N-step transition matrix","link":"N-step-transition-matrix"},{"depth":2,"name":"Distribution of Markov chains","link":"Distribution-of-Markov-chains"},{"depth":2,"name":"Markov property","link":"Markov-property"},{"depth":2,"name":"Joint distribution","link":"Joint-distribution"},{"depth":2,"name":"Stationary distribution","link":"Stationary-distribution"},{"depth":2,"name":"Limiting distribution","link":"Limiting-distribution"},{"depth":2,"name":"Positive matrix","link":"Positive-matrix"},{"depth":2,"name":"Regular transition matrix","link":"Regular-transition-matrix"},{"depth":2,"name":"Communication class","link":"Communication-class"},{"depth":2,"name":"Closed communication class","link":"Closed-communication-class"},{"depth":2,"name":"Irreducibility","link":"Irreducibility"},{"depth":2,"name":"Recurrent state","link":"Recurrent-state"},{"depth":2,"name":"Transient state","link":"Transient-state"},{"depth":2,"name":"Periodicity","link":"Periodicity"},{"depth":2,"name":"Aperiodic","link":"Aperiodic"},{"depth":2,"name":"Ergodic","link":"Ergodic"},{"depth":2,"name":"Time reversibility","link":"Time-reversibility"},{"depth":2,"name":"Absorbing chains","link":"Absorbing-chains"},{"depth":3,"name":"Fundamental matrix","link":"Fundamental-matrix"},{"depth":3,"name":"Absorption probability","link":"Absorption-probability"},{"depth":3,"name":"Absorption time","link":"Absorption-time"},{"depth":3,"name":"First hitting time for irreducible chain","link":"First-hitting-time-for-irreducible-chain"},{"depth":1,"name":"Branching process","link":"Branching-process"},{"depth":2,"name":"Mean generation size","link":"Mean-generation-size"},{"depth":2,"name":"Variance of the generation size","link":"Variance-of-the-generation-size"},{"depth":2,"name":"Probability generating function","link":"Probability-generating-function"},{"depth":2,"name":"Sums of independent random variables","link":"Sums-of-independent-random-variables"},{"depth":2,"name":"Moments","link":"Moments"},{"depth":2,"name":"Extinction forever","link":"Extinction-forever"}]
---




# Markov chains
A markov chain is a sequence of random variables, $ X_0, X_1, \dots $, with the following property

$$
\Pr(X_{n+1} = j | X_0 = x_0,\dots, X_n = i) = \Pr(X_{n+1} = j | X_n = i)
$$

for all $ x_0,\dots,i,j $ that is included in the @(state space)(state-space) of the Markov chain. The state space is a discrete set.


## Stochastic matrix
A stochastic matrix is a square matrix, $ P $, that satisfy
1. $ P_{ij} \geq 0 $ for all $ i, j $
2. For each row $ i, \sum_j P_{ij} = 1 $

## N-step transition matrix
Let $ X_0, X_1, \dots $ be a Markov chain with transition matrix $ P $. Then $ P^n $ is the n-step transition matrix and we can calculate the probability that we go from state $ i $ to state $ j $ in n steps

$$
P_{ij}^n = \Pr(X_n = j | X_0 = i), \qquad \text{for all} \,\, i, j
$$

## Distribution of Markov chains
The sequence of random variables $ X_0, X_1, \dots $ is generally not identically distributed random variables in the Markov chain. If our Markov chains has the transition matrix P and the initial distribution $ \alpha $, the distribution for $ X_n $ is
$$
\alpha P^n
$$
Namely,

$$
\Pr(X_n = j) = (\alpha P^n)_j, \qquad \text{for all } j \text{ and } n \geq 0
$$


## Markov property

The Markov property states that the past and future is independent given the present. The present here could be looked as the most recent past. Let $ X_0, X_1, \dots $ be a Markov chain. Then for all $ m < n $
$$
\begin{aligned}
\Pr(X_{n+1} = j | X_0 = x_0, \dots, X_{n-m} = i) &= \Pr(X_{n+1} = j | X_{n-m} = i) \\
&= \Pr(X_{m+1} = j | X_0 = i) \\
&= P_{ij}^{m+1}
\end{aligned}
$$

for all $ x_0,\dots, i,j $ and $ n \geq 0 $

## Joint distribution

The marginal distributions of Markov chains are determined by the initial distribution $ \alpha $ and the transition matrix $ P $. If we consider the join probability of
$$
\Pr(X_5 = i, X_6 = j, X_9 = k) \text{ for some states } i,j,k
$$
The resulting event is then moving to $ i $ in five steps, then to $ j $ in one step and then to $ k $ in three steps. The resulting probability is calculated with
$$
(\alpha P^5)_i P_{ij} P_{jk}^3
$$

This is obtained by combining the Markov property with conditional probability and time-homogeneity. Formally, let $ X_0, X_1, \dots $ be a Markov chain with transition matrix $ P $ and initial distribution $ \alpha $. Then for all $ 0 \leq n_1 < \dots < n_k $ and states $ i_1, \dots, i_k $
$$
\Pr(X_{n_1} = i_1, X_{n_k} = i_k) = (\alpha P^{n_1})_{i_1} \cdots P^{n_k - n_{k - 1}}_{i_{k-1}i_k}
$$




## Stationary distribution
A stationary distribution is such a distribution $ \pi $, that if the distribution over states at step $ k $ is $ \pi $, then also the distribution over states at step $ k+1 $ is $ \pi $. That is,
$$
\pi = \pi P
$$

To find a stationary distribution, the above equation is redundant, and we must use the fact that $ \pi_1, \dots, \pi_n = 1 $. Then we are able to obtained the unique solution.

## Limiting distribution
A limiting distribution is such a distribution $ \pi $ that no matter what the initial distribution is, the distribution over states converges to $ \pi $ as the number of steps goes to infinity:
$$
\lim_{k \to \infty} \pi^{(0)} P^k=\pi
$$
Also when a limiting distribution exists, it is always a stationary distribution. However, the converse is not true, a stationary distribution is not always a limiting distribution. Think of a state that is stationary but it is not certain that the chain will converge to that state given some other initial distribution.


## Positive matrix
A matrix $ M $ is said to be **positive** if all the entries of the matrix is **positive**.

## Regular transition matrix
A transition matrix $ P $ is said to be **regular** if some power of $ P $ is **positive**.

## Communication class
If a Markov chain has exactly one communication class, all states communicate with each other. Think of it as if every state can eventually communicate with each other. If we have multiple communication classes one state may not be able to communicate with another state in $ n $ steps.

## Closed communication class
A communication class is closed if it consists of call recurrent states.

## Irreducibility
A Markov chain is called **irreducible** if it has exactly one communication class. Thus, if the matrix is regular we know it is also irreducible. Finite irreducible Markov chains have unique positive stationary distributions.

## Recurrent state
A recurrent state has the property that a Markov chain starting at this state eventually returns to that state.

##  Transient state
A transient state has the property that a Markov chain starting at this state has a positive probability of never returning to this state.

## Periodicity
The states of a communication class all have the same period. The period of a state is defined as
$$
d(i) = \gcd(n > 0 : P_{ij}^n > 0)
$$
Thus, if a Markov chain is irreducible and all states have a period greater to one, the Markov chain is **periodic**.

## Aperiodic
When the period is $ d(i) = 1 $ the state is said to be **aperiodic**. Thus, if a Markov chain is irreducible and all states have a period equal to one, the Markov chain is **aperiodic**.

## Ergodic
A Markov chain is said to be **ergodic** if it is irreducible, aperiodic and all states have finite expected return times. Ergodic Markov chains have positive limiting distributions. That is, let $ X_0, X_1, \dots $ be an ergodic Markov chain. Then there exists a unique positive stationary distribution which also is the limiting distribution for the Markov chain.

## Time reversibility
An irreducible Markov chain is said to be time reversible if
$$
\pi_i P_{ij} = \pi_j P_{ji} \qquad \text{ for all } i,j
$$
where $ \pi $ is a stationary distribution and $ P $ is the transition matrix.

## Absorbing chains
A Markov chain is called an absorbing chain if it has at least one absorbing state, that is, a state that is $ P_{ii} = 1 $. When dealing with absorbing Markov chains we usually split the matrix into different partitions and write it like
$$
P=
\left({\begin{array}{c|c}
Q & R\\
\hline
{\mathbf {0}} & I
\end{array}}
\right)
$$
where $ Q $ is a $ t \times t $ matrix, $ R $ is a $ t \times (k - t) $ matrix, $ \mathbf{0} $ is a $ (k - t) \times t $ matrix full of 0s, and $ I $ is a $ (k -t) \times (k - t) $ identity matrix.

### Fundamental matrix
The fundamental matrix of an absorbing Markov chain is
$$
F=\sum _{{k=0}}^{\infty }Q^{k}=(I-Q)^{{-1}},
$$
The fundamental matrix describes the expected number of visits from $ i $ to $ j $.

### Absorption probability
The probability that the Markov chain is absorbed in state $ j $ when starting in state $ i $ is given by
$$
(FR)_{ij}
$$

### Absorption time
The expected number of steps until the Markov chain is absorbed in state $ j $ when starting in state $ i $ is given by
$$
(F1)_{ij}
$$

### First hitting time for irreducible chain
First hitting time for irreducible chain is given by modifying the transition matrix $ P $ so that the we are interested in, is an absorbing state.

# Branching process
In a branching process all nonzero states are transient.


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