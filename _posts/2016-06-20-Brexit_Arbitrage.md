---
layout: post
title: Brexit Betting Market Arbitrage
permalink: Brexit_Arbitrage
---

*Inspired by [this tweet](https://twitter.com/edmundedgar/status/743396512244203520)*

Consider Brexit binary betting markets denominated in USD and GBP respectively, with an asset that pays 1 if the Brexit vote is yes. Assume the price in each respective currency is 0.4.

Let 1 GBP = 1.4 USD at the moment (pre-Brexit), 1.2 if Brexit vote is yes, and 1.6 if Brexit vote is no.

Carry out the following trades:
- Buy 1.4 units of the asset in the USD market (pay 0.56 USD)
- Sell 1 unit of the asset in the GBP market (earn 0.56 USD equivalent)

**If Brexit passes:**
Earn 1.4 USD and pay out 1 GBP, which at this point costs 1.2 USD. Net profit: 0.2 USD.

**If Brexit fails:**
Net profit: 0.

We can sell a larger amount (say 1.1) in the GBP Brexit market to guarantee a strictly positive profit in every state of the world, at the cost of making the algebra less neat.

The 0.2 down move on GBP conditional on a Brexit yes vote and 0.2 up on a no vote is my rough eyeballing of the implied volatilities in the FX options market. I would be very keen for better estimates of this—the arbitrage opportunity scales with how precisely you can estimate the conditional FX moves.

This is an example of quanto risk: when the payout of a bet is in a currency whose value is correlated with the outcome being bet on. Markets denominated in different currencies with outcome-correlated exchange rates create arbitrage opportunities.
