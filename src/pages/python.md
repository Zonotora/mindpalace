---
slug: /python
date: 2021-02-06
title: Python
header: [{"depth":1,"name":"Enumerate","link":"Enumerate"},{"depth":1,"name":"Comprehension","link":"Comprehension"},{"depth":1,"name":"Generator","link":"Generator"},{"depth":1,"name":"Unpacking","link":"Unpacking"},{"depth":1,"name":"Swapping","link":"Swapping"},{"depth":1,"name":"Slices","link":"Slices"}]
---

# Enumerate
```python
>>> a = ['A', 'B', 'C']
>>> list(enumerate(a))
[(0, 'A'), (1, 'B'), (2, 'C')]
```

# Comprehension
```python
# list comprehension
>>> m = [x ** 2 for x in range(5)]
>>> m
[0, 1, 4, 9, 16]

# set comprehension
>>> m = {x ** 2 for x in range(5)}
>>> m
{0, 1, 4, 9, 16}

# dict comprehension
>>> m = {x: x ** 2 for x in range(5)}
>>> m
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

```

# Generator
```python
# a generator is evaluated lazily
>>> m = (x ** 2 for x in range(5))
>>> list(m)
[0, 1, 4, 9, 16]
```

# Unpacking
```python
>>> a, b, c = 1, 2, 3
>>> a, b, c
(1, 2, 3)

>>> a, b, c = [1, 2, 3]
>>> a, b, c
(1, 2, 3)

>>> a, *b, c = [1, 2, 3, 4, 5]
>>> a
1

>>> b
[2, 3, 4]

>>> c
5
```

# Swapping
```python
>>> a, b = 1, 2
>>> a, b = b, a
>>> a, b
(2, 1)
```

# Slices
```python
a[start:stop]  # items start through stop-1
a[start:]      # items start through the rest of the array
a[:stop]       # items from the beginning through stop-1
a[:]           # a copy of the whole array
a[::]          # a copy of the whole array

a[-1]          # last item in the array
a[-2:]         # last two items in the array
a[:-2]         # everything except the last two items
a[::-1]        # all items in the array, reversed
```