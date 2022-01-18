---
slug: /image-analysis
tags: []
lastModified: 2022-01-18
created: 2022-01-18
title: Image Analysis
header: [{"depth":1,"name":"Image processing","link":"Image-processing"},{"depth":2,"name":"Linear filtering","link":"Linear-filtering"},{"depth":2,"name":"Non-linear filtering","link":"Non-linear-filtering"},{"depth":1,"name":"Feature detection","link":"Feature-detection"},{"depth":2,"name":"Feature detectors","link":"Feature-detectors"},{"depth":2,"name":"Feature descriptors","link":"Feature-descriptors"},{"depth":2,"name":"Verification of matches","link":"Verification-of-matches"},{"depth":2,"name":"Feature tracking","link":"Feature-tracking"}]
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