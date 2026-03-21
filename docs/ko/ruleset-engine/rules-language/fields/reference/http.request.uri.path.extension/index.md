---
title: http.request.uri.path.extension · Cloudflare Ruleset 엔진 docs
description: dot (`.`) 문자없이 URI 경로의 더 낮은 파일 확장.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.path.extension/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.path.extension/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.path.extension/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.path.extension/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# http\://www\.request.uri.path.extension.extension.com/wp-content/uploads/2017/12/icoschedule.html

`http.request.uri.path.extension`스트레이트

도트없이 URI 경로의 더 낮은 파일 확장 (Lowcased file extension)`.`) 문자.

이것은 URI 경로에서 마지막 점 후 문자열에 해당, 쿼리 문자열을 제외.

마지막 경로 세그먼트의 첫 번째 문자가 도트이고 세그먼트는 다른 도트 문자를 포함하지 않는 경우, 필드 값은 빈 문자열이 될 것입니다 (`""`). 첫 번째 문자로 도트가 파일 확장을 나타내지 않으며 UNIX-like 시스템에서 숨겨진 파일이나 디렉토리를 표시하지 않습니다.

예제 값:

- URI 경로가 있다면`/articles/index.html`, 분야 가치는 일 것입니다`"html"`.
- URI 경로가 있다면`/articles/index.`, 필드 값은 빈 문자열입니다 (`""`).

예제 값:

| URI 경로         | 필드 값    |
| -------------- | ------- |
| `/foo`         | `""`    |
| `/foo.mp3`     | `"mp3"` |
| `/.mp3`        | `""`    |
| `/.foo.mp3`    | `"mp3"` |
| `/foo.tar.bz2` | `"bz2"` |
| `/foo.`        | `""`    |
| `/foo.MP3`     | `"mp3"` |

명세서:

- 제품 정보
- 한국어
