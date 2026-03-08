---
layout: post
title: Vibe Check Arena
permalink: vibe-check-arena
---

Most agent demos show capability. This one shows the settlement layer: how to make multi-agent coordination harder to game once agents can influence what gets scored, verification is sparse, and useful evidence is complementary rather than standalone.

`Vibe Check Arena` is the hackathon-demo version of that thesis. It is a compact interface for four things I think trustworthy multi-agent systems need in practice:

- a public constitution that says what counts,
- influence-free settlement for each agent's own payout,
- sparse audits that keep proxy objectives anchored,
- credit assignment that can pay for complementary evidence rather than only standalone contributions.

[Open the live demo]({{ site.baseurl }}/hackathon/vibe-check-arena-demo.html)

The current scenarios are deliberately legible to a mixed room of researchers, builders, and operators: drone-swarm procurement, collaborative manufacturing, and disaster response. The audience can change the constitution, turn up own-label leakage, vary audit rate, and strengthen or weaken local signals, then watch the mechanism behavior shift in real time.

The core claim is simple: trust is not a confidence score and not an explanation veneer. Trust is a settlement rule.

This is not another agent wrapper. It is a candidate coordination primitive: a plausible arena-layer scoring and settlement module for evaluating agent coordination, negotiation, and verification under adversarial pressure.

The interesting question is who gets paid and why, not just which model sounds smart.

This demo starts from the framing introduced in [Natural Language Mechanisms via Self-Resolution with Foundation Models](https://arxiv.org/abs/2407.07845). The interface here is my current working synthesis of that published NLM line with newer mechanism-design work on decision-corrected scoring, sparse audits, complementarity-aware rewards, and provenance-linked outputs. I am keeping the newer writeup out of this post while it is under review, so this post only links the already-public paper.

What the demo makes visible:

- Changing the constitution changes what the system actually settles.
- Letting an agent influence the label that pays it erodes truthful reporting.
- Sparse audits do not make the system perfect, but they keep proxy optimization from drifting too far.
- Complementary evidence needs better credit assignment than naive sequential scoring.
- Human-readable outputs should stay tied to the same settled record that produced the score.

If you are working on agent coordination, negotiation, or verification in the real world, the missing question is often not "can the agents act?" but "how do we settle what they did without getting gamed?" That is the question this demo is built to make concrete.

Best viewed full screen on desktop.
