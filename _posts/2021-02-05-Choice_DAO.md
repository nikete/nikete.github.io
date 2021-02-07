---
layout: post
title: An experiement in protocol incentives for collective choice making.

---



A design principle influential in the cryptocurrency community for collective decision making suggested by Hanson in *[Futarchy](http://mason.gmu.edu/~rhanson/futarchy.html)* is: **vote on values, bet on beliefs**. Smart contract governance has so far focused on voting by stakeholders, with little use of betting on beliefs.

Two types of beliefs can be distinguished; those about what will happen no matter what, such as the weather, and those whose outcomes depend on a choice informed by the beliefs (such as the health of a patient after taking a given medication, or the profits of a market maker using a given bid-ask spread). Evaluating the value of information about which choice to make in tihs seccod case is intrinsically harder, in that it depends on unobservable counterfactuals. 

How to structure bets about future events that are publically observable is exceptionally well understood, and practical protocols exist to do this in a relatively trustless and decentralized way. How to structure bets about which course of action will lead to the highest payoff is much less clear, even with a trusted center. A class of procedures proposed by Hanson is based around running multiple prediction markets, one for the reward conditional on each potential action and voiding those for unchosen actions. [Othman and Sandholm pointed out](https://www.cs.cmu.edu/~sandholm/decision%20rules%20and%20decision%20markets.AAMAS10.pdf) that this is not incentive compatible when the decision is made by following the prices and selecting the highest valued alternative. A distribution with positive mass overall actions is required in these mechanisms to induce incentive compatibility. Note this involves selecting strictly dominated actions with positive probability.

The explosion in smart contracts around Defi largely relies on fixed parameters updated infrequently by stakeholder votes. Many of these parameters are not values that the protocol is upholding but rather tactical choices informed by beliefs about their impacts. A marketplace to make these choices in the interest of the values expressed by stakers in the contract is a natural primitive.

**Vote on the objective function, run a market on which choice of parameters optimizes it.**

## The Choice Dao

I have started a small experiment to bootstrap a sequence of decision procedures that iterate on what choices the DAO itself makes in researching and developing open protocols for eliciting what choices to take.

[**View the Choice Dao on Daohaus**](https://app.daohaus.club/dao/0xff3e5cf4cbc602098ab4f734a69f4b365f589569)

A proposal for an initial task, the DAO could create an ERC777 and become a liquidity provider for it and the pairs the members of the DAO decide to fund in the exchanges and AMMs the DAO decides, with the choice of liquidity provision schedule to be made using an initial version of the agreed-upon choice protocol.
