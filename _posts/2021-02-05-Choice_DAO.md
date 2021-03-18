---
layout: post
title: CHOICE Protocols for good advice
permalink: Choice_DAO
---

How to set up good incentives for information that guides choosing the best action is a crucial challenge for collective cognition. It has received mostly scholarly attention on the literature around _Decision Markets_. Decision markets  seek to both predict and decide the future. They differ from more traditional markets such as betting (“prediction markets”) in that they seek to influence the object of their attention instead of merely being influenced by it. 

Robin Hanson in _[Futarchy](http://mason.gmu.edu/~rhanson/futarchy.html)_ proposes to **vote on values, bet on beliefs**. While superficially eloquent this works better as alliteration than as an incentive alignment. If one tries to use betting mechanisms to guide decisions things do not work out. Betting on the value of the reward conditional on each potential action and voiding bets for unchosen actions  is not, as [Othman and Sandholm pointed out](https://www.cs.cmu.edu/~sandholm/decision%20rules%20and%20decision%20markets.AAMAS10.pdf), incentive compatible when the decision is made by selecting the action with the highest expected reward as determined by the market. This family of mechanisms require that strictly dominated actions be taken with substantial positive probability ([Chen et al](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/04/TEAC-final1.pdf)). These theoretical difficulties are matched by a lack of practical implementations.

[Advice Auctions](http://nikete.com/advice_auctions.pdf)_ may be the mechanism that enables market driven decision making. It is based on an old and simple idea, giving your advisors a share of the reward, with a algorithmic twist of facilitating the advisors themselves seeking advice in the same way. 

Recently [Osterheld and Conitzer](https://users.cs.duke.edu/~conitzer/decisionWINE20.pdf) show a fundamental limit to elicitation for decision making, only the best action and it’s expected reward are elicitable. Advice auctions match this precisely, further they are able to deal with complementary information distributed between different experts, something that betting mechanisms used prediction markets fail at.

In the spirit of [Constructive Economics](https://web.archive.org/web/20161229154937/http://aiecon.tumblr.com/post/489827144/what-is-constructive-economics) the focus is on making it real. Smart contracts running on proof-of-stake blockchains provide a playground for experimenting with novel economic structures. A self-referential experiment in computational social science: a DAO run by, and dedicated to the development of, practical designs for incentivizing advice that leads to better choices. The DAO itself making decisions using the proposed mechanisms. 

The goal is to experiment with what applications (beyond DAO governance) are well suited to these mechanisms, how the mechanisms need to be refined, and what is needed to make this happen. I do not expect the application areas to be limited to smart contracts. 

To start things off a pair of Moloch DAOs to coordinate payments for capital (on mainnet and xdai) and work (on xdai), and control the smart contracts have been created. An initial implementation in solidity of an advice auction has been written, and a token to be issued to recognize contributions to the DAO issued. 
