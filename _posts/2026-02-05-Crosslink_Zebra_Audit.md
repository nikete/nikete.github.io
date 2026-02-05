---
layout: post
title: Mechanism Design Audit of Crosslink Zebra
permalink: crosslink-zebra-audit
---

This is a mechanism design audit of [Crosslink Zebra](https://electric-coin-company.github.io/crosslink-book/design/the-crosslink-zebra-protocol.html), a hybrid proof-of-work / stake-weighted finality mechanism for Zcash. The audit evaluates whether the incentives faced by miners, finalizers, stakers, and the broader community make irreversible finality an equilibrium under realistic adversarial behavior.

The core finding is asymmetric: **safety (irreversibility) is structurally strong** once finality is reached, while **finality progress (liveness) is economically fragile** in the baseline design and requires explicit incentive constraints.

The audit identifies three primary failure modes:

1. **The Hostage Holdout:** A blocking coalition rationally delays finality to increase future payouts.
2. **The Zombie Set:** The finality gadget becomes permanently inoperable due to validator attrition during a freeze.
3. **The Liquid Exit Paradox:** If stake can exit economically while the frozen validator set retains voting weight, the effective cost to corrupt the frozen set may decay over time, creating "phantom security."

Core recommendations include signer-conditioned commission, first-inclusion miner bounties keyed to finalized height, finality-gap telemetry, and an anti-jackpot constraint to prevent pending rewards from increasing during stalls. Governance-level extensions address liveness resets, certificate aging, and stall-exit coupling.

### Documents

- Main audit report: [PDF](http://nikete.com/crosslink_zebra_audit.pdf) \| [TeX](http://nikete.com/crosslink_zebra_audit.tex)
- Formal proofs companion: [PDF](http://nikete.com/crosslink_zebra_audit_proofs.pdf) \| [TeX](http://nikete.com/crosslink_zebra_audit_proofs.tex)
