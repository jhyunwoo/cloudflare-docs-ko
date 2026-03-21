---
title: http.request.uri.args.names · Cloudflare 규칙 세트 엔진 docs
description: HTTP URI 쿼리 문자열의 인수의 이름.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args.names/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args.names/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args.names/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args.names/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 웹 사이트

`http.request.uri.args.names`배열\<String>

HTTP URI 쿼리 문자열의 인수의 이름.

이름이 반복될 때, 배열은 요청에 나타나는 순서에 있는 다수 품목을 포함합니다.

이름은 사전 처리되지 않으며 요청에 사용되는 원래 사례를 유지합니다.

- **암호 해독**: 코딩 없음
- **비 ASCII**: 예약

예제 값:

```txt
["search"]
```

예제 사용:

```txt
any(http.request.uri.args.names[*] == "search")
```

명세서:

- 제품 정보
- 한국어
