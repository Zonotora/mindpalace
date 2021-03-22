---
slug: /machine-learning/workflow
tags: []
lastModified: 2021-03-22
created: 2021-03-22
title: Workflow
header: []
---

Split the data into a 60% **_train_** set and a 40% **_test_** set.

```python
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(
    X, Y, test_size=0.4, random_state=0
)
```