---
title: cf.tls client auth.cert not before · Cloudflare Ruleset 엔진 docs
description: 요청의 인증서는이 날짜 전에 유효하지 않습니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_not_before/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_not_before/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_not_before/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_not_before/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 클라이언트 auth.cert not before

`cf.tls_client_auth.cert_not_before`스트레이트

요청의 인증서는이 날짜 전에 유효하지 않습니다.

이 필드는 요청이 클라이언트 인증서를 포함하는 경우에만 채워집니다[mTLS 인증](https://developers.cloudflare.com/ssl/client-certificates/enable-mtls/).

예제 값:

```txt
"Mar 21 13:35:00 2022 GMT"
```

명세서:

- 제품 정보
- 사이트맵
