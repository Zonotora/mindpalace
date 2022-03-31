---
slug: /machine-learning/feature-selection
tags: []
lastModified: 2021-04-09
created: 2021-04-08
title: Feature Selection
header: [{"depth":1,"name":"Large feature sets","link":"Large-feature-sets"},{"depth":1,"name":"Types of selection","link":"Types-of-selection"},{"depth":2,"name":"Filter","link":"Filter"},{"depth":3,"name":"Drawbacks","link":"Drawbacks"},{"depth":2,"name":"Wrapper","link":"Wrapper"},{"depth":3,"name":"Drawbacks","link":"Drawbacks"},{"depth":2,"name":"Embedded","link":"Embedded"},{"depth":1,"name":"Conclusion","link":"Conclusion"},{"depth":1,"name":"References","link":"References"}]
---

# Large feature sets
There are some problems arising with having a large set of features:

- there is a risk of information overload
- training time is increased
- more complexity will result in worse generalization


# Types of selection
So how do we choose the most useful and important features? The scikit-learn library has a number of different feature selection algorithms @{sklearn}. There are three high-level approaches to feature selection.

## Filter
Is the input informative to the output? We want to apply some scoring functions to measure how well one feature perform in comparison to another. There are different scoring functions for classification and regression. One example of a scoring function is mutual information. It is defined like this

$$
I(X;Y) = \sum_{y} \sum_{x} p(x, y) \log \frac{p(x,y)}{p(x) \cdot p(y)}
$$

The mutual information function is thus telling us how closely linked the two random variables $ X $ and $ Y $ are. If they are independent from each other the mutual information function will produce a zero. Other scoring functions are derived from statistical tests.

Given a scoring function we can select a subset in two different ways:

- selecting the top $ K $ elements
- selecting the top 1 percentile

See @{sklearn} for more information.

### Drawbacks
Filter-based methods are used in isolation. The filter-based scoring functions do not relate features with each other. Features could be useless if used by itself, but useful when combined with another feature. Filter-based methods will not notice this. Two features could be identical as well, and thus creating a redundance.

## Wrapper
Pseudo-python code of how the alogorithm work

```python
S = {}
while (no improvement):
    best = find feature F that gives greatest improvement to S

    if best not None:
        add F to S
```

Advantages compared to filter-based methods are that the machine learning model is used and involved in choosing features. We will not add any redundant features as well.

### Drawbacks
There are three main drawbacks:

- the solution is suboptimal because the algorithm is greedy and will not find the optimal solution
- even though the algorithm is greedy it can be very costly if there are many features.
- it can be difficult to find features that are useful when grouped together.

## Embedded
Embedded methods are defined by machine learning that have built-in feature selection properties. This is the main characteristic of the decision tree. You could say that decision trees have built-in filter methods (scoring system). Linear models could also have built-in feature selection.

# Conclusion
It is useful to

- get rid of redudant features
- consider feature selection as a part of the tuning process

# References

{sklearn}:
    title: Feature selection
    url: https://scikit-learn.org/stable/modules/feature_selection.html