---
slug: /math/nonlinear-optimization
tags: []
lastModified: 2021-11-03
created: 2021-09-01
title: Nonlinear Optimization
header: [{"depth":1,"name":"General optimization problem definition","link":"General-optimization-problem-definition"},{"depth":1,"name":"Classification","link":"Classification"},{"depth":2,"name":"Linear programming (LP)","link":"Linear-programming-(LP)"},{"depth":2,"name":"Nonlinear programming (NLP)","link":"Nonlinear-programming-(NLP)"},{"depth":2,"name":"Unconstrained optimization","link":"Unconstrained-optimization"},{"depth":2,"name":"Constrained optimization","link":"Constrained-optimization"},{"depth":2,"name":"Integer programming (IP)","link":"Integer-programming-(IP)"},{"depth":2,"name":"Convex programming (CP)","link":"Convex-programming-(CP)"},{"depth":1,"name":"Modeling","link":"Modeling"},{"depth":2,"name":"Formulating the problem","link":"Formulating-the-problem"},{"depth":1,"name":"Convexity","link":"Convexity"},{"depth":2,"name":"Convex set","link":"Convex-set"},{"depth":2,"name":"Affine hull","link":"Affine-hull"},{"depth":2,"name":"Convex hull","link":"Convex-hull"},{"depth":2,"name":"Affine combination","link":"Affine-combination"},{"depth":2,"name":"Convex combination","link":"Convex-combination"},{"depth":2,"name":"Polytype","link":"Polytype"},{"depth":2,"name":"Polyhedron","link":"Polyhedron"},{"depth":2,"name":"Cone","link":"Cone"},{"depth":2,"name":"Polyhedral cone","link":"Polyhedral-cone"},{"depth":2,"name":"Half space","link":"Half-space"},{"depth":2,"name":"Convex function","link":"Convex-function"},{"depth":2,"name":"Carathéodory's Theorem","link":"Carathéodory's-Theorem"},{"depth":2,"name":"Representation Theorem","link":"Representation-Theorem"},{"depth":2,"name":"Farkas' Lemma","link":"Farkas'-Lemma"},{"depth":1,"name":"Existence of optimal solutions","link":"Existence-of-optimal-solutions"},{"depth":2,"name":"Notation","link":"Notation"},{"depth":2,"name":"Definition","link":"Definition"},{"depth":3,"name":"Weakly coercive function","link":"Weakly-coercive-function"},{"depth":3,"name":"Lower semi-continuity","link":"Lower-semi-continuity"},{"depth":3,"name":"Feasible direction","link":"Feasible-direction"},{"depth":3,"name":"Descent direction","link":"Descent-direction"},{"depth":3,"name":"Normal cone","link":"Normal-cone"},{"depth":2,"name":"Weierstrass' Theorem","link":"Weierstrass'-Theorem"},{"depth":2,"name":"Optimality conditions (S equal R^n)","link":"Optimality-conditions-(S-equal-R^n)"},{"depth":3,"name":"Necessary condition for optimality 1","link":"Necessary-condition-for-optimality-1"},{"depth":3,"name":"Necessary condition for optimality 2","link":"Necessary-condition-for-optimality-2"},{"depth":3,"name":"Sufficient condition for optimality 2","link":"Sufficient-condition-for-optimality-2"},{"depth":3,"name":"Necessary and sufficient condition for optimality 1","link":"Necessary-and-sufficient-condition-for-optimality-1"},{"depth":2,"name":"Optimality conditions (S sub R^n)","link":"Optimality-conditions-(S-sub-R^n)"},{"depth":3,"name":"Necessary condition for optimality 1","link":"Necessary-condition-for-optimality-1"},{"depth":3,"name":"Neecssary and sufficient conditions for optimality 1","link":"Neecssary-and-sufficient-conditions-for-optimality-1"},{"depth":2,"name":"Stationary point in optimality condition","link":"Stationary-point-in-optimality-condition"},{"depth":1,"name":"Unconstrained optimization","link":"Unconstrained-optimization"},{"depth":2,"name":"Steepest descent direction","link":"Steepest-descent-direction"},{"depth":2,"name":"Newton's search direction","link":"Newton's-search-direction"},{"depth":2,"name":"Lewenberg-Marquardt","link":"Lewenberg-Marquardt"},{"depth":2,"name":"Exact line search","link":"Exact-line-search"},{"depth":2,"name":"Newton's method","link":"Newton's-method"},{"depth":2,"name":"Armijo rule","link":"Armijo-rule"},{"depth":1,"name":"Different cone sets","link":"Different-cone-sets"},{"depth":2,"name":"Cone of feasible directions","link":"Cone-of-feasible-directions"},{"depth":2,"name":"Tangent cone","link":"Tangent-cone"},{"depth":2,"name":"Cone of descent directions","link":"Cone-of-descent-directions"},{"depth":2,"name":"Active constraints","link":"Active-constraints"},{"depth":2,"name":"Inner gradient cone","link":"Inner-gradient-cone"},{"depth":2,"name":"Gradient cone","link":"Gradient-cone"},{"depth":2,"name":"Nicely behaving set","link":"Nicely-behaving-set"},{"depth":1,"name":"Fritz John conditions","link":"Fritz-John-conditions"},{"depth":1,"name":"Constraint qualification (CQ)","link":"Constraint-qualification-(CQ)"},{"depth":2,"name":"Abadie's CQ","link":"Abadie's-CQ"},{"depth":2,"name":"Linear independence CQ (LICQ)","link":"Linear-independence-CQ-(LICQ)"},{"depth":2,"name":"Affine CQ","link":"Affine-CQ"},{"depth":2,"name":"Slater CQ","link":"Slater-CQ"},{"depth":1,"name":"Karush-Kuhn-Tucker conditions (KKT)","link":"Karush-Kuhn-Tucker-conditions-(KKT)"},{"depth":2,"name":"Sufficiency of KKT conditions","link":"Sufficiency-of-KKT-conditions"},{"depth":1,"name":"Lagrangian duality/relaxation","link":"Lagrangian-duality/relaxation"},{"depth":1,"name":"Relaxation Theorem","link":"Relaxation-Theorem"},{"depth":1,"name":"Lagrangian relaxation","link":"Lagrangian-relaxation"},{"depth":2,"name":"Lagrangian dual function","link":"Lagrangian-dual-function"},{"depth":2,"name":"Weak duality","link":"Weak-duality"},{"depth":2,"name":"Lagrangian dual problem","link":"Lagrangian-dual-problem"},{"depth":2,"name":"Lagrange multiplier","link":"Lagrange-multiplier"},{"depth":2,"name":"Strong duality","link":"Strong-duality"},{"depth":1,"name":"Linear programming (LP)","link":"Linear-programming-(LP)"},{"depth":2,"name":"Basic solution","link":"Basic-solution"},{"depth":2,"name":"Basic feasible solution (BFS)","link":"Basic-feasible-solution-(BFS)"},{"depth":2,"name":"Degenerate BFS","link":"Degenerate-BFS"},{"depth":2,"name":"Simplex method","link":"Simplex-method"},{"depth":1,"name":"LP duality","link":"LP-duality"},{"depth":2,"name":"Weak duality theorem","link":"Weak-duality-theorem"},{"depth":2,"name":"Strong duality theorem","link":"Strong-duality-theorem"},{"depth":2,"name":"Possibilities in (P) and (D)","link":"Possibilities-in-(P)-and-(D)"},{"depth":1,"name":"Perturbation","link":"Perturbation"},{"depth":1,"name":"Subgradient method","link":"Subgradient-method"},{"depth":1,"name":"Integer Linear Programming (ILP)","link":"Integer-Linear-Programming-(ILP)"},{"depth":2,"name":"Logical constraints","link":"Logical-constraints"},{"depth":2,"name":"Disjoint feasible sets","link":"Disjoint-feasible-sets"},{"depth":1,"name":"Feasible direction methods","link":"Feasible-direction-methods"},{"depth":2,"name":"Frank-Wolfe method","link":"Frank-Wolfe-method"},{"depth":2,"name":"Simplicial decomposition","link":"Simplicial-decomposition"},{"depth":2,"name":"Gradient projection algorithm","link":"Gradient-projection-algorithm"},{"depth":1,"name":"Penalty methods","link":"Penalty-methods"},{"depth":2,"name":"Exterior penalty method","link":"Exterior-penalty-method"},{"depth":2,"name":"Interior penalty method","link":"Interior-penalty-method"}]
---

# General optimization problem definition
$$
\boxed{
    \begin{aligned}
    \qquad\underset{\bold x \in S}{\text{minimize}} \qquad & f(\bold x),  \\
    \text{subject to} \qquad & g_i(\bold x) \leq 0, \qquad i \in \mathcal{I} \qquad \\
    & h_i(\bold x) = 0, \qquad i \in \mathcal{E} \\
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
\begin{aligned}
\bold A \bold x &= \bold b \\
\bold x &\geq 0
\end{aligned}

$$
and
$$
\begin{aligned}
\bold A^\mathsf{T} \bold y &\leq 0  \\
\bold b^\mathsf{T} \bold y &> 0 \\
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



# Unconstrained optimization

1. Begin by finding a descent direction. The vector $ \bold p_k $ is a descent direction if $ f(\bold x_k + \alpha \bold p_k) < f(\bold x_k) $ for all $ \alpha \in [0, \delta] $ for some $ \delta > 0 $.

## Steepest descent direction

$$
\bold p_k = - \nabla f(\bold x_k)
$$

## Newton's search direction

$$
\nabla^2 f(\bold x_k) \bold p_k = - \nabla f(\bold x_k)
$$


## Lewenberg-Marquardt

$$
[\nabla^2 f(\bold x_k) + \lambda I] \bold p_k = - \nabla f(\bold x_k)
$$

2. Then choose step length

## Exact line search

$$
\begin{aligned}
\text{min} & \qquad f(\bold x_k + \alpha \bold p_k)\\
s.t. & \qquad \alpha > 0
\end{aligned}
$$

## Newton's method

$$
\bold x_{k+1} = \bold x_k - \frac{\varphi ' (\bold x_k)}{\varphi '' (\bold x_k)}
$$

## Armijo rule

$$
f(\bold x_k + \alpha \bold p_k) \approx f(\bold x_k) + \alpha \nabla f(\bold x_k)^\mathsf{T} \bold p_k
$$
then keep decreasing $ \alpha = \alpha / 2 $ until the following holds

$$
f(\bold x_k + \alpha \bold p_k) - f(\bold x_k)  \leq  \mu \alpha \nabla f(\bold x_k)^\mathsf{T} \bold p_k
$$

3. Stop the algorithm when at least two of the following holds

$$
\begin{aligned}
|| \nabla f(\bold x_k) || & \leq \epsilon_1 (1 + f(\bold x_k)) \\
f(\bold x_{k-1}) - f(\bold x_k) & \leq \epsilon_2 (1 + f(\bold x_k)) \\
|| \bold x_{k-1} - \bold x_k || & \leq \epsilon_3 (1 + ||\bold x_k||) \\

\end{aligned}

$$


# Different cone sets

## Cone of feasible directions

$$
R_s(\bold x) = \{\bold p \in \R^n \,|\, \exists \delta > 0 , \bold x + \alpha \bold p \in S, \forall \alpha \in [0, \delta]\}
$$

## Tangent cone

$$
T_s(\bold x) = \{\bold p \in \R^n \,|\, \exists \{ \bold x_k \}_{k=0}^\infty \sub S , \{ \lambda_k \}_{k=0}^\infty \sub (0, \infty), \text{ such that } \underset{k \to \infty}{\text{lim}} \bold x_k = \bold x, \underset{k \to \infty}{\text{lim}} \lambda_k (\bold x_k - \bold x) = \bold p \}
$$

## Cone of descent directions

$$
F^o(\bold x) = \{\bold p \in \R^n \,|\, \nabla f(\bold x)^\mathsf{T} \bold p < 0\}
$$

## Active constraints

$$
I(\bold x ) = \{i \in 1,...,m \,|\, g_i(\bold x) = 0\}
$$

## Inner gradient cone

$$
G^o(\bold x) = \{\bold p \in \R^n \,|\, \nabla g_i(\bold x)^\mathsf{T} \bold p < 0, \forall i \in I(\bold x)\}
$$

## Gradient cone


$$
G(\bold x) = \{\bold p \in \R^n \,|\, \nabla g_i(\bold x)^\mathsf{T} \bold p \leq 0, \forall i \in I(\bold x)\}
$$

## Nicely behaving set

$$
G^o(\bold x) \sube R_s (\bold x) \sube T_s(\bold x) \sube G(\bold x)
$$


# Fritz John conditions

$$
x^* \, \text{local min} \implies F^o (\bold x) \cap G^o (\bold x) = \empty
$$

# Constraint qualification (CQ)

Defines some regularity over the set

## Abadie's CQ
Holds at a point $ \bold x \in S $ if $ T_s(dsd\bold x) = G(\bold x) $

## Linear independence CQ (LICQ)
We say that LICQ holds at $ \bold x $ if the gradients $ \nabla g_i (\bold x), i \in I(\bold x) $ for the active constraints are linearly independent.

## Affine CQ
We say that the Affine CQ holds if all the constraints $ g_i $ are affine.

## Slater CQ
We say that Slater's CQ holds if all $ g_i $ are convex and an inner point exists.

# Karush-Kuhn-Tucker conditions (KKT)
Assume that Abadie's CQ holds at a point $ \bold x^* $ which is feasible in (P), then

$$
x^* \, \text{local min} \implies

\begin{cases}
\nabla f(\bold x^*) + \sum_{i=1}^m \mu_i \nabla g_i (\bold x^*) &= \bold 0 \\
\mu_i g_i(\bold x^*) &= 0, i=1,...,m \\
\mu_i &\geq 0, i=1,...,m
\end{cases}
$$

## Sufficiency of KKT conditions

If the objective function $ f $ is convex and all constraint functions $ g_i $ are convex, the the following holds

$$
\bold x^* \, \text{KKT point} \implies \bold x^* \, \text{global optimum}
$$

# Lagrangian duality/relaxation

A relaxation to
$$
\begin{aligned}
\text{min} & \qquad f(\bold x) \\
s.t. & \qquad \bold x \in S
\end{aligned}
$$

is

$$
\begin{aligned}
\text{min} & \qquad f_R(\bold x) \\
s.t. & \qquad \bold x \in S_R
\end{aligned}
$$

where $ S \sube S_R $ and $ f_R(\bold x) \leq f(\bold x), \,\, \forall \bold x \in S $

# Relaxation Theorem

$$
\begin{aligned}
a)& \, f_R^* \leq f^*\\
b)& \, \text{If the relaxed problem is infeasible, the original is as well} \\
c)& \, \text{If the relaxed problem has an optimal solution } \bold x_R^* \text{ for which it holds that } \bold x_R^* \in S \text{ and } f_R^*(\bold x_R^*) = f(\bold x_R^*) \text{ then } \bold x_R^* \text{ is also optimal in the original problem.}
\end{aligned}
$$

# Lagrangian relaxation


This is the primal problem
$$
\begin{aligned}
\text{inf} \qquad & f(\bold x) \\
\text{s.t.} \qquad & g_i(\bold x) \leq 0, \qquad i=1,...,m \\
& \bold x \in X
\end{aligned}
$$

and this is the dual problem

## Lagrangian dual function

$$
\begin{aligned}
\underset{\bold x \in X}{\text{min}} \, L(\bold x, \bold \mu) = q(\bold \mu) = \text{inf} \qquad & [f(\bold x + \sum_{i=1}^m \mu_i g_i (\bold x)) ] \\
\text{s.t.} \qquad & \bold x \in X
\end{aligned}
$$

## Weak duality
For any $ \bold \mu \geq 0 $ and any feasible $ \bold x $ to the primal problem, it holds that
$$
q(\bold \mu) \leq f(\bold x)
$$

## Lagrangian dual problem

The dual function $ q $ is concave and its effective domain is convex.

$$
\boxed{
\begin{aligned}
q^* = \text{sup} \qquad & q(\bold \mu) \\
\text{s.t.} \qquad & \bold \mu \geq 0\\
\end{aligned}
}
$$

## Lagrange multiplier
$ \bold \mu^* $ is a Lagrange multiplier if $ q(\bold \mu^*) = f^*$


## Strong duality

Assume that there exists a inner pint to the primal problem, and that $ f^* \geq - \inf $, that $ f $ is a convex function, that $ g_i, \,q i=1,...,m $ are convex functions and that $ X $ is a convex set. Then the following holds

$$
q^* = f^*
$$

# Linear programming (LP)
For linear problems of the sort
$$
\begin{aligned}
\text{min} \qquad & \bold c^\mathsf{T} \bold x \\
\text{s.t.} \qquad & \bold x \in P \\
\end{aligned}
$$

we can use the Simplex method to solve for an optimal solution. We first convert to standard form:

$$
\begin{aligned}
\text{min} \qquad & \bold c^\mathsf{T} \bold x \\
\text{s.t.} \qquad & A \bold x = \bold b \\
& \bold x \geq 0
\end{aligned}
$$

where $ \bold b \geq 0 $.


## Basic solution
A point $ \bold x $ is a basic solution if $ A \bold x = \bold b $ and the columns of A corresponding to non-zero elements of $ \bold x $ are linearly independent.


## Basic feasible solution (BFS)
A point $ \bold x $ is a BFS if $ \bold x \geq 0 $, $ A \bold x = \bold b $ and the columns of A corresponding to non-zero elements in $ \bold x $ are linearly independent.

## Degenerate BFS
Consider a BFS with $ \bold x = [\bold x_B \, \bold x_N]^\mathsf{T} $. By definition $ \bold x_N = \bold 0 $ and $ \bold x_B = B^{-1} \bold b $. If some elements of $ \bold x_B $ are zero the BFS is called degenerate.

## Simplex method

Consider

$$
\begin{aligned}
\text{min} \qquad & \bold c^\mathsf{T} \bold x \\
\text{s.t.} \qquad & \bold x \in P \\
\end{aligned}
$$

Convert this problem to standard form. To find an initial BFS solve the Phase I problem. That is add as many artificial variables as you need to form the initial base vector as the identity matrix and consider minimizing the artificial variables. Use the Simplex method to move out all artificial variables from the base vector. When this is achieved we have solved the Phase I problem. If we can form the identity matrix without artificial variables go directly to the Phase II problem with this as the base. When we have an initial BFS we solve the Phase II problem, that is the original problem. For each iteration begin by determining $ \bold x_B = B^{-1} \bold b $ and $ \bold x_N = \bold 0 $, e.g. we could have $  \bold x_B = [x_1 \, x_2]^\mathsf{T} $ and $  \bold x_N = [s_1 \, s_2]^\mathsf{T} $. We also calculate $ B $ and $ N $ which corresponds to the same variables for the partition in $ A $, as well as $ \bold c_B $ and $ \bold c_N $ in a similar manner. Then we calculate the incoming variable (from $ N $) with the following formula:

$$
\tilde \bold c_N^\mathsf{T} = \bold c_N^\mathsf{T} - \bold c_B^\mathsf{T} B^{-1} N
$$

Then we need to calculate the outgoing variable (from $ B $). We do this by

$$
\underset{k:(B^{-1}N_j)_k > 0}{\text{arg min}} = \frac{(B^{-1} \bold b)_k}{(B^{-1} N_j)_k}
$$

We update the variables and go back and start over. We need to check that $ B^{-1} \bold b \geq 0 $ for feasible solution, that $ B^{-1} N_j \geq 0 $ so that we do not have an unbounded solution. We terminate the algorithm when our cost vector $ c_N^\mathsf{T} \geq 0 $.

# LP duality
This problem is called the primal (P)
$$
\begin{aligned}
z^* = \text{inf} \qquad & \bold c^\mathsf{T} \bold x \\
\text{s.t.} \qquad & A \bold x = \bold b \\
& \bold x \geq 0
\end{aligned}
$$

and this is the corresponding dual problem (D)

$$
\begin{aligned}
q^* = \text{sup} \qquad & \bold b^\mathsf{T} \bold y \\
\text{s.t.} \qquad & A^\mathsf{T} \bold y \leq \bold c \\
& \bold y \in \R^n
\end{aligned}
$$

The following relation holds for the primal and dual

| | Primal | | Dual |
|-|-|-|-|
| Objective | min | | max |
| Variables | $ \geq 0 $ (canonical) | Constraints | $ \leq $ |
| | $ \leq 0 $ (non-canonical) | | $ \geq $ |
| | free | | $ = $ |
| Constraints | $ \geq $ (canonical) | Variables | $ \geq 0 $ |
| | $ \leq $ (non-canonical) | | $ \leq 0 $ |
| | $ = $  | | free |

## Weak duality theorem

If $ \bold x $ is a feasible point in (P) and $ \bold y $ is a feasible point in (D) then

$$
\bold c^\mathsf{T} \bold x  \geq \bold b^\mathsf{T} \bold y
$$

## Strong duality theorem

If both (P) and (D) are feasible then

1. There exists $ \bold x^* $ optimal in (P) and $ \bold y^* $ optimal in (D)
2. $ \bold c^\mathsf{T} \bold x^* = \bold b^\mathsf{T} \bold y^* $ (meaning $ z^* = q^* $)

## Possibilities in (P) and (D)

| P\D | Finite optima | Unbounded | Infeasible |
|-|-|-|-|
| Finite optima | X | | |
| Unbounded | | | X |
| Infeasible | | X | X |


# Perturbation
A perturbation is a small change to either $ A, \bold c  $ or $ \bold b $.

# Subgradient method
For convex problems we can relax the differentiability assumption and use something like the subgradient method. Let $ S \sube \R^n $ be a nonempty convex set and let $ f: S \to \R $ be a convex function. The $ \bold p \in \R^n $ is called a subgradient of $ f $ at $ \bar{\bold x} \in S $ if

$$
f(\bold x) \geq f(\bar{\bold x}) + \bold p^\mathsf{T} (\bold x - \bar{\bold x}), \qquad \text{for any } \bold x \in S.
$$

The set of all subgradients to $ f $ at $ \bar{\bold x} $ is called the subdifferential of $ f $ and is defined as

$$
\partial f(\bar{\bold x}) = \{ \bold p \in \R^n \, | \, f(\bold x) \geq f(\bar{\bold x}) + \bold p^\mathsf{T} (\bold x - \bar{\bold x}), \text{for all } \bold x \in S \}
$$


# Integer Linear Programming (ILP)

## Logical constraints

- if $ x $ then $ y \implies x \leq y$
- xor $ \implies x + y = 1$
- or $ \implies x + y \geq 1 $
- exactly one $ \implies \sum_{i=1}^n x_i = 1$
- at least one $ \implies \sum_{i=1}^n x_i \geq 1$

## Disjoint feasible sets

$$
\begin{aligned}
0 \leq x \leq 1 \cup 5 & \leq x \leq 8  \implies \\
x \geq 0 \\
x \leq 8 \\
x \leq 1 + 7 y \\
x \geq 5y \\
y = \{0, 1\}
\end{aligned}
$$

# Feasible direction methods

These methods are just as local as unconstrained methods, but we find search direction in different ways and termination criteria is often based on KKT. For general sets it could be tricky to find search directions and step lengths. Three well known methods are the **Frank-Wolfe method**, **Simplicial decomposition** and the **Gradient projection algorithm**. These method apply on polyhedron.

## Frank-Wolfe method
The idea of the Frank-Wolfe method is to calculate the direction of a linear approximation at a point $ x $, find the nearest extreme point with the simplex method and go in the direction of the extreme point.

## Simplicial decomposition
It works like the Frank-Wolfe algorithm but it remembers previous extreme points and searches in the convex hull of these points for the next iterations.

## Gradient projection algorithm
Based on the idea that this holds at a local min:
$$
\bold x^* = \text{Proj}_X [ \bold x^* - \nabla f(\bold x^*) ]
$$

For every iteration choose the next $ x_{k+1} $ as follows
$$
\bold x_{k+1}  = \text{Proj}_X [ \bold x_k - \alpha_k f(\bold x_k) ]
$$
where $ \alpha_k > 0 $ for some feasible direction.


# Penalty methods
The idea of penalty methods is to transform a constrained problem to a unconstrained problem.

$$
\boxed{
    \begin{aligned}
    \text{min} \qquad & f(\bold x) \\
    \text{s.t.} \qquad & \bold x \in S \\
    \end{aligned}
}

\iff

\boxed{
    \begin{aligned}
    \text{min} \qquad & f(\bold x) + \chi_S (\bold x) \\
    \text{s.t.} \qquad & \bold x \in \R^n \\
    \end{aligned}
}
$$

where $ \chi_S (\bold x) = \begin{cases}
0 &\text{if } \bold x \in S \\
+\infty &\text{otherwise}
\end{cases} $

## Exterior penalty method
Suppose that

$$
\begin{aligned}
\qquad\underset{\bold x \in S}{\text{minimize}} \qquad & f(\bold x),  \\
\text{subject to} \qquad & g_i(\bold x) \leq 0, \qquad i \in \mathcal{I} \qquad \\
& h_i(\bold x) = 0, \qquad i \in \mathcal{E} \\
& \bold x \in \Chi
\end{aligned}
$$

Choose a penalty method, e.g.

$$
\begin{aligned}
\psi_1 (s) = | s | \\
\psi_2 (s) =  s^2 \\
\end{aligned}
$$

Approximate the indicator function $ \chi_s (\bold x) $

$$
\chi_s (\bold x) \approx \nu \bar \chi_s (\bold x) = \nu \Big [\sum_{i=1}^m \psi (\text{max}(0, g_i(\bold x))) + \sum_{j=1}^l \psi (h_j(\bold x)) \Big ]
$$


## Interior penalty method
Suppose that

$$
\begin{aligned}
\qquad\underset{\bold x \in S}{\text{minimize}} \qquad & f(\bold x),  \\
\text{subject to} \qquad & g_i(\bold x) \leq 0, \qquad i \in \mathcal{I} \qquad \\
& \bold x \in \Chi
\end{aligned}
$$

Assume that $ g_i(\bar \bold x) < 0, \,\, i=1,...,m, \, \exists \bar \bold x \in \R^n $ (an interior point should exist)

Choose a penalty method, e.g.

$$
\begin{aligned}
\phi_1 (s) &= - \frac{1}{s} \\
\phi_2 (s) &=  - \text{log}(\text{min} (1, -s)) \\
\end{aligned}
$$

Approximate the indicator function $ \chi_s (\bold x) $

$$
\chi_s (\bold x) \approx \nu \bar \chi_s (\bold x) =
\begin{cases}
\nu \sum_{i=1}^m \phi (g_i (\bold x)) & \text{if } g_i(\bold x) < 0, i=1,...,m \\
+ \infty & \text{otherwise}
\end{cases}
$$
