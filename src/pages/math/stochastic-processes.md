---
slug: /math/stochastic-processes
tags: []
lastModified: 2021-12-30
created: 2021-11-04
title: Stochastic Processes
header: [{"depth":1,"name":"Markov chains","link":"Markov-chains"},{"depth":2,"name":"Stationary distribution","link":"Stationary-distribution"},{"depth":2,"name":"Limiting distribution","link":"Limiting-distribution"}]
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

