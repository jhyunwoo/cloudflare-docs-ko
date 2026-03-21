---
title: cf.llm.prompt.unsafe topic categories · Cloudflare Ruleset 엔진 docs
description: LLM 프롬프트에서 탐지되지 않은 주제의 유형과 문자열 값의 배열.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.unsafe_topic_categories/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.unsafe_topic_categories/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.unsafe_topic_categories/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.unsafe_topic_categories/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.llm.prompt.unsafe topic 카테고리

`cf.llm.prompt.unsafe_topic_categories`배열\<String>

LLM 프롬프트에서 탐지되지 않은 주제의 유형과 문자열 값의 배열.

가능한 값은 다음과 같습니다.

| 제품정보  | 범주 이름         | 이름 \*                                                         |
| ----- | ------------- | ------------------------------------------------------------- |
| `S1`  | 폭력 범죄         | 사람이나 동물에 대한 폭력 범죄.                                            |
| `S2`  | 비폭력 범죄        | 사기, 도난, 약물 생성, 또는 해킹과 같은 비폭력 범죄.                              |
| `S3`  | 성별 관련 범죄      | 트래픽킹, 돌격, harassment를 포함한 성 관련 범죄.                            |
| `S4`  | 아동 성 악용       | 아이들의 성욕.                                                      |
| `S5`  | 관련 기사         | 생활의 명성을 손상할 가능성이있는 False 성명.                                  |
| `S6`  | 특화된 조언        | 특별 금융, 의료, 또는 법적 조언, 또는 안전으로 잘못 위험.                           |
| `S7`  | 제품 정보         | 감각적, 비공개 개인 정보는 개인을 존중 할 수 있습니다.                              |
| `S8`  | 지적 재산         | 제3자 지적재산권 위반                                                  |
| `S9`  | 무기            | 화학, 생물학 또는 핵 무기와 같은 무기의 창조.                                   |
| `S10` | 이름 \*         | Demean 또는 dehumanize 사람들은 인종, 종교, 성적 취향 또는 기타 개인 특성을 기반으로합니다. |
| `S11` | 살충제 및 자체 harm | 자살이나 자살, 자살, 장애가 있는 식사                                        |
| `S12` | Sexual 내용     | 에로틱 콘텐츠.                                                      |
| `S13` | 관련 기사         | 선거에서 투표의 시간, 장소, 또는 방법에 대한 정보를 담고 있습니다.                       |
| `S14` | 비밀번호          | 코드 실행 기능의 사용.                                                 |

Cloudflare 기업 계획을 요구합니다. 당신은 또한 활성화해야합니다[AI 보안 앱](https://developers.cloudflare.com/waf/detections/ai-security-for-apps/).

예제 사용:

```txt
# Matches requests where an unsafe topic categorized as "S2" (Non-violent crimes) or "S10" (Hate) was detected in the LLM prompt:
(cf.llm.prompt.unsafe_topic_detected and any(cf.llm.prompt.unsafe_topic_categories[*] in {"S2" "S10"}))
```

명세서:

- 제품 정보
