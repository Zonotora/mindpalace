---
slug: /math/bayesian-inference
tags: []
lastModified: 2021-12-30
created: 2021-12-30
title: Bayesian Inference
header: [{"depth":1,"name":"Notation","link":"Notation"},{"depth":1,"name":"Bayesian inference","link":"Bayesian-inference"},{"depth":2,"name":"Prior","link":"Prior"},{"depth":2,"name":"Posterior","link":"Posterior"},{"depth":2,"name":"Likelihood","link":"Likelihood"},{"depth":2,"name":"Marginal likelihood","link":"Marginal-likelihood"},{"depth":2,"name":"Prior predictive","link":"Prior-predictive"},{"depth":2,"name":"Posterior predictive","link":"Posterior-predictive"},{"depth":2,"name":"Conjugacy","link":"Conjugacy"}]
---

# Notation

# Bayesian inference
Given Bayes formula
$$
\pi(\theta\mid y)=\frac {\pi(y\mid \theta)\pi(\theta)}{\pi(y)}=\frac {\pi(y\mid \theta)\pi(\theta)}{\int_\theta \pi(y\mid \theta)\pi(\theta) d\theta}
$$
we we define four different names representing each term: **prior**, **posterior**, **likelihood** and **marginal likelihood**.

## Prior
$$
\pi (\theta)
$$
The prior distribution represents our knowledge about our uncertain quantity (parameters) **before** some evidence is taken into account.

## Posterior
$$
\pi (\theta \mid y)
$$
The posterior distribution represents our knowledge about our uncertain quantity (parameters) **after** some evidence is taken into account.

## Likelihood
$$
\pi (y \mid \theta)
$$
The likelihood distribution describes how likely the data is given some uncertain quantity (parameter). It is a function of the parameters of the chosen statistical model, given by our prior, that describes the data we are interested in.

## Marginal likelihood
$$
\pi (y)
$$
The marginal likelihood may be referred to as the evidence.
We can see that we get this distribution by marginalizing out theta from $ \pi (y, \theta) $ — integrating out theta. Thus we can write
$$
\pi(y) = \int_\theta \pi (y, \theta) d\theta = \int_\theta \pi(y\mid \theta)\pi(\theta) d\theta
$$
In the case we have updated our prior with our posterior the formula is turned into
$$
\pi(y) = \int_\theta \pi(y\mid \theta)\pi(\theta \mid \bold y) d\theta
$$
where $ \bold y $ represents the old data and $ y $ the data we want to predict.

The marginal likelihood is generally difficult to compute, except for a small number of distributions that have the relation conjugate prior. When this is not the case, we could use some kind of numerical integration, discretization and Monte Carlo method among others.


## Prior predictive
The prior predictive density is the marginal likelihood using the prior
$$
\pi(y) = \int_\theta \pi (y, \theta) d\theta = \int_\theta \pi(y\mid \theta)\pi(\theta) d\theta
$$

## Posterior predictive
The posterior predictive density is the marginal likelihood using the posterior
$$
\pi(y \mid \bold y) = \int_\theta \pi(y\mid \theta)\pi(\theta \mid \bold y) d\theta
$$

Both the prior predictive and the posterior predictive has a simple closed form if we have a conjugacy.

## Conjugacy
If the posterior and the prior is of the same probability distribution family we say that we have a conjugacy and the prior and posterior distributions are called conjugate distributions. The prior is called a conjugate prior for the likelihood function.

Some of the most common conjugacies:
- Beta-Binomial
- Exponential-Gamma
- Multinomial-Dirichlet
- Poisson-Gamma
- Normal-Gamma
- Normal-Normal



