---
slug: /machine-learning/models/CNN
tags: []
lastModified: 2021-05-02
created: 2021-05-02
title: CNN
header: [{"depth":1,"name":"Building blocks","link":"Building-blocks"},{"depth":2,"name":"Convolutional filters","link":"Convolutional-filters"},{"depth":2,"name":"Pooling","link":"Pooling"},{"depth":1,"name":"Transfer learning","link":"Transfer-learning"},{"depth":1,"name":"References","link":"References"}]
---

Convolutional neural networks are mainly used for images but works for other kinds of patterns as well. Linear models have a hard time modeling the interactions between features in images; decision trees and tree ensembles do a better job but they need to be very big to achieve good results. We need to find some better solution. This is where CNNs come in.

# Building blocks
- **convolutinal filters**: used to find patterns
- **pooling**: used for summarizing or generalizing smaller regions
- **fully connected layers**
- **dense layers**
- **redidual connections**
- **normalizations**

## Convolutional filters
Consists of an image and a kernel and results in a feature map. The kernel sweeps over the image and extracts important information and produces a feature map of the results.

## Pooling
Pooling will shrink the region space. The most common pooling technique is max pooling @{pooling}.

# Transfer learning
The general idea behind transfer learning is that we want to exploit previously learning knowledge to solve new tasks. Thus, we reuse some parts of an earlier model because it can reduce the need for training data for the new task. One common way to do this is in neural networks is to take the weights from the first model and put them in the second model. We start by training some general model to further train on a new specific task. We keep the lower level layers and replace the higher level layers. We can except a good transer learning if the specific task it very similar to the general task.


# References
{pooling}:
    url: https://en.wikipedia.org/wiki/Convolutional_neural_network#Pooling_layer