---
id: "instructions"
title: "Namespace: instructions"
sidebar_label: "instructions"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### burnWriterForQuote

▸ `Const` **burnWriterForQuote**(`program`, `size`, `optionMarket`, `writerTokenSrc`, `writerQuoteDest`): `TransactionInstruction`

Burn WriterTokens to get the `size * OptionMarket.quoteAmountPerContract` from the
OptionMarket's quote asset pool. This instruction will fail if no one has exercised
or the quote assets in the pool have already been claimed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](../modules#psyamerican)\> | Anchor Program for Psy American |
| `size` | `BN` | The amount of WriterTokens to burn and retrieve the quote assets for |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The deserialized OptionMarket data |
| `writerTokenSrc` | `PublicKey` | The SPL Token account that holds the WriterTokens |
| `writerQuoteDest` | `PublicKey` | SPL Token account that is the destination for the quote assets |

#### Returns

`TransactionInstruction`

#### Defined in

[instructions/burnWriterForQuote.ts:18](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/instructions/burnWriterForQuote.ts#L18)

___

### closePositionInstruction

▸ `Const` **closePositionInstruction**(`program`, `size`, `optionMarket`, `writerTokenSrc`, `optionTokenSrc`, `underlyingAssetDest`): `TransactionInstruction`

Close _size_ option positions by burning the OptionTokens and WriterTokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](../modules#psyamerican)\> | Anchor Program for Psy American |
| `size` | `BN` | The amount of OptionTokens and WriterTokens to burn |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket the OptionTokens and WriterTokens belong to |
| `writerTokenSrc` | `PublicKey` | The SPL Token address that holds the WriterTokens |
| `optionTokenSrc` | `PublicKey` | The SPL Token address that holds the OptionTokens |
| `underlyingAssetDest` | `PublicKey` | The SPL Token address destination for the returned underlying assets |

#### Returns

`TransactionInstruction`

#### Defined in

[instructions/closePosition.ts:17](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/instructions/closePosition.ts#L17)

___

### closePostExpirationInstruction

▸ `Const` **closePostExpirationInstruction**(`program`, `size`, `optionMarket`, `writerTokenSrc`, `underlyingAssetDest`): `TransactionInstruction`

After a market has expired, burn WriterTokens to get the underlying assets back from
the contract(s).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](../modules#psyamerican)\> | Anchor Program for Psy American |
| `size` | `BN` | The amount of options to exercise |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket data from the chain for the options to exercise |
| `writerTokenSrc` | `PublicKey` | The SPL Token address holding the WriterTokens |
| `underlyingAssetDest` | `PublicKey` | The SPL Token address where the underlying assets will be sent |

#### Returns

`TransactionInstruction`

#### Defined in

[instructions/closePostExpiration.ts:17](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/instructions/closePostExpiration.ts#L17)

___

### exerciseOptionsInstruction

▸ `Const` **exerciseOptionsInstruction**(`program`, `size`, `optionMarket`, `exerciserOptionTokenSrc`, `underlyingAssetDest`, `quoteAssetSrc`, `opts?`): `Promise`<`TransactionInstruction`\>

Exercise OptionTokens you're holding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](../modules#psyamerican)\> | Anchor Program for Psy American |
| `size` | `BN` | The amount of options to exercise |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket data from the chain for the options to exercise |
| `exerciserOptionTokenSrc` | `PublicKey` | The SPL Token address holding the OptionTokens |
| `underlyingAssetDest` | `PublicKey` | The SPL Token address where the underlying assets will be sent |
| `quoteAssetSrc` | `PublicKey` | The SPL Token address holding the quote asset used to exercise |
| `opts` | `Object` |  |
| `opts.optionAuthority?` | `PublicKey` | The authority account that owns the options |

#### Returns

`Promise`<`TransactionInstruction`\>

#### Defined in

[instructions/exerciseOptions.ts:21](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/instructions/exerciseOptions.ts#L21)

___

### exerciseOptionsV2Instruction

▸ `Const` **exerciseOptionsV2Instruction**(`program`, `size`, `optionMarket`, `exerciserOptionTokenSrc`, `underlyingAssetDest`, `quoteAssetSrc`, `opts?`): `TransactionInstruction`

Exercise OptionTokens you're holding without fees!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](../modules#psyamerican)\> | Anchor Program for Psy American |
| `size` | `BN` | The amount of options to exercise |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket data from the chain for the options to exercise |
| `exerciserOptionTokenSrc` | `PublicKey` | The SPL Token address holding the OptionTokens |
| `underlyingAssetDest` | `PublicKey` | The SPL Token address where the underlying assets will be sent |
| `quoteAssetSrc` | `PublicKey` | The SPL Token address holding the quote asset used to exercise |
| `opts` | `Object` |  |
| `opts.optionAuthority?` | `PublicKey` | The authority account that owns the options |

#### Returns

`TransactionInstruction`

#### Defined in

[instructions/exerciseOptions.ts:85](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/instructions/exerciseOptions.ts#L85)

___

### initializeMarket

▸ `Const` **initializeMarket**(`program`, `__namedParameters`): `Promise`<`Object`\>

Initialize a new OptionMarket

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](../modules#psyamerican)\> | The Psy American program |
| `__namedParameters` | `Object` | - |
| `__namedParameters.expirationUnixTimestamp` | `BN` | The option market expiration timestamp in seconds |
| `__namedParameters.quoteAmountPerContract` | `BN` | The quote amount per contract for the OptionMarket Strike price is derived from underlyingAmountPerContract & quoteAmountPerContract |
| `__namedParameters.quoteMint` | `PublicKey` | The quote asset mint |
| `__namedParameters.underlyingAmountPerContract` | `BN` | The underlying amount per contract for the OptionMarket. * Strike price is derived from underlyingAmountPerContract & quoteAmountPerContract |
| `__namedParameters.underlyingMint` | `PublicKey` | The underlying mint address |

#### Returns

`Promise`<`Object`\>

#### Defined in

[instructions/initializeMarket.ts:30](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/instructions/initializeMarket.ts#L30)

___

### initializeSerumMarket

▸ `Const` **initializeSerumMarket**(`program`, `__namedParameters`): `Promise`<`Object`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](../modules#psyamerican)\> | Anchor Psy American Program |
| `__namedParameters` | `Object` | - |
| `__namedParameters.asks?` | `PublicKey` | The address for the new Serum market's asks |
| `__namedParameters.bids?` | `PublicKey` | The address for the new Serum market's bids |
| `__namedParameters.eventQueue?` | `PublicKey` | The address for the new Serum market's eventual Event Queue |
| `__namedParameters.optionMarketKey` | `PublicKey` | The OptionMarket address that owns the OptionToken mint |
| `__namedParameters.optionMint` | `PublicKey` | The OptionToken's Mint address. This is the base token for the Serum market |
| `__namedParameters.pcDustThreshold` | `BN` | Serum market's dust threshold for the price currency |
| `__namedParameters.pcLotSize` | `BN` | Serum market's price currency lot size |
| `__namedParameters.pcMint` | `PublicKey` | The Serum's price currency mint |
| `__namedParameters.serumProgramKey` | `PublicKey` | The Serum DEX program ID |

#### Returns

`Promise`<`Object`\>

#### Defined in

[instructions/initializeSerumMarket.ts:22](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/instructions/initializeSerumMarket.ts#L22)

___

### mintOptionInstruction

▸ `Const` **mintOptionInstruction**(`program`, `minterOptionAcct`, `minterWriterAcct`, `minterUnderlyingAccount`, `size`, `optionMarket`): `Promise`<`Object`\>

Create a TransactionInstruction for minting _size_ option contracts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](../modules#psyamerican)\> | Anchor Program for the PsyAmerican program and the minter as the provider wallet |
| `minterOptionAcct` | `PublicKey` | Where the OptionTokens will be sent |
| `minterWriterAcct` | `PublicKey` | Where the WriterTokens will be sent |
| `minterUnderlyingAccount` | `PublicKey` | Where the underlying asset tokens come from |
| `size` | `BN` | The amount of contracts to mint |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket data |

#### Returns

`Promise`<`Object`\>

#### Defined in

[instructions/mintOptions.ts:92](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/instructions/mintOptions.ts#L92)

___

### mintOptionV2Instruction

▸ `Const` **mintOptionV2Instruction**(`program`, `minterOptionAcct`, `minterWriterAcct`, `minterUnderlyingAccount`, `size`, `optionMarket`): `Promise`<`Object`\>

Create a TransactionInstruction for minting _size_ option contracts using V2 instruction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](../modules#psyamerican)\> | Anchor Program for the PsyAmerican program and the minter as the provider wallet |
| `minterOptionAcct` | `PublicKey` | Where the OptionTokens will be sent |
| `minterWriterAcct` | `PublicKey` | Where the WriterTokens will be sent |
| `minterUnderlyingAccount` | `PublicKey` | Where the underlying asset tokens come from |
| `size` | `BN` | The amount of contracts to mint |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket data |

#### Returns

`Promise`<`Object`\>

#### Defined in

[instructions/mintOptions.ts:156](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/instructions/mintOptions.ts#L156)

___

### mintOptionsTx

▸ `Const` **mintOptionsTx**(`program`, `minterOptionAcct`, `minterWriterAcct`, `minterUnderlyingAccount`, `size`, `optionMarket`): `Promise`<`Object`\>

Execute a transaction to mint _size_ options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](../modules#psyamerican)\> | Anchor Program for the PsyAmerican program and the minter as the provider wallet |
| `minterOptionAcct` | `PublicKey` | Where the OptionTokens will be sent |
| `minterWriterAcct` | `PublicKey` | Where the WriterTokens will be sent |
| `minterUnderlyingAccount` | `PublicKey` | Where the underlying asset tokens come from |
| `size` | `BN` | The amount of contracts to mint |
| `optionMarket` | [`OptionMarketWithKey`](../modules#optionmarketwithkey) | The OptionMarket data |

#### Returns

`Promise`<`Object`\>

#### Defined in

[instructions/mintOptions.ts:29](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/instructions/mintOptions.ts#L29)
