---
slug: /image-analysis
tags: []
lastModified: 2022-03-03
created: 2022-01-18
title: Image Analysis
header: [{"depth":1,"name":"Image processing","link":"Image-processing"},{"depth":2,"name":"Linear filtering","link":"Linear-filtering"},{"depth":2,"name":"Non-linear filtering","link":"Non-linear-filtering"},{"depth":1,"name":"Feature detection","link":"Feature-detection"},{"depth":2,"name":"Feature detectors","link":"Feature-detectors"},{"depth":2,"name":"Feature descriptors","link":"Feature-descriptors"},{"depth":2,"name":"Verification of matches","link":"Verification-of-matches"},{"depth":2,"name":"Feature tracking","link":"Feature-tracking"},{"depth":1,"name":"Camera","link":"Camera"},{"depth":2,"name":"2D point","link":"2D-point"},{"depth":2,"name":"Homogeneous coordinates","link":"Homogeneous-coordinates"},{"depth":2,"name":"De-homogeneous coordinates","link":"De-homogeneous-coordinates"},{"depth":2,"name":"Basic set of 2D transformations","link":"Basic-set-of-2D-transformations"},{"depth":3,"name":"Translation + rotation","link":"Translation-+-rotation"},{"depth":3,"name":"Scaled rotation","link":"Scaled-rotation"},{"depth":3,"name":"Affine","link":"Affine"},{"depth":3,"name":"Projective","link":"Projective"},{"depth":2,"name":"Orthography","link":"Orthography"},{"depth":2,"name":"Homography","link":"Homography"},{"depth":2,"name":"General intrinsic camera calibration matrix","link":"General-intrinsic-camera-calibration-matrix"},{"depth":2,"name":"Relative pose estimation","link":"Relative-pose-estimation"},{"depth":3,"name":"Epipolar geometry","link":"Epipolar-geometry"},{"depth":4,"name":"The essential matrix","link":"The-essential-matrix"},{"depth":4,"name":"The fundamental matrix","link":"The-fundamental-matrix"}]
---

# Image processing

## Linear filtering

## Non-linear filtering

# Feature detection

##  Feature detectors

1. Point features
- Aperture problem
- spatially varying weighting (or window) function: https://en.wikipedia.org/wiki/Window_function
- auto-correlation function or surface
- Adaptive non-maximal suppression (ANMS).
- Measuring repeatability.
- Scale invariance
- SIFT
- Rotational invariance and orientation estimation
    - dominant orientation
- aggregation window vs detection window
- Affine invariance

## Feature descriptors
Feature descriptors are used to match keypoints retrieved by feature detection algorithms in different images. When we have extracted descriptors from each feature in at least two images, we begin by selecting a **matching strategy** (determined by the context, e.g. image stitching, object detecting, etc) that determines which correspondences that are qualified to the next stage for further processing. To perform matching as efficiently as possible the second step is to select performant **data structures** for the corresponding problem.
1. Bias and gain normalization (MOPS).
- Scale invariant feature transform (SIFT) : https://en.wikipedia.org/wiki/Scale-invariant_feature_transform
- PCA-SIFT.
- Gradient location-orientation histogram (GLOH).
- Steerable filters.
- ROC curve
    - the use of TP (true positives), FP (false positive), TN (true negatives), and FN (false negatives) when measuring the performance of the matching strategy.
- Nearest Neighbor Distance Ratio (NNDR)
- Efficient matching
    - indexing structure can be used (hash maps)
    - multi-dimensional hashing
    - locality sensitive hashing
    - parameter sensitive hashing
    - k-d trees

## Verification of matches
When we have gotten matches from the above steps we can use geometric alignment to verify **inliers** and **outliers** in the matches.
1. Random sampling (RANSAC)

## Feature tracking
Instead of independently finding features in images and then match them with each other, we could find likely feature locations in the first image and search in these locations in the next images. Commonly used in video tracking applications.



# Camera

## 2D point
$$
\bold x = \begin{bmatrix}
    x  \\
    y \\
\end{bmatrix}
$$

## Homogeneous coordinates

Homogeneous coordinates are given on the form

$$
\begin{bmatrix}
    x \\
    y \\
\end{bmatrix} \to
w \cdot \begin{bmatrix}
    x \\
    y \\
    1 \\
\end{bmatrix}, \qquad w \neq 0
$$

## De-homogeneous coordinates

$$
\begin{bmatrix}
    x \\
    y \\
    w \\
\end{bmatrix} \to
\begin{bmatrix}
    x/w \\
    y/w \\
\end{bmatrix}
$$

## Basic set of 2D transformations

Basic transformation with homogeneous coordinates.

### Translation + rotation
$$
\tilde \bold x = \begin{bmatrix}
    \cos \theta & -\sin \theta & t_x \\
    \sin \theta & \cos \theta & t_y \\
\end{bmatrix}
\bold x
$$
### Scaled rotation
$$
\tilde \bold x = \begin{bmatrix}
    a & -b & t_x \\
    b & a & t_y \\
\end{bmatrix}
\bold x
$$
### Affine
$$
\tilde \bold x = \begin{bmatrix}
    a_{00} & a_{01} & a_{02} \\
    a_{10} & a_{11} & a_{12} \\
\end{bmatrix}
\bold x
$$

### Projective
Projective is also known as homography.

## Orthography
Contrary to how projective projection, orthographic projection simply drops the z component of a three-dimensional coordinate to obtain the 2D point.

## Homography
Homography is the technique of using projection mapping with the homogeneous coordinates to achieve the transformation. It is written like this

$$
\begin{bmatrix}
    \tilde x \\
    \tilde y \\
    \tilde w \\
\end{bmatrix} =
\begin{bmatrix}
    a & b & c \\
    d & e & f \\
    g & h & i \\
\end{bmatrix}
\begin{bmatrix}
    x \\
    y \\
    w \\
\end{bmatrix}
$$

It could also be written like this
$$
\tilde x = H x
$$
It is required that

1. H needs to be invertible
- H has 8 Degrees-of-Freedom (DoF)

To apply the transformation, we first transform the coordinates to homogeneous coordinates. Then we use homography on the coordinates. Then we transform the coordinates back by de-homogenzing them.


## General intrinsic camera calibration matrix

$$
K = \begin{bmatrix}
    f & s & p_x \\
    0 & \alpha f & p_y \\
    0 & 0 & 1 \\
\end{bmatrix}
$$

## Relative pose estimation

### Epipolar geometry

#### The essential matrix
#### The fundamental matrix



