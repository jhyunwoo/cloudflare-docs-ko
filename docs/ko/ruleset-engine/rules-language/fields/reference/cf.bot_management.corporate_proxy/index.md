---
title: cf.bot management.corporate proxy · Cloudflare Ruleset 엔진 docs
description: 수신 요청이 식별된 기업 전용 클라우드 기반 기업 프록시 또는 보안 웹 게이트웨이에서 제공되는지 나타냅니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.corporate_proxy/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.corporate_proxy/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.corporate_proxy/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.corporate_proxy/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.bot management.corporate proxy에 대해

`cf.bot_management.corporate_proxy`스낵 바

수신 요청이 식별된 기업 전용 클라우드 기반 기업 프록시 또는 보안 웹 게이트웨이에서 제공되는지 나타냅니다.

Cloudflare 기업 계획[Bot 관리](https://developers.cloudflare.com/bots/plans/bm-subscription/)지원하다

예제 사용:

```txt
not cf.bot_management.verified_bot
and not cf.bot_management.static_resource
and not cf.bot_management.corporate_proxy
and cf.bot_management.score lt 30
```

명세서:

- 제품 정보
- 로그아웃
