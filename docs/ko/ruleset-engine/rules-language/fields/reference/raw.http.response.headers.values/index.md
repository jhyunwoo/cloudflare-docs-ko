---
title: 원료.http.response.headers.values · Cloudflare Ruleset 엔진 docs
description: 어떤 변화없이 HTTP 응답의 헤더의 값.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/raw.http.response.headers.values/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/raw.http.response.headers.values/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/raw.http.response.headers.values/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/raw.http.response.headers.values/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 원시.http.response.headers.values

`raw.http.response.headers.values`배열\<String>

어떤 변화없이 HTTP 응답의 헤더의 값.

이것은 원시 필드 버전의[`http.response.headers.values`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.values/)이름 \* 원료 분야, prefixed`raw.`, 나중에 평가에 대한 원래 응답 값을 보존. 이 필드는 전체 요청 평가 워크플로에서 immutable이며, 이전에 일치하는 규칙의 행동에 영향을 미치지 않습니다.

예제 값:

```txt
Example 1: ["application/json"]
Example 2: ["This header value is longer than 10 bytes"]
```

예제 사용:

```txt
# Example 1: Check for specific header value.
any(raw.http.response.headers.values[*] == "application/json")


# Example 2: Match requests according to the specified operator and the length/size entered for the header value.
any(len(raw.http.response.headers.values[*])[*] gt 10)
```

명세서:

- 관련 기사
- 기타 제품
- 회사 소개
