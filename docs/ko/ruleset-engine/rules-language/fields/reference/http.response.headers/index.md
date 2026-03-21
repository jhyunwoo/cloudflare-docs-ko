---
title: http.response.headers · Cloudflare Ruleset 엔진 docs
description: HTTP 응답 헤더는 Map(또는 associative array)로 표현됩니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.headers/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 웹 사이트

`http.response.headers`지도\<Array\<String>>

HTTP 응답 헤더는 Map(또는 associative array)로 표현됩니다.

헤더를 반복할 때, 배열은 응답에 나타나는 순서에 그(것)들을 포함합니다. 키는 더 낮은 케이스로 변환합니다.

- **암호 해독**: 코딩 없음
- **화이트스페이스**: 예약
- **비 ASCII**: 예약

**이름 \***: HTTP 응답 필드의 가용성은 정확한 Cloudflare 기능 및 Cloudflare 계획에 따라 달라집니다.

예제 값:

```txt
{"server": ["nginx"]}
```

예제 사용:

```txt
any(http.response.headers["server"][*] == "nginx")
```

명세서:

- 관련 기사
- 기타 제품
