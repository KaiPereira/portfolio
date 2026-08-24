---
title: "How RF antenna's work!"
date: "2026-08-23"
description: "Kind of bored on a weekend and want to learn about RF"
disabled: true
---

# RF

Let's imagine a transceiver is transmitting a 2.4 GHz frequency to a single-ended monopole antenna. How does this AC current actually produce a propogating radio wave?

The transceiver first receives a digital signal over a parallel or serial interface like SPI, I^2C, among others, which gets processed in a couple different ways inside of your transceiver.

The baseband processing is essentially all the processing that happens before the signal is modulated to higher analog frequencies that will be transmitted by the antenna.
