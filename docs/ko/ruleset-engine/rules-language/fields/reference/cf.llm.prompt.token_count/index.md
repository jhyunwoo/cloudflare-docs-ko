---
title: cf.llm.prompt.token count · Cloudflare Ruleset 엔진 docs
description: 요청에서 LLM 프롬프트에 대한 추정된 토큰 수.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.token_count/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.token_count/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.token_count/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.token_count/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.llm.prompt.token count에 대 한

`cf.llm.prompt.token_count`이름 \*

요청에서 LLM 프롬프트에 대한 추정된 토큰 수.

계산은 범용 Tokenizer를 사용하여 계산되며 LLM 공급자에 의해보고 된 카운트와 정확히 일치 할 수 없습니다.

Cloudflare 기업 계획을 요구합니다. 당신은 또한 활성화해야합니다[AI 보안 앱](https://developers.cloudflare.com/waf/detections/ai-security-for-apps/).

예제 사용:

```txt
# Matches requests where the estimated token count exceeds 4,000:
(cf.llm.prompt.token_count gt 4000)
```

명세서:

- 제품 정보
