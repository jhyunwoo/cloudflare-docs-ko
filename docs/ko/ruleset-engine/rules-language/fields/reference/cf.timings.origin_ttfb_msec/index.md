---
title: cf.timings.origin ttfb msec · Cloudflare Ruleset 엔진 docs
description: CloudflareXQ 글로벌 네트워크와 밀리 초의 기원 서버 사이에 라운드 트랙 시간 (RTT).
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.timings.origin_ttfb_msec/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.timings.origin_ttfb_msec/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.timings.origin_ttfb_msec/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.timings.origin_ttfb_msec/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.timings.origin ttfb msec의

`cf.timings.origin_ttfb_msec`팟캐스트

CloudflareXQ 글로벌 네트워크와 밀리 초의 기원 서버 사이에 라운드 트랙 시간 (RTT).

이 필드는 Origin 서버 대기시간에 대한 통찰력을 제공합니다. Cloudflare 가장자리 서버의 관점에서 First Byte (TTFB)에 시간을 나타냅니다.

이 메트릭은 두 개의 네트워크 RTT와 시간이 소요되는 원래 서버가 요청을 처리합니다.

요청이 Cloudflare CDN 캐시에서 제공된 경우, 이 필드의 값은 도달되지 않았습니다.`0`.

예제 값:

```txt
150
```

예제 사용:

```txt
# Matches requests where the origin response time (TTFB) was greater than 2 seconds:
cf.timings.origin_ttfb_msec > 2000
```

명세서:

- 제품 정보
