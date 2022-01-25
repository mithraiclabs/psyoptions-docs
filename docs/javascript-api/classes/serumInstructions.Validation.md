---
id: "serumInstructions.Validation"
title: "Class: Validation"
sidebar_label: "serumInstructions.Validation"
custom_edit_url: null
---

[serumInstructions](../namespaces/serumInstructions).Validation

## Implements

- `Middleware`

## Constructors

### constructor

• **new Validation**(`optionMarketKey`, `marketAuthorityBump`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `optionMarketKey` | `PublicKey` |
| `marketAuthorityBump` | `number` |

#### Defined in

[serumInstructions/marketLoader.ts:53](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/serumInstructions/marketLoader.ts#L53)

## Properties

### marketAuthorityBump

• **marketAuthorityBump**: `number`

#### Defined in

[serumInstructions/marketLoader.ts:51](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/serumInstructions/marketLoader.ts#L51)

___

### optionMarketKey

• **optionMarketKey**: `PublicKey`

#### Defined in

[serumInstructions/marketLoader.ts:50](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/serumInstructions/marketLoader.ts#L50)

## Methods

### cancelOrderByClientIdV2

▸ **cancelOrderByClientIdV2**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.cancelOrderByClientIdV2

#### Defined in

[serumInstructions/marketLoader.ts:66](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/serumInstructions/marketLoader.ts#L66)

___

### cancelOrderV2

▸ **cancelOrderV2**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.cancelOrderV2

#### Defined in

[serumInstructions/marketLoader.ts:63](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/serumInstructions/marketLoader.ts#L63)

___

### closeOpenOrders

▸ **closeOpenOrders**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.closeOpenOrders

#### Defined in

[serumInstructions/marketLoader.ts:72](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/serumInstructions/marketLoader.ts#L72)

___

### initOpenOrders

▸ **initOpenOrders**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.initOpenOrders

#### Defined in

[serumInstructions/marketLoader.ts:57](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/serumInstructions/marketLoader.ts#L57)

___

### newOrderV3

▸ **newOrderV3**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.newOrderV3

#### Defined in

[serumInstructions/marketLoader.ts:60](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/serumInstructions/marketLoader.ts#L60)

___

### prune

▸ **prune**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.prune

#### Defined in

[serumInstructions/marketLoader.ts:75](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/serumInstructions/marketLoader.ts#L75)

___

### settleFunds

▸ **settleFunds**(`ix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ix` | `TransactionInstruction` |

#### Returns

`void`

#### Implementation of

Middleware.settleFunds

#### Defined in

[serumInstructions/marketLoader.ts:69](https://github.com/mithraiclabs/psyoptions-ts/blob/ae06d0d/packages/psy-american/src/serumInstructions/marketLoader.ts#L69)
