---
slug: /math/calculus
tags: []
lastModified: 2022-04-06
created: 2021-09-12
title: Calculus
header: [{"depth":1,"name":"Taylor expansion","link":"Taylor-expansion"},{"depth":1,"name":"Differentiability class","link":"Differentiability-class"},{"depth":1,"name":"Gradient","link":"Gradient"},{"depth":1,"name":"Hessian","link":"Hessian"},{"depth":1,"name":"Matrix calculus","link":"Matrix-calculus"},{"depth":1,"name":"Jensen's inequality","link":"Jensen's-inequality"},{"depth":1,"name":"References","link":"References"}]
---

# Taylor expansion
The Taylor series of a real or complex-valued function $ f(x) $ that is infinitely differentiable at a real or complex number $ a $ is the power series @{taylorwiki}
$$
\sum_{n=0}^\infin \frac{f^{(n)}(a)}{n!}(x - a)^n = f(a) + \frac{f'(a)}{1!}(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \frac{f'''(a)}{3!}(x - a)^3 + \dots
$$

The taylor polynomial for any polynomial is the polynomial itself. When $ a = 0 $ the series is also called the a **Maclaurin series**. The series is very useful to approximate a function at $ a $ as a polynomial. Here we approximate $ \text{sin} $ at $ a = 0 $

$$
\text{sin} (x) \approx x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + O(x^9)
$$

where $ O(x^9) $ is the error term.


# Differentiability class
The function $ f $ is said to be of differentiability class $ C^k $ if the derivatives $ f^{(1)}, f^{(2)}, \dots, f^{(k)} $ exist and are continous.


# Gradient
Suppose that $ f: \R^n \to \R $ is a function and that $ f \in C^1 $ we can define the gradient $ \nabla f $ as
$$
\nabla f =
\begin{bmatrix}
    \frac{\partial f}{\partial x_1}  \\
    \frac{\partial f}{\partial x_2}  \\
    \vdots  \\
    \frac{\partial f}{\partial x_n}  \\
\end{bmatrix}
$$

# Hessian
Suppose that $ f: \R^n \to \R $ is a function taking as input a vector $ \bold x \in \R^n $ and output a scalar $ f(\bold x) \in \R $. If $ f \in C^2 $ then the **Hessian** matrix $ \bold H $ of $ f $ is a square $ n \times n $ matrix defined as follows

$$
\bold H =
\begin{bmatrix}
    \frac{\partial^2f}{\partial x_1^2} & \frac{\partial^2f}{\partial x_1 \partial x_2} & \cdots & \frac{\partial^2f}{\partial x_1 \partial x_n} \\
    \frac{\partial^2f}{\partial x_2 \partial x_1} & \frac{\partial^2f}{\partial x_2^2} & \cdots & \frac{\partial^2f}{\partial x_2 \partial x_n} \\
    \vdots & \vdots & \ddots & \vdots \\
    \frac{\partial^2f}{\partial x_n \partial x_1} & \frac{\partial^2f}{\partial x_n \partial x_2} & \cdots & \frac{\partial^2f}{\partial x_n^2} \\
\end{bmatrix}
$$

# Matrix calculus
https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf

# Jensen's inequality
https://en.wikipedia.org/wiki/Jensen%27s_inequality

$$
f(tx_{1}+(1-t)x_{2})\leq tf(x_{1})+(1-t)f(x_{2}).
$$

$$
\varphi (\operatorname {E} [X])\leq \operatorname {E} \left[\varphi (X)\right]
$$



# References
{taylorwiki}:
    url: https://en.wikipedia.org/wiki/Taylor_series