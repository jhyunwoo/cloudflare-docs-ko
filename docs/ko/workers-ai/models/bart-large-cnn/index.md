---
title: bart-large-cnn · Cloudflare Workers AI 문서
description: >-
  BART는 양방향 (BERT-like) 인코더 및 autoregressive (GPT-like) 디코더와 변압기 인코더 (seq2seq)
  모델입니다. 텍스트 요약에 대한이 모델을 사용할 수 있습니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/bart-large-cnn/'
  md: 'https://developers.cloudflare.com/workers-ai/models/bart-large-cnn/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/bart-large-cnn/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/bart-large-cnn/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
₢ 킹

# bart-large-cnn 베타

요약 • 페이스 북

@cf/facebook/bart-large-cnn을

BART는 양방향 (BERT-like) 인코더 및 autoregressive (GPT-like) 디코더와 변압기 인코더 (seq2seq) 모델입니다. 텍스트 요약에 대한이 모델을 사용할 수 있습니다.

| 모델 정보 |                  |
| ----- | ---------------- |
| 베타 베타 | 이름 \*            |
| 단위 가격 | M 입력 토큰 당 $ 0.00 |

## 제품 정보

- TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {
      const response = await env.AI.run("@cf/facebook/bart-large-cnn", {
        input_text: "Workers AI allows you to run machine learning models, on the Cloudflare network, from your own code – whether that be from Workers, Pages, or anywhere via the Cloudflare API. With the launch of Workers AI, Cloudflare is slowly rolling out GPUs to its global network. This enables you to build and deploy ambitious AI applications that run near your users, wherever they are.",
        max_length: 14
      });
      return Response.json(response);
    },
  } satisfies ExportedHandler<Env>;
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/{cf_account_id}/ai/run/@cf/facebook/bart-large-cnn \
    -H "Authorization: Bearer {cf_api_token}" \
    -d '{
      "input_text": "Workers AI allows you to run machine learning models, on the Cloudflare network, from your own code – whether that be from Workers, Pages, or anywhere via the Cloudflare API. With the launch of Workers AI, Cloudflare is slowly rolling out GPUs to its global network. This enables you to build and deploy ambitious AI applications that run near your users, wherever they are.",
      "max_length": 14
    }'
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `input_text`문자열 필수 최소 1

  당신이 모델을 원하는 텍스트 summarize

- `max_length`integer 기본 1024

  토큰의 생성 된 요약의 최대 길이

### 출력 전압

- `summary`이름 \*

  입력 텍스트의 요약 된 버전

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "input_text": {
              "type": "string",
              "minLength": 1,
              "description": "The text that you want the model to summarize"
          },
          "max_length": {
              "type": "integer",
              "default": 1024,
              "description": "The maximum length of the generated summary in tokens"
          }
      },
      "required": [
          "input_text"
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "object",
      "contentType": "application/json",
      "properties": {
          "summary": {
              "type": "string",
              "description": "The summarized version of the input text"
          }
      }
  }
  ```
