---
title: cf.response.1xxx code · Cloudflare Ruleset 엔진 docs
description: 1XXX Cloudflare 오류에 대한 특정 코드를 포함합니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.response.1xxx_code/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.response.1xxx_code/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.response.1xxx_code/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.response.1xxx_code/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.response.1xxx 코드

`cf.response.1xxx_code`팟캐스트

1XXX Cloudflare 오류에 대한 특정 코드를 포함합니다.

이 필드를 사용하여 동일한 HTTP 상태 코드와 관련된 1XXX 오류 사이에 차별화합니다. 기본값은`0`.

1XXX 오류 목록, 참조[문제 해결 Cloudflare 1XXX 오류](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/).

**이름 \***: 이 필드는 만 사용할 수 있습니다[응답 헤더 Transform 규칙](https://developers.cloudflare.com/rules/transform/response-header-modification/)·[사용자 정의 오류](https://developers.cloudflare.com/rules/custom-errors/).

예제 값:

```txt
1020
```

명세서:

- 관련 기사
