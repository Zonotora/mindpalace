---
slug: /programming/algorithms
tags: []
lastModified: 2021-09-12
created: 2021-09-12
title: Algorithms
header: [{"depth":2,"name":"Anagram","link":"Anagram"},{"depth":2,"name":"Convex hull","link":"Convex-hull"},{"depth":2,"name":"GCD","link":"GCD"}]
---

## Anagram
- `Time: -`
- `Space: -`

```python
def anagrams(S):
    d = {}
    for word in S:
        s = ’’.join(sorted(word))
        if s in d:
            d[s].append(word)
        else:
            d[s] = [word]
    return [d[s] for s in d if len(d[s]) > 1]

```

## Convex hull
This algorithm is based on an algorithm by Ronald Graham, but this algorithm process points in order of their x-coordinate, not their angle around some fixed point.

- `Time: O(n log n)`
- `Space: -`

```python
def left_turn(a, b, c):
    return ((a[0] - c[0]) * (b[1] - c[1]) -
            (a[1] - c[1]) * (b[0] - c[0]) > 0)

# S: A set of points { (x, y) in R^2 }
def convex_hull(S):
    S.sort()
    top = []
    bot = []
    for p in S:
        while len(top) >= 2 and not left_turn(p, top[-1], top[-2]):
            top.pop()
        top.append(p)
        while len(bot) >= 2 and not left_turn(bot[-2], bot[-1], p):
            bot.pop()
        bot.append(p)
    return bot[:-1] + top[:0:-1]
```


## GCD

- `Time: O(log a + log b)`
- `Space: -`

```python
def gcd(a, b):
    return a if b == 0 else gcd(b, a % b)
```