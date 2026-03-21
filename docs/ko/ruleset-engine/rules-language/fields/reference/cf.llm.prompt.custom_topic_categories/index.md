---
title: cf.llm.prompt.custom topic categories · Cloudflare Ruleset 엔진 docs
description: 사용자 정의 항목의지도는 리버스스 점수 (1–99) 요청에서 LLM 프롬프트에 대한.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.custom_topic_categories/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.custom_topic_categories/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.custom_topic_categories/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.custom_topic_categories/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.llm.prompt.custom topic 카테고리

`cf.llm.prompt.custom_topic_categories`지도\<Number>

사용자 정의 항목의지도는 리버스스 점수 (1–99) 요청에서 LLM 프롬프트에 대한.

더 낮은 점수는 그 주제에 더 많은 관련이 있음을 나타냅니다. 일시 정지[사용자 정의](https://developers.cloudflare.com/waf/detections/ai-security-for-apps/unsafe-topics/#custom-topics)설정한다.

Cloudflare 기업 계획을 요구합니다. 당신은 또한 활성화해야합니다[AI 보안 앱](https://developers.cloudflare.com/waf/detections/ai-security-for-apps/).

예제 사용:

```txt
# Matches requests where the prompt is highly relevant to the "competitors" custom topic:
(cf.llm.prompt.custom_topic_categories["competitors"] lt 30)
```

명세서:

- 제품 정보
