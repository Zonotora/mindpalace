---
slug: /math/stochastic-processes
tags: []
lastModified: 2022-01-08
created: 2021-11-04
title: Stochastic Processes
header: [{"depth":1,"name":"Markov chains","link":"Markov-chains"},{"depth":2,"name":"Stochastic matrix","link":"Stochastic-matrix"},{"depth":2,"name":"N-step transition matrix","link":"N-step-transition-matrix"},{"depth":2,"name":"Distribution of Markov chains","link":"Distribution-of-Markov-chains"},{"depth":2,"name":"Markov property","link":"Markov-property"},{"depth":2,"name":"Joint distribution","link":"Joint-distribution"},{"depth":2,"name":"Stationary distribution","link":"Stationary-distribution"},{"depth":2,"name":"Limiting distribution","link":"Limiting-distribution"},{"depth":2,"name":"Positive matrix","link":"Positive-matrix"},{"depth":2,"name":"Regular transition matrix","link":"Regular-transition-matrix"},{"depth":2,"name":"Limit theorem for regular Markov chains","link":"Limit-theorem-for-regular-Markov-chains"},{"depth":2,"name":"Communication class","link":"Communication-class"},{"depth":2,"name":"Closed communication class","link":"Closed-communication-class"},{"depth":2,"name":"Irreducibility","link":"Irreducibility"},{"depth":2,"name":"Limit theorem for finite irreducible Markov chains","link":"Limit-theorem-for-finite-irreducible-Markov-chains"},{"depth":2,"name":"Recurrent state","link":"Recurrent-state"},{"depth":2,"name":"Transient state","link":"Transient-state"},{"depth":2,"name":"Periodicity","link":"Periodicity"},{"depth":2,"name":"Aperiodic","link":"Aperiodic"},{"depth":2,"name":"Ergodic","link":"Ergodic"},{"depth":2,"name":"Fundamental limit theorem of ergodic Markov chains","link":"Fundamental-limit-theorem-of-ergodic-Markov-chains"},{"depth":2,"name":"Time reversibility","link":"Time-reversibility"},{"depth":2,"name":"Absorbing chains","link":"Absorbing-chains"},{"depth":3,"name":"Fundamental matrix","link":"Fundamental-matrix"},{"depth":3,"name":"Absorption probability","link":"Absorption-probability"},{"depth":3,"name":"Absorption time","link":"Absorption-time"},{"depth":3,"name":"First hitting time for irreducible chain","link":"First-hitting-time-for-irreducible-chain"},{"depth":1,"name":"Continuous Markov chains","link":"Continuous-Markov-chains"},{"depth":2,"name":"Markov Property","link":"Markov-Property"},{"depth":2,"name":"Transition function","link":"Transition-function"},{"depth":2,"name":"Champman-Kolmogorov Equations","link":"Champman-Kolmogorov-Equations"},{"depth":2,"name":"Holding times","link":"Holding-times"},{"depth":2,"name":"Absorbing state","link":"Absorbing-state"},{"depth":2,"name":"Explosive","link":"Explosive"},{"depth":2,"name":"Embedded chain","link":"Embedded-chain"},{"depth":2,"name":"Transition rates","link":"Transition-rates"},{"depth":2,"name":"Absorbing chain","link":"Absorbing-chain"},{"depth":3,"name":"Fundamental matrix","link":"Fundamental-matrix"},{"depth":3,"name":"Mean time until absorption","link":"Mean-time-until-absorption"},{"depth":2,"name":"Stationary distribution with generator matrix","link":"Stationary-distribution-with-generator-matrix"},{"depth":2,"name":"Global balance","link":"Global-balance"},{"depth":2,"name":"Time reversibility","link":"Time-reversibility"},{"depth":2,"name":"Little's formula","link":"Little's-formula"},{"depth":1,"name":"Branching process","link":"Branching-process"},{"depth":2,"name":"Mean generation size","link":"Mean-generation-size"},{"depth":2,"name":"Variance of the generation size","link":"Variance-of-the-generation-size"},{"depth":2,"name":"Probability generating function","link":"Probability-generating-function"},{"depth":2,"name":"Sums of independent random variables","link":"Sums-of-independent-random-variables"},{"depth":2,"name":"Moments","link":"Moments"},{"depth":2,"name":"Extinction forever","link":"Extinction-forever"},{"depth":1,"name":"Markov chains Monte Carlo","link":"Markov-chains-Monte-Carlo"},{"depth":2,"name":"The law of large numbers","link":"The-law-of-large-numbers"},{"depth":2,"name":"Strong law of large numbers","link":"Strong-law-of-large-numbers"},{"depth":2,"name":"Metropolis-Hastings algorithm","link":"Metropolis-Hastings-algorithm"},{"depth":1,"name":"Poisson process","link":"Poisson-process"},{"depth":2,"name":"Counting process","link":"Counting-process"},{"depth":2,"name":"Definition","link":"Definition"},{"depth":2,"name":"Stationary increments","link":"Stationary-increments"},{"depth":2,"name":"Independent increments","link":"Independent-increments"},{"depth":2,"name":"First arrival times","link":"First-arrival-times"},{"depth":2,"name":"Nth arrival times","link":"Nth-arrival-times"},{"depth":2,"name":"Distribution of arrival times","link":"Distribution-of-arrival-times"},{"depth":2,"name":"Memorylessness","link":"Memorylessness"},{"depth":2,"name":"Thinning","link":"Thinning"},{"depth":2,"name":"Superposition process","link":"Superposition-process"},{"depth":2,"name":"Spatial Poisson process","link":"Spatial-Poisson-process"},{"depth":1,"name":"Brownian motion","link":"Brownian-motion"},{"depth":2,"name":"Martingale","link":"Martingale"},{"depth":1,"name":"Undirected weighted graphs","link":"Undirected-weighted-graphs"},{"depth":2,"name":"Limiting distribution","link":"Limiting-distribution"},{"depth":1,"name":"References","link":"References"}]
---




# Markov chains
A markov chain is a sequence of random variables, $ X_0, X_1, \dots $, with the following property

$$
\Pr(X_{n+1} = j \mid X_0 = x_0,\dots, X_n = i) = \Pr(X_{n+1} = j \mid X_n = i)
$$

for all $ x_0,\dots,i,j $ that is included in the @(state space)(state-space) of the Markov chain. The state space is a discrete set.


## Stochastic matrix
A stochastic matrix is a square matrix, $ P $, that satisfy
1. $ P_{ij} \geq 0 $ for all $ i, j $
2. For each row $ i, \sum_j P_{ij} = 1 $

## N-step transition matrix
Let $ X_0, X_1, \dots $ be a Markov chain with transition matrix $ P $. Then $ P^n $ is the n-step transition matrix and we can calculate the probability that we go from state $ i $ to state $ j $ in n steps

$$
P_{ij}^n = \Pr(X_n = j \mid X_0 = i), \qquad \text{for all} \,\, i, j
$$

## Distribution of Markov chains
The sequence of random variables $ X_0, X_1, \dots $ is generally not identically distributed random variables in the Markov chain. If our Markov chains has the transition matrix $ P $ and the initial distribution $ \alpha $, the distribution for $ X_n $ is
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
\Pr(X_{n+1} = j \mid X_0 = x_0, \dots, X_{n-m} = i) &= \Pr(X_{n+1} = j \mid X_{n-m} = i) \\
&= \Pr(X_{m+1} = j \mid X_0 = i) \\
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

## Limit theorem for regular Markov chains
If the transition matrix is regular, a limiting distribution exists. It is unique as well. All of the limiting probabilities are positive.


## Communication class
If a Markov chain has exactly one communication class, all states communicate with each other. Think of it as if every state can eventually communicate with each other. If we have multiple communication classes one state may not be able to communicate with another state in $ n $ steps.

## Closed communication class
A communication class is closed if it consists of all recurrent states.

## Irreducibility
A Markov chain is called **irreducible** if it has exactly one communication class. Thus, if the matrix is regular we know it is also irreducible. Finite irreducible Markov chains have unique positive stationary distributions if it is aperiodic as well.

## Limit theorem for finite irreducible Markov chains
Let $ \mu_j = E[T_j \mid X_0 = j] $ be the expected return time to j. Then $ \mu_j < \infty $ and the vector $ v $ with $ v_j = \frac{1}{\mu_j} $ is a stationary distribution. All finite regular Markov chains are finite irreducible Markov chains.
Furthermore,
$$
v_j = \underset{n \to \infty}{\lim} \frac{1}{n} \sum_{m=0}^{n-1} (P^m)_{ij}
$$

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
A Markov chain is said to be **ergodic** if it is irreducible, aperiodic and all states have finite expected return times (all states are positive recurrent). Ergodic Markov chains have positive limiting distributions. That is, let $ X_0, X_1, \dots $ be an ergodic Markov chain. Then there exists a unique positive stationary distribution which also is the limiting distribution for the Markov chain.

## Fundamental limit theorem of ergodic Markov chains
There exists a unique positive stationary distribution that is the limiting distribution of the Markov chain.

## Time reversibility
An irreducible Markov chain is said to be time reversible if
$$
\pi_i P_{ij} = \pi_j P_{ji} \qquad \text{ for all } i,j
$$
where $ \pi $ is a stationary distribution and $ P $ is the transition matrix. The equation above is called the **detailed balance condition**.

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
The expected number of steps until the Markov chain is absorbed when starting in state $ i $ is given by
$$
(F1)_i
$$

### First hitting time for irreducible chain
First hitting time for irreducible chain is given by modifying the transition matrix $ P $ so that the we are interested in, is an absorbing state.

# Continuous Markov chains


## Markov Property
A continuous-time stochastic process $ (X_t)_{t \geq 0} $ with discrete state space, $ S $, is a continuous-time Markov chain if
$$
\Pr(X_{t+s} = j \mid X_s = i, X_u = u, 0 \leq u < s) = \Pr(X_{t+s} = j \mid X_s = i)
$$
for all $ s,t \geq 0, i,j,x_u \in S, 0 \leq u < s$. If the process does not depend on $ s $ it is said to be **time-homogeneous**.
$$
\Pr(X_{t+s} = j \mid X_s = i) = \Pr(X_{t} = j \mid X_0 = i)
$$
for $ s \geq 0 $.

## Transition function
The transition probabilities can be arranged in a matrix function for each $ t \geq 0 $ that is called the transition function
$$
P_{ij} (t) = \Pr(X_t = j \mid X_0 = i)
$$

## Champman-Kolmogorov Equations
For a continuous Markov chain $ (X_t)_{t \geq 0} $ with transition $ \bold P(t) $,
$$
\bold P(s + t) = \bold P(s) \bold P(t)
$$
for $ s,t \geq 0 $.

## Holding times
The holding time, $ T_i $ at a state $ i $ is the length of time that a continuous-time Markov chain stays in $ i $ before transitioning to a new state. $ T_i $ has an exponential distribution.

## Absorbing state
For each state $ i $, let $ q_i $ be the parameter of the exponential distribution for the holding time $ T_i  $. If $ q_i $ is defined to be in the interval $ (0, \infty) $, a continuous-time process with $ q_i = 0 $, $ i $ is said to be an **absorbing state**. This is because when the process visits state $ i $ it never leaves.
## Explosive
For each state $ i $, let $ q_i $ be the parameter of the exponential distribution for the holding time $ T_i  $. If $ q_i $ is defined to be in the interval $ (0, \infty) $, a continuous-time process with $ q_i = \infty $ is said to be an **explosive**. This is because the process may visit state $ i $ infinitely many times at one time instant.

## Embedded chain
The embedded chain in a continuous-time Markov chain is the discrete-time Markov chain with the transition probabilities for each state. The transition matrix $ \widetilde P $ for the embedded chain is a stochastic matrix with diagonal entries 0.

## Transition rates
The $ q_{ij} $ is called the transition rates for a continuous-time process. With the transition rates we may obtain the embedded chain transition probabilities and the holding time parameters.

## Absorbing chain
In a continuous-time Markov chain we write the $ Q $ matrix in the following form
$$
Q = \left({\begin{array}{c|c}
0 & \mathbf{0}\\
\hline
* & V
\end{array}}
\right)
$$
where $ V $ is a $ (k - 1) \times (k - 1) $ matrix.

### Fundamental matrix
The fundamental matrix for continuous-time Markov chain is defined as
$$
F = -V^{-1}
$$

### Mean time until absorption
The mean time until absorption for a chain that started in $ i $ is
$$
a_i = (F1)_i = \sum_{j} F_{ij}
$$

## Stationary distribution with generator matrix
A continuous-time Markov chain has a stationary distribution $ \pi $ if and only if
$$
\pi Q = 0
$$
To compute this we need to use fact that $ \sum_i \pi_i = 1 $. One of the equations in $ \pi Q = 0 $ is therefore redundant and we may remove whichever.

## Global balance
If $ \pi $ is a stationary distribution of a continuous-time Markov chain. From $ \pi Q = 0 $ we get
$$
\sum_{i \neq j} \pi_i q_{ij} = \pi_j q_j \qquad \text{for all } j
$$
This is called the **global balance** equations. They say that the transition rates in and out from any state are the same when stationary.

## Time reversibility
A continuous-time Markov chain with generator matrix $ Q $ and a **unique** stationary distribution $ \pi $ is time reversible if
$$
\pi_i q_{ij} = \pi_j q_{ji} \qquad \text{ for all } i,j
$$
This is called the **local balance** or **detailed balance** equations, and the states that the long-term transition rate from $ i $ to $ j $ is equal to the long-term transition rate from $ j $ to $ i $.

## Little's formula
In a queueing system we can describe the long-term properties by the following formula
$$
L = \lambda W
$$
where $ L $ is the long-term average number of customers in the system, $ \lambda $ is the rate of arrivals, $ W $ is the long-term average time that a customer spends in the system.




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


# Markov chains Monte Carlo
Instead of looking at a Markov chain and learn what happens when then number of steps approaches infinity, the limiting distribution, we know start with a target distribution, the limiting distribution and then derive the Markov chain from that.
If we can get enough samples of the Markov chain we know that we have an approximate sample from our target distribution.
Computing the marginal likelihood function is challenging in many different models.

## The law of large numbers
The law of large numbers is central in probability theory. It states that $ X_1, \dots, X_n,  $ is a sequence of independent and identically distributed random variables with a common mean of $ \mu < \infty $, then the following holds with probability 1

$$
\underset{n \to \infty}{\lim} \frac{X_1 + \dots + X_n}{n} = \mu
$$


Also, if $ X $ is a random variable with the same distribution as the sequence and $ r $ is a bounded, real-valued function, then the sequence $ r(X_1), \dots, r(X_n) $ is also an independent and identically distributed sequence with finite mean and a probability of 1 that the following holds
$$
\underset{n \to \infty}{\lim} \frac{r(X_1) + \dots + r(X_n)}{n} = E(r(X))
$$

## Strong law of large numbers
Let $ X_1, \dots, X_n $ be an ergodic Markov chain with stationary distribution $ \pi $. Let $ X $ be a random variable with distribution $ \pi $. Let $ r $ be a bounded, real-valued function. Then

$$
\underset{n \to \infty}{\lim} \frac{r(X_1) + \dots + r(X_n)}{n} = E(r(X))
$$

where $ E(r(X)) = \sum_{j} r(j) \pi_j $. When using this in practice, we may ignore the first $ m $ elements in the sequence before computing the average to improve accuracy. This technique is called **burn-in**.


## Metropolis-Hastings algorithm
MMetropolis-Hastings algorithm is one of the most common methods when using Markov chain Monte Carlo. It is a method for obtaining a sequence of random samples from a probability distribution where direct sampling is difficult @{metropolis}. The sequence is used to approximate the distribution. Metropolis-Hasting works quite well in with multidimensional data and there are other methods which is better when working with single-dimensional distributions. The algorithm constructs a reversible Markov chain whose distribution is $ \pi $, where $ \pi = (\pi_1, \pi_1, \dots ) $ is a discrete probability distribution.
Thus, the goal of the algorithm is to construct the Markov chain $ X_0, X_1, \dots $, with stationary $ \pi $ by simulating $ \pi $.

# Poisson process
A Poisson process is a special type of counting process. Events arrive at specific time instants, starting at $ t = 0 $. The we count the number of arrivals that has occurred by the time $ t $.
With Poisson processes we may focus on (i) the number of events that occurred between a fixed time interval, (ii) when events occurred, (iii) the behavior of individual events.


## Counting process
A counting process $ (N_t)_{t\geq 0} $ a collection of positive integer valued random variables such that $  0 \leq s \leq t \implies N_s \leq N_t $. Contrary to Markov chains, that operate with a sequence of random variables, a counting process is an uncountable collection indexed over a continuous time interval.

## Definition
A Poisson process is a counting process with the following definition: Let $ \lambda $ be the parameter of a Poisson process that is a counting process $ (N_t)_{t\geq 0} $ with the following properties
1. $ N_0 = 0 $
2. $ N_t $ has a Poisson distribution with parameter $ \lambda t $ for all $ t > 0 $
3. $ N_{t+s} - N_s $ has the same distribution as $ N_t $ for $ s,t > 0 $.
4. $ N_t - N_s $ and $ N_r - N_q $ are independent random variables for $ 0 \leq q < r \leq s < t $.

## Stationary increments
Stationary increments is the third rule in the definition above. The distribution of the number of arrivals in an interval only depends on the length of the interval.

## Independent increments
Independent increments is the fourth rule in the definition above. The number of arrivals on disjoint intervals are independent random variables.

## First arrival times
If we let $ X $ denote the first arrival time, then $ X > t $ if and only if there are no arrivals in the interval $ [0, t] $. We have
$$
\Pr(X > t) = \Pr(N_t = 0) = e^{-\lambda t}, \qquad t > 0
$$
We can see that $ X $ has an exponential distribution with parameters $ \lambda $.

## Nth arrival times
Let $ S_n $ be the time of the nth arrival in a Poisson process with parameter $ \lambda $, then $ S_n $ has a gamma distribution with parameters $ n $ and $ \lambda $ according to
$$
f_{S_n} = \frac{\lambda ^n t^{n-1} e^{-\lambda t}}{(n - 1)!}
$$
1. $ E[S_n] = \frac{n}{\lambda} $
2. $ \text{Var} (S_n) = \frac{n}{\lambda^2} $

## Distribution of arrival times
Let $ S_1, S_2, \dots $ be the arrival times of a Poisson process with parameter $ \lambda $. The joint distribution of $ (S_1, \dots, S_n) $, conditional on $ N_t = n $, is the distribution of the order statistics of $ n $ independent and identically distributed random variables on $ [0, t] $. We have
$$
f(s_1, \dots, s_n) = \frac{n!}{t^n}
$$
If we have $ n $ uniformly distributed random variables that are independent and identically distributed on $ [0, t] $, conditional on $ N_t = n $, they have the same distribution as $ (S_1, \dots, S_n) $.

## Memorylessness
Memorylessness means that the waiting time distributions are the same for all observers, and all observers will wait, on average, the same amount of time. Formally, a random variable $ X $ is memoryless if
$$
\Pr(X > s + t \mid X > s) = \Pr(X > t)
$$
for all $ s,t > 0 $.

## Thinning
A thinned Poisson process is a kind of a subprocess to another Poisson process that is independent to another thinned process of the same parent process.

## Superposition process
If we have $ (N_t^{(1)})_{t\geq 0}, \dots, (N_t^{(n)})_{t\geq 0} $ independent Poisson processes with respective parameters $ \lambda_1, \dots, \lambda_n $, then let $ N_t = N_t^{(1)} + \dots + N_t^{(n)}$ for $ t \geq 0 $. $ (N_t)_{t\geq 0} $ is then a Poisson process with parameters $ \lambda = \lambda_1 + \dots + \lambda_n $.

## Spatial Poisson process
A spatial Poisson process is a collection of random variables $ (N_A)_{A\sube \R^d} $ with parameter $ \lambda $ if
1. $ N_A $ has a Poisson distribution with parameter $ \lambda | A |  $ for each bounded set $ A \sube \R^d $.
2. $ N_A $ and $ N_B $ are independent random variables if $ A $ and $ B $ are disjoint sets.


# Brownian motion
Brownian motion is a continuous stochastic process $ (B_t)_{t \geq 0} $ that has the following properties
1. $ B_0 = 0 $
2. $ B_t \sim \text{Normal}(0, t) $, for $ t > 0 $
3. $ B_{t + s} - B_s \sim \text{Normal} (0, t) $, for $ s,t > 0 $
4. $ B_t - B_s $ is independent from $ B_r - B_q $, for $ 0 \leq q < r \leq s < t $
5. The function $ t \mapsto B_t $ is continuous with probability 1


## Martingale
A stochastic process $ (Y_t)_{t \geq 0} $ is a **martingale** if for all $ t \geq 0 $
1. $ E[Y_t \mid Y_t, 0 \geq r \geq s] = Y_s $ for all $ 0 \geq s \geq t $
2. $ E[|Y_t|] < \infty $

# Undirected weighted graphs

## Limiting distribution
The limiting distribution for undirected weighted graphs is given by the balance functions. In the following example it is
$$
(\frac{w_1 + w_2 + w_4}{W}, \frac{w_1 + w_3 + w_5}{W}, \frac{w_2 + w_3 + w_6}{W})
$$
where $ W = w_1 + w_2 + w_4 + w_1 + w_3 + w_5 + w_2 + w_3 + w_6 $. Thus, the sum of all the edges from each node divided by the sum of the total number of edges.

# References
{metropolis}:
    title: Metropolis–Hastings algorithm
    url: https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm
