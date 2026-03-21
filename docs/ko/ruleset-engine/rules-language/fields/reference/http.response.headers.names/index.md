---
title: http.response.headers.names · Cloudflare 규칙 세트 엔진 docs
description: HTTP 응답의 헤더의 이름.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.names/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.names/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.names/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.names/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# http.response.headers.names에 대 한

`http.response.headers.names`배열\<String>

HTTP 응답의 헤더의 이름.

이름은 사전 처리되지 않으며 응답에 사용되는 원래 사례를 유지합니다.

헤더 이름의 순서는 보장되지 않습니다 그러나 일치할 것입니다[`http.response.headers.values`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers.values/).

중복 헤더는 여러 번 나열됩니다.

- **암호 해독**: 코딩 없음
- **화이트스페이스**: 예약
- **비 ASCII**: 예약

**이름 \***: HTTP 응답 필드의 가용성은 정확한 Cloudflare 기능 및 Cloudflare 계획에 따라 달라집니다.

예제 값:

```txt
["content-type"]
```

예제 사용:

```txt
any(http.response.headers.names[*] == "content-type")
```

명세서:

- 관련 기사
- 기타 제품
