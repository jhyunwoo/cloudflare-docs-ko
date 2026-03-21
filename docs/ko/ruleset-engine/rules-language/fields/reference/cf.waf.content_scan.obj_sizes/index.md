---
title: cf.waf.content scan.obj sizes · Cloudflare Ruleset 엔진 docs
description: '바이트의 파일 크기의 배열은, 순서에서 내용 물체가 요청에 검출되었습니다.'
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_sizes/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_sizes/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_sizes/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_sizes/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.waf.content scan.obj   크기

`cf.waf.content_scan.obj_sizes`배열\<Integer>

바이트의 파일 크기의 배열은, 순서에서 내용 물체가 요청에 검출되었습니다.

Cloudflare 기업 계획[악성행위 탐지](https://developers.cloudflare.com/waf/detections/malicious-uploads/).

예제 사용:

```txt
# Check if requests to a specific endpoint contain any content objects larger than 500 KB (512,000 bytes)
any(cf.waf.content_scan.obj_sizes[*] > 512000) and http.request.uri.path eq "/upload"
```

명세서:

- 제품 정보
