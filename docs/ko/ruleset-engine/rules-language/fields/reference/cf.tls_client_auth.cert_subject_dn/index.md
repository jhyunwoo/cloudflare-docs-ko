---
title: cf.tls client auth.cert subject dn · Cloudflare Ruleset 엔진 docs
description: 인증서의 소유자 (또는 요청자)의 Distinguished Name (DN) 요청에 포함.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_subject_dn/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_subject_dn/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_subject_dn/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_subject_dn/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 클라이언트 auth.cert subject dn

`cf.tls_client_auth.cert_subject_dn`스트레이트

인증서의 소유자 (또는 요청자)의 Distinguished Name (DN) 요청에 포함.

이 필드는 요청이 클라이언트 인증서를 포함하는 경우에만 채워집니다[mTLS 인증](https://developers.cloudflare.com/ssl/client-certificates/enable-mtls/).

예제 값:

```txt
"CN=James Royal,OU=Access Admins,O=Access,L=Austin,ST=Texas,C=US"
```

명세서:

- 제품 정보
- 사이트맵
