---
title: CloudflareXQ Ruleset 엔진 docs
description: HTTP 요청 헤더는 Map(또는 associative array)로 표현됩니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 웹 사이트

`http.request.headers`지도\<Array\<String>>

HTTP 요청 헤더는 Map(또는 associative array)로 표현됩니다.

associative 배열의 열쇠는 HTTP 요구 우두머리의 이름 더 낮은 케이스로 개조됩니다.

헤더를 반복 할 때, 배열은 요청에 나타나는 순서에 포함.

요청 헤더 값은 사전 처리되지 않으며 요청에서 사용되는 원래 사례를 유지합니다.

- **암호 해독**: 코딩 없음
- **화이트스페이스**: 예약
- **비 ASCII**: 예약

HTTP 요청이 너무 많은 헤더를 포함 할 때, 이 필드는 HTTP 요청에서 보낸 헤더의 모든 포함 할 수 없습니다. 이 상황에서,[`http.request.headers.truncated`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.headers.truncated/)현장 설정`true`.

예제 값:

```txt
{"content-type": ["application/json"]}
```

예제 사용:

```txt
any(http.request.headers["content-type"][*] == "application/json")
```

명세서:

- 제품 정보
- 기타 제품
