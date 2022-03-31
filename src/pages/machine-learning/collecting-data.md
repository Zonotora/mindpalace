---
slug: /machine-learning/collecting-data
tags: []
lastModified: 2021-04-19
created: 2021-04-17
title: Collecting Data
header: [{"depth":1,"name":"Overview","link":"Overview"},{"depth":1,"name":"Collecting","link":"Collecting"},{"depth":2,"name":"Stratification and weighting","link":"Stratification-and-weighting"},{"depth":2,"name":"Availability vs. representativity","link":"Availability-vs.-representativity"},{"depth":1,"name":"Annotating","link":"Annotating"},{"depth":2,"name":"Semi-automatic techniques","link":"Semi-automatic-techniques"},{"depth":2,"name":"Crowdsourcing","link":"Crowdsourcing"}]
---

# Overview

It could be of great use to use a already existing data set when creating a new machine learning model.

- MNIST
- UCI machine learning repository
- reserach paper
- Kaggle

# Collecting

- Scrape from websites
- Use an open API

The properties that hold in the training set should hold for the whole population as well. When collecting data we should be aware of the @(sampling bias)(sampling-bias) and @(nonresponse bias)(nonresponse-bias) to create a well representative data set.

## Stratification and weighting
Stratification is adjusting the data set into sub-groups and giving them different weights.

## Availability vs. representativity
It is not certain that we can select a representive sample of the data set, in many cases we have to work with what we have. This could be observational/historical data. It could be harder to access different types of medias as well, e.g. fiction vs. news. We also have to keep in mind copyright whatever data we choose to collect (only collecting free data will most likely cause a bias as well).

Samling effects will create different biases (time, selection, demography etc...).

# Annotating
In the long run it is often useful to create specialized tools for annotating the data to automate the process as much as possible which is greater for scale. It is often easier and less time consuming to annotate with a specialized tool.

However, we might create a biased user interface
- there might be some easy default
- how are annotators paid (hour or by quantity)?
- interest

There must be a consistent user manual for annotating the data to get samples from the same "population".

## Semi-automatic techniques
Semi-autmatic techniques are used quite often. They create a bigger data set from a smaller sample. After creation of the bigger data set we could let annotators polish the annotations.

## Crowdsourcing
When using @(crowdsourcing)(crowdsourcing) to annotate the data there are a couple of useful guidelines to keep in mind

- use easy cognitive tasks
- use well-defined tasks
- use concise defintions
- use a low amount of input

Crowdsourcing is often most useful for simplier tasks because non-experts annotate the data.

We could have more than one annotator per data set to compare the annotations to get better quality annotations. This is called the @(inter-annotator agreement)(inter-annotator-agreement). This is useful for an upper bound of the machine learning model.

