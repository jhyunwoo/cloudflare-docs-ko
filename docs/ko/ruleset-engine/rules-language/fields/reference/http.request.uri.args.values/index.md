---
title: http.request.uri.args.values · Cloudflare 규칙 세트 엔진 docs
description: HTTP URI 쿼리 문자열에 인수의 값.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args.values/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args.values/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args.values/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args.values/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 웹 사이트

`http.request.uri.args.values`배열\<String>

HTTP URI 쿼리 문자열에 인수의 값.

값은 사전 처리되지 않으며 요청에서 사용되는 원래 사례를 유지합니다. 그들은 요청에 따라 동일한 순서에 있습니다.

중복 값은 여러 번 나열됩니다.

- **암호 해독**: 코딩 없음
- **비 ASCII**: 예약

예제 값:

```txt
["red+apples"]
```

예제 사용:

```txt
any(http.request.uri.args.values[*] == "red+apples")
```

명세서:

- 제품 정보
- 한국어
