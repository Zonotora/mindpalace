---
slug: /math/nonlinear-optimization
tags: []
lastModified: 2021-09-01
created: 2021-09-01
title: Nonlinear Optimization
header: [{"depth":1,"name":"General optimization problem definition","link":"General-optimization-problem-definition"},{"depth":1,"name":"Classification","link":"Classification"},{"depth":2,"name":"Linear programming (LP)","link":"Linear-programming-(LP)"},{"depth":2,"name":"Nonlinear programming (NLP)","link":"Nonlinear-programming-(NLP)"},{"depth":2,"name":"Unconstrained optimization","link":"Unconstrained-optimization"},{"depth":2,"name":"Constrained optimization","link":"Constrained-optimization"},{"depth":2,"name":"Integer programming (IP)","link":"Integer-programming-(IP)"},{"depth":2,"name":"Convex programming (CP)","link":"Convex-programming-(CP)"},{"depth":1,"name":"Modeling","link":"Modeling"},{"depth":2,"name":"Formulating the problem","link":"Formulating-the-problem"}]
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