---
slug: /machine-learning/optimization
tags: ["machine-learning"]
lastModified: 2021-04-19
created: 2021-04-19
title: Optimization
header: [{"depth":1,"name":"Optimization problems","link":"Optimization-problems"},{"depth":2,"name":"Unconstrained optimization","link":"Unconstrained-optimization"},{"depth":2,"name":"Constrained optimization","link":"Constrained-optimization"},{"depth":2,"name":"Gradient decent","link":"Gradient-decent"},{"depth":2,"name":"Stochastic gradient descent","link":"Stochastic-gradient-descent"}]
---

# Optimization problems
There are two main types of problems
- unconstrained optimization
- constrained optimization

In machine learning many of the problems are of the first type.

## Unconstrained optimization

In unconstrained optimization we try to find the $ x $ that gives us the minimal or maximal value for some function $ f $ like

$$
\min_{x} f(x)
$$

## Constrained optimization

In constrained optimization we try to find the $ x $ that gives us the minimal or maximal value for some function $ f $ where $ x $ needs to satisfy some additional conditions like

$$
\min_{x} f(x) \qquad x \geq 0
$$

## Gradient decent
The idea of gradient decent is that we should take a small step in the direction opposite of the gradient and repeat until the gradient is close to zero. We need to walk in the opposite direction because the gradient will give us the direction of the steepest ascent.

The algorithm could be explained in the following pseudocode
1. set $ x $ to some intial value and select a learning rate $ \eta $
2. compute the gradient $ \nabla f(x) $
3. if $ \nabla f(x) $ is close to zero, terminate
4. else subract the learning rate $ \eta \cdot \nabla f(x) $ from $ x $ and go back to step 2.

We will always reach a minimum or maximum if
- there is a top
- the steps are short enough

There are smarter versions of gradient as well that try to adapt its step size depending on how fast it is going or for have many steps it has already taken. One simple solution which is smarter than the ordinary gradient decent is to start fast with gradually slower steps.

Gradient decent will not make sure that we find the global minimum/maximum but make sure we reach a minimum/maximum global or local if there exists one.

## Stochastic gradient descent
Because the gradient depend on every instance in the training set it can be quite expensive to calculate. Thus, a simplified version that onlu computes parts of the training set are used in practice called stochastic gradient descent.

The algorithm could be explained in the following pseudocode
1. set $ w $ to some intial value and select a learning rate $ \eta $
2. select a single training sample $ x $
3. compute the gradient $ \nabla f(w) $ using $ x $
4. if $ \nabla f(w) $ is "done"
5. else subract the learning rate $ \eta \cdot \nabla f(w) $ from $ w $ and go back to step 2.

Point four above gives rise to some questions, namely what does "done" mean. In gradient descent we stop the iteration process when the gradient is close to zero. In stochastic gradient descent, close to zero does not mean the same thing because we are looking at a small sample of instances which very well could be zero unlike the whole training set. There are a few solutions to this, namely have a fixed number of iterations, stop when we have not seen any improvements for some time, or evaluate the model on some set which determines if we should terminate (early stopping)
