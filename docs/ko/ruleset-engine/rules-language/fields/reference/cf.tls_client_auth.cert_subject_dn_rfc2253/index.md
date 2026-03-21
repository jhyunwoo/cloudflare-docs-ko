---
title: cf.tls client auth.cert subject dn rfc2253 · Cloudflare Ruleset 엔진 docs
description: >-
  [RFC 2253] (https://datatracker.ietf.org/doc/html/rfc2253) 형식의 요청에 인증서의 소유자
  (또는 요청자)의 분산 된 이름 (DN).
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_subject_dn_rfc2253/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_subject_dn_rfc2253/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_subject_dn_rfc2253/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.tls_client_auth.cert_subject_dn_rfc2253/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# 클라이언트 auth.cert subject dn rfc2253

`cf.tls_client_auth.cert_subject_dn_rfc2253`스트레이트

소유자 (또는 요청자)의 분산 된 이름 (DN)[RFC 2253년](https://datatracker.ietf.org/doc/html/rfc2253)파일 형식.

이 필드는 요청이 클라이언트 인증서를 포함하는 경우에만 채워집니다[mTLS 인증](https://developers.cloudflare.com/ssl/client-certificates/enable-mtls/).

예제 값:

```txt
"CN=James Royal,OU=Access Admins,O=Access,L=Austin,ST=Texas,C=US"
```

명세서:

- 제품 정보
- 사이트맵
