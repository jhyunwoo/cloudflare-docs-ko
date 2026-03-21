---
title: 'http://www.response.content type.media type · Cloudflare Ruleset 엔진 docs'
description: 응답 `Content-Type` 헤더를 기반으로 한 추가 매개 변수없이 더 낮은 콘텐츠 유형 (subtype 및 suffix 포함).
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.content_type.media_type/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.content_type.media_type/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.content_type.media_type/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.response.content_type.media_type/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# http\://www\.response.content type.media type 으로 접속

`http.response.content_type.media_type`스트레이트

더 낮은 콘텐츠 유형 (subtype 및 suffix 포함) 응답에 따라 추가 매개 변수 없이`Content-Type`헤더.

필드 값은 다음과 같은 매개 변수를 포함하지 않습니다.`charset`.

예제 값:

| 콘텐츠 유형 헤더                               | 필드 값                |
| --------------------------------------- | ------------------- |
| `text/html`                             | `"text/html"`       |
| `text/html; charset=utf-8`              | `"text/html"`       |
| `text/html+extra`                       | `"text/html+extra"` |
| `text/html+extra; charset=utf-8`        | `"text/html+extra"` |
| `text/HTML`                             | `"text/html"`       |
| `text/html; charset=utf-8; other=value` | `"text/html"`       |

**이름 \***: HTTP 응답 필드의 가용성은 정확한 Cloudflare 기능 및 Cloudflare 계획에 따라 달라집니다.

명세서:

- 관련 기사
- 기타 제품
