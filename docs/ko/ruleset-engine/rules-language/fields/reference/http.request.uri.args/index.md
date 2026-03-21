---
title: http.request.uri.args · Cloudflare 규칙 세트 엔진 문서
description: HTTP URI 인수는 Map(associative array)로 표현된 요청과 관련되어 있습니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 다운로드

`http.request.uri.args`지도\<Array\<String>>

HTTP URI 인수는 Map(associative array)로 표현된 요청과 관련되어 있습니다.

인수가 반복될 때, 배열은 요청에 나타나는 순서에 있는 다수 품목을 포함합니다.

값은 사전 처리되지 않으며 요청에서 사용되는 원래 사례를 유지합니다.

- **암호 해독**: 코딩 없음
- **비 ASCII**: 예약

예제 값:

```txt
{"search": ["red+apples"]}
```

예제 사용:

```txt
any(http.request.uri.args["search"][*] == "red+apples")
```

명세서:

- 제품 정보
- 한국어
