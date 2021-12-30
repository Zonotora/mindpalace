---
slug: /math/probability-theory
tags: []
lastModified: 2021-12-30
created: 2021-12-30
title: Probability Theory
header: [{"depth":1,"name":"Random variable","link":"Random-variable"},{"depth":1,"name":"Stochastic process","link":"Stochastic-process"},{"depth":1,"name":"Statistical inference","link":"Statistical-inference"},{"depth":2,"name":"Classical inference","link":"Classical-inference"},{"depth":2,"name":"Bayesian inference","link":"Bayesian-inference"},{"depth":1,"name":"Kolmogorov axioms","link":"Kolmogorov-axioms"},{"depth":2,"name":"First axiom","link":"First-axiom"},{"depth":2,"name":"Second axiom","link":"Second-axiom"},{"depth":2,"name":"Third axiom","link":"Third-axiom"},{"depth":1,"name":"Conditional probability","link":"Conditional-probability"},{"depth":1,"name":"Independent events","link":"Independent-events"},{"depth":1,"name":"Total law of probability","link":"Total-law-of-probability"},{"depth":1,"name":"Joint distributions","link":"Joint-distributions"},{"depth":1,"name":"References","link":"References"}]
---


# Random variable
A random variable is a variable whose outcome depends on a random event. In probability theory a random variable is understood as a measurable function defined on the @(probability space)(probability-space). A random variable maps from the sample space to any measurable space with some probability.

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


# References
{bernoulli}:
    title: Bernoulli process
    url: https://en.wikipedia.org/wiki/Bernoulli_process