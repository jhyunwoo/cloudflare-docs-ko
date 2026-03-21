---
title: cf.tls client random · Cloudflare Ruleset 엔진 docs
description: >-
  클라이언트가 제공하는 32 바이트 임의 값의 값 [TLS
  Handhake](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake),
  Base64에 인코딩.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_random/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_random/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_random/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_random/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 클라이언트 random

`cf.tls_client_random`스트레이트

클라이언트가 제공하는 32 바이트 임의 값[카테고리](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake), Base64에 인코딩.

더 자세한 내용은 참조[RFC 8446년](https://datatracker.ietf.org/doc/html/rfc8446#section-4.1.2).

예제 값:

```txt
"YWJjZA=="
```

명세서:

- 제품 정보
- 사이트맵
