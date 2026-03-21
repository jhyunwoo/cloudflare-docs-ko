---
title: 로그 엔진 · Cloudflare 로그 docs
description: Logs Engine은 R2에서 로그를 저장하고 직접 쿼리 할 수있는 능력을 제공합니다.
lastUpdated: 2025-10-01T13:53:03.000Z
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/logs/r2-log-retrieval/'
  md: 'https://developers.cloudflare.com/logs/r2-log-retrieval/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/logs/r2-log-retrieval/'
translation_source_md: 'https://developers.cloudflare.com/logs/r2-log-retrieval/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
Logs Engine은 R2에서 로그를 저장하고 직접 쿼리 할 수있는 능력을 제공합니다.

이름 \*

Logs Engine은 Log Explorer에 의해 대체 될 것입니다. 자세한 내용은 상담[로그 탐색](https://developers.cloudflare.com/log-explorer/)문서 및 액세스 요청, 완료[회원가입](https://cloudflare.com/lp/log-explorer/).

## R2에 있는 상점 기록

- 설정하기[R2에 Logpush](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/r2/)작업.

- 이름 \*[R2 접근 열쇠](https://developers.cloudflare.com/r2/api/tokens/)적어도 R2는 허가를 읽었습니다.

- Logshare가 권한을 읽는 것을 보장합니다.

- 대안으로 Cloudflare API 토큰을 다음과 같은 권한으로 만듭니다.

  - 계정 범위
  - 로그 읽기 권한

## Query 로그

API를 사용하여 쿼리 및 시간 범위 또는 로그를 다운로드 할 수 있습니다.[레이디](https://developers.cloudflare.com/fundamentals/reference/cloudflare-ray-id/).

## 인증현황

다음 헤더는 모든 API 호출에 필요한:

- `X-Auth-Email`- 도메인과 관련된 Cloudflare 계정 이메일 주소
- `X-Auth-Key`- Cloudflare API 열쇠

또는 Logs 편집 권한이있는 API 토큰은 인증에 사용할 수 있습니다.

- `Authorization: Bearer <API_TOKEN>`

### 필수 헤더

언급 된 필수 인증 헤더 외에도 다음 헤더는 R2 버킷에 저장된 로그에 액세스하는 API에 필요합니다.

- `R2-access-key-id`(필수) -[R2 접근 열쇠 Id](https://developers.cloudflare.com/r2/api/tokens/)
- `R2-secret-access-key`(필수) -[R2 비밀 접근 열쇠](https://developers.cloudflare.com/r2/api/tokens/)

## 파일 목록

endpoint를 사용하여 제공되는 쿼리 매개 변수와 일치하는 로그를 포함하는 관련 R2 개체 목록`GET /accounts/{accountId}/logs/list`.

### Query 매개변수

- `start`(required) 문자열 (TimestampRFC3339) - RFC 3339 형식으로 시작 시간, 예를 들어`start=2022-06-06T16:00:00Z`.

- `end`(required) 문자열 (TimestampRFC3339) - RFC 3339 형식으로 종료 시간, 예를 들어`end=2022-06-06T16:00:00Z`.

- `bucket`(필수) 문자열 (버켓) - R2 버킷 이름, 예를 들어`bucket=cloudflare-logs`.

- `prefix`string (Prefix) - R2 물통 접두사 기록은, 예를 들면 저장됩니다`prefix=http_requests/example.com/{DATE}`.

- `limit`number (Limit) - 수익의 최대 수, 예를 들어`limit=100`.

## 시간 범위로 로그를 검색

R2에 저장된 스트림 로그는 endpoint를 사용하여 제공한 쿼리 매개 변수와 일치합니다.`GET /accounts/{accountId}/logs/retrieve`.

### Query 매개변수

- `start`(required) 문자열 (TimestampRFC3339) - RFC 3339 형식으로 시작 시간, 예를 들어`start=2022-06-06T16:00:00Z`

- `end`(required) 문자열 (TimestampRFC3339) - RFC 3339 형식으로 종료 시간, 예를 들어`end=2022-06-06T16:00:00Z`

- `bucket`(필수) 문자열 (버켓) - R2 버킷 이름, 예를 들어`bucket=cloudflare-logs`

- `prefix`string (Prefix) - R2 물통 접두사 기록은, 예를 들면 저장됩니다`prefix=http_requests/example.com/{DATE}`

### API 요청

```bash
curl --globoff "https://api.cloudflare.com/client/v4/accounts/{account_id}/logs/retrieve?start=2022-06-01T16:00:00Z&end=2022-06-01T16:05:00Z&bucket=cloudflare-logs&prefix=http_requests/example.com/{DATE}" \
--header "X-Auth-Email: <EMAIL>" \
--header "X-Auth-Key: <API_KEY>" \
--header "R2-Access-Key-Id: R2_ACCESS_KEY_ID" \
--header "R2-Secret-Access-Key: R2_SECRET_ACCESS_KEY"
```

결과는 파일을 사용하여 파이프 할 수 있습니다.`> logs.json`.

또한 클라이언트가 투명하게 decompressed하지 않고 원시 GZIP 바이트를 수신하려면 헤더를 포함`--header "Accept-Encoding: gzip"`.

## Ray ID로 로그 검색

R2에 저장 된 로그를 사용하여 - Logpull RayID Lookup 기능은 RayID의 존재에 대한 인덱스 된 시간 범위를 쿼리하고 일치하는 결과를 반환 할 수 있습니다. 이 기능은 Logpull RayID Lookup 베타 구독을 사용하여 사용자에게 제공됩니다.

RayID를 찾는 능력은 두 단계 과정입니다. 첫째, 시간 범위는 RayID에 의해 기록을 요청할 수 있기 전에 인덱스되어야합니다.

인덱스는 7일 후 자동으로 만료됩니다.

### 시간 범위 색인

쿼리를 실행하기 전에 쿼리의 범위를 축소하기 위해 시간을 지정할 수 있습니다. 다음 예제에서 R2 버킷에 저장된 로그의 1 분을 색인합니다.`"cloudflare-logs"`접두사 아래`"http_requests/{DATE}"`.

### API 요청

```bash
curl https://api.cloudflare.com/client/v4/accounts/{account_id}/logs/rayids/index \
--header "Authorization: Bearer <API_TOKEN>" \
--header "R2-Access-Key-Id: <R2_ACCESS_KEY_ID>" \
--header "R2-Secret-Access-Key: <R2_SECRET_ACCESS_KEY>" \
--header "Content-Type: application/json" \
--data-raw '{
  "start": "2022-08-16T20:30:00Z",
  "end": "2022-08-16T20:31:00",
  "bucket": "cloudflare-logs",
  "prefix": "http_requests/example.com/{DATE}"
}'
```

## RayID 보기

시간 범위를 색인한 후에, 실행하십시오`GET`RayID 요청. 일치한 결과가 색인된 시간 범위에서 발견되면, 기록은 반환될 것입니다. 매개 변수가 요청 몸과 URL로 이동합니다. 더 보기`-g`플래그는 피해야`{DATE}`cURL에 의해 misinterpreted 인 매개 변수.

### API 요청

```bash
curl --globoff "https://api.cloudflare.com/client/v4/accounts/{account_id}/logs/rayids/<RAY_ID>?bucket=cloudflare-logs&prefix=http_requests/example.com/{DATE}" \
--header "Authorization: Bearer <API_TOKEN>" \
--header "R2-Access-Key-Id: <R2_ACCESS_KEY_ID>" \
--header "R2-Secret-Access-Key: <R2_SECRET_ACCESS_KEY>"
```

## 문제 해결

API에 액세스할 때 오류가 발생합니다.

- **오류 수정**: 시간 범위는 너무 많은 결과를 반환합니다. 시간을 줄이고 다시 시도하십시오.

HTTP 상태 코드`422`시작과 끝 모수 사이 시간 범위가 너무 넓은 경우에 반환될 것입니다. 이 제한으로 실행되는 경우 더 짧은 시간 범위를 쿼리하십시오.

- **오류 수정**: 토큰 제공은 필수 기능이 활성화되지 않습니다.

계정에 추가된 베타 Logpull RayID Lookup 구독이 있는 계정 담당자에게 문의하십시오.

- **오류 수정**: 시간 범위는 너무 많은 결과를 반환합니다. 시간을 줄이고 다시 시도하십시오.

높은 볼륨 영역은 R2에 많은 로그 파일을 생성할 수 있습니다. 로그인 볼륨에 가장 적합한 기간을 찾을 때까지 시작 및 종료 시간을 줄입니다.

어떻게 인덱스에 어떤 시간 범위를 알고 있습니까?

현재, 그들은 도착으로 로그를 색인하는 과정이 없습니다. RayID가 있는 경우 요청이 완료된 후 로그의 다음 5-10 분을 색인하려고 합니다.

이벤트가 진행될 때의 시간 지연은 무엇입니까?

Logpush는 가능한 한 빨리 배치에 로그를 전달, 일반적으로 1 분 미만. 이 후 로그 엔진을 사용하여 로그인 할 수 있습니다.

R2는 유지 관리가 있습니까?

R2는 현재 장소에 있는 보유 통제가 없습니다. Logpush 작업을 만들 때까지 다시 쿼리 할 수 있습니다.

어떤 데이터셋이 호환되는 로그 엔진입니까?

retrieval API는 모든 데이터셋과 호환됩니다. 전체 목록은 사용할 수 있습니다[데이터셋](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/)이름 \*
