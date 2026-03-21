---
title: cf.llm.prompt.injection score · Cloudflare Ruleset 엔진 docs
description: 1-99의 점수는 요청에서 LLM 프롬프트가 신속한 주사 공격을 수행하려고한다는 것을 나타냅니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.injection_score/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.injection_score/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.injection_score/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.injection_score/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.llm.prompt.injection score의

`cf.llm.prompt.injection_score`이름 \*

1-99의 점수는 요청에서 LLM 프롬프트가 신속한 주사 공격을 수행하려고한다는 것을 나타냅니다.

낮은 점수 (예를 들어, 아래`20`) 요청에서 LLM 프롬프트가 신속한 주사 공격을 수행하려고 하는 높은 확률이 있음을 나타냅니다.

특별한 점수`100`Cloudflare는 요청을 점수하지 않았다는 것을 나타냅니다.

Cloudflare 기업 계획을 요구합니다. 당신은 또한 활성화해야합니다[AI 보안 앱](https://developers.cloudflare.com/waf/detections/ai-security-for-apps/).

명세서:

- 제품 정보
