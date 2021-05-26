(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{GFca:function(e){e.exports=JSON.parse('{"generalization":"In machine learning generalization refers to how well a trained model is to classify unseen data.","generalization-gap":"Generalization gap is defined as the difference between the model\'s performance on training data versus unseen data from the same distribution.","prediction":"Predictions are machine learning model\'s way of mapping an input to an output.","training-data":"A training set is collected from a distribution very similar to how it will look when the model is put into practive. You usually split the collected data into training data and test data with the majority of that being the training data.","validation-set":"The model is evaluated on the validation set, which aims to be unbiased in comparison to the training set, while optimizing the model\'s hyperparameters. The validation set will become biased eventually because we tune the model to get as good performance as possible on that set.","test-set":"The test set is the final evaluation of the model and provides an unbiased final evaluation of the model. After a model is evaluated on the test set it should not be further optimzed because that will introduce bias.","induction":"Induction in machine learning is the process of inferring general rules from specific","regression":"A machine learning model for regression tries to map inputs to outputs in the continuous space instead of the discrete space which is used in classification.","classification":"A machine learning model for classification tries to identify which set of categories an observer belongs to. Thus mapping an input to and output in the discrete space. Binary classification is a special of multiclass classification where there is only two groups.","ranking":"It is a type of application of typically supervised, semi-supervised of reinforcement learning wherein the training data has some partial order between each item. The order is often induced by a numerical or ordinal score.","feature":"Within machine learning features are some individual measurable properties of a phenomenon. Features could be numberic, but also structural information as strings or graphs. Together they are used to build patterns which the machine learning model learns.","label":"In supervised or semi-supervised learning, a label is the corresponding output in the training data.","loss-function":"A loss function is formally a function that maps an event or some values to a real number with a cost associated with it, and the optimization algorithm tries to minimize that cost. There are different loss functions depending on the type of model. In regression problems the most common loss functions are @{lossreg}:- Mean absolute error (MAE)- Mean absolute percentage error (MAPE)- Mean squared error (MSE)- Root mean squared error (RMSE)- Huber loss- Log-cosh lossFor classification the most common loss functions are @{lossclass}:- Cross-entropy loss (or log loss)- Hinge loss- Squared hinge loss","parity":"A parity function is a boolean function whose values are 1 if the input vector has an off number of ones, else 0.","noise":"Noise in machine learning can be a wanted property or not depending on the problem. It may increse the complexity of the model and the time of learning which may degrade the performance. However, it may as well help generalize the model as in data augmentation.","supervised-learning":"Supervised learning is one of the major learning paradigms in machine learning. It requires that the training data is labeled. Thus a model tries to imitate by examples.","unsupervised-learning":"Unsupervised learning is one of the major learning paradigms in machine learning. Unlike supervised machine learning, unsupervised learning does not have any labeled data but must instead discover certain patterns about the data itself.","semi-supervised-learning":"Semi-supervised learning could be looked at as a mixture of supervised learning and unsupervised learning, that combines a small amount of labeled data with a large amount of unlabeled data during the training phase.","reinforcement-learning":"Reinforcement learning is one of the major learning paradigms in machine learning. It concerns how an agent should take actions in a defined enviroment in order to maximize the cumulative reward. The reward function is here the objective function.","cross-validation":"Cross-validation is a technique that is used to reduce the number of samples required for the training process of a model. The technique removes the need of a validation set. Instead one basic approach called k-fold cross-validation splits the training set into k smaller sets called folds. Each of these folds act like the validation set in turns for a total of k times. After cross-validation the model is evaulated on the test set as usual. The technique can be computationally heavy.","decision-tree":"A decision tree is a model that orders its weights in tree-based format where leaves represent class labels and branches represent conjuntions of features that lead to the different decisions. It is the branches that are updated in the training process. Decisions trees could be used in regression as well wherin the leaves represent a condition and the the branches usually correspond to yes or no given the validity of the condition. Decision trees are one of the more popular machine learning models because of their simplicity and interpretablility.","entropy":"Entropy is the measure of disorder, a measure of purity or homogeneity. Thus, it could be seen as how random the data points are in a distribution. Greater disorder results in lower impurity.","information-gain":"Entropy plays an important role in information gain. Information gain is known in information theory as the amount of information gained about a random variable from observing another random variable. In the context of decision trees it is a good measure for deciding whether a feature has relevance, although it is not perfect @{wikiinformationgain}.$$Entropy = - \\\\sum_{i=1}^n p_i * \\\\log_2 (p_i)$$","gini-score":"As in information gain entropy plays an important role here as well in determining how pure a set of data points are. It ranges between 0-1 where 0 expresses purity, namely, all data points belong to the same class, whereas 1 indicates a random distribution amoong the data points.$$Gini \\\\space score = 1 - \\\\sum_{i=1}^n (p_i)^2$$","ensemble":"- support vector- committee- weak learners- boosting- patch representation- bag of words (text representation)- shape representation- meta features- combinatorial transformations- logarithmic transformation- precision/recall metric- accuracy metric- f-measure- sensitivity/specificity metric- ROC curve- AUC score- development data- jack-knifing- imbalanced data- induced distribution- feature selection https://en.wikipedia.org/wiki/Feature_selection- predictive model- LASSO- elastic net- ridge regression- one-hot encoding- TF-IDF- mutual information- hyperparameters- grid search- black box optimization- automated machine learning (AutoML)- stacking- shallow decision tree- random forests- hypothesis space- linear classifiers- linearly separable- least-square regression- widrow-hoff- inter-annotator agreement- chance-corrected agreement measure- chance agreement probability- objective function- regularizer- unconstrained optimization- constrained optimization- gradient- batch- early stopping- logistic- sigmoid- tanh- ReLu- log odds- likelihood function- log loss- maximum a posteriori- Gaussian prior- Laplace prior- one-versus-rest- one-versus-one- softmax- cross-entropy loss- margin- structural risk minimization theorem- input units/nodes- hidden units/nodes- output units/nodes- activation- universal approximation theorem- minibatch- adaptive    - adam    - adagrad    - RMSProp- dropout- data augmentation- AdaBoost- gradient boosting- pseudo-residual- residual- learning rate- ensemble size- measure- downstream task- word error rate- BLEU- overlap-based metric- humans-in-the-loop- true positives- false positives- true negatives- false negatives- coefficient of determination- confidence score- search engine- ranking systems- precision at k- scorer- ranker- feature extraction- SIFT- translational invariance- spotting patterns- convolutinal filters- pooling- fully connected layers- dense layers- redidual connections- normalizations- kernel- feature map- vanishing gradients- exploding gradients- mathematical instability- batch normalization- transfer learning- freeze and unfreeze model- fine-tune model- catastrophic forgetting- clustering (flat and hierachical)- k-medoids- mean shift- Gaussian mixture- DBSCAN- agglomerative (clustering)- divisive (clustering)- evaluation (internal and external evaluation)- silhoutte score- purity score- inverse purity score- residual sum of squares- NP-hard- elbow method- density-based clustering methods- core point- noise point or outlier- matrix factorization- low rank matrix factorization- autoregressive model (time series)- exogenous (ARX)- sequence-to-sequence- attention model- transformer (the BERT model)- induction- histogram- loss function  - squared loss  - absolute loss  - zero/one loss","bias":"","nonresponse-bias":"","stacking":"","bagging":"Is also called bootstrap aggregation. It is a technique for reducing variances for estimated prediction functions and does so by averaging a number of noisy but approximately unbiased models.","spinning":"Based on the same idea as bagging and is also called feature bagging or random subspace learning.","inductive-bias":"The preference for one distinction over another. If the inductive bias is too far away from the concept that is being learned, the whole learning might fail.","normalization":"Is a good way of keeping the data consistent. There are two basic types of normalization: example and feature normalization.","feature-normalization":"Go through every feature and apply the same adjustment across all examples. There are two standard techniques to use: centering and scaling. Centering to keep the data set close around the origin. Scaling to make sure each feature has variance 1 across the training data.","example-normalization":"Go through every feature but adjust them individually. The standard technique is to make sure that each feature vector has the length of one. The advantages of example normalization is that comparisons between data sets are more straightforward.","approximation-error":"Will measure how well the model family is performing.","estimation-error":"Will measure how far off one classifer is from the optimal classifier of that type.","bias-variance-trade-off":"The trade-off between approximation and estimation error is usually called the bias/variance trade-off. The bias corresponding to the approximation error and the variance corrsponding to the estimation error.","imbalanced-data":"The imbalanced data problem refers to the problem where the distribution from which the data is taken has an imbalance. This is not good because machine learning algorithms will try to minimize the error, and thus, predict in favor of the imbalance majority. They can often achieve really good results by doing nothing. Hence, you probably not care about predicting accuracy.","feature-selection":"","embedded-methods":"Embedded methods are used to learn which features best contribute to the learning of a model while it is being created. Common methods are regularization methods.","regularization-methods":"Regularization methods or penalization methods introduce additional constraints which makes the model bias toward fewer constraints.","feature-imputation":"It will try to fill any missing data. We could replace the missing value with a constant (e.g. the mean value), a random value or a prediction from the other values.","the-widrow-hoff-algorithm":"```pythonw = [0, ..., 0]for i in range(N): # N epochs    for (x[i], y[i]) in the training set        g = w * x[i]        error = g - y[i]        w = w - learning_rate * error * x[i]return w```","crowdsourcing":"A common technique for annotating data. It uses a large pool of non-expert annotators to annotate the data.","deep-learning":"Deep learning is a neural network with many hidden layers. The universal approximation theorem states that one hidden layers should be enough to approximate any function, but it is often more practical to stack many hidden layers on each other.","backpropagation":"Backpropagation is the trick of using the gradients of the weights of layers occuring later in the hierarchy to compute the gradient when using the chain rule.","intrinsic-evaluation":"Intrinsic evaluation is the performance measured in isolation using some metric computed automatically.","extrinsic-evaluation":"How does one change to the predictor affect the performance?","f-score":"The F-score may refer to a clustering method or a classification method.","k-means":"K-means is probably the most popular technique for clustering and the idea behind it is to find a set of K clusters such that each data point is close to its centroid (mean vector).","lloyd\'s-algorithm":"```pythonwhile clusters don\'t change:    insert x_i to cluster S_k    recompute cluster centroids for each S_kreturn [S_1...S_k]```","the-elbow-method":"When we use k-means for some clustering problem and want to choose the number of clusters we wish the algorithm should find, the elbow method presumes that there are some natural cluster optima. The loss function will drop quickly until we reach this optima, but increasing the numbers more will have diminishing returns. If we plot the number of clusters and the loss, we know we can apply the elbow method if the curve looks like an elbow.","principle-component-analysis":"Principle component analysis (PCA)","singular-value-decomposition":"Singular value decomposition (SVD)","low-rank-matrix-factorization":"A more space efficient technique for implementing PCA.","cold-start":"How to we handle new users and new items in colloborative filtering?","word-embeddings":"We represent words for NNs using a low-dimensional representation of real numbers.","word-word-co-occurrence-matrix":"We count the occurrence of words occurring together.","reduction":"Reduction in machine learning means that we convert a complictated problem into a bunch of simpler problems.","part-of-speech-tagging":"Input a sequence of word tokens and output a sequence of grammatical tags corresponding to each token.","imitation-learning":"A paradigm in machine learning where the model tries to imitate an \\"expert\\".","feedforward-neural-network":"Consists of connected layers of \\"classifiers\\" where intermediate classifiers are called hidden units and the final classifier is called output unit. Each hidden unit is computed by$$h_i = f(\\\\pmb w_{h_i} \\\\cdot \\\\pmb x)$$and the output is computed by$$y = f(\\\\pmb w_o \\\\cdot \\\\pmb h)$$$ f $ is the activation function.","multilayer-perceptron":"See [Feedforward neural network](#Feedforward-neural-network).","recurrent-neural-networks":"They use states to represent previous events. After each step the state vector is recalculated.","references":"{lossreg}:    url: https://medium.com/analytics-vidhya/a-comprehensive-guide-to-loss-functions-part-1-regression-ff8b847675d6{lossclass}:    url: https://medium.com/analytics-vidhya/common-loss-functions-in-machine-learning-for-classification-model-931cbf564d42{wikiinformationgain}:    url: https://en.wikipedia.org/wiki/Information_gain_in_decision_trees#Drawbacks","null-hypothesis":"","statistically-significant":"The result is probably not due to random luck."}')},emR8:function(e,t,a){},p6fO:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a("q1tI"),i=a.n(n),o=a("s/Ur"),r=a("7oih"),s=a("rY4l"),l=a("wsO/"),c=a("5Wrh"),d=a("GFca"),m=(a("vg9a"),a("HCaw"),a("emR8"),function(e){var t=e.className,a=void 0===t?"":t,n=e.name,o=e.link,r=e.section,s=e.children,l=void 0===s?[]:s,c=e.setPosX,d=e.isTabletOrMobile,m=void 0!==d&&d;return i.a.createElement("li",null,i.a.createElement("a",{href:"#"+o,onClick:function(e){m&&c(0)}},i.a.createElement("span",{className:("node "+a).trim()},i.a.createElement("div",{className:"node-bar"}),i.a.createElement("div",{className:"visibility-box"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"status"}," "),i.a.createElement("p",null,n))),l.length>0?i.a.createElement("ul",null,l):i.a.createElement(i.a.Fragment,null))}),u=function(e){var t=e.header,a=e.style,n=e.posX,o=e.setPosX;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"content-tree",style:a},i.a.createElement("div",{style:{display:n>=95?"flex":"",justifyContent:"space-evenly"}},i.a.createElement(l.a,{className:"file",style:{flex:"1 1 auto"}}),n>=95?i.a.createElement(c.c,{style:{width:"30px",position:"relative",left:"0px"},onListClick:function(e){return p(e,n,o,!1)}}):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",{className:"content-tree-container"},i.a.createElement("ul",{className:"content-ul"},t))))},h=function(e){var t=e.setPosX,a=e.style,n=function e(t){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",o)},o=function(e){e.preventDefault(),t(e.pageX/window.innerWidth*100)};return i.a.createElement("div",{className:"slider",onMouseDown:function(e){0===e.button&&(e.preventDefault(),document.addEventListener("mouseup",n),document.addEventListener("mousemove",o))},style:a})},p=function(e,t,a,n){a(t<5?n?100:25:0)};function f(e){var t=e.data,a=Object(n.useState)(0),l=a[0],c=a[1],f=Object(n.useState)([]),g=f[0],b=f[1],v=t.markdownRemark,w=v.frontmatter,y=v.html,k=Object(o.useMediaQuery)({query:"(max-width: 1224px)"});return Object(n.useEffect)((function(){for(var e=document.getElementsByClassName("keyword-link"),t=function(t){var a=e[t].id.split("-").slice(2).join("-"),n=document.createElement("div"),i=document.createElement("div");n.appendChild(i),n.className="keyword-popup",i.innerHTML=d[a],e[t].addEventListener("mouseenter",(function(){var a=e[t].getBoundingClientRect().x<window.innerWidth/2;n.style.left=a?"0px":"auto",n.style.right=a?"auto":"0px",e[t].appendChild(n)})),e[t].addEventListener("mouseleave",(function(){e[t].removeChild(n)}))},a=0;a<e.length;a++)t(a)}),[]),Object(n.useEffect)((function(){b(function e(t,a,n,o,r){void 0===n&&(n=!1),void 0===o&&(o=1),void 0===r&&(r="");for(var s=[],l=1!==o?r+".":"",c=1;t.length>0;){var d=t.shift(),u=1===d.depth?"root":"";if(d.depth<o)return t.unshift(d),s;if(0===t.length)s.push(i.a.createElement(m,{key:d.link,className:"last "+u,name:d.name,link:d.link,section:""+l+c,setPosX:a,isTabletOrMobile:n}));else if(t[0].depth>d.depth){var h=e(t,a,n,t[0].depth,""+l+c),p=t.length>0&&t[0].depth<d.depth?"last":"";s.push(i.a.createElement(m,{key:d.link,className:p+" "+u,name:d.name,link:d.link,section:""+l+c,children:h,setPosX:a,isTabletOrMobile:n}))}else{if(t[0].depth!==d.depth)return s.push(i.a.createElement(m,{key:d.link,className:"last",name:d.name,link:d.link,section:""+l+c,setPosX:a,isTabletOrMobile:n})),s;s.push(i.a.createElement(m,{key:d.link,className:u,name:d.name,link:d.link,section:""+l+c,setPosX:a,isTabletOrMobile:n}))}c+=1}return s}(JSON.parse(JSON.stringify(w.header)),c,k))}),[w.header,k]),Object(n.useEffect)((function(){c(k?0:25)}),[k]),i.a.createElement(r.a,null,i.a.createElement(u,{header:g,style:{width:l+"%"},posX:l,setPosX:c}),i.a.createElement(h,{setPosX:c,style:{left:l+"%"}}),i.a.createElement("div",{className:"content-container",style:{width:"calc("+(100-l)+"% - 2px)"}},i.a.createElement(s.b,{siteTitle:w.title,parent:w.slug.substring(0,w.slug.lastIndexOf("/")),onTreeViewClick:function(e){return p(e,l,c,k)}}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:y}}),i.a.createElement("footer",{style:{height:"50px"}}))))}},vg9a:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-file-js-ef820c542a1b73ab8dca.js.map