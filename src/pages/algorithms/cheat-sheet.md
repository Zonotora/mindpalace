---
slug: /algorithms/cheat-sheet
tags: []
lastModified: 2022-01-22
created: 2022-01-22
title: Cheat Sheet
header: [{"depth":2,"name":"Anagram","link":"Anagram"},{"depth":2,"name":"Convex hull","link":"Convex-hull"},{"depth":2,"name":"GCD","link":"GCD"},{"depth":2,"name":"Maximum value","link":"Maximum-value"},{"depth":2,"name":"Merging two sorted lists","link":"Merging-two-sorted-lists"},{"depth":2,"name":"Closest pair or points (brute-force)","link":"Closest-pair-or-points-(brute-force)"},{"depth":2,"name":"Gale-Shapley algorithm","link":"Gale-Shapley-algorithm"}]
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


## Maximum value
- `Time: O(n)`
- `Space: -`

```python
def max_value(arr):
    m = arr[0]
    for i in range(1, len(arr)):
        m = max(m, arr[i])
    return m
```

## Merging two sorted lists
- `Time: O(n)`
- `Space: -`

```python
# ascending order
def merge_sorted_list(arr1, arr2):
    ret = []
    p1, p2 = 0, 0 # pointer to each list
    while p1 < len(arr1) and p2 < len(arr2):
        if arr1[p1] < arr2[p2]:
            ret.append(arr1[p1])
            p1 += 1
        else:
            ret.append(arr2[p2])
            p2 += 1

    # we have remainder elements left
    # in some of the lists add them to
    # the return list

    while p1 < len(arr1):
        ret.append(arr1[p1])
        p1 += 1

    while p2 < len(arr2):
        ret.append(arr2[p2])
        p2 += 1

    return ret
```

## Closest pair or points (brute-force)
- `Time: O(n^2)`
- `Space: -`

```python
def closest_point(points):
    min_distance = MAX_VALUE
    for i in range(len(points)):
        for j in range(len(points)):
            if i == j: continue
            [x1, y1] = points[i]
            [x2, y2] = points[j]
            distance = (x1 - x2)**2 + (y1 - y2)**2)**0.5
            min_distance = min(min_distance, distance)

    return distance
```

## Gale-Shapley algorithm