---
title: mTLS · Cloudflare Workers 문서
description: mTLS 연결을 시행하는 서비스에 클라이언트 인증서를 제시하기 위해 작업자를 구성하십시오.
lastUpdated: 2026-01-29T10:38:24.000Z
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls/'
  md: >-
    https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls/'
translation_source_md: 'https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
사용 방법[다운로드](https://www.cloudflare.com/learning/ssl/what-is-https/), 서버는 클라이언트가 자신의 정체성을 증명하기 위해 인증된 인증서를 제공합니다. 더 단단한 안전을 위해, 몇몇 서비스는 클라이언트가 증명서를 선물한다는 것을 요구합니다.

이 과정 - 알려진[사이트맵](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/)- TLS의 프로토콜에 인증 이동, 오히려 응용 코드에서 관리. 허가된 클라이언트의 연결은 대신 TLS Handhake 도중 거절됩니다.

서비스로 통신 할 때 클라이언트 인증서를 제시하려면 mTLS 인증서를 만듭니다.[관련 제품](https://developers.cloudflare.com/workers/runtime-apis/bindings/)당신의 노동자 프로젝트의 Wrangler 파일에서. 고객 인증서를 대신하여 서비스를 제공할 수 있습니다.

제품정보

현재, Workers에 대한 mTLS는 서비스의 요청에 사용할 수 없습니다[proxied 지역](https://developers.cloudflare.com/dns/proxy-status/)Cloudflare.에. 노동자가 CloudflareX08X0808XQXQXQXQXQXQXQXQ에 의해 proxied 서비스에 클라이언트 인증서를 선물하는 경우에`520`오류.

첫째, 인증서 및 개인 키를 사용하여 계정에 업로드[`wrangler mtls-certificate`](https://developers.cloudflare.com/workers/wrangler/commands/#mtls-certificate)명령:

제품정보

더 보기`wrangler mtls-certificate upload`명령은[SSL 및 인증서 편집 API 토큰 범위](https://developers.cloudflare.com/fundamentals/api/reference/permissions/). OAuth 흐름을 사용하는 경우`wrangler login`, 정확한 범위는 자동적으로 놓입니다. API 토큰을 사용하는 경우, 참조[API 토큰 만들기](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/)API 토큰의 올바른 범위를 설정하려면.

```sh
npx wrangler mtls-certificate upload --cert cert.pem --key key.pem --name my-client-cert
```

그런 다음 Worker 프로젝트의 Wrangler 파일을 업데이트하여 mTLS 인증서 바인딩을 만듭니다.

- 다운로드

  ```jsonc
  {
    "mtls_certificates": [
      {
        "binding": "MY_CERT",
        "certificate_id": "<CERTIFICATE_ID>"
      }
    ]
  }
  ```

- 와일러.toml

  ```toml
  [[mtls_certificates]]
  binding = "MY_CERT"
  certificate_id = "<CERTIFICATE_ID>"
  ```

이름 \*

인증서 ID는 업로드 후 표시되며 명령으로 볼 수 있습니다.`wrangler mtls-certificate list`.

mTLS 인증서 바인딩을 추가하면 Worker의 환경에 변수가 포함되어 있습니다.`fetch()`사용방법 이름 \*`fetch()`방법은 표준을 사용합니다.[뚱 베어](https://developers.cloudflare.com/workers/runtime-apis/fetch/)API와 같은 시그널이 글로벌`fetch`, 그러나 항상 TLS 연결을 설정할 때 클라이언트 인증서를 제공합니다.

이름 \*

mTLS 인증서 바인딩은 API와 유사합니다.[서비스 바인딩](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings).

### 제품 설명

- 모델 번호: JavaScript

  ```js
  export default {
    async fetch(request, environment) {
      return await environment.MY_CERT.fetch("https://a-secured-origin.com");
    },
  };
  ```

- 모델 번호: TypeScript

  ```js
  interface Env {
    MY_CERT: Fetcher;
  }


  export default {
      async fetch(request, environment): Promise<Response> {
          return await environment.MY_CERT.fetch("https://a-secured-origin.com")
      }
  } satisfies ExportedHandler<Env>;
  ```
