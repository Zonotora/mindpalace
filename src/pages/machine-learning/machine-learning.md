---
slug: /machine-learning/machine-learning
tags: []
lastModified: 2022-06-10
created: 2021-03-20
title: Machine Learning
header: [{"depth":1,"name":"Collecting data","link":"Collecting-data"},{"depth":2,"name":"Collecting phase","link":"Collecting-phase"},{"depth":3,"name":"Stratification and weighting","link":"Stratification-and-weighting"},{"depth":3,"name":"Availability vs. representativity","link":"Availability-vs.-representativity"},{"depth":2,"name":"Annotating","link":"Annotating"},{"depth":3,"name":"Semi-automatic techniques","link":"Semi-automatic-techniques"},{"depth":3,"name":"Crowdsourcing","link":"Crowdsourcing"},{"depth":1,"name":"Feature selection","link":"Feature-selection"},{"depth":2,"name":"Large feature sets","link":"Large-feature-sets"},{"depth":2,"name":"Types of selection","link":"Types-of-selection"},{"depth":3,"name":"Filter","link":"Filter"},{"depth":4,"name":"Drawbacks","link":"Drawbacks"},{"depth":3,"name":"Wrapper","link":"Wrapper"},{"depth":4,"name":"Drawbacks","link":"Drawbacks"},{"depth":3,"name":"Embedded","link":"Embedded"},{"depth":2,"name":"Conclusion","link":"Conclusion"},{"depth":1,"name":"Preprocessing","link":"Preprocessing"},{"depth":2,"name":"Pruning","link":"Pruning"},{"depth":2,"name":"Scaling and normalization","link":"Scaling-and-normalization"},{"depth":3,"name":"Min-Max scaling","link":"Min-Max-scaling"},{"depth":3,"name":"Standard scaling","link":"Standard-scaling"},{"depth":3,"name":"Length normalization","link":"Length-normalization"},{"depth":3,"name":"Other transformations","link":"Other-transformations"},{"depth":2,"name":"Missing values","link":"Missing-values"},{"depth":2,"name":"Evaluating","link":"Evaluating"},{"depth":2,"name":"Debugging","link":"Debugging"},{"depth":1,"name":"Hyperparameters","link":"Hyperparameters"},{"depth":2,"name":"Tuning","link":"Tuning"},{"depth":3,"name":"Grid search","link":"Grid-search"},{"depth":3,"name":"Random search","link":"Random-search"},{"depth":3,"name":"Other","link":"Other"},{"depth":1,"name":"Evaluation","link":"Evaluation"},{"depth":2,"name":"Classifiers","link":"Classifiers"},{"depth":3,"name":"Confusion matrix","link":"Confusion-matrix"},{"depth":3,"name":"Precision and recall","link":"Precision-and-recall"},{"depth":3,"name":"F-score","link":"F-score"},{"depth":3,"name":"Sensitivity and specificity","link":"Sensitivity-and-specificity"},{"depth":3,"name":"True positive rate and false positive rate","link":"True-positive-rate-and-false-positive-rate"},{"depth":2,"name":"Regressors","link":"Regressors"},{"depth":3,"name":"Mean squared error","link":"Mean-squared-error"},{"depth":3,"name":"Mean absolute error","link":"Mean-absolute-error"},{"depth":3,"name":"Coefficient of determination","link":"Coefficient-of-determination"},{"depth":2,"name":"Loss versus quality metric","link":"Loss-versus-quality-metric"},{"depth":1,"name":"Neural networks","link":"Neural-networks"},{"depth":2,"name":"Pros","link":"Pros"},{"depth":2,"name":"Cons","link":"Cons"},{"depth":2,"name":"Linear model limitions","link":"Linear-model-limitions"},{"depth":2,"name":"Where neural networks enter the scene","link":"Where-neural-networks-enter-the-scene"},{"depth":2,"name":"Multilayered model","link":"Multilayered-model"},{"depth":2,"name":"Training","link":"Training"},{"depth":1,"name":"Dimensionality reduction","link":"Dimensionality-reduction"},{"depth":2,"name":"t-SNE","link":"t-SNE"},{"depth":2,"name":"Applications","link":"Applications"},{"depth":3,"name":"Recommender system","link":"Recommender-system"},{"depth":4,"name":"Colloborative filtering","link":"Colloborative-filtering"},{"depth":3,"name":"Word empeddings","link":"Word-empeddings"},{"depth":4,"name":"Pre-training","link":"Pre-training"},{"depth":1,"name":"Ethics","link":"Ethics"},{"depth":1,"name":"References","link":"References"}]
---


# Collecting data

It could be of great use to use a already existing data set when creating a new machine learning model.

- MNIST
- UCI machine learning repository
- reserach paper
- Kaggle

## Collecting phase

- Scrape from websites
- Use an open API

The properties that hold in the training set should hold for the whole population as well. When collecting data we should be aware of the @(sampling bias)(sampling-bias) and @(nonresponse bias)(nonresponse-bias) to create a well representative data set.

### Stratification and weighting
Stratification is adjusting the data set into sub-groups and giving them different weights.

### Availability vs. representativity
It is not certain that we can select a representive sample of the data set, in many cases we have to work with what we have. This could be observational/historical data. It could be harder to access different types of medias as well, e.g. fiction vs. news. We also have to keep in mind copyright whatever data we choose to collect (only collecting free data will most likely cause a bias as well).

Samling effects will create different biases (time, selection, demography etc...).

## Annotating
In the long run it is often useful to create specialized tools for annotating the data to automate the process as much as possible which is greater for scale. It is often easier and less time consuming to annotate with a specialized tool.

However, we might create a biased user interface
- there might be some easy default
- how are annotators paid (hour or by quantity)?
- interest

There must be a consistent user manual for annotating the data to get samples from the same "population".

### Semi-automatic techniques
Semi-autmatic techniques are used quite often. They create a bigger data set from a smaller sample. After creation of the bigger data set we could let annotators polish the annotations.

### Crowdsourcing
When using @(crowdsourcing)(crowdsourcing) to annotate the data there are a couple of useful guidelines to keep in mind

- use easy cognitive tasks
- use well-defined tasks
- use concise defintions
- use a low amount of input

Crowdsourcing is often most useful for simplier tasks because non-experts annotate the data.

We could have more than one annotator per data set to compare the annotations to get better quality annotations. This is called the @(inter-annotator agreement)(inter-annotator-agreement). This is useful for an upper bound of the machine learning model.







# Feature selection

## Large feature sets
There are some problems arising with having a large set of features:

- there is a risk of information overload
- training time is increased
- more complexity will result in worse generalization


## Types of selection
So how do we choose the most useful and important features? The scikit-learn library has a number of different feature selection algorithms @{feature_selection}. There are three high-level approaches to feature selection.

### Filter
Is the input informative to the output? We want to apply some scoring functions to measure how well one feature perform in comparison to another. There are different scoring functions for classification and regression. One example of a scoring function is mutual information. It is defined like this

$$
I(X;Y) = \sum_{y} \sum_{x} p(x, y) \log \frac{p(x,y)}{p(x) \cdot p(y)}
$$

The mutual information function is thus telling us how closely linked the two random variables $ X $ and $ Y $ are. If they are independent from each other the mutual information function will produce a zero. Other scoring functions are derived from statistical tests.

Given a scoring function we can select a subset in two different ways:

- selecting the top $ K $ elements
- selecting the top 1 percentile

See @{feature_selection} for more information.

#### Drawbacks
Filter-based methods are used in isolation. The filter-based scoring functions do not relate features with each other. Features could be useless if used by itself, but useful when combined with another feature. Filter-based methods will not notice this. Two features could be identical as well, and thus creating a redundance.

### Wrapper
Pseudo-python code of how the alogorithm work

```python
S = {}
while (no improvement):
    best = find feature F that gives greatest improvement to S

    if best not None:
        add F to S
```

Advantages compared to filter-based methods are that the machine learning model is used and involved in choosing features. We will not add any redundant features as well.

#### Drawbacks
There are three main drawbacks:

- the solution is suboptimal because the algorithm is greedy and will not find the optimal solution
- even though the algorithm is greedy it can be very costly if there are many features.
- it can be difficult to find features that are useful when grouped together.

### Embedded
Embedded methods are defined by machine learning that have built-in feature selection properties. This is the main characteristic of the decision tree. You could say that decision trees have built-in filter methods (scoring system). Linear models could also have built-in feature selection.

## Conclusion
It is useful to

- get rid of redudant features
- consider feature selection as a part of the tuning process


# Preprocessing
An important concept of machine learning like many other problems there is some sort of "garbage in, garbage out". Machine learning may seems to magically classify data and solve all sorts of problems but if the data you put in to a machine learning model are out of context you can expect the model to perform out of context as well. One example is to have a very easy feature representation of an image (100x100) where you put every pixel into a 30.000 dimensional vector (three values for every pixel). In doing so we lose all locality information. It is therefore an important aspect to consider when designing learning models, i.e. how robust they are to noisy features. Redundant features is not good either (two features are redudant if they are highly correlated). It is as well important to observe that when the training sample N is small the chance of getting seeminly correlated data is increased even though the data are independent.

Generally we need to do some preprocessing for categorical values in a data set, because almost every library uses numerical values. One-hot encoding is a very common way of dealing with categorical values and converting them to numerical ones. A direct integer encoding tends to work poorly in machine learning algorithms. We would give mathematical properties to each value even though there are none. It would create an unnecessary ordering which may mislead the machine learning algorithm.

Magnitude differences can be a problem, but that depends on which machine learning algorithm that is used. It usually ***strongly*** affects many models like linear models,  neural networks, models based on distance or similarity (kNN, SVC, etc...). However, tree-based predictors will ignore any scaling differences (they will adapt to the new scaling), because they consider thresholds of one feature at a time.

Scikit-learn provides a number of ways to preprocess the data @{preprocessing}.

## Pruning
The principle of pruning is as follows, if you have a binary feature that only appears a small number of times $ K $ you can simply remove them from consideration. You have to be careful to not overuse the technique of pruning because before we end up with no interesting data. @(Normalization)(normalization) is also important.

## Scaling and normalization

### Min-Max scaling
Sqeeze the scale so that it is between zero and one.

$$
f_{new} = \frac{f - f_{min}}{f_{max} - f_{min}}
$$

### Standard scaling
Use mean value and standard deviation to scale. After this transformation the mean value will be zero and the standard deviation will be one.

$$
f_{new} = \frac{f - \overline f}{\sigma f}
$$

### Length normalization
The length of the feature vector will be one after this transformation.

$$
x_{new} = \frac{x}{| x |}
$$

### Other transformations
We may try logarithms, square root, etc...

## Missing values
If there are missing values in some data row or column, we could just remove those instances. This is considered the brute force approach and will work fine if we have a lot of data. A more sophisticated method is @(feature imputation)(feature-imputation).


## Evaluating
It is very fair to say that achieving a high accuracy for a model is you want in most cases, however, in some cases it is better to let a little "bad" data through. For spotting problems (X versus not-X) there are better success with a metrics of precision/recall instead of accuracy for this reason. Thus, having a metric producing confidence is probably better in these cases.

## Debugging
- Generalization of test data
- Train/test data mismatch
- The learning algorithm
- Adequate representation
- Enough data

# Hyperparameters

Hyperparameters control how learning algorithms work. In a decision tree the maximum depth is one hyperparameter. In neural networks two examples are the number of layers and the size of layers. A model often needs extensive tuning in order to work properly.

Scikit-learn provides some useful ways of determining hyperparameters @{grid_search}.

## Tuning
Tuning the hyperparameters could be very time-consuming and involve trial and error. There are however alternatives.

### Grid search
Grid search is one of them which is a brute force searching algorithm over a finite set of hyperparameter settings. All combinations are tested and the best is selected. This approach belongs to the more time-consuming ones. In a decision tree we could search for the best maximum tree depth.

### Random search
Random search @{bergstra} finds a set of hyperparameters with good performance a lot quicker than grid search. We define a distribution for each hyperparameter (thus we may need some understanding of how the hyperparameter work). We then iterate while picking samples randomly from each hyperparamter distribution.

### Other
There are more sophisticated methods as well @{snoek}.


# Evaluation

There are two types of evaluation @(intrinsic evaluation)(intrinsic-evaluation) and @(extrinsic evaluation)(extrinsic-evaluation). By comparing to a golden standard we do intrinsic evaluation.

## Classifiers
$$
\text{accuracy} = \frac{\text{number of correct}}{N}
$$

$$
\text{error rate} = \frac{\text{number of incorrect}}{N}
$$


### Confusion matrix
Confusion matrix are also one way to measure how the classifer interpret different classes, and their relations with each other @{confusion} @{wikiconfusion}.


### Precision and recall
Precision and recall are commonly used in various classifier problems for evaluation. Scikit-learn provides this functionality @{precision} @{recall}.
$$
P = \frac{TP}{TP + FP} \qquad R = \frac{TP}{TP + FN}
$$

### F-score
F-score is a combination of precision and recall @{f1}.
$$
F = \frac{2 \cdot P \cdot R}{P + R}
$$

### Sensitivity and specificity
$$
Sen = \frac{TP}{TP + FN} \qquad Spe = \frac{TN}{TN + FP}
$$

### True positive rate and false positive rate

$$
TPR = \frac{TP}{TP + FN} \qquad FPR = \frac{FP}{FP + TN}
$$

## Regressors

### Mean squared error

$$
MSE = \frac{1}{N} \sum_{i=1}^N (y_i - \hat y_i)^2
$$


### Mean absolute error

$$
MAE = \frac{1}{N} \sum_{i=1}^N |y_i - \hat y_i |
$$

### Coefficient of determination
Both $ MSE $ and $ MAE $ depend on scale which makes it hard to tell if the regressor behaves well, instead we can use the coefficient of determination


$$
R^2 = 1 - \frac{\sum_{i=1}^N (y_i - \hat y_i)^2}{\sum_{i=1}^N (y_i - \bar y)^2}
$$

## Loss versus quality metric
For regression, $ MSE $ is often used as both the quality metric and the loss function.

For classification we often use different metrics. The reason for this is that it is mathematically challenging to optimize the accuracy or the error rate.


# Neural networks

Neural networks are systems that are very useful for automatic learning of abstractions. Before neural network models were popular there were complicated machine learning pipelines which needed complex preprocessing transformation steps. Below is a list of well known neural networks.

https://medium.com/cracking-the-data-science-interview/a-gentle-introduction-to-neural-networks-for-machine-learning-d5f3f8987786

- Perceptron
@{perceptron}

- Convolutional Neural Networks
@{convolution}
@{convolution1998}

- Recurrent Neural Networks
@{rnn}

- Long / Short Term Memory
@{lstm}

- Gated Recurrent Unit
@{gru}

- Hopfiled Network
@{hop}

- Boltzmann Machine
@{boltz1}
@{boltz2}

- Deep Belief Networks
@{deep}

- Autoencoders
@{auto}

- Generative Adversarial Networks
@{gan}



## Pros
- A neural network model can express more complex relationships e.g. linear models
- They are better for problems where it is hard to define features, e.g. images.


## Cons
- The training process could be very demanding (because of structure and lots of training data)
- They can be difficult to train because of the quantity of hyperparameters
- Finding a solution may require luck because the training is less mathematical stable

## Linear model limitions
Some data sets can not be modeled with a linear classifier, a data set must be linearly separable to give perfect classifiction. Linear classifiers have problems predicting the XOR problem. To overcome this we can introduce more features and by applying some nonlinear transformation we can move the output space of the classes to a more or less linearly separable form.

## Where neural networks enter the scene
Instead of handcrafting new features to make the problem more linear separable, we could train a classifer using the output of previous "sub-classifiers", neurons.

## Multilayered model
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

## Training
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


# Dimensionality reduction

In short, dimensionality reduction is reducing a high-dimensional dataset into a low-dimensional dataset. This is used for getting a better understanding of the data via visualization, reducing the need for storage, make the algorithms run faster and the learning easier. One famous technique of dimensionality reduction is principle component analysis. It is based on finding new basis vectors that are ordered in a way so that the first principle component has the highest priority (we see most of the variance in that direction). @(Principle component analysis)(principle-component-analysis) (PCA) is implemented using the technique @(Singular value decomposition)(singular-value-decomposition) (SVD). There is more efficient ways to implement this, and Scikit-learn uses a technique called @(low-rank matrix factorization)(low-rank-matrix-factorization). Other techniques involving SGD could be easier to implement in pratice than the low-rank matrix factorization.

## t-SNE
Measures similarities to locals points (local structure). @{tsnegoogle} @{tsne}

## Applications
Recommender systems like the ones used in Netflix, YouTube or Amazon for example.

### Recommender system
Could be framed in different ways:
- binary classification
- regression
- ranking

There are two main approaches for building recommender system:
- $ content \space based $  recommend items that are similar to my selected items
- $ collaborative \space filtering $ recommend items that are similar to my history

#### Colloborative filtering
We can divide the feedback cycle into two categories:
- $ explicit $ could be some direct rating on some history item
- $ implicit $ could be any kind of interaction between items and the user

One problem with colloborative filtering is @(cold start)(cold-start). Matrix factorization in colloborative filtering is a bit different than when used in dimensionality reduction. Here it is used to predict and fill the missing cells. E.g. if we have user as a column vector and movies as a row vector we want to map each user to every movie with some probability of likeness.


### Word empeddings
Two high-level approaches to word empeddings:
- $ end \space to \space end \space training $ we train the embeddings in with other parts of the model. The embeddings will be specialized for this task.
- $ pre \space training $ we train the embeddings in a more general sense so we can use them in other applications

#### Pre-training
How can we pre-train word embeddings? In some sense, words that can be represented in similar contexts are assumed to have similar meanings and behave similarly. The model will thus build on this intuition. We could build on statistics, e.g. @(word-word co-occurrence matrix)(word-word-co-occurrence-matrix), and then use a matrix factorization step. GloVe @{glove} is a famous matrix-based word embedding training method.

# Ethics

[fairness video lecture](https://developers.google.com/machine-learning/crash-course/fairness/video-lecture)


[fairml](https://fairmlbook.org/introduction.html)

[fairness introduction google](https://christophm.github.io/interpretable-ml-book/intro.html)

[interpretability google](https://christophm.github.io/interpretable-ml-book/interpretability.html)


# References


{perceptron}:
    author: F. ROSENBLATT
    year: 1958
    title: THE   PERCEPTRON:   A  PROBABILISTIC  MODEL  FORINFORMATION   STORAGE  AND  ORGANIZATION IN  THE  BRAIN
    url: https://www.ling.upenn.edu/courses/cogs501/Rosenblatt1958.pdf

{convolution}:
    url:http://yann.lecun.com/exdb/lenet/

{convolution1998}:
    author: Yann LeCun
    year: 1998
    title: Gradient-Based Learning Applied to Document Recognition
    url: http://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf

{rnn}:
    author: Jeffrey L. Elman
    year: 1990
    title: Finding Structure in Time
    url: https://crl.ucsd.edu/~elman/Papers/fsit.pdf

{lstm}:
    author: Sepp Hochreiter and Jurgen Schimidhuber
    year: 1997
    title: Long Short-Term Memory
    url: https://www.bioinf.jku.at/publications/older/2604.pdf

{gru}:
    url: https://arxiv.org/pdf/1412.3555v1.pdf

{hop}:
    url: https://bi.snu.ac.kr/Courses/g-ai09-2/hopfield82.pdf

{boltz1}:
    url: https://papers.cnl.salk.edu/PDFs/Learning%20and%20Relearning%20in%20Boltzmann%20Machines%201986-3239.pdf

{boltz2}:
    url: http://proceedings.mlr.press/v5/salakhutdinov09a/salakhutdinov09a.pdf

{deep}:
    url: https://papers.nips.cc/paper/2006/file/5da713a690c067105aeb2fae32403405-Paper.pdf

{auto}:
    url: https://www.semanticscholar.org/paper/Auto-association-by-multilayer-perceptrons-and-Bourlard-Kamp/f5821548720901c89b3b7481f7500d7cd64e99bd

{gan}:
    url: https://arxiv.org/pdf/1406.2661v1.pdf

{confusion}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html

{wikiconfusion}:
    url: https://en.wikipedia.org/wiki/Confusion_matrix

{precision}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.precision_score.html

{recall}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.recall_score.html

{classreport}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.classification_report.html

{f1}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.f1_score.html

{feature_selection}:
    title: Feature selection
    url: https://scikit-learn.org/stable/modules/feature_selection.html

{preprocessing}:
    title: Preprocessing data
    url: https://scikit-learn.org/stable/modules/preprocessing.html

{stdscalar}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html

{minmaxscalar}:
    url: https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html

{grid_search}:
    title: Tuning the hyper-parameters of an estimator
    url: https://scikit-learn.org/stable/modules/grid_search.html

{bergstra}:
    author: James Bergstra and Yoshua Bengio
    year: 2012
    title: Random Search for Hyper-Parameter Optimization
    url: https://jmlr.csail.mit.edu/papers/volume13/bergstra12a/bergstra12a.pdf

{snoek}:
    author: Jasper Snoek, Hugo Larochelle and Ryan P. Adams
    year: 2012
    title: PRACTICAL BAYESIAN OPTIMIZATION OF MACHINE LEARNING ALGORITHMS
    url: https://arxiv.org/pdf/1206.2944.pdf

{tsnegoogle}:
    title: Visualizing Data Using t-SNE
    url: https://www.youtube.com/watch?v=RJVL80Gg3lA

{tsne}:
    title: t-distributed stochastic neighbor embedding
    url: https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding

{glove}:
    url: https://nlp.stanford.edu/projects/glove/