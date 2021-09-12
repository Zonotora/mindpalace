---
slug: /math/nonlinear-optimization
tags: []
lastModified: 2021-09-12
created: 2021-09-01
title: Nonlinear Optimization
header: [{"depth":1,"name":"General optimization problem definition","link":"General-optimization-problem-definition"},{"depth":1,"name":"Classification","link":"Classification"},{"depth":2,"name":"Linear programming (LP)","link":"Linear-programming-(LP)"},{"depth":2,"name":"Nonlinear programming (NLP)","link":"Nonlinear-programming-(NLP)"},{"depth":2,"name":"Unconstrained optimization","link":"Unconstrained-optimization"},{"depth":2,"name":"Constrained optimization","link":"Constrained-optimization"},{"depth":2,"name":"Integer programming (IP)","link":"Integer-programming-(IP)"},{"depth":2,"name":"Convex programming (CP)","link":"Convex-programming-(CP)"},{"depth":1,"name":"Modeling","link":"Modeling"},{"depth":2,"name":"Formulating the problem","link":"Formulating-the-problem"},{"depth":1,"name":"Convexity","link":"Convexity"},{"depth":2,"name":"Convex set","link":"Convex-set"},{"depth":2,"name":"Affine hull","link":"Affine-hull"},{"depth":2,"name":"Convex hull","link":"Convex-hull"},{"depth":2,"name":"Affine combination","link":"Affine-combination"},{"depth":2,"name":"Convex combination","link":"Convex-combination"},{"depth":2,"name":"Polytype","link":"Polytype"},{"depth":2,"name":"Polyhedron","link":"Polyhedron"},{"depth":2,"name":"Cone","link":"Cone"},{"depth":2,"name":"Polyhedral cone","link":"Polyhedral-cone"},{"depth":2,"name":"Half space","link":"Half-space"},{"depth":2,"name":"Convex function","link":"Convex-function"},{"depth":2,"name":"Carathéodory's Theorem","link":"Carathéodory's-Theorem"},{"depth":2,"name":"Representation Theorem","link":"Representation-Theorem"},{"depth":2,"name":"Farkas' Lemma","link":"Farkas'-Lemma"},{"depth":1,"name":"Existence of optimal solutions","link":"Existence-of-optimal-solutions"},{"depth":2,"name":"Notation","link":"Notation"},{"depth":2,"name":"Definition","link":"Definition"},{"depth":3,"name":"Weakly coercive function","link":"Weakly-coercive-function"},{"depth":3,"name":"Lower semi-continuity","link":"Lower-semi-continuity"},{"depth":3,"name":"Feasible direction","link":"Feasible-direction"},{"depth":3,"name":"Descent direction","link":"Descent-direction"},{"depth":3,"name":"Normal cone","link":"Normal-cone"},{"depth":2,"name":"Weierstrass' Theorem","link":"Weierstrass'-Theorem"},{"depth":2,"name":"Optimality conditions (S equal R^n)","link":"Optimality-conditions-(S-equal-R^n)"},{"depth":3,"name":"Necessary condition for optimality 1","link":"Necessary-condition-for-optimality-1"},{"depth":3,"name":"Necessary condition for optimality 2","link":"Necessary-condition-for-optimality-2"},{"depth":3,"name":"Sufficient condition for optimality 2","link":"Sufficient-condition-for-optimality-2"},{"depth":3,"name":"Necessary and sufficient condition for optimality 1","link":"Necessary-and-sufficient-condition-for-optimality-1"},{"depth":2,"name":"Optimality conditions (S sub R^n)","link":"Optimality-conditions-(S-sub-R^n)"},{"depth":3,"name":"Necessary condition for optimality 1","link":"Necessary-condition-for-optimality-1"},{"depth":3,"name":"Neecssary and sufficient conditions for optimality 1","link":"Neecssary-and-sufficient-conditions-for-optimality-1"},{"depth":2,"name":"Stationary point in optimality condition","link":"Stationary-point-in-optimality-condition"}]
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
- Linear objective function $ f(\bold x) =  \bold c^\mathsf{T} \bold x = \sum_{j=1}^n c_j x_j $
- Affine constraint functions $ g_i(\bold x) = \bold a_i^ \mathsf{T} \bold x - b_i, i \in \mathcal{I} \cup \mathcal{E} $
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

## Affine combination
An affine combination of the points $ \{\bold v_1, \dots, \bold v_n\} $ is a vector satisfying
$$
\bold v = \sum_{i=1}^{n} \lambda_i \bold v_i
$$
where $ \sum_{i=1}^{n} \lambda_i = 1 $

## Convex combination
A convex combination of the points $ \{\bold v_1, \dots, \bold v_n\} $ is a vector satisfying
$$
\bold v = \sum_{i=1}^{n} \lambda_i \bold v_i
$$
where $ \sum_{i=1}^{n} \lambda_i = 1 $ and $ \lambda_i \geq 0 $ for every $ i = 1, \dots, n $


## Polytype

A set $ P \sub \R^n $ is a **polytype** if it is the convex hull of finitely many points in $ \R^n $.

## Polyhedron
A set $ P \sub \R^n $ is a **polyhedron** if there exists a matrix $ A \in \R^{m \times n} $ and a vector $ \bold b \in \R^m $ such that
$$
P = \{\bold x \in \R^n | \bold A \bold x \leq \bold b\}
$$

The set $ P $ is the intersection of $ m $ half-spaces. Polyhedrons may be unbounded.

## Cone
A set $ C \sube \R^n $ is a **cone** if $ \lambda \bold x \in C $ whenever $ \bold x \in C $ and $ \lambda > 0 $.

## Polyhedral cone
The set $ \{\bold x \in \R^n | \bold A \bold x \leq \bold 0^m\} $ where $ \bold A \in \R^{m \times n} $ is a cone but also a polyhedron, which is why it is usually called a **polyhedral cone**.

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

## Carathéodory's Theorem
Let $ \bold x \in \text{conv}\, V $ where $  V \sube \R^n $. Then $ \bold x $ can be expressed as a convex combination of $ n + 1 $ or fewer points of $ V $.

## Representation Theorem
The Representation Theorem states that every polyhedron that has at least one extreme point is the sum of a polytope and a polyhedral cone.

## Farkas' Lemma
Let $ \bold A \in \R^{m \times n} $ and $ \bold b \in \R^m $. Then exactly one of the systems has a feasible solution
$$
\bold A \bold x \leq \bold b
$$
and
$$
\begin{aligned}
\bold A^\mathsf{T} \bold \pi &= \bold 0^n \\
\bold b^\mathsf{T} \bold \pi &< 0 \\
\bold \pi &> \bold 0^m
\end{aligned}
$$
and the other one is inconsistent.


# Existence of optimal solutions


## Notation
- We say that a set $ S \sube \R^n $ is **open** if for every $ x \in S $ there exists an $ \epsilon > 0 $ such that $ B_\epsilon (\bold x) := \{\bold y \in \R^n |\, \|\bold y - \bold x \| < \epsilon \} \sub S $.
- A set $ S \sube \R^n $ is **closed** if $ \R^n \backslash S $ is open.
- A **limit point** of a set $ S \sube \R^n$ is a point $ \bold x $ such that there exists a sequence $ \{\bold x_k\}_{k=1}^\infin \sub S $ fulfilling $ \bold x_k \to \bold x $.
- We can then define a closed set as a set which contains all its limit points.
- We say that a set $ S \sube \R^n $ is **bounded** if there exists a constant $ C > 0 $ such that $ \| \bold x \| \leq C $ for all $ \bold x \in S $.
- If a set is both closed and bounded, we call it **compact**.


## Definition

### Weakly coercive function

A function $ f $ is said to be **weakly coercive** with respect to the set $ S $ if either $ S $ is bounded or
$$
\underset{\substack{\| \bold x \| \to \infin \\ \bold x \in S}}{\text{lim}} f(\bold x) = \infin
$$

### Lower semi-continuity
A function $ f $ is said to be **lower semi-continuous** at $ \bold x $ if the value $ f(\bold x) $ is less than or equal to every limit of $ f $ as $ \bold x_k \to \bold x $

$$
\bold x_k \to \bold x \implies f(\bold x) \leq \underset{k \to \infin}{\text{lim inf}} \, f(\bold x_k)
$$

### Feasible direction
Let $ \bold x \in S $. A vector $ \bold p \in \R^n $ defines a **feasible direction** at $ \bold x $ if
$$
\exist \delta > 0: \qquad \bold x + \alpha \bold p \in S, \qquad \forall \alpha \in [0, \delta].
$$

The feasible direction is therefore a direction at a point where we can move without becoming infeasible.

### Descent direction
Let $ \bold x \in \R^n $. A vector $ \bold p \in \R^n $ defines a **descent direction** with respect to $ f $ at $ \bold x $ if
$$
\exist \delta > 0: \qquad f(\bold x + \alpha \bold p) < f(\bold x), \qquad \forall \alpha \in (0, \delta].
$$

### Normal cone
Suppose the set $ S $ is closed and convex. Let $ \bold x \in S $. Then the **normal cone** to $ S $ at $ \bold x $ is the set
$$
N_s(\bold x):= \{\bold p \in \R^n \, | \, \bold p^\mathsf{T} (\bold y - \bold x) \leq 0, \, \bold y \in S\}
$$


## Weierstrass' Theorem
Consider the problem where $ S $ is a nonempty and closed set and $ f $ is lower semi-continuous on $ S $. If $ f $ is weakly coercive with respect to $ S $, then there exists a nonempty, closed and bounded (compact) set of optimal solutions to the problem.

## Optimality conditions (S equal R^n)
When $ S = \R^n $ (unconstrained optimization problem), the following theorem holds

### Necessary condition for optimality 1
If $ f \in C^1 $ on $ \R^n $ then
$$
\bold x^* \, \text{is a local minimum of} \, f \, \text{on} \, \R^n \implies \nabla f(\bold x^*) = \bold 0
$$



### Necessary condition for optimality 2
If $ f \in C^2 $ on $ \R^n $ then
$$
\bold x^* \, \text{is a local minimum of} \, f \, \text{on} \, \R^n \implies
\begin{cases}
\nabla f(\bold x^*) = \bold 0 \\
\nabla^2 f(\bold x^*) \geq 0
\end{cases}
$$

### Sufficient condition for optimality 2
If $ f \in C^2 $ on $ \R^n $ then
$$
\begin{cases}
\nabla f(\bold x^*) = \bold 0 \\
\nabla^2 f(\bold x^*) > 0
\end{cases}
\implies \bold x^* \, \text{is a strict local minimum of} \, f \, \text{on} \, \R^n
$$


### Necessary and sufficient condition for optimality 1
If $ f \in C^1 $ is convex on $ \R^n $ then
$$
\bold x^* \, \text{is a global minimum of} \, f \, \text{on} \, \R^n
\iff
\nabla f(\bold x^*) = \bold 0
$$

## Optimality conditions (S sub R^n)

### Necessary condition for optimality 1
Suppose that $ S \sube \R^n $ and that $ f \in C^1 $ on $ S $.

a) If $ \bold x^* \in S $ is a local minimum of $ f $ over $ S $ then
$$
\nabla f(\bold x^*)^\mathsf{T} \bold p \geq 0
$$
holds for all feasible directions $ \bold p $ at $ \bold x^* $.

b) Suppose that $ S $ is convex. If $ \bold x^* $ is a local minimum of $ f $ over $ S $ then
$$
\nabla f(\bold x^*)^\mathsf{T} (\bold x - \bold x^*) \geq 0, \qquad \bold x \in S
$$

### Neecssary and sufficient conditions for optimality 1
Suppose that $ S \sube \R^n $ is a convex nonempty set and that $ f \in C^1 $ is a convex function on $ S $ then
$$
\bold x^* \, \text{is a global minimum of} \, f \, \text{over} \, S
\iff
\nabla f(\bold x^*)^\mathsf{T} (\bold x - \bold x^*) \geq 0, \qquad \bold x \in S
$$

When $ S = \R^n $ the expression can be reduced to $ \nabla f(\bold x^*) = \bold 0 $, because then we don't need to worry about boundary points.

## Stationary point in optimality condition
If $ S $ is convex and $ f \in C^1 $ a point $ \bold x \in S $ fulfilling the four equivalent statements a)-d) are called a **stationary point**.

a)
$$
\nabla f(\bold x^*)^\mathsf{T} (\bold x - \bold x^*) \geq 0, \qquad \bold x \in S
$$

b)
$$
\underset{\bold x \in S}{\text{min}} \nabla f(\bold x^*)^\mathsf{T} (\bold x - \bold x^*) = 0
$$

c)
$$
\bold x^* = \text{Proj}_S [\bold x^* - \nabla f(\bold x^*)]
$$

d)
$$
-\nabla f(\bold x^*) \in N_S(\bold x^*)
$$

where $ \text{Proj}_S $ is the projection onto the set $ S $, and $ N_s $ is the normal cone.