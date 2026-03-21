---
title: indictrans2-en-indic-1B · Cloudflare Workers AI docs
description: IndicTrans2는 모든 22 예정된 Indic 언어의 고품질 번역을 지원하는 최초의 오픈 소스 변압기 기반 다국어 NMT 모델입니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/indictrans2-en-indic-1B/'
  md: >-
    https://developers.cloudflare.com/workers-ai/models/indictrans2-en-indic-1B/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/indictrans2-en-indic-1B/'
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/indictrans2-en-indic-1B/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
한국어

# indictrans2-en-indic-1B에 대하여

번역 • ai4bharat

@cf/ai4bharat/indictrans2-en-indic-1B를

IndicTrans2는 모든 22 예정된 Indic 언어의 고품질 번역을 지원하는 최초의 오픈 소스 변압기 기반 다국어 NMT 모델입니다.

| 모델 정보 |                                  |
| ----- | -------------------------------- |
| 단위 가격 | M 입력 토큰 당 $0.34, M 출력 토큰 당 $0.34 |

## 제품 정보

- 모델 번호: TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {


      const response = await env.AI.run(
        "@cf/ai4bharat/indictrans2-en-indic-1B",
        {
          text: "I'll have an order of the moule frites",
          source_lang: "english", //기본적으로 English
          target_lang: "french",
        }
      );


      return new Response(JSON.stringify(response));
    },
  } satisfies ExportedHandler<Env>;
  ```

- 모델 번호: Python

  ```py
  import requests


  API_BASE_URL = "https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/"
  headers = {"Authorization": "Bearer {API_TOKEN}"}


  def run(model, input):
      response = requests.post(f"{API_BASE_URL}{model}", headers=headers, json=input)
      return response.json()


  output = run('@cf/ai4bharat/indictrans2-en-indic-1B', {
    "text": "I'll have an order of the moule frites",
    "source_lang": "english",
    "target_lang": "french"
  })


  print(output)
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/ai4bharat/indictrans2-en-indic-1B  \
      -X POST  \
      -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
      -d '{ "text": "Ill have an order of the moule frites", "source_lang": "english", "target_lang": "french" }'
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `text`1개의 필수

  - `0`이름 \*

    번역할 텍스트. 단일 문자열 또는 문자열 목록이 될 수 있습니다.

  - `1`지원하다

    번역할 텍스트. 단일 문자열 또는 문자열 목록이 될 수 있습니다.

    - `items`이름 \*

- `target_language`string 필수 기본 hin Deva

  Target langauge로 번역

### 출력 전압

- `translations`지원되는

  Translated 텍스트

  - `items`이름 \*

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "text": {
              "oneOf": [
                  {
                      "type": "string"
                  },
                  {
                      "type": "array",
                      "items": {
                          "type": "string"
                      }
                  }
              ],
              "description": "Input text to translate. Can be a single string or a list of strings."
          },
          "target_language": {
              "type": "string",
              "enum": [
                  "asm_Beng",
                  "awa_Deva",
                  "ben_Beng",
                  "bho_Deva",
                  "brx_Deva",
                  "doi_Deva",
                  "eng_Latn",
                  "gom_Deva",
                  "gon_Deva",
                  "guj_Gujr",
                  "hin_Deva",
                  "hne_Deva",
                  "kan_Knda",
                  "kas_Arab",
                  "kas_Deva",
                  "kha_Latn",
                  "lus_Latn",
                  "mag_Deva",
                  "mai_Deva",
                  "mal_Mlym",
                  "mar_Deva",
                  "mni_Beng",
                  "mni_Mtei",
                  "npi_Deva",
                  "ory_Orya",
                  "pan_Guru",
                  "san_Deva",
                  "sat_Olck",
                  "snd_Arab",
                  "snd_Deva",
                  "tam_Taml",
                  "tel_Telu",
                  "urd_Arab",
                  "unr_Deva"
              ],
              "default": "hin_Deva",
              "description": "Target langauge to translate to"
          }
      },
      "required": [
          "text",
          "target_language"
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "object",
      "properties": {
          "translations": {
              "type": "array",
              "items": {
                  "type": "string"
              },
              "description": "Translated texts"
          }
      },
      "required": [
          "translations"
      ]
  }
  ```
