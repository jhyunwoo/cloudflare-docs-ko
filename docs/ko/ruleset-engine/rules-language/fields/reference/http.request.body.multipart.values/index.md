---
title: http.request.body.multipart.values · Cloudflare 규칙 세트 엔진 docs
description: multipart body의 모든 부분에 대한 멀티 파트 값 목록.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.multipart.values/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.multipart.values/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.multipart.values/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.multipart.values/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# http.request.body.multipart.values는

`http.request.body.multipart.values`배열\<String>

multipart body의 모든 부분에 대한 멀티 파트 값 목록.

Cloudflare 유료 애드온과 엔터프라이즈 플랜.

예제 값:

```txt
["alice_doe", <binary_content_of_file>]
```

예제 사용:

```txt
any(http.request.body.multipart.values[*] == "alice_doe")
```

제품정보

모든 것`http.request.body.*`필드 (except[`http.request.body.size`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.size/)) 계획 당 변화하는 주어진 최대 몸 크기를 취급합니다. 기업 고객을 위해, 최대 몸 크기는 128 KB입니다. 다른 유료 계획의 경우, 제한은 기본적으로 낮습니다 - 계정 팀에 도달하거나 제한을 증가시키기 위해 Cloudflare 지원. 무료 플랜 사용자의 경우, 제한은 1MB입니다.

계획의 최대 크기 세트를 초과하는 요청 신체 데이터를 다시 정의 할 수 없습니다. 요청 몸이 더 큰 경우, 몸 필드는 truncated 값과[`http.request.body.truncated`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.truncated/)현장 설정`true`·[`http.request.body.size`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.body.size/)필드는 모든 truncation없이 요청의 전체 크기를 포함합니다.

최대 신체 사이즈는 HTTP body 필드의 값에만 적용됩니다. - Origin 서버는 여전히 완전한 요청 body를 받게됩니다.

명세서:

- 제품 정보
- 이름 \*
