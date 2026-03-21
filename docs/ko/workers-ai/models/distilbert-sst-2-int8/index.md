---
title: distilbert-sst-2-int8 · Cloudflare Workers AI docs
description: 침입 분류 SST-2에 미세 조정 된 BERT 모델
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/distilbert-sst-2-int8/'
  md: >-
    https://developers.cloudflare.com/workers-ai/models/distilbert-sst-2-int8/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/distilbert-sst-2-int8/'
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/distilbert-sst-2-int8/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![뚱 베어 얼굴 로고](https://developers.cloudflare.com/_astro/huggingface.DHiS2HZA.svg)

# 디벤베르트 - sst-2-int8

텍스트 분류 • HuggingFace

@cf/huggingface/distilbert-sst-2-int8

침입 분류 SST-2에 미세 조정 된 BERT 모델

| 모델 정보   |                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------- |
| 더 많은 정보 | [이름 \*](https://huggingface.co/Intel/distilbert-base-uncased-finetuned-sst-2-english-int8-static) |
| 단위 가격   | M 입력 토큰 당 $0.026                                                                                  |

## 제품 정보

- 모델 번호: TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {


      const response = await env.AI.run(
        "@cf/huggingface/distilbert-sst-2-int8",
        {
          text: "This pizza is great!",
        }
      );


      return Response.json(response);
    },
  } satisfies ExportedHandler<Env>;
  ```

- Python

  ```py
  API_BASE_URL = "https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/"
  headers = {"Authorization": "Bearer {API_KEY}"}


  def run(model, input):
      response = requests.post(f"{API_BASE_URL}{model}", headers=headers, json=input)
      return response.json()


  output = run("@cf/huggingface/distilbert-sst-2-int8", { "text": "This pizza is great!" })
  print(output)
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/huggingface/distilbert-sst-2-int8  \
    -X POST  \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
    -d '{ "text": "This pizza is great!" }'
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `text`문자열 필수 최소 1

  classify를 원하는 텍스트

### 출력 전압

- `items`기타 제품

  - `score`이름 \*

    텍스트가 지정된 라벨에 속하는 likelihood를 나타내는 Confidence 점수

  - `label`이름 \*

    텍스트에 할당 된 분류 라벨 (예 : 'POSITIVE' 또는 'NEGATIVE')

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "text": {
              "type": "string",
              "minLength": 1,
              "description": "The text that you want to classify"
          }
      },
      "required": [
          "text"
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "array",
      "contentType": "application/json",
      "description": "An array of classification results for the input text",
      "items": {
          "type": "object",
          "properties": {
              "score": {
                  "type": "number",
                  "description": "Confidence score indicating the likelihood that the text belongs to the specified label"
              },
              "label": {
                  "type": "string",
                  "description": "The classification label assigned to the text (e.g., 'POSITIVE' or 'NEGATIVE')"
              }
          }
      }
  }
  ```
