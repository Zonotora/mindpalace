---
slug: /math/nonlinear-optimization
tags: []
lastModified: 2021-09-03
created: 2021-09-01
title: Nonlinear Optimization
header: [{"depth":1,"name":"General optimization problem definition","link":"General-optimization-problem-definition"},{"depth":1,"name":"Classification","link":"Classification"},{"depth":2,"name":"Linear programming (LP)","link":"Linear-programming-(LP)"},{"depth":2,"name":"Nonlinear programming (NLP)","link":"Nonlinear-programming-(NLP)"},{"depth":2,"name":"Unconstrained optimization","link":"Unconstrained-optimization"},{"depth":2,"name":"Constrained optimization","link":"Constrained-optimization"},{"depth":2,"name":"Integer programming (IP)","link":"Integer-programming-(IP)"},{"depth":2,"name":"Convex programming (CP)","link":"Convex-programming-(CP)"},{"depth":1,"name":"Modeling","link":"Modeling"},{"depth":2,"name":"Formulating the problem","link":"Formulating-the-problem"},{"depth":1,"name":"Convexity","link":"Convexity"},{"depth":2,"name":"Convex set","link":"Convex-set"},{"depth":2,"name":"Affine hull","link":"Affine-hull"},{"depth":2,"name":"Convex hull","link":"Convex-hull"},{"depth":2,"name":"Polytype","link":"Polytype"},{"depth":2,"name":"Polyhedron","link":"Polyhedron"},{"depth":2,"name":"Half space","link":"Half-space"},{"depth":2,"name":"Convex function","link":"Convex-function"}]
---

# General optimization problem definition
$$
\boxed{
    \begin{aligned}
    \qquad\underset{\bold x \in S}{\text{minimize}} \qquad & f(\bold x),  \\
    \text{subject to} \qquad & g_i(\bold x) \leq 0, \qquad i \in \mathcal{I} \qquad \\
    & g_i(\bold x) = 0, \qquad i \in \mathcal{E} \\
    & \bold x \in \Chi
    \end{aligned}
}
$$

# Classification

## Linear programming (LP)
- Linear objective function $ f(\bold x) =  \bold c^\intercal \bold x = \sum_{j=1}^n c_j x_j $
- Affine constraint functions $ g_i(\bold x) = \bold a_i^ \intercal \bold x - b_i, i \in \mathcal{I} \cup \mathcal{E} $
- Ground set $ \Chi \sub \R^n $ defined by affine equalities or inequalities.

## Nonlinear programming (NLP)
- Some functions $ f, g_i, i \in \mathcal{I} \cup \mathcal{E}   $ are nonlinear.

## Unconstrained optimization
- $ \mathcal{I} \cup \mathcal{E} = \empty $
- $ \Chi = \R^n $

## Constrained optimization
- $ \mathcal{I} \cup \mathcal{E} \not = \empty $
- $ \Chi \sub \R^n $

## Integer programming (IP)
- $ \Chi \sub \Z^n $ or $ \Chi \sube \{0,1\}^n $

## Convex programming (CP)
- $ f, g_i, i \in \mathcal{I} $ are convex functions
- $ g_i, i \in \mathcal{E} $ are affine
- $ \Chi $ is closed and convex

# Modeling

## Formulating the problem
1. Define what **sets** the problem requires
2. Acknowledge what **parameters** the problem has and to what set it belongs to
3. What type of **descision variables** is suitable for the problem


# Convexity

## Convex set

A set $ S \sube \R^n $ is convex if
$$
\bold x_1, \bold x_2 \in S, \lambda \in (0,1) \implies \lambda \bold x_1 + (1 - \lambda) \bold x_2 \in S
$$

## Affine hull
The affine hull of a finite set $ V = \{\bold v^1, \bold v^2, \dots, \bold v^k\} $ is defined as
$$
\text{aff}\, V := \bigg \{ \lambda_1 \bold v^1 + \cdots + \lambda_k \bold v^k \bigg | \lambda_1, \dots, \lambda_k \in \R, \sum_{i=1}^{k} \lambda_i = 1 \bigg \}
$$
## Convex hull
The convex hull of a finite set $ V = \{\bold v^1, \bold v^2, \dots, \bold v^k\} $ is defined as
$$
\text{conv}\, V := \bigg \{ \lambda_1 \bold v^1 + \cdots + \lambda_k \bold v^k \bigg | \lambda_1, \dots, \lambda_k \geq 0, \sum_{i=1}^{k} \lambda_i = 1 \bigg \}
$$

## Polytype

A set $ P \sub \R^n $ is a **polytype** if it is the convex hull of finitely many points in $ \R^n $.

## Polyhedron
A set $ P \sub \R^n $ is a **polyhedron** if there exists a matrix $ A \in \R^{m \times n} $ and a vector $ \bold b \in \R^m $ such that
$$
P = \{\bold x \in \R^n | \bold A \bold x \leq \bold b\}
$$

The set $ P $ is the intersection of $ m $ half-spaces. Polyhedrons may be unbounded.

## Half space
A **half space** is the set the cuts the space in two parts
$$
\{ \bold x \in \R^n | a_i \bold x \leq b_i \}
$$


## Convex function
Suppose that $ S \sube \R^n $ is a convex set, then a function $ f: \R^n \to \R $ is convex on $ S $ if
$$
\bold x^1, \bold x^2 \in S, \lambda \in (0,1) \implies f(\lambda \bold x^1 + (1 - \lambda) \bold x^2) \leq \lambda f(\bold x^1) + (1 - \lambda) f(\bold x^2)
$$

- A function is **strictly convex** if the inequality is strict.
- A function $ f $ is **concave** if $ -f $ is convex.

Note that linear functions are both convex and concave.