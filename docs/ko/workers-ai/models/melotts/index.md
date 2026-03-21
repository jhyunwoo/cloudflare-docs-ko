---
title: melotts · Cloudflare Workers AI 문서
description: MeloTTS는 MyShell.ai에 의해 고품질의 다국어 텍스트 - 투 - speech 라이브러리입니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/melotts/'
  md: 'https://developers.cloudflare.com/workers-ai/models/melotts/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/melotts/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/melotts/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
m/분

# 뚱 베어

텍스트 - 투 - 슬픈 • myshell-ai

@cf/myshell-ai/멜렛

MeloTTS는 MyShell.ai에 의해 고품질의 다국어 텍스트 - 투 - speech 라이브러리입니다.

| 모델 정보 |                 |
| ----- | --------------- |
| 단위 가격 | 오디오 분 당 $0.0002 |

## 제품 정보

```ts
export interface Env {
  AI: Ai;
}


export default {
  async fetch(request, env): Promise<Response> {
    const { audio } = await env.AI.run('@cf/myshell-ai/melotts', {
      prompt: 'Hello world',
      lang: 'en',
    });
    //base64 인코딩된 MP3 오디오 반환
    return Response.json({ audio });
  },
} satisfies ExportedHandler<Env>;
```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `prompt`문자열 필수 최소 1

  생성하려는 오디오의 텍스트 설명

- `lang`문자열 기본 en

  연설 언어 (예 : 영어, 프랑스어 'fr'). 지정하지 않은 경우 'en'에 기본값

### 출력 전압

- `0`기타 제품

  - `audio`이름 \*

    MP3 형식의 생성 된 오디오, base64 인코딩

- `1`이름 \*

  MP3 형식으로 생성 된 오디오

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "prompt": {
              "type": "string",
              "minLength": 1,
              "description": "A text description of the audio you want to generate"
          },
          "lang": {
              "type": "string",
              "default": "en",
              "description": "The speech language (e.g., 'en' for English, 'fr' for French). Defaults to 'en' if not specified"
          }
      },
      "required": [
          "prompt"
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "oneOf": [
          {
              "type": "object",
              "contentType": "application/json",
              "properties": {
                  "audio": {
                      "type": "string",
                      "description": "The generated audio in MP3 format, base64-encoded"
                  }
              }
          },
          {
              "type": "string",
              "contentType": "audio/mpeg",
              "format": "binary",
              "description": "The generated audio in MP3 format"
          }
      ]
  }
  ```
