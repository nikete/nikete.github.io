---
layout: post
title: An experiement in incentives for advice.

---



A design principle influential in the cryptocurrency community for collective decision making suggested by Hanson in *[Futarchy](http://mason.gmu.edu/~rhanson/futarchy.html)* is: **vote on values, bet on beliefs**. Smart contract governance has so far focused on voting by stakeholders, with little use of betting on beliefs.

Two types of beliefs can be distinguished; those about what will happen no matter what, such as the weather, and those whose outcomes depend on a choice informed by the beliefs (such as the health of a patient after taking a given medication, or the profits of a market maker using a given bid-ask spread). Evaluating the value of information about which choice to make in tihs seccod case is intrinsically harder, in that it depends on unobservable counterfactuals. 

How to structure bets about future events that are publically observable is exceptionally well understood, and practical protocols exist to do this in a relatively trustless and decentralized way. How to structure bets about which course of action will lead to the highest payoff is much less clear, even with a trusted center. A class of procedures proposed by Hanson is based around running multiple prediction markets, one for the reward conditional on each potential action and voiding those for unchosen actions. [Othman and Sandholm pointed out](https://www.cs.cmu.edu/~sandholm/decision%20rules%20and%20decision%20markets.AAMAS10.pdf) that this is not incentive compatible when the decision is made by following the prices and selecting the highest valued alternative. A distribution with positive mass overall actions is required in these mechanisms to induce incentive compatibility. Note this involves selecting strictly dominated actions with positive probability. (see [Chen et al](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/04/TEAC-final1.pdf) and [Osterheld and Conitzer](https://users.cs.duke.edu/~conitzer/decisionWINE20.pdf) who further show only the best action expected reward is elicitable). 

The explosion in smart contracts around Defi largely relies on fixed parameters updated infrequently by stakeholder votes. Many of these parameters are not values that the protocol is upholding but rather tactical choices informed by beliefs about their impacts. A marketplace to make these choices in the interest of the values expressed by the voting of the DAO is a natural missing primitive.

**Vote on the objective function, run a market on which choice of parameters optimizes it.**

I am prpearing to start a small experiment to bootstrap a sequence of decision procedures that iterate on what choices the DAO itself makes in researching and developing open protocols for eliciting what choices to take. For an initial task, the DAO could create a token and become a liquidity provider for it and the pairs the DAO is funded in. If you would like to participate, do get in touch. The token would grant governance rights over the resulting marketplace. If the marketplace for such decision advice is feasable, it might be useful for other DAos that run AMM, or other profit seeking strategies that require parametrization (such as yearn valuts). If you would like to participate in the mechanism design, coding or liquidity provision, do get in touch.
