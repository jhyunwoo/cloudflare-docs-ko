---
title: http.request.accepted languages · Cloudflare Ruleset 엔진 docs
description: >-
  [`Accept-Language`]
  (https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Accept-Language)
  HTTP 요청 헤더에서 제공하는 언어 태그 목록.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.accepted_languages/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.accepted_languages/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.accepted_languages/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.accepted_languages/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# http\://www\.request.accepted languages.co.kr/

`http.request.accepted_languages`배열\<String>

언어 태그 목록에서 제공[`Accept-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Accept-Language)HTTP 요청 헤더.

언어 태그는 무게로 분류됩니다 (`;q=<weight>`, 기본 중량의`1`) 후손 순서에서.

HTTP 헤더가 요청에 존재하지 않는 경우 또는 빈,`http.request.accepted_languages[0]`"을 반환합니다[누락된 값](https://developers.cloudflare.com/ruleset-engine/rules-language/values/#notes)", 이는[`concat()`](https://developers.cloudflare.com/ruleset-engine/rules-language/functions/#concat)함수는 빈 문자열로 처리됩니다.

HTTP 헤더가 언어 태그를 포함하면`*`배열에 저장되지 않습니다.

**이름 \***: 이 필드는 만 사용할 수 있습니다[Transform 규칙](https://developers.cloudflare.com/rules/transform/).

예제 사용:

```txt
# Example 1: Request with header "Accept-Language: fr-CH, fr;q=0.8, en;q=0.9, de;q=0.7, *;q=0.5".
# In this case:
http.request.accepted_languages[0] ==> "fr-CH"
http.request.accepted_languages    ==> ["fr-CH", "en", "fr", "de"]


# Example 2: Request without an `Accept-Language` HTTP header and a URI of "https://www.example.com/my-path".
# In this case:
concat("/", http.request.accepted_languages[0], http.request.uri.path) ==> "//my-path"
```

명세서:

- 제품 정보
- 기타 제품
