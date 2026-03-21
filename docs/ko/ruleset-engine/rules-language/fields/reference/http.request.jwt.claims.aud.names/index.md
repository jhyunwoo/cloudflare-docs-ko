---
title: http.request.jwt.claims.aud.names · Cloudflare Ruleset 엔진 docs
description: '`aud`(오디언스)는 JSON Web Token(JWT)이 의도한 수신자를 식별합니다.'
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.jwt.claims.aud.names/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.jwt.claims.aud.names/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.jwt.claims.aud.names/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.jwt.claims.aud.names/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# http\://www\.request.jwt.claims.aud.names 의 이메일 주소

`http.request.jwt.claims.aud.names`배열\<String>

더 보기`aud`(audience) 주장은 JSON Web Token (JWT)이 의도 한 수신자를 식별합니다.

JWT를 처리하는 각 주자는 청중 청구의 값으로 자신을 식별해야합니다. 일반적인 경우,`aud`값은 case-sensitive 문자열의 배열이며, 각 포함`StringOrURI`가치. 자세한 내용은 참조[등록 클레임 이름](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1)RFC 7519에서.

Cloudflare 유료 애드온과 엔터프라이즈 플랜.

JSON Web Token을 유효성 검사에 대한 자세한 내용은 참조[JSON 웹 토큰 검증](https://developers.cloudflare.com/api-shield/security/jwt-validation/)API Shield 문서에서.

명세서:

- 제품 정보
- JWT 검증
