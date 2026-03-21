---
title: cf.tls client auth.cert issuer dn rfc2253 · CloudflareXQ Ruleset 엔진 docs
description: >-
  인증서 권위 (CA)의 Distinguished Name (DN)는 [RFC 2253]
  (https://datatracker.ietf.org/doc/html/rfc2253XQ) 형식의 요청에 인증서를 발급했습니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_issuer_dn_rfc2253/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_issuer_dn_rfc2253/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_issuer_dn_rfc2253/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_issuer_dn_rfc2253/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 클라이언트 auth.cert issuer dn rfc2253

`cf.tls_client_auth.cert_issuer_dn_rfc2253`스트레이트

인증서 권위 (CA)의 Distinguished Name (DN)는 요청에 인증서를 발행했습니다.[RFC 2253년](https://datatracker.ietf.org/doc/html/rfc2253)파일 형식.

이 필드는 요청이 클라이언트 인증서를 포함하는 경우에만 채워집니다[mTLS 인증](https://developers.cloudflare.com/ssl/client-certificates/enable-mtls/).

예제 값:

```txt
"CN=Access Testing CA,OU=TX,O=Access Testing,L=Austin,ST=Texas,C=US"
```

명세서:

- 제품 정보
- 사이트맵
