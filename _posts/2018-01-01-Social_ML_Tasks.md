---
layout: post
title: Social Prediction Tasks for Machine Learning
permalink: Social_ML_Tasks
---

Building a good challenge problem is a necessary condition to harness the machine learning community.

There are currently good tasks in images, speech, and computer games. There are almost no good tasks with strong social components.

## The Problem

Machine learning benchmarks need:
- Clear metrics
- Large datasets
- Tasks where progress is measurable

Social prediction is hard to benchmark because:
- Ground truth is contested
- Social systems react to predictions about them
- Outcomes often take years to materialize

## Potential Social Tasks

Tasks that use the future as the held-out set:

**Academic paper outcomes**
- Reproduction success
- Replication outcomes
- Retraction prediction
- Citation trajectories

**Substance adoption patterns**
- Popularity of compounds on forums like Bluelight or Reddit
- Declared illegal status
- Wikipedia page view trajectories

**Scientific knowledge updates**
- Which findings will be revised
- Confidence interval shrinkage patterns
- Cross-field citation patterns

## Criteria for Good Social ML Tasks

- **Multiple tasks within the same domain**: enables transfer learning research
- **Natural held-out sets**: the future provides this for predictions
- **Clear feedback**: outcomes must eventually become unambiguous
- **Scale**: enough instances to train modern models
- **Resistance to gaming**: predictions shouldn't be self-fulfilling or self-defeating in ways that make the benchmark useless

## The Meta-Challenge

The meta-challenge is that social prediction itself changes the social system. A model that predicts which papers will be retracted might cause those papers to be scrutinized more carefully—either preventing or accelerating retractions.

This reflexivity is both a bug (for benchmarking) and a feature (for impact). Building ML benchmarks that account for this remains an open problem.
