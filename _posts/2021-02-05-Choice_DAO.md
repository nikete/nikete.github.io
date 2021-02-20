---
layout: post
title: An Experiment in Incentive Design for Decision Advice
---

How to setup good incentives for deciding on which choice is the best course of action is a crucial challenge for collective cognition. In the spirit of 
[Constructive Economics](https://web.archive.org/web/20161229154937/http://aiecon.tumblr.com/post/489827144/what-is-constructive-economics):

>Constructive Economics is the design, construction, implementation, and analysis of new economic structures. It’s about building things, making them real, and treating them as solid objects worthy of respect, admiration, study, and further improvement. Above all else: make it real.

Ethereum and the adjacent ecosystems, provide a fantastic playground for experimenting with novel economic structures. In this spirit I am starting a small self-referential experiment in computational social science: a DAO run by, and dedicated to the development of new designs for incentivizing advice that leads to good choices. The DAO itself making decisions using the proposed designs. To get started the initial design is that of an [advice auction](http://nikete.com/thesis.pdf), with the DAO voting on what the choices available at this initial stage are[^bet_baliefs]. Some of those choices can be to move towards more refined structures. 

It is useful to distinguish between two types of beliefs about future events; those about what will happen no matter what, such as the weather, and those whose outcomes depend on a choice informed by the beliefs (such as the health of a patient after taking a given medication, or the profits of a market maker using a given bid-ask spread). Evaluating the value of information about which choice to make in this second case is intrinsically harder, in that it depends on unobservable counterfactuals (the best alternative without the information could result in ina different decision, so evaluating the value involves evaluating that counterfactual). 
Market structures to elicit beliefs by using bets about future events that are publically observable is well understood (assets with state contingent payoffs), and practical protocols exist to do this in a relatively trustless and decentralized way. 

How to structure markets for advice on which course of action will lead to the highest payoff is much less clear. A class of procedures proposed by Hanson is based around running multiple prediction markets, one for the reward conditional on each potential action and voiding those for unchosen actions. As [Othman and Sandholm pointed out](https://www.cs.cmu.edu/~sandholm/decision%20rules%20and%20decision%20markets.AAMAS10.pdf) this is not incentive compatible when the decision is made by selecting the highest valued (according to prices) alternative. A distribution with positive mass overall actions is required in these mechanisms to induce incentive compatibility. Note this involves selecting strictly dominated actions with positive probability. (see [Chen et al](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/04/TEAC-final1.pdf) and [Osterheld and Conitzer](https://users.cs.duke.edu/~conitzer/decisionWINE20.pdf) who further show only the best action expected reward is elicitable. 

The explosion in smart contracts around Defi largely relies on fixed parameters updated infrequently by stakeholder votes. Many of these parameters are not values that the protocol is upholding but rather tactical choices informed by beliefs about their impacts. A marketplace to make these choices in the interest of the values expressed by the voting of the DAO is a natural missing primitive.
If you are interested in participating in the DAO bootstrap get in touch. At the moment, implementations in the solidity of advice auctions are the initial priority. Iinitially these economic designs can be tested by being used in an ad-hoc basis among DAO members. A token, $CHOICE,  can be used both as part of tribute to become a member of the DAO and as the biding token in the advice auction. 


[^bet_baliefs]: A design principle influential in the cryptocurrency community for collective decision making suggested by Hanson in *[Futarchy](http://mason.gmu.edu/~rhanson/futarchy.html)* is: **vote on values, bet on beliefs**. Smart contract governance has so far focused on voting by stakeholders, with little use of betting on beliefs. A DAO that runs on a mixture of votes to select the objective function and set of candidate choices and then uses an advice auction to select the choice can be thought of as  **Vote on the objective function, use a market on which choice of parameters optimizes it.**


