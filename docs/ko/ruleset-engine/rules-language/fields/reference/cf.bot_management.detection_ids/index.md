---
title: cf.bot management.detection ids · Cloudflare Ruleset 엔진 docs
description: 요청시 Bot Management heuristic detections에 부합하는 ID 목록.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.detection_ids/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.detection_ids/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.detection_ids/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.detection_ids/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.bot management.detection ids에 대해

`cf.bot_management.detection_ids`배열\<Number>

요청시 Bot Management heuristic detections에 부합하는 ID 목록.

이 필드를 명시적으로 일치하거나 규칙에 대한 통계를 제외합니다. 동일한 요청에 여러 개의 heuristic 검출이있을 수 있습니다.

Cloudflare 기업 계획[Bot 관리](https://developers.cloudflare.com/bots/plans/bm-subscription/)지원하다

예제 사용:

```txt
any(cf.bot_management.detection_ids[*] eq 33554817)
```

명세서:

- 제품 정보
- 로그아웃
