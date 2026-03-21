---
title: RTKStore · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkstore/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkstore/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkstore/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkstore/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

이 모듈은 단일 글로벌 매장을 나타냅니다. 상점은에서 접근 할 수 있습니다`meeting.stores`모듈.

**기타 제품**: RTKStore의 인스턴스.\
**이름 \***

```js
const handRaiseRTKStore = meeting.stores.stores.get('handRaise');
```

- [RTK 스토어](#module_RTKStore) ⇒

  - [모듈.exports](#exp_module_RTKStore--module.exports) ⏏

    - [새로운 module.exports (args)](#new_module_RTKStore--module.exports_new)
    - [.set (키, 값, \[sync\], \[emit\])](#module_RTKStore--module.exports+set) ⇒ `Promise.<void>`
    - [.bulkSet (데이터)](#module_RTKStore--module.exports+bulkSet) ⇒ `Promise.<void>`
    - [.update(키, 값, \[sync\])](#module_RTKStore--module.exports+update) ⇒ `Promise.<void>`
    - [.delete(키, \[sync\], \[emit\])](#module_RTKStore--module.exports+delete) ⇒ `Promise.<void>`
    - [.bulkDelete (데이터)](#module_RTKStore--module.exports+bulkDelete) ⇒ `Promise.<void>`
    - [.get (키)](#module_RTKStore--module.exports+get) ⇒ `any`
    - [모든()](#module_RTKStore--module.exports+getAll) ⇒ `RTKStoreData`
    - [.updateRateLimits(넘, 기간)](#module_RTKStore--module.exports+updateRateLimits)
    - [.updateBulkRateLimits(num, period)](#module_RTKStore--module.exports+updateBulkRateLimits)
    - [.subscribe(키, cb)](#module_RTKStore--module.exports+subscribe) ⇒ `void`
    - [.unsubscribe(키, \[cb\])](#module_RTKStore--module.exports+unsubscribe) ⇒ `void`
    - [.populate (데이터)](#module_RTKStore--module.exports+populate)

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (args)

| 계정 만들기 | 제품정보                  |
| ------ | --------------------- |
| 사이트맵   | `Object`              |
| 이름 \*  | `string`              |
| 아프리카   | `PluginSocketHandler` |
| 아프리카   | `string`              |

[]()

#### module.exports.set (키, 값, \[sync], \[emit]) ⇒`Promise.<void>`

가게에 가치를 설정합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)\
**기타 제품**: `Promise.<void>`- 약속.

| 계정 만들기  | 제품정보      | 기본 정보   | 이름 \*              |
| ------- | --------- | ------- | ------------------ |
| 주요 특징   | `string`  |         | 값 저장에 사용되는 고유 식별자. |
| 제품정보    | `any`     |         | 설정할 수 있는 데이터.      |
| \[ 동기화] | `boolean` | `true`  | 원격 저장소에 동기화 변화 여부. |
| \[기타]   | `boolean` | `false` | 지역 가입자에게 방출 여부.    |

[]()

#### module.exports.bulkSet(데이터) ⇒`Promise.<void>`

저장소에 여러 값을 설정합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)\
**기타 제품**: `Promise.<void>`- 약속.

| 계정 만들기 | 제품정보                                  |
| ------ | ------------------------------------- |
| 자료실    | `Array.<{key: string, payload: any}>` |

[]()

#### module.exports.update(키, 값, \[sync]) ⇒`Promise.<void>`

상점에서 이미 기존의 가치를 업데이트합니다. 저장되는 값은`['a', 'b']`, 가동`store.update(key, ['c'])`값 수정`['a','b','c']`.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)\
**기타 제품**: `Promise.<void>`- 약속.

| 계정 만들기  | 제품정보      | 기본 정보  | 이름 \*              |
| ------- | --------- | ------ | ------------------ |
| 주요 특징   | `string`  |        | 값 저장에 사용되는 고유 식별자. |
| 제품정보    | `any`     |        | 업데이트 될 데이터.        |
| \[ 동기화] | `boolean` | `true` | 원격 저장소에 동기화 변화 여부. |

[]()

#### module.exports.delete(키, \[sync], \[emit]) ⇒`Promise.<void>`

키 값 쌍을 저장합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)\
**기타 제품**: `Promise.<void>`- 약속.

| 계정 만들기  | 제품정보      | 기본 정보   | 이름 \*              |
| ------- | --------- | ------- | ------------------ |
| 주요 특징   | `string`  |         | 값 저장에 사용되는 고유 식별자. |
| \[ 동기화] | `boolean` | `true`  | 원격 저장소에 동기화 변화 여부. |
| \[기타]   | `boolean` | `false` | 지역 가입자에게 방출 여부.    |

[]()

#### module.exports.bulkDelete (데이터) ⇒`Promise.<void>`

저장소에서 여러 값을 삭제합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)\
**기타 제품**: `Promise.<void>`- 약속.

| 계정 만들기 | 제품정보                    |
| ------ | ----------------------- |
| 자료실    | `Array.<{key: string}>` |

[]()

#### module.exports.get(키) ⇒`any`

주어진 키의 값을 반환합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)\
**기타 제품**: `any`- 주어진 열쇠를 위한 가치.

| 계정 만들기 | 제품정보     | 이름 \*              |
| ------ | -------- | ------------------ |
| 주요 특징  | `string` | 값 저장에 사용되는 고유 식별자. |

[]()

#### 모듈.exports.getAll() ⇒`RTKStoreData`

전체 매장을 반환합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)\
**기타 제품**: `RTKStoreData`- RTKStoreData의 인스턴스입니다.\
[]()

#### module.exports.updateRateLimits(num, period)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)

| 계정 만들기 | 제품정보     |
| ------ | -------- |
| 사이트맵   | `number` |
| 기간 :   | `number` |

[]()

#### module.exports.updateBulkRateLimits(num, period)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)

| 계정 만들기 | 제품정보     |
| ------ | -------- |
| 사이트맵   | `number` |
| 기간 :   | `number` |

[]()

#### module.exports.subscribe(키, cb) ⇒`void`

저장소 키에서 데이터 변경에 대한 듣기.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)\
**기타 제품**: `void`- 비어 있는

| 계정 만들기 | 제품정보       | 이름 \*                  |
| ------ | ---------- | ---------------------- |
| 주요 특징  | `string`   | 값 저장에 사용되는 고유 식별자.     |
| 사이트맵   | `function` | 데이터가 수정될 때 실행되는 콜백 함수. |

[]()

#### module.exports.unsubscribe(키, \[cb]) ⇒`void`

상점에서 키에 대한 모든 청취를 제거합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)\
**기타 제품**: `void`- 비어 있는

| 계정 만들기    | 제품정보       | 이름 \*              |
| --------- | ---------- | ------------------ |
| 주요 특징     | `string`   | 값 저장에 사용되는 고유 식별자. |
| \[cb] (주) | `function` | 제거 할 콜백.           |

[]()

#### module.exports.populate (데이터)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStore--module.exports)

| 계정 만들기 | 제품정보           |
| ------ | -------------- |
| 자료실    | `RTKStoreData` |
