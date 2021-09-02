---
slug: /math/linear-algebra
tags: []
lastModified: 2021-09-01
created: 2021-09-01
title: Linear Algebra
header: []
---

Elements $ \bold v \in \R^n $ are referred to as **vectors**

$$
\bold v =
\begin{bmatrix}
    v_1 \\
    v_2 \\
    \vdots \\
    v_n \\
\end{bmatrix}
$$

where $ v_i $ is a real number and $ \bold v^\intercal = (v_1, v_2, \dots, v_n) $ , the $ ^\intercal $ denotes the transpose operator. For two vectors $ \bold a = (a_1, a_2, \dots, a_n)^\intercal \in \R^n$ and $ \bold b = (b_1, b_2, \dots, b_n)^\intercal \in \R^n $ , we define the following properties:

- addition: $ \bold {a+b} = (a_1+b_1, a_2+b_2, \dots, a_n+b_n)^\intercal \in \R^n $
- multiplication by scalar: $ \alpha \bold a = (\alpha a_1, \alpha a_2, \dots, \alpha a_n)^\intercal \in \R^n $
- scalar product: $ \bold a ^\intercal \bold b = \sum_{i=1}^n a_i b_i \in \R^n $

A **linear subspace** $ L \sube \R^n $ is a set that holds:
- for every $ \bold a, \bold b \in L $ it holds that $ \bold a + \bold b \in L $
- for every $ \alpha \in \R, \bold a \in L $ it holds that $ \alpha \bold a \in L $

An **affine subspace** $ A \sube \R^n $ is a set that is represented as:
- $ \bold v + L = \{\bold v + \bold x | \bold x \in L\} $ for some vector $ \bold v \in \R^n $ and linear subspace $ L \sube \R^n $