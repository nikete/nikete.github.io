---
layout: post
title: Decision Markets
permalink: Decision_Markets
---

Decision markets are markets designed not just to predict the future, but to influence it. Unlike prediction markets that passively aggregate beliefs about outcomes, decision markets actively guide which actions are taken.

## The Core Challenge

Prediction markets work because bettors want to be right. But when a market influences the decision it's predicting, perverse incentives emerge. If I can move the market, and the market moves the decision, I might profit by making the wrong prediction—if it causes a decision that benefits me in other ways.

[Hanson's Futarchy](http://mason.gmu.edu/~rhanson/futarchy.html)—"vote on values, bet on beliefs"—captures the intuition of using markets to guide decisions. But the details are treacherous.

## Why Simple Approaches Fail

The naive approach: run conditional prediction markets on "value of outcome if action A is taken" and "value of outcome if action B is taken," then take whichever action the market predicts will produce higher value.

The problem: this is not incentive compatible. [Othman and Sandholm](https://www.cs.cmu.edu/~sandholm/decision%20rules%20and%20decision%20markets.AAMAS10.pdf) showed that under this decision rule, traders have incentives to manipulate rather than reveal truthful beliefs.

[Chen et al](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/04/TEAC-final1.pdf) proved something stronger: any decision market that always takes the action with highest predicted value must take strictly dominated actions with substantial probability. You cannot have both truthful revelation and always taking the predicted-best action.

## What Can Be Elicited

[Osterheld and Conitzer](https://users.cs.duke.edu/~conitzer/decisionWINE20.pdf) characterized exactly what can be elicited for decision-making: only the best action and its expected reward. You cannot elicit full probability distributions over all action-outcome pairs in an incentive-compatible way.

This means any working decision market must be designed around this constraint.

## Paths Forward

Several approaches try to work within these limits:

**Advice auctions**: Rather than eliciting beliefs, [elicit policies](http://nikete.com/Advice_Auctions/)—functions from states to actions. Advisors compete for a share of the realized reward.

**Subsidized exploration**: Accept that some dominated actions must be taken, but subsidize this exploration explicitly rather than hoping traders will pay for it.

**Hybrid mechanisms**: Combine market signals with other decision procedures, using markets to inform rather than determine choices.

## Applications and Experiments

Decision markets remain largely theoretical. The gap between elegant theory and working implementation is substantial. Smart contracts on blockchains offer a potential testing ground—self-executing code that can commit to decision rules in ways that human institutions cannot.

Potential applications include:
- Governance of decentralized protocols
- Capital allocation in DAOs
- Automated parameter tuning with human input

The challenge is designing mechanisms that are simple enough to implement and understand, while sophisticated enough to resist manipulation.

## Further Reading

- [Mechanisms, Protocols and Applications for Good Choices](http://nikete.com/Choice_Research/)
- [Advice Auctions](http://nikete.com/Advice_Auctions/)
- [Differentiable Economics and Field Experiments](http://nikete.com/Differentiable_Economics/)
