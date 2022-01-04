---
slug: /math/number-theory
tags: []
lastModified: 2022-01-04
created: 2022-01-04
title: Number Theory
header: [{"depth":1,"name":"Greatest common divisor (GCD)","link":"Greatest-common-divisor-(GCD)"}]
---

# Greatest common divisor (GCD)
The greatest common divisor between two or more integers, is the largest positive integer that divides each of the integers. A common approach of calculating the greatest common divisor is to use Euclidean algorithm

```
function gcd(a, b)
    if b = 0
        return a
    else
        return gcd(b, a mod b)
```