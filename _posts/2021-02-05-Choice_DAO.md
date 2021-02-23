---
layout: post
title: An Experiment in Incentive Design for Decision Advice
---

How to setup good incentives for deciding on which choice is the best course of action is a crucial challenge for collective cognition. In the spirit of 
[Constructive Economics](https://web.archive.org/web/20161229154937/http://aiecon.tumblr.com/post/489827144/what-is-constructive-economics):

>Constructive Economics is the design, construction, implementation, and analysis of new economic structures. It’s about building things, making them real, and treating them as solid objects worthy of respect, admiration, study, and further improvement. Above all else: make it real.

Smart contracts running on proof-of-stake permisionless blockchains provide a fantastic playground for experimenting with novel economic structures. In this spirit I am starting a small self-referential experiment in computational social science: a DAO run by, and dedicated to the development of, practical designs for incentivizing advice that leads to good choices. The DAO itself making decisions using the proposed mechanisms. To get started the initial design is that of an [advice auction](http://nikete.com/thesis.pdf), with the DAO voting on what the choices available and the objective function to incentivize[^bet_beliefs]. Some of those choices can be to move towards more refined desicion structures. 

It is useful to distinguish between two types of beliefs about future events; those about what will happen no matter what, such as the weather, and those whose outcomes depend on a choice informed by the beliefs (such as the health of a patient after taking a given medication, or the profits of a market maker using a given bid-ask spread). Evaluating the value of information about which choice to make in this second case is intrinsically harder, in that it depends on unobservable counterfactuals. 
Market structures to elicit beliefs about the first kind are well understood, and automated market makers provide practical implementations that [can be interpreted in terms of the belief distributions of traders](https://papers.nips.cc/paper/2012/file/41a60377ba920919939d83326ebee5a1-Paper.pdf)

How to structure markets for advice on which course of action will lead to the highest payoff is much less clear. A class of procedures proposed by Hanson is based around running multiple prediction markets, one for the reward conditional on each potential action and voiding those for unchosen actions. As [Othman and Sandholm pointed out](https://www.cs.cmu.edu/~sandholm/decision%20rules%20and%20decision%20markets.AAMAS10.pdf) this is not incentive compatible when the decision is made by selecting the highest valued (according to prices) alternative. A distribution with positive mass overall actions is required in these mechanisms to induce incentive compatibility. Note this involves selecting strictly dominated actions with positive probability. (see [Chen et al](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/04/TEAC-final1.pdf) and [Osterheld and Conitzer](https://users.cs.duke.edu/~conitzer/decisionWINE20.pdf) who further show only the best action expected reward is elicitable. 

The explosion in smart contracts around Defi largely relies on fixed parameters updated infrequently by stakeholder votes. Many of these parameters are not values that the protocol is upholding but rather tactical choices informed by beliefs about their impacts. A marketplace to make these choices in the interest of the values expressed by the voting of the DAO is a natural missing primitive.
If you are interested in participating in the DAO bootstrap you can petition to join it, tribute is accepted in ideas, implementation or capital.  Iinitially these economic designs can be tested by being used proceduraly amongst DAO members. 

A problem that arises is that to align the incentives of advice givers when there is potential for them to benefit at the cost of the advise taker on a side-task, full insurance of the downside by the advise giver to the decision maker is required. This, however, dramatically reduces th potential pool of advice givers. To counteract this, the DAO itself provides  coverage of the  downside potential. To allow the DAO to decide what to cover, which effectivelya adds a second advice market of wether to insure a particular piece of advice. To facilitate the evaluation of this second market we leverage a sidechain for related full-supervision tasks. So for example the market maker on a given asset (a task where evlauation involves an unobservable counter factual) can be evaluated on their past predictions of the assets price and volatility (and their staking on these values). 
A token, $CHOICE,  can be used to participate in the governance of te DAO, staking on the sidechain, and as the native token of the secondary markets. 



[^bet_beliefs]: A design principle influential in the cryptocurrency community for collective decision making suggested by Hanson in *[Futarchy](http://mason.gmu.edu/~rhanson/futarchy.html)* is: **vote on values, bet on beliefs**. Smart contract governance has so far focused on voting by stakeholders, with little use of betting on beliefs. A DAO that runs on a mixture of votes to select the objective function and set of candidate choices and then uses an advice auction to select the choice can be thought of as  **Vote on the objective function, use a market on which choice of parameters optimizes it.**


