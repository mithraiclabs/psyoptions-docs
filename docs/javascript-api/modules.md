---
id: "modules"
title: "@mithraic-labs/psy-american"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [instructions](namespaces/instructions)
- [serumInstructions](namespaces/serumInstructions)
- [serumUtils](namespaces/serumUtils)

## Enumerations

- [ClusterName](enums/ClusterName)
- [ProgramVersions](enums/ProgramVersions)

## Type aliases

### NetworkInfo

Ƭ **NetworkInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `feeOwnerKey` | `PublicKey` |
| `serumReferrerId` | `PublicKey` |

#### Defined in

[types.ts:14](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/types.ts#L14)

___

### OptionMarket

Ƭ **OptionMarket**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bumpSeed` | `number` |
| `exerciseFeeAccount` | `PublicKey` |
| `expirationUnixTimestamp` | `anchor.BN` |
| `expired` | `boolean` |
| `mintFeeAccount` | `PublicKey` |
| `optionMint` | `PublicKey` |
| `quoteAmountPerContract` | `anchor.BN` |
| `quoteAssetMint` | `PublicKey` |
| `quoteAssetPool` | `PublicKey` |
| `underlyingAmountPerContract` | `anchor.BN` |
| `underlyingAssetMint` | `PublicKey` |
| `underlyingAssetPool` | `PublicKey` |
| `writerTokenMint` | `PublicKey` |

#### Defined in

[types.ts:19](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/types.ts#L19)

___

### OptionMarketWithKey

Ƭ **OptionMarketWithKey**: [`OptionMarket`](modules#optionmarket) & { `key`: `PublicKey`  }

#### Defined in

[types.ts:35](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/types.ts#L35)

___

### OrderParamsWithFeeRate

Ƭ **OrderParamsWithFeeRate**<`T`\>: `OrderParams`<`T`\> & { `feeRate?`: `number`  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types.ts:39](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/types.ts#L39)

___

### PsyAmerican

Ƭ **PsyAmerican**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accounts` | [{ `name`: ``"optionMarket"`` ; `type`: { `fields`: [{ `name`: ``"optionMint"`` ; `type`: ``"publicKey"``  }, { `name`: ``"writerTokenMint"`` ; `type`: ``"publicKey"``  }, { `name`: ``"underlyingAssetMint"`` ; `type`: ``"publicKey"``  }, { `name`: ``"quoteAssetMint"`` ; `type`: ``"publicKey"``  }, { `name`: ``"underlyingAmountPerContract"`` ; `type`: ``"u64"``  }, { `name`: ``"quoteAmountPerContract"`` ; `type`: ``"u64"``  }, { `name`: ``"expirationUnixTimestamp"`` ; `type`: ``"i64"``  }, { `name`: ``"underlyingAssetPool"`` ; `type`: ``"publicKey"``  }, { `name`: ``"quoteAssetPool"`` ; `type`: ``"publicKey"``  }, { `name`: ``"mintFeeAccount"`` ; `type`: ``"publicKey"``  }, { `name`: ``"exerciseFeeAccount"`` ; `type`: ``"publicKey"``  }, { `name`: ``"expired"`` ; `type`: ``"bool"``  }, { `name`: ``"bumpSeed"`` ; `type`: ``"u8"``  }] ; `kind`: ``"struct"``  }  }] |
| `errors` | [{ `code`: ``300`` ; `msg`: ``"Expiration must be in the future"`` ; `name`: ``"ExpirationIsInThePast"``  }, { `code`: ``301`` ; `msg`: ``"Same quote and underlying asset, cannot create market"`` ; `name`: ``"QuoteAndUnderlyingAssetMustDiffer"``  }, { `code`: ``302`` ; `msg`: ``"Quote amount and underlying amount per contract must be > 0"`` ; `name`: ``"QuoteOrUnderlyingAmountCannotBe0"``  }, { `code`: ``303`` ; `msg`: ``"OptionMarket must be the mint authority"`` ; `name`: ``"OptionMarketMustBeMintAuthority"``  }, { `code`: ``304`` ; `msg`: ``"OptionMarket must own the underlying asset pool"`` ; `name`: ``"OptionMarketMustOwnUnderlyingAssetPool"``  }, { `code`: ``305`` ; `msg`: ``"OptionMarket must own the quote asset pool"`` ; `name`: ``"OptionMarketMustOwnQuoteAssetPool"``  }, { `code`: ``306`` ; `msg`: ``"Stop trying to spoof the SPL Token program! Shame on you"`` ; `name`: ``"ExpectedSPLTokenProgramId"``  }, { `code`: ``307`` ; `msg`: ``"Mint fee account must be owned by the FEE_OWNER"`` ; `name`: ``"MintFeeMustBeOwnedByFeeOwner"``  }, { `code`: ``308`` ; `msg`: ``"Exercise fee account must be owned by the FEE_OWNER"`` ; `name`: ``"ExerciseFeeMustBeOwnedByFeeOwner"``  }, { `code`: ``309`` ; `msg`: ``"Mint fee token must be the same as the underlying asset"`` ; `name`: ``"MintFeeTokenMustMatchUnderlyingAsset"``  }, { `code`: ``310`` ; `msg`: ``"Exercise fee token must be the same as the quote asset"`` ; `name`: ``"ExerciseFeeTokenMustMatchQuoteAsset"``  }, { `code`: ``311`` ; `msg`: ``"OptionMarket is expired, can't mint"`` ; `name`: ``"OptionMarketExpiredCantMint"``  }, { `code`: ``312`` ; `msg`: ``"Underlying pool account does not match the value on the OptionMarket"`` ; `name`: ``"UnderlyingPoolAccountDoesNotMatchMarket"``  }, { `code`: ``313`` ; `msg`: ``"OptionToken mint does not match the value on the OptionMarket"`` ; `name`: ``"OptionTokenMintDoesNotMatchMarket"``  }, { `code`: ``314`` ; `msg`: ``"WriterToken mint does not match the value on the OptionMarket"`` ; `name`: ``"WriterTokenMintDoesNotMatchMarket"``  }, { `code`: ``315`` ; `msg`: ``"MintFee key does not match the value on the OptionMarket"`` ; `name`: ``"MintFeeKeyDoesNotMatchOptionMarket"``  }, { `code`: ``316`` ; `msg`: ``"The size argument must be > 0"`` ; `name`: ``"SizeCantBeLessThanEqZero"``  }, { `code`: ``317`` ; `msg`: ``"exerciseFee key does not match the value on the OptionMarket"`` ; `name`: ``"ExerciseFeeKeyDoesNotMatchOptionMarket"``  }, { `code`: ``318`` ; `msg`: ``"Quote pool account does not match the value on the OptionMarket"`` ; `name`: ``"QuotePoolAccountDoesNotMatchMarket"``  }, { `code`: ``319`` ; `msg`: ``"Underlying destination mint must match underlying asset mint address"`` ; `name`: ``"UnderlyingDestMintDoesNotMatchUnderlyingAsset"``  }, { `code`: ``320`` ; `msg`: ``"Fee owner does not match the program's fee owner"`` ; `name`: ``"FeeOwnerDoesNotMatchProgram"``  }, { `code`: ``321`` ; `msg`: ``"OptionMarket is expired, can't exercise"`` ; `name`: ``"OptionMarketExpiredCantExercise"``  }, { `code`: ``322`` ; `msg`: ``"OptionMarket has not expired, can't close"`` ; `name`: ``"OptionMarketNotExpiredCantClose"``  }, { `code`: ``323`` ; `msg`: ``"Not enough assets in the quote asset pool"`` ; `name`: ``"NotEnoughQuoteAssetsInPool"``  }, { `code`: ``324`` ; `msg`: ``"Invalid auth token provided"`` ; `name`: ``"InvalidAuth"``  }, { `code`: ``325`` ; `msg`: ``"Coin mint must match option mint"`` ; `name`: ``"CoinMintIsNotOptionMint"``  }, { `code`: ``326`` ; `msg`: ``"Cannot prune the market while it's still active"`` ; `name`: ``"CannotPruneActiveMarket"``  }, { `code`: ``327`` ; `msg`: ``"Numberical overflow"`` ; `name`: ``"NumberOverflow"``  }] |
| `instructions` | [{ `accounts`: [{ `isMut`: ``true`` ; `isSigner`: ``true`` ; `name`: ``"authority"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetMint"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"quoteAssetMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"optionMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"writerTokenMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"quoteAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"optionMarket"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"feeOwner"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"tokenProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"associatedTokenProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"rent"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"systemProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"clock"``  }] ; `args`: [{ `name`: ``"underlyingAmountPerContract"`` ; `type`: ``"u64"``  }, { `name`: ``"quoteAmountPerContract"`` ; `type`: ``"u64"``  }, { `name`: ``"expirationUnixTimestamp"`` ; `type`: ``"i64"``  }, { `name`: ``"bumpSeed"`` ; `type`: ``"u8"``  }] ; `name`: ``"initializeMarket"``  }, { `accounts`: [{ `isMut`: ``true`` ; `isSigner`: ``true`` ; `name`: ``"userAuthority"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetSrc"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"optionMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"mintedOptionDest"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"writerTokenMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"mintedWriterTokenDest"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"optionMarket"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"feeOwner"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"tokenProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"associatedTokenProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"clock"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"rent"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"systemProgram"``  }] ; `args`: [{ `name`: ``"size"`` ; `type`: ``"u64"``  }] ; `name`: ``"mintOption"``  }, { `accounts`: [{ `isMut`: ``true`` ; `isSigner`: ``true`` ; `name`: ``"userAuthority"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetSrc"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"optionMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"mintedOptionDest"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"writerTokenMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"mintedWriterTokenDest"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"optionMarket"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"tokenProgram"``  }] ; `args`: [{ `name`: ``"size"`` ; `type`: ``"u64"``  }] ; `name`: ``"mintOptionV2"``  }, { `accounts`: [{ `isMut`: ``true`` ; `isSigner`: ``true`` ; `name`: ``"userAuthority"``  }, { `isMut`: ``true`` ; `isSigner`: ``true`` ; `name`: ``"optionAuthority"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"optionMarket"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"optionMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"exerciserOptionTokenSrc"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetDest"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"quoteAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"quoteAssetSrc"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"feeOwner"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"tokenProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"systemProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"clock"``  }] ; `args`: [{ `name`: ``"size"`` ; `type`: ``"u64"``  }] ; `name`: ``"exerciseOption"``  }, { `accounts`: [{ `isMut`: ``true`` ; `isSigner`: ``true`` ; `name`: ``"userAuthority"``  }, { `isMut`: ``true`` ; `isSigner`: ``true`` ; `name`: ``"optionAuthority"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"optionMarket"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"optionMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"exerciserOptionTokenSrc"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetDest"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"quoteAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"quoteAssetSrc"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"tokenProgram"``  }] ; `args`: [{ `name`: ``"size"`` ; `type`: ``"u64"``  }] ; `name`: ``"exerciseOptionV2"``  }, { `accounts`: [{ `isMut`: ``false`` ; `isSigner`: ``true`` ; `name`: ``"userAuthority"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"optionMarket"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"writerTokenMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"writerTokenSrc"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetDest"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"tokenProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"clock"``  }] ; `args`: [{ `name`: ``"size"`` ; `type`: ``"u64"``  }] ; `name`: ``"closePostExpiration"``  }, { `accounts`: [{ `isMut`: ``false`` ; `isSigner`: ``true`` ; `name`: ``"userAuthority"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"optionMarket"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"writerTokenMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"writerTokenSrc"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"optionTokenMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"optionTokenSrc"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"underlyingAssetDest"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"tokenProgram"``  }] ; `args`: [{ `name`: ``"size"`` ; `type`: ``"u64"``  }] ; `name`: ``"closeOptionPosition"``  }, { `accounts`: [{ `isMut`: ``false`` ; `isSigner`: ``true`` ; `name`: ``"userAuthority"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"optionMarket"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"writerTokenMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"writerTokenSrc"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"quoteAssetPool"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"writerQuoteDest"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"tokenProgram"``  }] ; `args`: [{ `name`: ``"size"`` ; `type`: ``"u64"``  }] ; `name`: ``"burnWriterForQuote"``  }, { `accounts`: [{ `isMut`: ``true`` ; `isSigner`: ``true`` ; `name`: ``"userAuthority"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"optionMarket"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"serumMarket"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"systemProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"tokenProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"dexProgram"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"rent"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"pcMint"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"optionMint"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"requestQueue"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"eventQueue"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"bids"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"asks"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"coinVault"``  }, { `isMut`: ``true`` ; `isSigner`: ``false`` ; `name`: ``"pcVault"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"vaultSigner"``  }, { `isMut`: ``false`` ; `isSigner`: ``false`` ; `name`: ``"marketAuthority"``  }] ; `args`: [{ `name`: ``"marketSpace"`` ; `type`: ``"u64"``  }, { `name`: ``"vaultSignerNonce"`` ; `type`: ``"u64"``  }, { `name`: ``"coinLotSize"`` ; `type`: ``"u64"``  }, { `name`: ``"pcLotSize"`` ; `type`: ``"u64"``  }, { `name`: ``"pcDustThreshold"`` ; `type`: ``"u64"``  }] ; `name`: ``"initSerumMarket"``  }] |
| `name` | ``"psy_american"`` |
| `version` | ``"0.0.0"`` |

#### Defined in

[psyAmericanTypes.ts:1](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/psyAmericanTypes.ts#L1)

## Variables

### FEE\_OWNER\_KEY

• **FEE\_OWNER\_KEY**: `PublicKey`

The fee owner key for the Psy American program

#### Defined in

[fees.ts:6](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/fees.ts#L6)

___

### NFT\_MINT\_LAMPORTS

• **NFT\_MINT\_LAMPORTS**: `number`

The number of lamports the protocol takes as a fee when minting or
exercising an option on an asset that cannot take a 5bps fee. E.g a minting
a call option on an NFT

#### Defined in

[fees.ts:13](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/fees.ts#L13)

___

### PSY\_AMERICAN\_PROGRAM\_IDS

• **PSY\_AMERICAN\_PROGRAM\_IDS**: `Object`

All prior Psy American programIds for all networks so clients that require
backwards compatability can maintain it.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `3KAqLcLAY8W7ZxGT1MJcFPDMNJKJsXaE1m9i1JPahfmH` | [`ProgramVersions`](enums/ProgramVersions) |
| `AAcHauRu6eUDePN3hDDAUTbgyRq5xFbRZJCLsUdpBCJb` | [`ProgramVersions`](enums/ProgramVersions) |
| `GDvqQy3FkDB2wyNwgZGp5YkmRMUmWbhNNWDMYKbLSZ5N` | [`ProgramVersions`](enums/ProgramVersions) |

#### Defined in

[programIds.ts:7](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/programIds.ts#L7)

___

### PsyAmericanIdl

• **PsyAmericanIdl**: `Idl`

The Anchor IDL for the Psy American program. Used when creating an Anchor Program.

````typescript
const program = new Program(PsyAmericanIdl, psyAmericanProgramId, provider);
````

#### Defined in

[index.ts:25](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/index.ts#L25)

## Functions

### chunkArray

▸ `Const` **chunkArray**(`myArray`, `chunkSize`): `any`[][]

Returns an array with arrays of the given size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `myArray` | `any`[] | Array to split |
| `chunkSize` | `number` | Size of every group |

#### Returns

`any`[][]

#### Defined in

[utils/chunkArray.ts:7](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/utils/chunkArray.ts#L7)

___

### deriveOptionKeyFromParams

▸ `Const` **deriveOptionKeyFromParams**(`__namedParameters`): `Promise`<[`PublicKey`, `number`]\>

Get the deterministic address for an Option based on its properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | `Object` | - |
| `__namedParameters.expirationUnixTimestamp` | `BN` | The OptionMarket expiration timestamp in seconds |
| `__namedParameters.programId` | `PublicKey` | The Psy American program ID |
| `__namedParameters.quoteAmountPerContract` | `BN` | The quote asset amount per option contract |
| `__namedParameters.quoteMint` | `PublicKey` | The quote asset mint address |
| `__namedParameters.underlyingAmountPerContract` | `BN` | The underlying asset amount per option contract |
| `__namedParameters.underlyingMint` | `PublicKey` | The underlying asset mint address |

#### Returns

`Promise`<[`PublicKey`, `number`]\>

#### Defined in

[utils/deriveOptionKeyFromParams.ts:8](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/utils/deriveOptionKeyFromParams.ts#L8)

___

### feeAmountPerContract

▸ `Const` **feeAmountPerContract**(`assetQuantity`): `BN`

Get the protocol's fee amount when minting or exercising. When minting this
should be the underlingAmountPerContract. When exercising this should be
the quoteAmountPerContract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetQuantity` | `BN` | Quantity of the asset being used to mint or exercise |

#### Returns

`BN`

#### Defined in

[fees.ts:23](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/fees.ts#L23)

___

### getAllOptionAccounts

▸ `Const` **getAllOptionAccounts**(`program`): `Promise`<[`OptionMarketWithKey`](modules#optionmarketwithkey)[]\>

Load all OptionMarkets owned by the given program from the blockchain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](modules#psyamerican)\> | Anchor Psy American program |

#### Returns

`Promise`<[`OptionMarketWithKey`](modules#optionmarketwithkey)[]\>

#### Defined in

[OptionMarket.ts:11](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/OptionMarket.ts#L11)

___

### getOptionByKey

▸ `Const` **getOptionByKey**(`program`, `key`): `Promise`<[`OptionMarketWithKey`](modules#optionmarketwithkey)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Program`<[`PsyAmerican`](modules#psyamerican)\> |
| `key` | `PublicKey` |

#### Returns

`Promise`<[`OptionMarketWithKey`](modules#optionmarketwithkey)\>

#### Defined in

[utils/getOptionByKey.ts:6](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/utils/getOptionByKey.ts#L6)

___

### getOrAddAssociatedTokenAccountTx

▸ `Const` **getOrAddAssociatedTokenAccountTx**(`associatedAddress`, `mintKey`, `provider`, `owner?`): `Promise`<`TransactionInstruction`\>

Returns a TransactionInstruction for creating the associated token account
if one deos not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `associatedAddress` | `PublicKey` | The associated token account address |
| `mintKey` | `PublicKey` | The SPL token mint address |
| `provider` | `default` | The Anchor provider that has the wallet |
| `owner` | `PublicKey` | The user's address that owns the associated token account |

#### Returns

`Promise`<`TransactionInstruction`\>

#### Defined in

[utils/getOrAddAssociatedTokenAccountTx.ts:20](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/utils/getOrAddAssociatedTokenAccountTx.ts#L20)

___

### getVaultOwnerAndNonce

▸ `Const` **getVaultOwnerAndNonce**(`marketPublicKey`, `dexProgramId`): `Promise`<[`PublicKey`, `BN`]\>

This is needed for the permissioned serum markets.

TODO can we replace this with PublicKey.findProgramAddress

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketPublicKey` | `PublicKey` |
| `dexProgramId` | `PublicKey` |

#### Returns

`Promise`<[`PublicKey`, `BN`]\>

#### Defined in

[utils/getVaultOwnerAndNonce.ts:13](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/utils/getVaultOwnerAndNonce.ts#L13)

___

### parseTransactionError

▸ `Const` **parseTransactionError**(`error`): `ProgramError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`ProgramError`

#### Defined in

[utils/parseTransactionErrors.ts:6](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/utils/parseTransactionErrors.ts#L6)
