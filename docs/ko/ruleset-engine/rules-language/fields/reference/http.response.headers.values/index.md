---
title: http.response.headers.values · Cloudflare 규칙 세트 엔진 docs
description: HTTP 응답의 헤더의 값.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.values/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.values/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.values/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.values/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# http.response.headers.values의 값

`http.response.headers.values`배열\<String>

HTTP 응답의 헤더의 값.

값은 사전 처리되지 않으며 응답에 사용되는 원래 사례를 유지합니다.

헤더 값의 순서는 보장되지 않지만 일치합니다.[`http.response.headers.names`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.names/).

중복 헤더는 여러 번 나열됩니다.

- **암호 해독**: 코딩 없음
- **화이트스페이스**: 예약
- **비 ASCII**: 예약

**이름 \***: HTTP 응답 필드의 가용성은 정확한 Cloudflare 기능 및 Cloudflare 계획에 따라 달라집니다.

예제 값:

```txt
Example 1: ["application/json"]
Example 2: ["This header value is longer than 10 bytes"]
```

예제 사용:

```txt
# Example 1: Check for specific header value.
any(http.response.headers.values[*] == "application/json")


# Example 2: Match requests according to the specified operator and the length/size entered for the header value.
any(len(http.response.headers.values[*])[*] gt 10)
```

명세서:

- 관련 기사
- 기타 제품
