---
title: http.request.timestamp.sec · Cloudflare Ruleset 엔진 docs
description: CloudflareXQ가 요청을 받았을 때 타임 스탬프가 초 단위로 표현되었습니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.timestamp.sec/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.timestamp.sec/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.timestamp.sec/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.timestamp.sec/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# http\://www\.request.timestamp.sec 으로 접속

`http.request.timestamp.sec`팟캐스트

CloudflareXQ가 요청을 받았을 때 타임 스탬프가 초 단위로 표현되었습니다.

필드 값은 10 자리입니다.

HMAC 토큰을 표현할 때 이 필드를 전달합니다.`currentTimestamp`인수에[`is_timed_hmac_valid_v0()`](https://developers.cloudflare.com/ruleset-engine/rules-language/functions/#hmac-validation)유효한 기능.

타임스탬프 밀리 초를 얻기 위해, 사용[`http.request.timestamp.msec`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.timestamp.msec/)이름 \*

예제 값:

```txt
1484063137
```

명세서:

- 제품 정보
