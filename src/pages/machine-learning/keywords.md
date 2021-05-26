---
slug: /machine-learning/keywords
tags: ["machine-learning", "keywords"]
lastModified: 2021-05-26
created: 2021-03-22
title: Keywords
header: [{"depth":1,"name":"Generalization","link":"Generalization"},{"depth":1,"name":"Generalization gap","link":"Generalization-gap"},{"depth":1,"name":"Prediction","link":"Prediction"},{"depth":1,"name":"Training data","link":"Training-data"},{"depth":1,"name":"Validation set","link":"Validation-set"},{"depth":1,"name":"Test set","link":"Test-set"},{"depth":1,"name":"Induction","link":"Induction"},{"depth":1,"name":"Regression","link":"Regression"},{"depth":1,"name":"Classification","link":"Classification"},{"depth":1,"name":"Ranking","link":"Ranking"},{"depth":1,"name":"Feature","link":"Feature"},{"depth":1,"name":"Label","link":"Label"},{"depth":1,"name":"Loss function","link":"Loss-function"},{"depth":1,"name":"Parity","link":"Parity"},{"depth":1,"name":"Noise","link":"Noise"},{"depth":1,"name":"Supervised learning","link":"Supervised-learning"},{"depth":1,"name":"Unsupervised learning","link":"Unsupervised-learning"},{"depth":1,"name":"Semi-supervised learning","link":"Semi-supervised-learning"},{"depth":1,"name":"Reinforcement learning","link":"Reinforcement-learning"},{"depth":1,"name":"Cross-validation","link":"Cross-validation"},{"depth":1,"name":"Decision tree","link":"Decision-tree"},{"depth":2,"name":"Entropy","link":"Entropy"},{"depth":2,"name":"Information gain","link":"Information-gain"},{"depth":2,"name":"Gini score","link":"Gini-score"},{"depth":1,"name":"Bias","link":"Bias"},{"depth":1,"name":"Nonresponse bias","link":"Nonresponse-bias"},{"depth":1,"name":"Stacking","link":"Stacking"},{"depth":1,"name":"Bagging","link":"Bagging"},{"depth":1,"name":"Spinning","link":"Spinning"},{"depth":1,"name":"Inductive bias","link":"Inductive-bias"},{"depth":1,"name":"Normalization","link":"Normalization"},{"depth":2,"name":"Feature normalization","link":"Feature-normalization"},{"depth":2,"name":"Example normalization","link":"Example-normalization"},{"depth":1,"name":"Approximation error","link":"Approximation-error"},{"depth":1,"name":"Estimation error","link":"Estimation-error"},{"depth":1,"name":"Bias-variance trade-off","link":"Bias-variance-trade-off"},{"depth":1,"name":"Imbalanced data","link":"Imbalanced-data"},{"depth":1,"name":"Feature selection","link":"Feature-selection"},{"depth":1,"name":"Embedded methods","link":"Embedded-methods"},{"depth":1,"name":"Regularization methods","link":"Regularization-methods"},{"depth":1,"name":"Feature imputation","link":"Feature-imputation"},{"depth":1,"name":"The Widrow-Hoff algorithm","link":"The-Widrow-Hoff-algorithm"},{"depth":1,"name":"Crowdsourcing","link":"Crowdsourcing"},{"depth":1,"name":"Deep learning","link":"Deep-learning"},{"depth":1,"name":"Backpropagation","link":"Backpropagation"},{"depth":1,"name":"Intrinsic evaluation","link":"Intrinsic-evaluation"},{"depth":1,"name":"Extrinsic evaluation","link":"Extrinsic-evaluation"},{"depth":1,"name":"F-score","link":"F-score"},{"depth":1,"name":"K-means","link":"K-means"},{"depth":1,"name":"Lloyd's algorithm","link":"Lloyd's-algorithm"},{"depth":1,"name":"The elbow method","link":"The-elbow-method"},{"depth":1,"name":"Principle component analysis","link":"Principle-component-analysis"},{"depth":1,"name":"Singular value decomposition","link":"Singular-value-decomposition"},{"depth":1,"name":"Low-rank matrix factorization","link":"Low-rank-matrix-factorization"},{"depth":1,"name":"Cold start","link":"Cold-start"},{"depth":1,"name":"Word embeddings","link":"Word-embeddings"},{"depth":1,"name":"Word-word co-occurrence matrix","link":"Word-word-co-occurrence-matrix"},{"depth":1,"name":"Reduction","link":"Reduction"},{"depth":1,"name":"Part-of-speech tagging","link":"Part-of-speech-tagging"},{"depth":1,"name":"Imitation learning","link":"Imitation-learning"},{"depth":1,"name":"Feedforward neural network","link":"Feedforward-neural-network"},{"depth":1,"name":"Multilayer perceptron","link":"Multilayer-perceptron"},{"depth":1,"name":"Recurrent neural networks","link":"Recurrent-neural-networks"},{"depth":1,"name":"References","link":"References"}]
---

# Generalization
In machine learning generalization refers to how well a trained model is to classify unseen data.

# Generalization gap
Generalization gap is defined as the difference between the model's performance on training data versus unseen data from the same distribution.

# Prediction
Predictions are machine learning model's way of mapping an input to an output.

# Training data
A training set is collected from a distribution very similar to how it will look when the model is put into practive. You usually split the collected data into training data and test data with the majority of that being the training data.

# Validation set
The model is evaluated on the validation set, which aims to be unbiased in comparison to the training set, while optimizing the model's hyperparameters. The validation set will become biased eventually because we tune the model to get as good performance as possible on that set.

# Test set
The test set is the final evaluation of the model and provides an unbiased final evaluation of the model. After a model is evaluated on the test set it should not be further optimzed because that will introduce bias.

# Induction
Induction in machine learning is the process of inferring general rules from specific

# Regression
A machine learning model for regression tries to map inputs to outputs in the continuous space instead of the discrete space which is used in classification.


# Classification
A machine learning model for classification tries to identify which set of categories an observer belongs to. Thus mapping an input to and output in the discrete space. Binary classification is a special of multiclass classification where there is only two groups.


# Ranking
It is a type of application of typically supervised, semi-supervised of reinforcement learning wherein the training data has some partial order between each item. The order is often induced by a numerical or ordinal score.

# Feature
Within machine learning features are some individual measurable properties of a phenomenon. Features could be numberic, but also structural information as strings or graphs. Together they are used to build patterns which the machine learning model learns.

# Label
In supervised or semi-supervised learning, a label is the corresponding output in the training data.

# Loss function
A loss function is formally a function that maps an event or some values to a real number with a cost associated with it, and the optimization algorithm tries to minimize that cost. There are different loss functions depending on the type of model. In regression problems the most common loss functions are @{lossreg}:
- Mean absolute error (MAE)
- Mean absolute percentage error (MAPE)
- Mean squared error (MSE)
- Root mean squared error (RMSE)
- Huber loss
- Log-cosh loss

For classification the most common loss functions are @{lossclass}:
- Cross-entropy loss (or log loss)
- Hinge loss
- Squared hinge loss


# Parity
A parity function is a boolean function whose values are 1 if the input vector has an off number of ones, else 0.

# Noise
Noise in machine learning can be a wanted property or not depending on the problem. It may increse the complexity of the model and the time of learning which may degrade the performance. However, it may as well help generalize the model as in data augmentation.

# Supervised learning
Supervised learning is one of the major learning paradigms in machine learning. It requires that the training data is labeled. Thus a model tries to imitate by examples.

# Unsupervised learning
Unsupervised learning is one of the major learning paradigms in machine learning. Unlike supervised machine learning, unsupervised learning does not have any labeled data but must instead discover certain patterns about the data itself.

# Semi-supervised learning
Semi-supervised learning could be looked at as a mixture of supervised learning and unsupervised learning, that combines a small amount of labeled data with a large amount of unlabeled data during the training phase.

# Reinforcement learning
Reinforcement learning is one of the major learning paradigms in machine learning. It concerns how an agent should take actions in a defined enviroment in order to maximize the cumulative reward. The reward function is here the objective function.

# Cross-validation
Cross-validation is a technique that is used to reduce the number of samples required for the training process of a model. The technique removes the need of a validation set. Instead one basic approach called k-fold cross-validation splits the training set into k smaller sets called folds. Each of these folds act like the validation set in turns for a total of k times. After cross-validation the model is evaulated on the test set as usual. The technique can be computationally heavy.

# Decision tree
A decision tree is a model that orders its weights in tree-based format where leaves represent class labels and branches represent conjuntions of features that lead to the different decisions. It is the branches that are updated in the training process. Decisions trees could be used in regression as well wherin the leaves represent a condition and the the branches usually correspond to yes or no given the validity of the condition. Decision trees are one of the more popular machine learning models because of their simplicity and interpretablility.

## Entropy
Entropy is the measure of disorder, a measure of purity or homogeneity. Thus, it could be seen as how random the data points are in a distribution. Greater disorder results in lower impurity.

## Information gain
Entropy plays an important role in information gain. Information gain is known in information theory as the amount of information gained about a random variable from observing another random variable. In the context of decision trees it is a good measure for deciding whether a feature has relevance, although it is not perfect @{wikiinformationgain}.

$$
Entropy = - \sum_{i=1}^n p_i * \log_2 (p_i)
$$

## Gini score
As in information gain entropy plays an important role here as well in determining how pure a set of data points are. It ranges between 0-1 where 0 expresses purity, namely, all data points belong to the same class, whereas 1 indicates a random distribution amoong the data points.

$$
Gini \space score = 1 - \sum_{i=1}^n (p_i)^2
$$

# Ensemble


- support vector
- committee
- weak learners
- boosting
- patch representation
- bag of words (text representation)
- shape representation
- meta features
- combinatorial transformations
- logarithmic transformation
- precision/recall metric
- accuracy metric
- f-measure
- sensitivity/specificity metric
- ROC curve
- AUC score
- development data
- jack-knifing
- imbalanced data
- induced distribution
- feature selection https://en.wikipedia.org/wiki/Feature_selection
- predictive model
- LASSO
- elastic net
- ridge regression
- one-hot encoding
- TF-IDF
- mutual information
- hyperparameters
- grid search
- black box optimization
- automated machine learning (AutoML)
- stacking
- shallow decision tree
- random forests
- hypothesis space
- linear classifiers
- linearly separable
- least-square regression
- widrow-hoff
- inter-annotator agreement
- chance-corrected agreement measure
- chance agreement probability
- objective function
- regularizer
- unconstrained optimization
- constrained optimization
- gradient
- batch
- early stopping
- logistic
- sigmoid
- tanh
- ReLu
- log odds
- likelihood function
- log loss
- maximum a posteriori
- Gaussian prior
- Laplace prior
- one-versus-rest
- one-versus-one
- softmax
- cross-entropy loss
- margin
- structural risk minimization theorem

- input units/nodes
- hidden units/nodes
- output units/nodes
- activation
- universal approximation theorem
- minibatch
- adaptive
    - adam
    - adagrad
    - RMSProp
- dropout
- data augmentation
- AdaBoost
- gradient boosting
- pseudo-residual
- residual
- learning rate
- ensemble size
- measure
- downstream task
- word error rate
- BLEU
- overlap-based metric
- humans-in-the-loop
- true positives
- false positives
- true negatives
- false negatives
- coefficient of determination
- confidence score
- search engine
- ranking systems
- precision at k
- scorer
- ranker
- feature extraction
- SIFT
- translational invariance
- spotting patterns
- convolutinal filters
- pooling
- fully connected layers
- dense layers
- redidual connections
- normalizations
- kernel
- feature map
- vanishing gradients
- exploding gradients
- mathematical instability
- batch normalization
- transfer learning
- freeze and unfreeze model
- fine-tune model
- catastrophic forgetting
- clustering (flat and hierachical)
- k-medoids
- mean shift
- Gaussian mixture
- DBSCAN
- agglomerative (clustering)
- divisive (clustering)
- evaluation (internal and external evaluation)
- silhoutte score
- purity score
- inverse purity score
- residual sum of squares
- NP-hard
- elbow method
- density-based clustering methods
- core point
- noise point or outlier
- matrix factorization
- low rank matrix factorization
- autoregressive model (time series)
- exogenous (ARX)
- sequence-to-sequence
- attention model
- transformer (the BERT model)
- induction
- histogram
- loss function
  - squared loss
  - absolute loss
  - zero/one loss


# Bias

# Nonresponse bias

# Stacking

# Bagging
Is also called bootstrap aggregation. It is a technique for reducing variances for estimated prediction functions and does so by averaging a number of noisy but approximately unbiased models.

# Spinning
Based on the same idea as bagging and is also called feature bagging or random subspace learning.

# Inductive bias
The preference for one distinction over another. If the inductive bias is too far away from the concept that is being learned, the whole learning might fail.

# Normalization
Is a good way of keeping the data consistent. There are two basic types of normalization: example and feature normalization.

## Feature normalization
Go through every feature and apply the same adjustment across all examples. There are two standard techniques to use: centering and scaling. Centering to keep the data set close around the origin. Scaling to make sure each feature has variance 1 across the training data.

## Example normalization
Go through every feature but adjust them individually. The standard technique is to make sure that each feature vector has the length of one. The advantages of example normalization is that comparisons between data sets are more straightforward.

# Approximation error
Will measure how well the model family is performing.

# Estimation error
Will measure how far off one classifer is from the optimal classifier of that type.

# Bias-variance trade-off
The trade-off between approximation and estimation error is usually called the bias/variance trade-off. The bias corresponding to the approximation error and the variance corrsponding to the estimation error.

# Imbalanced data
The imbalanced data problem refers to the problem where the distribution from which the data is taken has an imbalance. This is not good because machine learning algorithms will try to minimize the error, and thus, predict in favor of the imbalance majority. They can often achieve really good results by doing nothing. Hence, you probably not care about predicting accuracy.

# Feature selection


# Embedded methods
Embedded methods are used to learn which features best contribute to the learning of a model while it is being created. Common methods are regularization methods.

# Regularization methods
Regularization methods or penalization methods introduce additional constraints which makes the model bias toward fewer constraints.

# Feature imputation
It will try to fill any missing data. We could replace the missing value with a constant (e.g. the mean value), a random value or a prediction from the other values.

# The Widrow-Hoff algorithm
```python
w = [0, ..., 0]
for i in range(N): # N epochs
    for (x[i], y[i]) in the training set
        g = w * x[i]
        error = g - y[i]
        w = w - learning_rate * error * x[i]
return w
```

# Crowdsourcing
A common technique for annotating data. It uses a large pool of non-expert annotators to annotate the data.

# Deep learning
Deep learning is a neural network with many hidden layers. The universal approximation theorem states that one hidden layers should be enough to approximate any function, but it is often more practical to stack many hidden layers on each other.

# Backpropagation
Backpropagation is the trick of using the gradients of the weights of layers occuring later in the hierarchy to compute the gradient when using the chain rule.

# Intrinsic evaluation
Intrinsic evaluation is the performance measured in isolation using some metric computed automatically.

# Extrinsic evaluation
How does one change to the predictor affect the performance?

# F-score
The F-score may refer to a clustering method or a classification method.

# K-means
K-means is probably the most popular technique for clustering and the idea behind it is to find a set of K clusters such that each data point is close to its centroid (mean vector).

# Lloyd's algorithm
```python
while clusters don't change:
    insert x_i to cluster S_k
    recompute cluster centroids for each S_k
return [S_1...S_k]
```

# The elbow method
When we use k-means for some clustering problem and want to choose the number of clusters we wish the algorithm should find, the elbow method presumes that there are some natural cluster optima. The loss function will drop quickly until we reach this optima, but increasing the numbers more will have diminishing returns. If we plot the number of clusters and the loss, we know we can apply the elbow method if the curve looks like an elbow.

# Principle component analysis
Principle component analysis (PCA)


# Singular value decomposition
Singular value decomposition (SVD)

# Low-rank matrix factorization
A more space efficient technique for implementing PCA.

# Cold start
How to we handle new users and new items in colloborative filtering?

# Word embeddings
We represent words for NNs using a low-dimensional representation of real numbers.

# Word-word co-occurrence matrix
We count the occurrence of words occurring together.

# Reduction
Reduction in machine learning means that we convert a complictated problem into a bunch of simpler problems.

# Part-of-speech tagging
Input a sequence of word tokens and output a sequence of grammatical tags corresponding to each token.

# Imitation learning
A paradigm in machine learning where the model tries to imitate an "expert".

# Feedforward neural network
Consists of connected layers of "classifiers" where intermediate classifiers are called hidden units and the final classifier is called output unit. Each hidden unit is computed by

$$
h_i = f(\pmb w_{h_i} \cdot \pmb x)
$$

and the output is computed by

$$
y = f(\pmb w_o \cdot \pmb h)
$$

$ f $ is the activation function.

# Multilayer perceptron
See [Feedforward neural network](#Feedforward-neural-network).

# Recurrent neural networks
They use states to represent previous events. After each step the state vector is recalculated.



# References

{lossreg}:
    url: https://medium.com/analytics-vidhya/a-comprehensive-guide-to-loss-functions-part-1-regression-ff8b847675d6

{lossclass}:
    url: https://medium.com/analytics-vidhya/common-loss-functions-in-machine-learning-for-classification-model-931cbf564d42

{wikiinformationgain}:
    url: https://en.wikipedia.org/wiki/Information_gain_in_decision_trees#Drawbacks