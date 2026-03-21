---
title: 플럭스-2-klein-9b · Cloudflare Workers AI 문서
description: >-
  FLUX.2 [klein] 9B는 강화한 질을 가진 매우 빠른, 증류한 이미지 모형입니다. 단일 모델에서 이미지 생성 및 편집을 취소하고,
  최첨단 품질을 전달하여 대화형 워크플로우, 실시간 미리보기 및 대기 시간의 응용 프로그램을 가능하게 합니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/flux-2-klein-9b/'
  md: 'https://developers.cloudflare.com/workers-ai/models/flux-2-klein-9b/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/flux-2-klein-9b/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/flux-2-klein-9b/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![Black Forest Labs 로고](https://developers.cloudflare.com/_astro/blackforestlabs.Ccs-Y4-D.svg)

# 플럭스 2 klein-9b

Text-to-Image • 검은 숲 연구소

@cf/블랙-forest-labs/flux-2-klein-9b

FLUX.2 \[klein] 9B는 강화한 질을 가진 매우 빠른, 증류한 이미지 모형입니다. 단일 모델에서 이미지 생성 및 편집을 취소하고, 최첨단 품질을 전달하여 대화형 워크플로우, 실시간 미리보기 및 대기 시간의 응용 프로그램을 가능하게 합니다.

| 모델 정보 |                                                               |
| ----- | ------------------------------------------------------------- |
| 이용 약관 | [이름 \*](https://bfl.ai/legal/terms-of-service)                |
| 회사연혁  | 이름 \*                                                         |
| 단위 가격 | 첫 MP 당 $0.015 (1024x1024), 후속 MP 당 $0.002, 입력 이미지 MP 당 $0.002 |

## 제품 정보

- TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {
      const form = new FormData();
      form.append('prompt', 'a sunset with a dog');
      form.append('width', '1024');
      form.append('height', '1024');


      //FormData는 serialized 몸 또는 경계를 노출하지 않습니다. 패스워드
      //Request (또는 응답) constructor serializes it and generates Content-Type
      //서버가 multipart 필드를 파싱해야 하는 경계를 가진 헤더.
      const formResponse = new Response(form);
      const formStream = formResponse.body;
      const formContentType = formResponse.headers.get('content-type')!;


      const resp = await env.AI.run("@cf/black-forest-labs/flux-2-klein-9b", {
        multipart: {
          body: formStream,
          contentType: formContentType
        }
      });


      return Response.json(resp);
    },
  } satisfies ExportedHandler<Env>;
  ```

- 컬럼

  ```sh
  curl --request POST \
    --url 'https://api.cloudflare.com/client/v4/accounts/{ACCOUNT}/ai/run/@cf/black-forest-labs/flux-2-klein-9b' \
    --header 'Authorization: Bearer {TOKEN}' \
    --header 'Content-Type: multipart/form-data' \
    --form 'prompt=a sunset at the alps' \
    --form steps=25 \
    --form width=1024 \
    --form height=1024
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `multipart`자주 묻는 질문

  - `body`기타 제품

  - `contentType`이름 \*

### 출력 전압

- `image`이름 \*

  Base64 문자열로 이미지 생성.

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "multipart": {
              "type": "object",
              "properties": {
                  "body": {
                      "type": "object"
                  },
                  "contentType": {
                      "type": "string"
                  }
              }
          }
      },
      "required": [
          "multipart"
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "object",
      "properties": {
          "image": {
              "type": "string",
              "description": "Generated image as Base64 string."
          }
      }
  }
  ```
