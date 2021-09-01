---
slug: /math/nonlinear-optimization
tags: []
lastModified: 2021-09-01
created: 2021-09-01
title: Nonlinear Optimization
header: []
---

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