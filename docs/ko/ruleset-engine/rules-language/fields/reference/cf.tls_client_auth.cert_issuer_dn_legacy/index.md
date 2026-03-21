---
title: cf.tls client auth.cert issuer dn legacy · Cloudflare Ruleset 엔진 docs
description: 인증서 권위 (CA)의 Distinguished Name (DN)는 레거시 형식의 요청에 인증서를 발급했습니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_issuer_dn_legacy/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_issuer_dn_legacy/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_issuer_dn_legacy/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_issuer_dn_legacy/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 클라이언트 auth.cert issuer dn legacy

`cf.tls_client_auth.cert_issuer_dn_legacy`스트레이트

인증서 권위 (CA)의 Distinguished Name (DN)는 레거시 형식의 요청에 인증서를 발급했습니다.

이 필드는 요청이 클라이언트 인증서를 포함하는 경우에만 채워집니다[mTLS 인증](https://developers.cloudflare.com/ssl/client-certificates/enable-mtls/).

예제 값:

```txt
"/C=US/ST=Texas/L=Austin/O=Access Testing/OU=TX/CN=Access Testing CA"
```

명세서:

- 제품 정보
- 사이트맵
