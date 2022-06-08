---
slug: /math/mathematical-models
tags: ["wip"]
lastModified: 2022-06-08
created: 2022-06-01
title: Mathematical Models
header: [{"depth":1,"name":"Monte Carlo methods","link":"Monte-Carlo-methods"}]
---

# Monte Carlo methods
https://en.wikipedia.org/wiki/Monte_Carlo_method

Monte Carlo methods are a broad class of algorithms that rely on repeated random sampling for computing a numerical result. It builds upon the principle that a deterministic problem may be solved by randomness. These methods are very useful when the problem in question is very hard or impossible to compute using standard approaches. Even though the methods vary, they can usually be characterized by the following pattern:

1. Define the domain of the possible inputs.
2. Generate inputs randomly using a probability distribution of the domain.
3. Perform a deterministic computation using the randomly sampled values.
4. Make use of the computation over many iterations.

Make sure that the randomly sampled values are drawn from the correct probability distribution to avoid poor approximations as well as generating enough random samples so that we can make some conclusions about the computation.