---
title: ip.src.country · Cloudflare Ruleset 엔진 docs
description: >-
  [ISO 3166-1 알파 2] (https://www.iso.org/obp/ui/#search/code/) 형식의 2-letter 국가
  코드.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/ip.src.country/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/ip.src.country/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/ip.src.country/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/ip.src.country/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 사이트맵

`ip.src.country`스트레이트

2-letter 국가 코드[ISO 3166-1 알파 2](https://www.iso.org/obp/ui/#search/code/)파일 형식.

ISO 3166-1 Alpha 2 형식에 대한 자세한 내용은 참조[ISO 3166-1 알파 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)Wikipedia에.

이 분야에는 동일한 값이 있습니다.`ip.geoip.country`분야, 이는 deprecated. 더 보기`ip.geoip.country`필드는 여전히 새로운 기존 규칙에 사용할 수 있지만, 사용해야합니다`ip.src.country`대신 필드.

*GeoIP는 MaxMind, Inc.의 등록 상표입니다.*

예제 값:

```txt
"GB"
```

명세서:

- 제품 정보
- 관련 기사
