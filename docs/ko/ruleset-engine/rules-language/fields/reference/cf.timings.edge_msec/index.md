---
title: cf.timings.edge msec · Cloudflare Ruleset 엔진 docs
description: Cloudflare 글로벌 네트워크에서 요청을 처리하는 시간을 보냈다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.timings.edge_msec/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.timings.edge_msec/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.timings.edge_msec/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.timings.edge_msec/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.timings.edge msec의

`cf.timings.edge_msec`팟캐스트

Cloudflare 글로벌 네트워크에서 요청을 처리하는 시간을 보냈다.

값은 CloudflareXQ Edge 서버가 처리하기 전에 HTTP 요청 헤더를 허용하고 HTTP 응답 헤더가 클라이언트로 전송되기 전에 시간 간격에 해당합니다.

값은 포함되지 않습니다 :

- Origin 서버에 요청을 전달하는 시간 (refer to[`cf.timings.origin_ttfb_msec`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.timings.origin_ttfb_msec/)).
- 클라이언트에 네트워크 전송 시간.

예제 값:

```txt
28
```

예제 사용:

```txt
# Matches requests where Cloudflare's edge processing time was greater than 500 milliseconds
cf.timings.edge_msec > 500
```

명세서:

- 제품 정보
