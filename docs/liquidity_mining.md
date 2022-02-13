---
id: liquidity-mining
title: Getting Started with Options Liquidity Mining
sidebar_label: Getting Started with Options Liquidity Mining
slug: /options-liquidity-mining
---

### Introduction

When projects want to incentivize users, they typically airdrop tokens to user wallets. Teams have successfully completed airdrops with minimum impact to economic stability, however, more often than not airdrop recipients tend to sell off their rewards immediately. 

Scenarios such as this can be detrimental to protocols especially in early stage growth. We believe that transitioning from airdropping tokens to airdropping options can resolve those pain-points. You can read more about our thoughts on the matter <a href="https://medium.com/psyoptions/the-options-are-limitless-58dddbd28cb4">here</a>.

### Initializing Markets

To begin the process of Option Liquidity Mining, we will need to first initialize a market for our tokens. Head over to the <a href="https://trade.psyoptions.io/#/initialize-market">initialize markets page.</a> 

Here we can create an options market for any type of SPL asset. Choose the expiration date, the underlying and quote assets, if we want to have calls and/or puts, and we can create a serum market if we want our options to be traded.

<strong>Note: If you want to incentivize users, only a call market is recommended to give your community upside potential!</strong>

<img src="/img/liquidity_mining/initialize_market.png" alt="Initialize Market" />

In this example, we want to incentivize our community by airdopping options that expire two years from now. We will create a market for our devnet $PSY token to expire on Jan. 27th 2023 at a strike price of $0.50. Let’s connect to Devnet for practice. Select your expiration date by clicking on the calendar button and choosing the desired date.

<img src="/img/liquidity_mining/set_expiry_example.png" alt="Set Expiration Example" />

Next choose your underlying asset. If your token is not in our token list, you can paste the token address, and click “Update mint” to populate. Repeat this step for the quote asset. 

<img src="/img/liquidity_mining/set_underlying_asset.png" alt="Set Underlying and Quote Assets" />

Choose your contract size. Contract size refers to the deliverable quanity of the token that underlies the option contract. This is completely customizable to your needs. 

Next, pick the strike price. Generally this will be a price point at or above the current token price to encourage growth within the protocol. 

Additionally, you can choose to make the options publicly tradeable on an orderbook by checking the "Initialize Serum Market" box.

<img src="/img/liquidity_mining/strike_price.png" alt="Choose a Strike Price" />

Click “Initialize Market” after confirming your parameters and approve the transaction. Initializing the market will cost SOL. If a market already exists with the exact same parameters, this dialog box will appear with a warning to initialize a market.

<img src="/img/liquidity_mining/market_exists_warning.png" alt="Option Already Exists Warning" />

### Minting Options

Here we will be minting the options which we can then distribute to the community. Head over to our <a href="https://trade.psyoptions.io/#/mint">mint page</a>

If you do not know your option public key, you can simply input the exact same parameters used to create the option market and the data will automatically populate!

<img src="/img/liquidity_mining/minting_options.png" alt="Minting Options" />

By inputting the market data, the options key is populated.

<img src="/img/liquidity_mining/populated_mint.png" alt="Populated Mint Fields" />

Select the number of options to mint. This will vary depending on the size of your community and what program you are running. Here we will mint 500 options to then be distributed to the community! 

Once we confirm that the information is correct, click “mint” and approve the transaction. We have removed the mint fee on Mainnet, so you will only have to pay the transaction cost. Congratulations, you have successfully minted options!

<img src="/img/liquidity_mining/minting.png" alt="Minting Options" />

You can view your tokens in your portfolio under “written options”. Now that you have your option tokens you can then distribute these tokens to anyone that fits your requirements and they can decide what to do with them!

<img src="/img/liquidity_mining/wallet_balance.png" alt="Wallet Balance" />