---
title: cf.waf.content scan.has malicious obj · Cloudflare Ruleset 엔진 docs
description: 요청이 적어도 하나의 악성 콘텐츠 객체를 포함 여부를 나타냅니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.has_malicious_obj/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.has_malicious_obj/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.has_malicious_obj/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.has_malicious_obj/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.waf.content scan.has malicious obj에 대해

`cf.waf.content_scan.has_malicious_obj`스낵 바

요청이 적어도 하나의 악성 콘텐츠 객체를 포함 여부를 나타냅니다.

Cloudflare 기업 계획[악성행위 탐지](https://developers.cloudflare.com/waf/detections/malicious-uploads/).

예제 사용:

```txt
# Check if requests to a specific endpoint include any malicious content objects
cf.waf.content_scan.has_malicious_obj and http.request.uri.path eq "/upload"
```

명세서:

- 제품 정보
