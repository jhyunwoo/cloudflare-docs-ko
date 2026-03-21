---
title: http.request.headers.values · Cloudflare 규칙 세트 엔진 docs
description: HTTP 요청에 헤더의 값.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers.values/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers.values/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers.values/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers.values/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 웹 사이트

`http.request.headers.values`배열\<String>

HTTP 요청에 헤더의 값.

값은 사전 처리되지 않으며 요청에서 사용되는 원래 사례를 유지합니다.

헤더 값의 순서는 보장되지 않지만 일치합니다.[`http.request.headers.names`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers.names/).

중복 헤더는 여러 번 나열됩니다.

- **암호 해독**: 코딩 없음
- **화이트스페이스**: 예약
- **비 ASCII**: 예약

HTTP 요청이 너무 많은 헤더를 포함 할 때, 이 필드는 HTTP 요청에서 보낸 헤더의 모든 값을 포함 할 수 없습니다. 이 상황에서,[`http.request.headers.truncated`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers.truncated/)현장 설정`true`.

**이름 \***: HTTP / 2에서 HTTP 헤더의 이름은 항상 더 낮은 경우입니다. 최근 버전의`curl`제품정보[기본적으로 HTTP/2를 활성화](https://curl.se/docs/manpage.html#--http2)HTTPS 연결을 위해.

예제 값:

```txt
Example 1: ["application/json"]
Example 2: ["This header value is longer than 10 bytes"]
```

예제 사용:

```txt
# Example 1: Check for specific header value.
any(http.request.headers.values[*] == "application/json")


# Example 2: Match requests according to the specified operator and the length/size entered for the header value.
any(len(http.request.headers.values[*])[*] gt 10)
```

명세서:

- 제품 정보
- 기타 제품
