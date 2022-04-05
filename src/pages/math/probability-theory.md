---
slug: /math/probability-theory
tags: []
lastModified: 2022-04-05
created: 2021-12-30
title: Probability Theory
header: [{"depth":1,"name":"Random variable","link":"Random-variable"},{"depth":1,"name":"Probability mass function","link":"Probability-mass-function"},{"depth":1,"name":"Probability density function","link":"Probability-density-function"},{"depth":1,"name":"Stochastic process","link":"Stochastic-process"},{"depth":1,"name":"Statistical inference","link":"Statistical-inference"},{"depth":2,"name":"Classical inference","link":"Classical-inference"},{"depth":2,"name":"Bayesian inference","link":"Bayesian-inference"},{"depth":1,"name":"Kolmogorov axioms","link":"Kolmogorov-axioms"},{"depth":2,"name":"First axiom","link":"First-axiom"},{"depth":2,"name":"Second axiom","link":"Second-axiom"},{"depth":2,"name":"Third axiom","link":"Third-axiom"},{"depth":1,"name":"Conditional probability","link":"Conditional-probability"},{"depth":1,"name":"Independent events","link":"Independent-events"},{"depth":1,"name":"Total law of probability","link":"Total-law-of-probability"},{"depth":1,"name":"Joint distributions","link":"Joint-distributions"},{"depth":1,"name":"Chain rule","link":"Chain-rule"},{"depth":1,"name":"Expectation","link":"Expectation"},{"depth":2,"name":"Discrete","link":"Discrete"},{"depth":2,"name":"Continuous","link":"Continuous"},{"depth":2,"name":"Conditional discrete","link":"Conditional-discrete"},{"depth":2,"name":"Conditional continuous","link":"Conditional-continuous"},{"depth":2,"name":"Total law of expectation discrete","link":"Total-law-of-expectation-discrete"},{"depth":2,"name":"Total law of expectation continuous","link":"Total-law-of-expectation-continuous"},{"depth":1,"name":"Variance","link":"Variance"},{"depth":2,"name":"Total law of variance","link":"Total-law-of-variance"},{"depth":1,"name":"Covariance","link":"Covariance"},{"depth":1,"name":"Correlation","link":"Correlation"},{"depth":1,"name":"Order statistics","link":"Order-statistics"},{"depth":1,"name":"Hoeffding inequality","link":"Hoeffding-inequality"},{"depth":1,"name":"Boole's inequality","link":"Boole's-inequality"},{"depth":1,"name":"References","link":"References"}]
---


# Random variable
A random variable is a variable whose outcome depends on a random event. In probability theory a random variable is understood as a measurable function defined on the @(probability space)(probability-space). A random variable maps from the sample space to any measurable space with some probability.

# Probability mass function
The probability mass function, also known as the discrete density function, is a function that gives the exact probability of a discrete random variable to some value. It differs from the probability density function in that it is associated with discrete random variables instead of continuous random variables.

# Probability density function
The probability density function (PDF) must be integrated over an interval to yield the probability. It is defined as follows
$$
\Pr (a \leq X \leq b) = \int_a^b f_X (x) dx
$$
In the continuous case the probability of a point always gives the probability 0, $ \Pr(X = x) = 0 $, which is why we need to evaluate it over an interval instead.


# Stochastic process
A stochastic process is a random process that is usually defined as a family of random variables.
Thus, each random variable takes the value from the same mathematical space known as the @(state space)(state-space).
There are two types of stochastic processes, that is, @(discrete-time)(discrete-time) and @(continuous-time)(continuous-time) stochastic processes.
Examples of stochastic processes are the Bernoulli process @{bernoulli} and random walk among others. The Bernoulli process can be looked as flipping a coin multiple times where the sequence of flipped coins represents several independent and identically distributed (i.i.d) Bernoulli random variables.

# Statistical inference
Statistical inference is the process of inferring properties of an underlying distribution of probability using data analysis.
Creating logical claims that is justified by the data.

## Classical inference
In classical inference (Frequentist) parameters are fixed or non-random quantities and the probability only concerns the data. For a Frequentist the probability of an event is the proportion of that event in the long run.

## Bayesian inference
Bayesian inference is a method used to update the probability of a model using Bayes' theorem
$$
\Pr(A\mid B)=\frac {\Pr(B\mid A)\Pr(A)}{\Pr(B)}
$$
Contrary to how classical inference work, Bayesian inference take into account the uncertainty of the parameters when creating the model. The parameters themselves are random variables. The Bayesian approach bases its decision on prior knowledge.



# Kolmogorov axioms
The Kolmogorov axioms consist of of three axioms that is the foundation of probability theory.

## First axiom
The probability of an event is always positive.
$$
\Pr(E) \in \R_+, \qquad \forall E \in F
$$
where $ F $ is the event space.

## Second axiom
The probability that at least one of outcomes in the sample space will occur has the probability of 1.
$$
\Pr(\Omega) = 1
$$
where $ \Omega $ is the sample space.

## Third axiom
Any countable sequence of mutually exclusive events $ E_1, E_2, ... $ satisfies
$$
\Pr\left(\bigcup _{i=1}^{\infty }E_{i}\right)=\sum _{i=1}^{\infty }\Pr(E_{i}).
$$


# Conditional probability
The conditional probability of event $ A $ occurring after event $ B $ is defined as

$$
\Pr(A \mid B) = \frac{\Pr(A \cap B)}{\Pr(B)}
$$

# Independent events
Two events are independent if
$$
\Pr (A \cap B) = \Pr(A)\Pr(B)
$$
Thus the following holds for conditional independent events
$$
\Pr(A \mid B) = \frac{\Pr(A \cap B)}{\Pr(B)} = \frac{\Pr(A)\Pr(B)}{\Pr(B)} = \Pr(A)
$$


# Total law of probability
Given an event $ A $, what is the probability of $ A $ given $ B $ every single $ B $?
The total law of probability states that if we have a sequence of events $ B_n $ that partitions the sample space the following holds
$$
 P(A)=\sum _{n}P(A\cap B_{n}) =\sum _{n}P(A\mid B_{n})P(B_{n})
$$


# Joint distributions
Given multiple different random variables $ X_1, \dots, X_n $ defined on the same probability space is a probability distribution that gives the probability that each random variable falls into a particular set of values.

$$
p_{X_1, \dots, X_n} (x_1, \dots, x_n) = \Pr (X_1 = x_1, \dots, X_n = x_n)
$$
It could be written in terms of conditional probabilities with the chain rule property

$$
 {
\begin{aligned}
p_{X_{1},\ldots ,X_{n}}(x_{1},\ldots ,x_{n})&=\mathrm {\Pr} (X_{1}=x_{1})\cdot \mathrm {\Pr} (X_{2}=x_{2}\mid X_{1}=x_{1})\\
&\cdot \mathrm {\Pr} (X_{3}=x_{3}\mid X_{1}=x_{1},X_{2}=x_{2})\\
&\dots\\
&\cdot \Pr(X_{n}=x_{n}\mid X_{1}=x_{1},X_{2}=x_{2},\dots ,X_{n-1}=x_{n-1})
\end{aligned}}
$$

# Chain rule
The chain rule of probabilities can be described by the following example
$$
{\begin{aligned}
\mathrm {Pr} (X_{4},X_{3},X_{2},X_{1})&=\mathrm {Pr} (X_{4}\mid X_{3},X_{2},X_{1})\cdot \mathrm {Pr} (X_{3},X_{2},X_{1})\\&=\mathrm {Pr} (X_{4}\mid X_{3},X_{2},X_{1})\cdot \mathrm {Pr} (X_{3}\mid X_{2},X_{1})\cdot \mathrm {Pr} (X_{2},X_{1})\\&=\mathrm {Pr} (X_{4}\mid X_{3},X_{2},X_{1})\cdot \mathrm {Pr} (X_{3}\mid X_{2},X_{1})\cdot \mathrm {Pr} (X_{2}\mid X_{1})\cdot \mathrm {Pr} (X_{1})
\end{aligned}}
$$

# Expectation
Expectation is the expected value a distribution takes on, the most common outcome.

## Discrete
$$
E[X] = \sum_x x \Pr (X = x)
$$

## Continuous
$$
E[X] = \int_x x \Pr (X = x) dx
$$

## Conditional discrete
$$
E[X \mid Y = y] = \sum_x x \Pr (X = x \mid y)
$$

## Conditional continuous
$$
E[X \mid Y = y] = \int_x x \Pr (X = x \mid y) dx
$$

## Total law of expectation discrete
$$
E[X] = \sum_y E[X \mid Y = y] \Pr(X = x)
$$

## Total law of expectation continuous
$$
E[X] = \int_y E[X \mid Y = y] \Pr(X = x) dy
$$

In both the discrete and the continuous case they could be written as

$$
E[X] = E[E[X \mid Y]]
$$


# Variance

Variance is defined as
$$
\text{Var} (X) = E[X^2] - E[X]^2
$$

## Total law of variance
$$
\text{Var} (X) = E[\text{Var} (X \mid Y) ] + \text{Var} (E[X \mid Y])
$$


# Covariance
Covariance is defined as

$$
 \begin{aligned}\operatorname {cov} (X,Y)&=\operatorname {E} \left[\left(X-\operatorname {E} \left[X\right]\right)\left(Y-\operatorname {E} \left[Y\right]\right)\right]\\&=\operatorname {E} \left[XY-X\operatorname {E} \left[Y\right]-\operatorname {E} \left[X\right]Y+\operatorname {E} \left[X\right]\operatorname {E} \left[Y\right]\right]\\&=\operatorname {E} \left[XY\right]-\operatorname {E} \left[X\right]\operatorname {E} \left[Y\right]-\operatorname {E} \left[X\right]\operatorname {E} \left[Y\right]+\operatorname {E} \left[X\right]\operatorname {E} \left[Y\right]\\&=\operatorname {E} \left[XY\right]-\operatorname {E} \left[X\right]\operatorname {E} \left[Y\right],\end{aligned}
$$

However this is susceptible to catastrophic cancellation @{catastrophic}, which means that subtracting good approximations of two nearby numbers may yield a bad approximation to the difference of the original numbers.


# Correlation
Correlation is defined as

$$
 \rho _{X,Y}=\operatorname {corr} (X,Y)={\operatorname {cov} (X,Y) \over \sigma _{X}\sigma _{Y}}={\operatorname {E} [(X-\mu _{X})(Y-\mu _{Y})] \over \sigma _{X}\sigma _{Y}}
$$

where $ \mu_X = E[X] $, $ \mu_Y = E[Y] $, $ \sigma_X$ and $ \sigma_Y $ represents the standard deviation.


# Order statistics
The kth order statistic of a statistical sample is equal to its kth-smallest value.


# Hoeffding inequality
https://en.wikipedia.org/wiki/Hoeffding%27s_inequality

Hoeffding inequality states an upper bound on the probability that the sum


$$
{\displaystyle {\begin{aligned}\operatorname {P} \left(S_{n}-\mathrm {E} \left[S_{n}\right]\geq t\right)&\leq \exp \left(-{\frac {2t^{2}}{\sum _{i=1}^{n}(b_{i}-a_{i})^{2}}}\right)\\\operatorname {P} \left(\left|S_{n}-\mathrm {E} \left[S_{n}\right]\right|\geq t\right)&\leq 2\exp \left(-{\frac {2t^{2}}{\sum _{i=1}^{n}(b_{i}-a_{i})^{2}}}\right)\end{aligned}}}
$$

# Boole's inequality
Boole's inequality is also known as the **union bound**. It states that for any finite set of events the probability that at least one of the events happens is no greater than the sum of the probabilities of the individual events.

$$
 {\mathbb {P} }\left(\bigcup _{i=1}^{\infty }A_{i}\right)\leq \sum _{i=1}^{\infty }{\mathbb {P} }(A_{i}).

$$

# References
{bernoulli}:
    title: Bernoulli process
    url: https://en.wikipedia.org/wiki/Bernoulli_process

{catastrophic}:
    title: Catastrophic cancellation
    url: https://en.wikipedia.org/wiki/Catastrophic_cancellation
