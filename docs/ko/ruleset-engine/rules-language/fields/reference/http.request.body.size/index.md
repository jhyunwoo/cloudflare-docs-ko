---
title: http.request.body.size · Cloudflare Ruleset 엔진 docs
description: HTTP 요청 몸의 총 크기 (바이트에서).
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.size/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.size/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.size/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.size/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 웹 사이트

`http.request.body.size`이름 \*

HTTP 요청 몸의 총 크기 (바이트에서).

이 필드는 반환 한 것보다 더 큰 가치를 가질 수있다`len(http.request.body.raw)`, 이후[`http.request.body.raw`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.raw/)필드는 Cloudflare 계획에 따라 변화하는 최대 크기까지 요청 몸을 고려합니다.

Cloudflare 유료 애드온과 엔터프라이즈 플랜.

명세서:

- 제품 정보
- 이름 \*
