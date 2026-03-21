---
title: cf.waf.content scan.num obj · Cloudflare 규칙 세트 엔진 문서
description: 요청 (zero 또는 더 큰)에서 검출되는 내용물의 수.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.num_obj/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.num_obj/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.num_obj/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.num_obj/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.waf.content scan.num obj의

`cf.waf.content_scan.num_obj`팟캐스트

요청 (zero 또는 더 큰)에서 검출되는 내용물의 수.

Cloudflare 기업 계획[악성행위 탐지](https://developers.cloudflare.com/waf/detections/malicious-uploads/).

예제 사용:

```txt
# Check if requests to a specific endpoint contain more than two content objects
cf.waf.content_scan.num_obj > 2 and http.request.uri.path eq "/upload"
```

명세서:

- 제품 정보
