---
slug: /programming/python/numpy
tags: []
lastModified: 2021-09-12
created: 2021-02-22
title: Numpy
header: [{"depth":1,"name":"Installation","link":"Installation"},{"depth":1,"name":"Usage","link":"Usage"},{"depth":1,"name":"Input and output","link":"Input-and-output"},{"depth":2,"name":"Read","link":"Read"},{"depth":2,"name":"Write","link":"Write"},{"depth":1,"name":"Create arrays","link":"Create-arrays"},{"depth":2,"name":"Zeros","link":"Zeros"},{"depth":2,"name":"Ones","link":"Ones"},{"depth":2,"name":"Empty","link":"Empty"},{"depth":2,"name":"Arange","link":"Arange"},{"depth":2,"name":"Linspace","link":"Linspace"},{"depth":2,"name":"Full","link":"Full"},{"depth":2,"name":"Eye (identity)","link":"Eye-(identity)"},{"depth":1,"name":"Describe","link":"Describe"},{"depth":1,"name":"Common functions","link":"Common-functions"},{"depth":1,"name":"Manipulation","link":"Manipulation"},{"depth":2,"name":"Trasposing","link":"Trasposing"},{"depth":2,"name":"Adding or removing elements","link":"Adding-or-removing-elements"}]
---

# Installation
```python
pip install numpy
```

# Usage
NumPy is the core library for working with numbers in python. It provides high-performance multidimensional arrays. See [full documentation](https://numpy.org/doc/stable/reference/index.html).

```python
import numpy as np
```

# Input and output
Read or write files with different formats.

## Read
```python
np.load('name.npy')
np.loadtxt('name.txt')
np.genfromtext('name.csv', delimiter=',')
```

## Write
```python
np.save('name', a)
np.savez('name', a, b)
np.savetxt('name.txt', a, delimiter=' ')
```


# Create arrays

Different routines for creating an array. See [documentation](https://numpy.org/doc/stable/reference/routines.html).

```python
a = np.array([1,2,3])
a = np.array([[(1,2,3), (4,5,6)], [(7,8,9), (10,11,12)]], dtype=float)
```

## Zeros
```python
>>> np.zeros((2, 1))
array([[ 0.],
       [ 0.]])
```

## Ones
```python
>>> np.ones((2, 1))
array([[1.],
       [1.]])
```

## Empty
```python
>>> np.empty([2, 2], dtype=int)
array([[-2312341235, -234123552],
       [  12344234,    45357345]])
```

## Arange
```python
>>> np.arange(3,7)
array([3, 4, 5, 6])

>>> np.arange(3,7,2)
array([3, 5])
```

## Linspace
```python
>>> np.linspace(2.0, 3.0, num=5)
array([2.  , 2.25, 2.5 , 2.75, 3.  ])
```

## Full
```python
>>> np.full((2, 2), 10)
array([[10, 10],
       [10, 10]])
```

## Eye (identity)
```python
>>> np.eye(2, dtype=int)
array([[1, 0],
       [0, 1]])

>>> np.eye(3, k=1)
array([[0.,  1.,  0.],
       [0.,  0.,  1.],
       [0.,  0.,  0.]])
```

# Describe
```python
# dimension
a.shape

# length
len(a)

# number of array dimensions
a.ndim

# number of array elements
a.size

# data type
a.dtype
```

# Common functions
```python
# summation
a.sum()

# min
a.min()

# max
a.max()

# mean value
a.mean()

# median
a.median()
```

# Manipulation
Different functions for reshaping the array. See [documentation](https://numpy.org/doc/stable/reference/routines.array-manipulation.html)

## Trasposing
```python
np.transpose(a)
# or
a.T
```

## Adding or removing elements
```python
# insert value at index
np.insert(a, index, value)

# append items
np.append(a, b)

# remove items
np.remove(a, [1])

# resize array
a=np.array([[0,1],[2,3]])

>>> np.resize(a,(2,3))
array([[0, 1, 2],
       [3, 0, 1]])

>>> np.resize(a,(1,4))
array([[0, 1, 2, 3]])

>>> np.resize(a,(2,4))
array([[0, 1, 2, 3],
       [0, 1, 2, 3]])
```