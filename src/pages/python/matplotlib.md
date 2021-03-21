---
slug: /python/matplotlib
tags: []
lastModified: 2021-03-21
created: 2021-02-22
title: Matplotlib
header: [{"depth":1,"name":"Installation","link":"Installation"},{"depth":1,"name":"Usage","link":"Usage"},{"depth":1,"name":"Examples","link":"Examples"},{"depth":1,"name":"Prepare","link":"Prepare"},{"depth":1,"name":"Create","link":"Create"},{"depth":1,"name":"Customize","link":"Customize"},{"depth":2,"name":"Markers","link":"Markers"},{"depth":2,"name":"Linestyles","link":"Linestyles"},{"depth":1,"name":"Text","link":"Text"},{"depth":2,"name":"Legends","link":"Legends"},{"depth":2,"name":"Limits","link":"Limits"},{"depth":2,"name":"Ticks","link":"Ticks"}]
---

# Installation
```python
pip install matplotlib
```

# Usage
Matplotlib is the core library for plotting graphs. See [full documentation](https://matplotlib.org/stable/api/index.html).


```python
import matplotlib.pyplot as plt
```

# Examples
```python
x = [1, 2, 3, 4]
y = [1, 4, 9, 16]
fig = plt.figure()
ax = fig.add_subplot(111)
ax.plot(x, y, color='red', linewidth=2)
ax.scatter([2, 4, 6], [3, 9, 16], color='blue', marker='^')
ax.set_xlim(0, 6.5)
plt.savefig('test.png')
plt.show()
```
```python
x = [1, 2, 3, 4]
y = [1, 4, 9, 16]
plt.plot(x, y, color='orange', linewidth=1)
plt.show()
```


# Prepare
```python
x = np.linspace(0, 10, 50)
y = np.sin(x)
```

# Create
```python
fig = plt.figure()
fig.add_axes()

# row-col-num (2-2-1)
ax = fig.add_subplot(221)
fig2, ax2 = plt.subplots(nrows=2, ncols=2)
```

# Customize

## Markers
```python
plt.plot(x, y, marker='o')
```

## Linestyles
```python
plt.plot(x, y, ls='solid')
plt.plot(x, y, ls='--')
plt.plot(x, y, ls='solid', x**2, y**2, ls='--'))
```

# Text
```python
# location (x,y)
plt.text(1,1,'Function')

plt.annotate(
    'Local Max',
    xy=(3.3, 1),
    xytext=(3, 1.8),
    arrowprops=dict(facecolor='green', shrink=0.05),
)

```

## Legends
```python
plt.title('Title')
plt.legend(loc='max')
plt.legend(loc='upper left')

ax.set(title='Axes', xlabel='x', ylabel='y')
```

## Limits
```python
ax.axis('equal')
ax.margins(x=0.0, y=0.1)

ax.set(xlim=[0,1], ylim=[0,10])
ax.set_xlim([0,1])
```

## Ticks
```python
ax.xaxis.set(
    ticks=range(1, 10),
    ticklabels=[1, 'foo', -10, 'bar'],
)
```
