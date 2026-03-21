---
title: cf.response.error type · Cloudflare Ruleset 엔진 docs
description: 응답에 오류의 유형과 문자열이 반환됩니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.response.error_type/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.response.error_type/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.response.error_type/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.response.error_type/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.response.error type에 대 한

`cf.response.error_type`스트레이트

응답에 오류의 유형과 문자열이 반환됩니다.

기본값은 빈 문자열입니다 (`""`).

사용 가능한 값은 다음과 같습니다.

- `"managed_challenge"`
- `"iuam"`
- `"legacy_challenge"`
- `"ip_ban"`
- `"waf"`
- `"5xx"`
- `"1xxx"`
- `"always_online"`
- `"country_challenge"`
- `"ratelimit"`

이 필드를 사용하여 오류의 특정 유형에 대한 응답을 사용자 정의 할 수 있습니다 (예를 들어, 모든 1XXX 오류 또는 모든 WAF 블록 동작).

**이름 \***: 이 필드는 만 사용할 수 있습니다[응답 헤더 Transform 규칙](https://developers.cloudflare.com/rules/transform/response-header-modification/)·[사용자 정의 오류](https://developers.cloudflare.com/rules/custom-errors/).

명세서:

- 관련 기사
