---
title: cf.waf.content scan.obj types · Cloudflare Ruleset 엔진 docs
description: 순서에 있는 파일 유형의 배열은 내용 목표가 요청에 검출되었습니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_types/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_types/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_types/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_types/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.waf.content scan.obj 타입

`cf.waf.content_scan.obj_types`배열\<String>

순서에 있는 파일 유형의 배열은 내용 목표가 요청에 검출되었습니다.

Cloudflare가 콘텐츠 객체의 파일 유형을 결정할 수 없는 경우, 해당 값은`obj_types`배열은 일 것입니다`application/octet-stream`.

Cloudflare 기업 계획[악성행위 탐지](https://developers.cloudflare.com/waf/detections/malicious-uploads/).

예제 사용:

```txt
# Check if requests to a specific endpoint contain content objects other than PDFs
any(cf.waf.content_scan.obj_types[*] != "application/pdf") and http.request.uri.path eq "/upload"
```

명세서:

- 제품 정보
