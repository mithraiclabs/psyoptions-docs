---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---

PsyOptions aims to bring a TradFi feel to DeFi by building a decentralized, permissionless, and community-owned financial services platform. Our vision is to not only provide our users with a decentralized options trading platform, but to become the de facto on-chain financial services platform for DeFi users across the globe. Our initial options protocols are simply the first step along the path of building towards this goal.

## Our Product Offering
<ul>
    <li><a href ="https://www.psyoptions.io/">PsyOptions - On-chain Options for SOL, BTC, and ETH</a></li>
    <li><a href="https://app.psyfi.io/">PsyFinance - Automated Option Strategy Vaults</a></li>
</ul>

## Architecture {#architecture}

There are five main parameters that the protocol uses when interacting with options markets.

- Underlying asset
- Quote asset
- Contract size
- Strike price
- Expiration

Any user may initialize a market by supplying these values as arguments. 
Fungibility of option SPL Tokens are determined by the uniqueness of these parameters.

## How it works

### Writing an option

To write an option, one must lock the underlying asset in the amount specified by the option market.
For a SOL/USDC option with underlying asset size of 100, 100 SOL would be locked in order to mint the option token.
The option writer will receive two SPL Tokens. 
One represents the option, which the user may sell to generate yield.
The other represents the written contract (the claim on the underlying asset) and can be exchanged for the underlying asset post expiration.

### Exercising an option

Holding an option token pre expiration gives the user the ability to exercise by swapping the quote asset for the underlying asset.
Whether the option is in the money or out of the money, it's completely up to the token holder whether or not to exercise.
When exercising, the exerciser locks [strike price * underlying asset size] worth of quote asset, burns the option token, and receives the underlying asset.
