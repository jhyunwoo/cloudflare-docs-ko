---
title: http.host · Cloudflare Ruleset 엔진 docs
description: 전체 요청 URI에 사용되는 호스트 이름.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.host/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.host/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.host/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.host/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 웹 사이트

`http.host`스트레이트

전체 요청 URI에 사용되는 호스트 이름.

더 보기`http.host`필드는 포함`Host`원래 요청에서 헤더.

설정한 경우[회사 소개](https://developers.cloudflare.com/rules/origin-rules/)호스트명을 바꾸는 것은, 그들은 안으로 반영되지 않습니다`http.host`필드 값.

예제 값:

```txt
"www.example.org"
```

명세서:

- 제품 정보
- 한국어
