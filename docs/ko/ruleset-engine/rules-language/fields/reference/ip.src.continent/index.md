---
title: ip.src.continent · Cloudflare Ruleset 엔진 docs
description: 클라이언트 IP 주소와 관련된 대륙 코드.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/ip.src.continent/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/ip.src.continent/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/ip.src.continent/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/ip.src.continent/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# IP 정보

`ip.src.continent`스트레이트

클라이언트 IP 주소와 관련된 대륙 코드.

가치:

- `"AF"`: 아프리카
- `"AN"`: 남극
- `"AS"`: 아시아
- `"EU"`: 유럽
- `"NA"`: 북미
- `"OC"`: 해양
- `"SA"`: 미국
- `"T1"`: Tor 네트워크

이 분야에는 동일한 값이 있습니다.`ip.geoip.continent`분야, 이는 deprecated. 더 보기`ip.geoip.continent`필드는 여전히 새로운 기존 규칙에 사용할 수 있지만, 사용해야합니다`ip.src.continent`대신 필드.

*GeoIP는 MaxMind, Inc.의 등록 상표입니다.*

명세서:

- 제품 정보
- 관련 기사
