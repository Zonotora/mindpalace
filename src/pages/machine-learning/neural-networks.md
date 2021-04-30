---
slug: /machine-learning/neural-networks
tags: ["chalmers", "machine-learning"]
lastModified: 2021-04-30
created: 2021-04-24
title: Neural Networks
header: [{"depth":1,"name":"Pros","link":"Pros"},{"depth":1,"name":"Cons","link":"Cons"},{"depth":1,"name":"Linear model limitions","link":"Linear-model-limitions"},{"depth":1,"name":"Where neural networks enter the scene","link":"Where-neural-networks-enter-the-scene"},{"depth":1,"name":"Multilayered model","link":"Multilayered-model"},{"depth":1,"name":"Training","link":"Training"}]
---

Neural networks are systems that are very useful for automatic learning of abstractions. Before neural network models were popular there were complicated machine learning pipelines which needed complex preprocessing transformation steps.

# Pros
- A neural network model can express more complex relationships e.g. linear models
- They are better for problems where it is hard to define features, e.g. images.


# Cons
- The training process could be very demanding (because of structure and lots of training data)
- They can be difficult to train because of the quantity of hyperparameters
- Finding a solution may require luck because the training is less mathematical stable

# Linear model limitions
Some data sets can not be modeled with a linear classifier, a data set must be linearly separable to give perfect classifiction. Linear classifiers have problems predicting the XOR problem. To overcome this we can introduce more features and by applying some nonlinear transformation we can move the output space of the classes to a more or less linearly separable form.

# Where neural networks enter the scene
Instead of handcrafting new features to make the problem more linear separable, we could train a classifer using the output of previous "sub-classifiers", neurons.

# Multilayered model
A feedforward neural network consists of connected layers where intermediate nodes are placed in a hidden layer and called hidden neurons. The final layer is the classifier or regressor and is called the output layer where the nodes are output nodes. The first layer is the input layer where the nodes are called the input nodes.

Each hidden node compute its output based on its own weight vector

$$
h_i = f(\pmb w_{h_i} \cdot \pmb x)
$$

and the output nodes are computed in a similar fashion, but based on the outputs of the hidden nodes

$$
y = f(\pmb w_o \cdot \pmb h)
$$

The function $ f $ is called the @(activation)(activation).

A neural network learns the nonlinear transformation, and creates a new vector space where the classes are linearly separable. It is the hidden layers that accomplish this.

# Training
Training a neural network consists of finding the optimal weights of each layer, similarly like the linear models. The process consists of an objective function including a loss and possibly a regularizer as well and an optimization algorithm is applied to find the weights that minimizes the objective.

If we have the simple neural network like follows

$$
h = f_1(w_1 \cdot x)
$$
$$
\text{Loss} = f_2(w_2 \cdot h)
$$

we can compute the gradients with respect to $ w_1 $ and $ w_2 $ using the chain rule like

$$
\frac{\partial \text{Loss}}{\partial w_2} = f_2^{'}(w_2 \cdot h) \cdot h
$$

$$
\frac{\partial \text{Loss}}{\partial w_1} = f_2^{'}(w_2 \cdot h) \cdot w_2 \cdot f_1^{'}(w_1 \cdot x) \cdot x
$$
