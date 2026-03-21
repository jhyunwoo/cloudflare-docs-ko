---
title: wsper-large-v3-turbo · Cloudflare Workers AI docs
description: Whisper는 자동 음성 인식 (ASR) 및 연설 번역을위한 사전 훈련 된 모델입니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/whisper-large-v3-turbo/'
  md: >-
    https://developers.cloudflare.com/workers-ai/models/whisper-large-v3-turbo/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/whisper-large-v3-turbo/'
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/whisper-large-v3-turbo/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![OpenAI 로고](https://developers.cloudflare.com/_astro/openai.ChTKThcR.svg)

# whisper-큰-v3-turbo

자동 연설 인식 • OpenAI

@cf/openai/whisper-큰-v3-turbo

Whisper는 자동 음성 인식 (ASR) 및 연설 번역을위한 사전 훈련 된 모델입니다.

| 모델 정보 |                  |
| ----- | ---------------- |
| 공지사항  | 이름 \*            |
| 단위 가격 | 오디오 분 당 $0.00051 |

## 제품 정보

- TypeScript

  ```ts
  import { Buffer } from 'node:buffer';
  export interface Env {
      AI: Ai;
  }
  const URL = "https://pub-dbcf9f0bd3af47ca9d40971179ee62de.r2.dev/02f6edc0-1f7b-4272-bd17-f05335104725/audio.mp3";
  export default {
      async fetch(request, env, ctx): Promise<Response> {
          const mp3 = await fetch(URL);
          if (!mp3.ok) {
            return Response.json({ error: `Failed to fetch MP3: ${mp3.status}` });
          }
          const mp3Buffer = await mp3.arrayBuffer();
          const base64 = Buffer.from(mp3Buffer, 'binary').toString("base64");
          try {
              const res = await env.AI.run("@cf/openai/whisper-large-v3-turbo", {
                  audio: base64,
                  //ISO 639-1 코드를 사용하여 언어를 지정합니다.
                  //예: "en" (영어), "es" (스페인어), "fr" (프랑스어)
                  //omitted 경우, 모델은 언어를 자동 감지합니다.
                  language: "en",
              });
              return Response.json(res);
          }
          catch (e) {
              console.error(e);
              return Response.json({ error: "An unexpected error occurred" });
          }
      },
  } satisfies ExportedHandler<Env>
  ```

  이름 \*

  내장된 Node.js API와 polyfills를 활성화하려면 nodejs compat 호환성 플래그를 추가하십시오.[Wrangler 구성 파일](https://developers.cloudflare.com/workers/wrangler/configuration/). 또한 nodejs compat v2를 호환성 날짜가 2024-09-23 이상일 때 사용할 수 있습니다.[Node.js 호환성 플래그 및 v2에 대해 자세히 알아보기](https://developers.cloudflare.com/workers/configuration/compatibility-flags/#nodejs-compatibility-flag).

- 모델 번호: Python

  ```py
  import requests
  import base64


  API_BASE_URL = "https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/"
  headers = {"Authorization": "Bearer {API_KEY}"}


  def run(model, input):
      response = requests.post(f"{API_BASE_URL}{model}", headers=headers, json=input)
      return response.json()


  with open("audio.mp3", "rb") as audio_file:
      audio_base64 = base64.b64encode(audio_file.read()).decode("utf-8")


  #ISO 639-1 코드를 사용하여 언어를 지정합니다.
  #예: "en" (영어), "es" (스페인어), "fr" (프랑스어)
  #omitted 경우, 모델은 언어를 자동 감지합니다.
  output = run("@cf/openai/whisper-large-v3-turbo", {
      "audio": audio_base64,
      "language": "en"
  })
  print(output)
  ```

- 컬럼

  ```sh
  #base64로 오디오 파일을 인코딩
  AUDIO_BASE64=$(base64 -i audio.mp3)


  #ISO 639-1 코드를 사용하여 언어를 지정합니다.
  #예: "en" (영어), "es" (스페인어), "fr" (프랑스어)
  #omitted 경우, 모델은 언어를 자동 감지합니다.
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/openai/whisper-large-v3-turbo \
    -X POST \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -d "{\"audio\": \"$AUDIO_BASE64\", \"language\": \"en\"}"
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `audio`\*필수

  - `0`이름 \*

    Base64는 오디오 데이터의 값을 인코딩했습니다.

  - `1`기타 제품

    - `body`기타 제품

    - `contentType`이름 \*

- `task`문자열 기본 transcribe

  지원된 작업은 'translate' 또는 'transcribe'입니다.

- `language`이름 \*

  오디오의 언어는 transcribed 또는 번역.

- `vad_filter`한국어

  음성 활동 감지 모델과 오디오를 사전 처리합니다.

- `initial_prompt`이름 \*

  텍스트 프롬프트는 오디오의 내용에 대한 모델에 대한 컨텍스트를 제공합니다.

- `prefix`이름 \*

  접두사는 transcription의 산출의 처음에 부합하고 transcription 결과를 인도할 수 있습니다.

- `beam_size`integer 기본 5

  빔 검색 디코딩에서 사용할 수있는 빔 수. 더 높은 가치는 속도의 비용에 정확도를 개량할지도 모릅니다.

- `condition_on_previous_text`boolean 기본 true

  구문 중 이전 텍스트에 상태 여부. false로 설정하면 Hallucination 루프를 방지할 수 있습니다.

- `no_speech_threshold`수 기본 0.6

  no-speech 세그먼트를 검출하는 임계값. 이 값 위에 no-speech 확률을 가진 세그먼트는 건너 뛰고 있습니다.

- `compression_ratio_threshold`번호 기본 2.4

  높은 압축 비율을 가진 세그먼트를 거르기를 위한 임계값은, 수시로 반복 또는 hallucinated 원본을 나타냅니다.

- `log_prob_threshold`숫자 기본 -1

  낮은 평균 로그 확률로 세그먼트를 필터링하기위한 임계값, 낮은 신뢰를 나타내는.

- `hallucination_silence_threshold`이름 \*

  선택적 임계 값 (초에서)는 실습을 일으킬 수있는 침묵 기간을 건너.

### 출력 전압

- `transcription_info`기타 제품

  - `language`이름 \*

    오디오의 언어는 transcribed 또는 번역.

  - `language_probability`이름 \*

    정확한 검출 된 언어의 신뢰 수준 또는 확률은 0과 1 사이의 소수점으로 나타냅니다.

  - `duration`이름 \*

    원본 오디오 파일의 전체 기간, 초.

  - `duration_after_vad`이름 \*

    음성 활동 탐지 (VAD)를 적용한 후에 오디오의 내구는 초에서 침묵하거나 불허한 단면도를 제거하기 위하여.

- `text`문자열 필수

  오디오의 완전한 transcription.

- `word_count`이름 \*

  구문에 있는 단어의 총 수.

- `segments`지원하다

  - `items`기타 제품

    - `start`이름 \*

      오디오 내에서 세그먼트의 시작 시간, 초.

    - `end`이름 \*

      오디오 내에서 세그먼트의 종료 시간, 초.

    - `text`이름 \*

      세그먼트의 transcription.

    - `temperature`이름 \*

      디코딩 공정에서 사용되는 온도는 예측에 임의성을 제어합니다. 더 낮은 값은 더 deterministic 산출에서 유래합니다.

    - `avg_logprob`이름 \*

      이 세그먼트의 단어에 대한 예측의 평균 로그 확률, 전반적인 신뢰를 나타내는.

    - `compression_ratio`이름 \*

      산출에 입력의 압축 비율은, transcription 과정 도중 다량 텍스트가 압축한 측정합니다.

    - `no_speech_prob`이름 \*

      세그먼트는 0과 1 사이의 소수로 표현되지 않은 연설을 포함하지 않는 확률

    - `words`지원하다

      - `items`기타 제품

        - `word`이름 \*

          오디오에서 표현된 개별 단어.

        - `start`이름 \*

          오디오 내에서 단어의 시작 시간, 초.

        - `end`이름 \*

          오디오 내에서 단어의 종료 시간, 초.

- `vtt`이름 \*

  WebVTT 형식의 transcription은 자막에 대한 타이밍 및 텍스트 정보가 포함되어 있습니다.

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "audio": {
              "anyOf": [
                  {
                      "type": "string",
                      "description": "Base64 encoded value of the audio data."
                  },
                  {
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
              ]
          },
          "task": {
              "type": "string",
              "default": "transcribe",
              "description": "Supported tasks are 'translate' or 'transcribe'."
          },
          "language": {
              "type": "string",
              "description": "The language of the audio being transcribed or translated."
          },
          "vad_filter": {
              "type": "boolean",
              "default": false,
              "description": "Preprocess the audio with a voice activity detection model."
          },
          "initial_prompt": {
              "type": "string",
              "description": "A text prompt to help provide context to the model on the contents of the audio."
          },
          "prefix": {
              "type": "string",
              "description": "The prefix appended to the beginning of the output of the transcription and can guide the transcription result."
          },
          "beam_size": {
              "type": "integer",
              "default": 5,
              "description": "The number of beams to use in beam search decoding. Higher values may improve accuracy at the cost of speed."
          },
          "condition_on_previous_text": {
              "type": "boolean",
              "default": true,
              "description": "Whether to condition on previous text during transcription. Setting to false may help prevent hallucination loops."
          },
          "no_speech_threshold": {
              "type": "number",
              "default": 0.6,
              "description": "Threshold for detecting no-speech segments. Segments with no-speech probability above this value are skipped."
          },
          "compression_ratio_threshold": {
              "type": "number",
              "default": 2.4,
              "description": "Threshold for filtering out segments with high compression ratio, which often indicate repetitive or hallucinated text."
          },
          "log_prob_threshold": {
              "type": "number",
              "default": -1,
              "description": "Threshold for filtering out segments with low average log probability, indicating low confidence."
          },
          "hallucination_silence_threshold": {
              "type": "number",
              "description": "Optional threshold (in seconds) to skip silent periods that may cause hallucinations."
          }
      },
      "required": [
          "audio"
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "object",
      "contentType": "application/json",
      "properties": {
          "transcription_info": {
              "type": "object",
              "properties": {
                  "language": {
                      "type": "string",
                      "description": "The language of the audio being transcribed or translated."
                  },
                  "language_probability": {
                      "type": "number",
                      "description": "The confidence level or probability of the detected language being accurate, represented as a decimal between 0 and 1."
                  },
                  "duration": {
                      "type": "number",
                      "description": "The total duration of the original audio file, in seconds."
                  },
                  "duration_after_vad": {
                      "type": "number",
                      "description": "The duration of the audio after applying Voice Activity Detection (VAD) to remove silent or irrelevant sections, in seconds."
                  }
              }
          },
          "text": {
              "type": "string",
              "description": "The complete transcription of the audio."
          },
          "word_count": {
              "type": "number",
              "description": "The total number of words in the transcription."
          },
          "segments": {
              "type": "array",
              "items": {
                  "type": "object",
                  "properties": {
                      "start": {
                          "type": "number",
                          "description": "The starting time of the segment within the audio, in seconds."
                      },
                      "end": {
                          "type": "number",
                          "description": "The ending time of the segment within the audio, in seconds."
                      },
                      "text": {
                          "type": "string",
                          "description": "The transcription of the segment."
                      },
                      "temperature": {
                          "type": "number",
                          "description": "The temperature used in the decoding process, controlling randomness in predictions. Lower values result in more deterministic outputs."
                      },
                      "avg_logprob": {
                          "type": "number",
                          "description": "The average log probability of the predictions for the words in this segment, indicating overall confidence."
                      },
                      "compression_ratio": {
                          "type": "number",
                          "description": "The compression ratio of the input to the output, measuring how much the text was compressed during the transcription process."
                      },
                      "no_speech_prob": {
                          "type": "number",
                          "description": "The probability that the segment contains no speech, represented as a decimal between 0 and 1."
                      },
                      "words": {
                          "type": "array",
                          "items": {
                              "type": "object",
                              "properties": {
                                  "word": {
                                      "type": "string",
                                      "description": "The individual word transcribed from the audio."
                                  },
                                  "start": {
                                      "type": "number",
                                      "description": "The starting time of the word within the audio, in seconds."
                                  },
                                  "end": {
                                      "type": "number",
                                      "description": "The ending time of the word within the audio, in seconds."
                                  }
                              }
                          }
                      }
                  }
              }
          },
          "vtt": {
              "type": "string",
              "description": "The transcription in WebVTT format, which includes timing and text information for use in subtitles."
          }
      },
      "required": [
          "text"
      ]
  }
  ```
