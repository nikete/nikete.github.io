---
layout: post
title: Differentiable Economics Crypto Field Experiments
permalink: Differentiable_Economics
---

What is the revenue-optimal selling mechanism for two buyers with i.i.d. uniform valuations over two items?

Mechanism design is very hard.

One of the most exciting lines of work for me is towards [automating mechanism design via deep learning](http://proceedings.mlr.press/v97/duetting19a.html), [sprouting from this foundational work](https://scholar.google.com/scholar?cites=5937791241364902632&as_sdt=2005&sciodt=0,5&hl=en&scioq=regretnet). There is a very compelling talk by David Parkes on this line of work:

<iframe width="560" height="315" src="https://www.youtube.com/embed/pXz4K7fafes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Daniel Reusche and I wrote up [a short note](https://arxiv.org/abs/2104.00159) on an ongoing line of work using differential privacy in mechanism learning, building on [the classic work of Nissim et al](https://arxiv.org/abs/1004.2888). Recent work on [improving the bounds of DP](https://arxiv.org/pdf/2205.03470.pdf) we hope will help in giving bounds on the composed mechanisms.

Daniel and Michael Curry also have an interesting blog post describing [a GAN-based approach](https://iclr-blog-track.github.io/2022/03/25/two-player-auction-learning/) to mechanism learning.

I am very keen to bring this to the attention of the Ethereum ecosystem and those exploring novel public goods funding mechanisms. Those interested in exploring potential field experiments could have computational contracts (perhaps on the [zkEVM alpha](https://v2-docs.zksync.io/dev/)) learn the incentives they can provide to maximize notions of social welfare or profit.

Using regret minimization for approximately truthful mechanism design was explored in [this work to design strategy-proof, multi-facility mechanisms that minimize expected social cost](https://econcs.seas.harvard.edu/files/econcs/files/golowich_ijcai18.pdf).

Further reading: [Nissim et al](https://arxiv.org/pdf/1004.2888.pdf), [DP bounds](https://arxiv.org/pdf/2205.03470.pdf)
