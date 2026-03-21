---
title: cf.waf.content scan.obj results · Cloudflare Ruleset 엔진 docs
description: 순서에 있는 검사 결과의 배열은 내용 목표가 요청에 검출되었습니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_results/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_results/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_results/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.waf.content_scan.obj_results/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.waf.content scan.obj results 사이트 맵

`cf.waf.content_scan.obj_results`배열\<String>

순서에 있는 검사 결과의 배열은 내용 목표가 요청에 검출되었습니다.

가능한 값은:`clean`, `suspicious`, `infected`·`not scanned`.

Cloudflare 기업 계획[악성행위 탐지](https://developers.cloudflare.com/waf/detections/malicious-uploads/).

예제 사용:

```txt
# Check if requests to a specific endpoint contain any suspicious or infected content objects
any(cf.waf.content_scan.obj_results[*] in {"suspicious" "infected"}) and http.request.uri.path eq "/upload"
```

명세서:

- 제품 정보
