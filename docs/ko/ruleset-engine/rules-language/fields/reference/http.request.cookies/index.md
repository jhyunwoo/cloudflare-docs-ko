---
title: http.request.cookies · Cloudflare Ruleset 엔진 docs
description: '`Cookie` HTTP 헤더는 Map(associative array)로 표현된 요청과 관련되어 있습니다.'
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.cookies/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.cookies/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.cookies/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.cookies/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 웹 사이트

`http.request.cookies`지도\<Array\<String>>

더 보기`Cookie`HTTP 헤더는 Map(associative array)로 표현된 요청과 관련되어 있습니다.

Cloudflare Pro, 비즈니스 또는 엔터프라이즈 플랜을 요구합니다.

쿠키 이름은 URL이 디코딩되어 있습니다. 두 개의 쿠키가 디코딩 후 같은 이름을 가지고 있다면, 그들의 값 배열이 결합됩니다.

쿠키 값은 사전 처리되지 않으며 요청에서 사용되는 원래 사례를 유지합니다.

예제 값:

```txt
{ "app": ["test"] }
```

예제 사용:

```txt
any(http.request.cookies["app"][*] == "test")
```

명세서:

- 제품 정보
- 기타 제품
