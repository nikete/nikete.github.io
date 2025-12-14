---
layout: post
title: Advice Auctions
permalink: Advice_Auctions
---

Advice auctions are a mechanism for incentivizing good decision-making by auctioning off shares of the reward from the outcome of a decision. The core idea is simple: give your advisors a share of the reward. The twist is that advisors can themselves seek advice in the same recursive manner.

## The Problem with Decision Markets

Traditional prediction markets fail at guiding decisions. If you bet on the value of a reward conditional on each action and void bets for unchosen actions, the resulting mechanism is not incentive compatible when the decision rule is to select the action with the highest expected reward as determined by the market. This was pointed out by [Othman and Sandholm](https://www.cs.cmu.edu/~sandholm/decision%20rules%20and%20decision%20markets.AAMAS10.pdf).

The fundamental issue: strictly dominated actions must be taken with substantial positive probability for betting-based decision markets to work ([Chen et al](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/04/TEAC-final1.pdf)). This is impractical.

## How Advice Auctions Work

Instead of betting on outcomes, advice auctions work over the space of *policies*—functions that map states to actions. Advisors compete to provide policies, and the winner receives a share of the realized reward.

The key insight is that only the best action and its expected reward are elicitable ([Osterheld and Conitzer](https://users.cs.duke.edu/~conitzer/decisionWINE20.pdf)). Advice auctions are designed precisely around this constraint.

The mechanism allows:
- **Recursive delegation**: advisors can themselves solicit advice, creating a tree of expertise
- **Counterfactual evaluation**: since policies are specified, we can evaluate what would have happened under alternative advice
- **Complementary information**: different experts with different information can contribute, unlike prediction markets which fail at aggregating complementary information

## The Technical Details

The [full paper](http://nikete.com/advice_auctions.pdf) details the formal mechanism, but the essence is:

1. A decision maker has a reward function over outcomes
2. The decision maker auctions a share α of the reward
3. Advisors submit policies (functions from states to actions)
4. The winning advisor's policy is executed
5. The advisor receives α times the realized reward
6. Advisors can themselves auction portions of their share to sub-advisors

This creates a market for decision-making expertise that can aggregate information from multiple sources while maintaining incentive compatibility.

## Applications

Advice auctions are well-suited to:
- Seed-stage investment decisions
- Parameter tuning in automated market makers
- Supplier selection when quality is only observable ex-post
- Any setting where you want to pay for good advice proportional to how good it turns out to be

## Related Work

This connects to the broader literature on:
- [Decision markets](http://nikete.com/Choice_Research/)
- Mechanism design for information elicitation
- Proper scoring rules and their limitations
- Contract theory and principal-agent problems

The recursive structure also relates to hierarchical agency problems studied in organizational economics.
