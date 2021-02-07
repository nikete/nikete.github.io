---
layout: post
title: An experiment in collective choice making by betting on beliefs. 
---




A design principle influential in the cryptocurrency comunity for collective decision making sugested by Hanson as _Futarchy_ is, : vote on values, bet on beliefs.
Smart contract governance has so far focused on voting by stake holders, with little use of betting on beliefs.
Two types of beliefs can be distingished; those about what will happen no matter what, such as the weather, and those whose outcomes depend on a choice informed by the beliefs (such as the health of a patient after taking a given medication, or the profits of a market maker using a given bid-ask spread). 

How to structure bets about future events that are publically observable is extremey well understood, and practical protocols exist to do this in a fairly trustless and decentralized way.
How to structure bets about which course of action will lead to the highest payoff is much less clear, even with a trusted center. A class of procedures proposed by Hanson is based around running multiple  prediction markets, one for the reward conditional on each potential action, and voiding those for unchosen actions. As pointed out by [Othman and Sandholm ](https://www.cs.cmu.edu/~sandholm/decision%20rules%20and%20decision%20markets.AAMAS10.pdf) this is not incentive compatible when the decicion is made by always selecting the highest valued alternative. Instead a distribution selecting strictly dominated actions with positive probability is needed in these designs to induce incentive compatibility.

The explosion in smart contracts around DeFi largely relies on fixed parameters that are updated infrequently by stakeholder votes. Many of these parameters are not values that the protocol is upholding, but rather tactical choices informed by beliefs about their impacts. A marketplace to make these choices in the interest of the values expressed by stakers in the contract is a natural primitive. 

Vote on the objective function, bet on which choice of parameters optimizes it.

I have started a small experiment, to bootstrap a sequence of decision procedures, that iterate on what choices the DAO itself makes in researching and developing open protocols for eliciting what choices to take.

<https://app.daohaus.club/dao/0xff3e5cf4cbc602098ab4f734a69f4b365f589569>

A proposal for an initial task, the DAO could create a ERC777 and become a liquidity provider for it and the pairs the members of the DAO decide to fund in the exchanges and AMMs the DAO decides, with the choice of liquidity provision schedule to be made using an initial version of the agreed upon choice protocol. 
