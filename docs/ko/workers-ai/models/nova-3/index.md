---
title: nova-3 · Cloudflare Workers AI docs
description: Deepgram의 연설에 텍스트 모델을 사용하여 Transcribe 오디오
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/nova-3/'
  md: 'https://developers.cloudflare.com/workers-ai/models/nova-3/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/nova-3/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/nova-3/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![Deepgram 로고](https://developers.cloudflare.com/_astro/deepgram.DVGPhlbc.svg)

# 노바-3

자동 연설 인식 • Deepgram

@cf/deepgram/nova-3에

Deepgram의 연설에 텍스트 모델을 사용하여 Transcribe 오디오

| 모델 정보  |                                        |
| ------ | -------------------------------------- |
| 이용 약관  | [이름 \*](https://deepgram.com/terms)    |
| 공지사항   | 이름 \*                                  |
| 회사연혁   | 이름 \*                                  |
| 실시간 채팅 | 이름 \*                                  |
| 단위 가격  | 오디오 분 당 $0.0052, 오디오 분 당 $0.0092 (웹소켓) |

이름 \*

더 보기[이 모델의 가격](https://developers.cloudflare.com/workers-ai/platform/pricing)수송에 근거를 두는 다릅니다. 운송 기반 가격은 모든 모델에 적용되지 않습니다.

- WebSocket: 오디오 분 산출 당 $0.0092 ( 오디오 분 산출 당 836.36 뉴런)
- 정규적인 HTTP: 오디오 분 산출 당 $0.0052 ( 오디오 분 산출 당 472.73 뉴런)

## 지원 언어

Workers AI에 Nova-3는 transcription를 위한 뒤에 오는 언어를 지원합니다:

| 한국어         | 코드(s)                                             |
| ----------- | ------------------------------------------------- |
| 한국어         | `en`, `en-US`, `en-AU`, `en-GB`, `en-IN`, `en-NZ` |
| 한국어         | `es`, `es-419`                                    |
| 담당자: Ms.    | `fr`, `fr-CA`                                     |
| 한국어         | `de`, `de-CH`                                     |
| 한국어         | `hi`                                              |
| 러시아         | `ru`                                              |
| 한국어         | `pt`, `pt-BR`, `pt-PT`                            |
| 한국어         | `ja`                                              |
| 담당자: Mr. Li | `it`                                              |
| 담당자: Ms.    | `nl`                                              |

제품 정보`multi`위에 나열된 모든 언어의 자동 다국어 탐지를 위해.

언어가 지정되지 않은 경우, 모델 기본값은`en-US`. 제일 정확도를 위해, 명시적으로 당신의 오디오 일치 언어 부호를 놓으십시오.

## 제품 정보

- 모델 번호: TypeScript

  ```ts
  export default {
    async fetch(request, env, ctx): Promise<Response> {
      const URL = "https://URL_TO_MP3_FILE/audio.mp3";
      const mp3 = await fetch(URL);




      const resp = await env.AI.run("@cf/deepgram/nova-3", {
        "audio": {
          body: mp3.body,
          contentType: "audio/mpeg"
        },
        "detect_language": true
      }, {
        returnRawResponse: true
      });
      return resp;
    },
  } satisfies ExportedHandler<Env>;
  ```

- 컬럼

  ```sh
  curl --request POST   --url 'https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/deepgram/nova-3?detect_language=true'   --header 'Authorization: Bearer {TOKEN}'   --header 'Content-Type: audio/mpeg'   --data-binary "@/path/to/your-mp3-file.mp3"
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `audio`자주 묻는 질문

  - `body`자주 묻는 질문

  - `contentType`문자열 필수

- `custom_topic_mode`이름 \*

  모델이 custom topic param에 제출된 문자열을 해석하는 방법을 설정합니다. 엄격한 경우 모델은 custom topic param을 사용하여 제출 된 주제 만 반환합니다. 확장될 때, 모델은 custom topic param을 사용하여 제출된 그 외에도 자체 감지된 주제를 반환합니다.

- `custom_topic`이름 \*

  현재 입력 오디오 또는 텍스트 내에서 감지 할 수있는 모델을 원하는 사용자 정의 주제 100

- `custom_intent_mode`이름 \*

  모델이 custom intent param에 제출 된 의도를 해석하는 방법을 설정합니다. 엄격한 경우 모델은 custom intent param을 사용하여 제출 된 intents 만 반환합니다. 확장될 때, 모델은 custom intents param을 사용하여 제출 한 추가에 자체 검출 된 의도를 반환합니다.

- `custom_intent`이름 \*

  사용자 정의 intents you want the model to detect within your input audio if present

- `detect_entities`한국어

  제출 된 오디오의 내용에서 키 엔티티티를 식별하고 추출

- `detect_language`한국어

  제출 된 오디오에서 말하는 지배적 인 언어 식별

- `diarize`한국어

  스피커 변경. 각 단어는 0에서 시작하는 스피커 번호를 할당합니다.

- `dictation`한국어

  제출 된 오디오의 내용에서 키 엔티티티를 식별하고 추출

- `encoding`이름 \*

  제출 된 오디오의 예상 인코딩 지정

- `extra`이름 \*

  다운스트림 처리를 위한 API 응답에 붙어 있는 Arbitrary 열쇠 가치 쌍

- `filler_words`한국어

  필러 워드는 'uh'과 'um'과 같은 오디오에서 상호 작용을 도울 수 있습니다.

- `keyterm`이름 \*

  Key terminology 및 상표를 강화하거나 억제할 수 있습니다.

- `keywords`이름 \*

  키워드는 전문 용어 및 브랜드를 향상하거나 억제 할 수 있습니다.

- `language`이름 \*

  BCP-47 언어 태그는 기본 언어에서 힌트입니다. 모델과 API 엔드포인트에 따라 특정 언어를 선택할 수 있습니다.

- `measurements`한국어

  Spoken 측정은 해당 약어로 변환됩니다.

- `mip_opt_out`한국어

  Deepgram Model 개선 프로그램에서 요청을 실행합니다. 이를 true로 설정하기 전에 가격 영향에 대한 우리의 문서에 참조하십시오.[모델 번호: https://dpgr.am/deepgram-mip](https://dpgr.am/deepgram-mip).

- `mode`이름 \*

  다양한 주제를 표현하는 모델의 작동 모드는 공급 된 오디오에 대해 이야기 할 것입니다

- `multichannel`한국어

  각 오디오 채널을 독립적으로 구독합니다.

- `numerals`한국어

  Numerals는 서면 형식으로 숫자를 숫자 형식으로 변환합니다.

- `paragraphs`한국어

  단락 오디오는 단락으로 음성 읽기 기능을 개선합니다.

- `profanity_filter`한국어

  Profanity Filter는 인식 된 profanity를 확인하고 가장 가까운 인식 된 비 프로판 단어로 변환하거나 성적을 완전히 제거합니다.

- `punctuate`한국어

  계산과 자본화 추가.

- `redact`이름 \*

  Redaction는 성적표에서 민감한 정보를 제거합니다.

- `replace`이름 \*

  제출 된 오디오의 용어 또는 구문을 검색하고 대체합니다.

- `search`이름 \*

  제출 된 오디오의 용어 또는 구문 검색.

- `sentiment`한국어

  성적표, 성적표, 성적표

- `smart_format`한국어

  transcript 산출에 체재를 적용하십시오. true로 설정할 때, 추가 포맷은 읽기 기능을 개선하기 위해 성적표에 적용될 것입니다.

- `topics`한국어

  transcript 또는 텍스트를 통해 주제를 검색합니다.

- `utterances`한국어

  의미있는 semantic 단위로 Segments 연설.

- `utt_split`이름 \*

  제출 된 오디오의 단어 사이에 일시 중지를 감지하기 전에 두 번째.

- `channels`이름 \*

  제출된 오디오의 수

- `interim_results`한국어

  스트리밍 엔드포인트가 더 많은 오디오가 수신된 대로 진행된 트랜지션 업데이트를 제공해야 하는지 지정합니다. true로 설정하면, endpoint는 지속적인 업데이트를 보내며, transcription 결과는 시간이 지남에 따라 진화 할 수 있습니다. 참고 : webosockets에서만 지원됩니다.

- `endpointing`이름 \*

  긴 모델이 스피커가 말하는 것을 감지하고 시간이 중요한 기간 동안 일시 중지하는지 확인하는 방법을 나타냅니다. 값으로 설정할 때, 스트리밍 엔드포인트는 즉시 처리 된 시간 범위에 대한 비문을 정의하고 true로 설정된 Speech final 매개 변수와 transcript를 반환합니다. 종료할 수 있도록 false로 설정할 수 있습니다.

- `vad_events`한국어

  그 연설이 시작되었다는 표시. 연설 시작 메시지가 시작될 것입니다. 참고 : webosockets에서만 지원됩니다.

- `utterance_end_ms`한국어

  긴 모델이 단어가 transcribed 된 후 UtteranceEnd 메시지를 보낼 때까지 기다릴 수 있는지 나타냅니다. interim results로 사용. 참고 : webosockets에서만 지원됩니다.

### 출력 전압

- `results`기타 제품

  - `channels`지원하다

    - `items`기타 제품

      - `alternatives`지원하다

        - `items`기타 제품

          - `confidence`이름 \*

          - `transcript`이름 \*

          - `words`지원하다

            - `items`기타 제품

              - `confidence`이름 \*

              - `end`이름 \*

              - `start`이름 \*

              - `word`이름 \*

  - `summary`기타 제품

    - `result`이름 \*

    - `short`이름 \*

  - `sentiments`기타 제품

    - `segments`지원하다

      - `items`기타 제품

        - `text`이름 \*

        - `start_word`이름 \*

        - `end_word`이름 \*

        - `sentiment`이름 \*

        - `sentiment_score`이름 \*

    - `average`기타 제품

      - `sentiment`이름 \*

      - `sentiment_score`이름 \*

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "audio": {
              "type": "object",
              "properties": {
                  "body": {
                      "type": "object"
                  },
                  "contentType": {
                      "type": "string"
                  }
              },
              "required": [
                  "body",
                  "contentType"
              ]
          },
          "custom_topic_mode": {
              "type": "string",
              "enum": [
                  "extended",
                  "strict"
              ],
              "description": "Sets how the model will interpret strings submitted to the custom_topic param. When strict, the model will only return topics submitted using the custom_topic param. When extended, the model will return its own detected topics in addition to those submitted using the custom_topic param."
          },
          "custom_topic": {
              "type": "string",
              "description": "Custom topics you want the model to detect within your input audio or text if present Submit up to 100"
          },
          "custom_intent_mode": {
              "type": "string",
              "description": "Sets how the model will interpret intents submitted to the custom_intent param. When strict, the model will only return intents submitted using the custom_intent param. When extended, the model will return its own detected intents in addition those submitted using the custom_intents param",
              "enum": [
                  "extended",
                  "strict"
              ]
          },
          "custom_intent": {
              "type": "string",
              "description": "Custom intents you want the model to detect within your input audio if present"
          },
          "detect_entities": {
              "type": "boolean",
              "description": "Identifies and extracts key entities from content in submitted audio"
          },
          "detect_language": {
              "type": "boolean",
              "description": "Identifies the dominant language spoken in submitted audio"
          },
          "diarize": {
              "type": "boolean",
              "description": "Recognize speaker changes. Each word in the transcript will be assigned a speaker number starting at 0"
          },
          "dictation": {
              "type": "boolean",
              "description": "Identify and extract key entities from content in submitted audio"
          },
          "encoding": {
              "type": "string",
              "description": "Specify the expected encoding of your submitted audio",
              "enum": [
                  "linear16",
                  "flac",
                  "mulaw",
                  "amr-nb",
                  "amr-wb",
                  "opus",
                  "speex",
                  "g729"
              ]
          },
          "extra": {
              "type": "string",
              "description": "Arbitrary key-value pairs that are attached to the API response for usage in downstream processing"
          },
          "filler_words": {
              "type": "boolean",
              "description": "Filler Words can help transcribe interruptions in your audio, like 'uh' and 'um'"
          },
          "keyterm": {
              "type": "string",
              "description": "Key term prompting can boost or suppress specialized terminology and brands."
          },
          "keywords": {
              "type": "string",
              "description": "Keywords can boost or suppress specialized terminology and brands."
          },
          "language": {
              "type": "string",
              "description": "The BCP-47 language tag that hints at the primary spoken language. Depending on the Model and API endpoint you choose only certain languages are available."
          },
          "measurements": {
              "type": "boolean",
              "description": "Spoken measurements will be converted to their corresponding abbreviations."
          },
          "mip_opt_out": {
              "type": "boolean",
              "description": "Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip."
          },
          "mode": {
              "type": "string",
              "description": "Mode of operation for the model representing broad area of topic that will be talked about in the supplied audio",
              "enum": [
                  "general",
                  "medical",
                  "finance"
              ]
          },
          "multichannel": {
              "type": "boolean",
              "description": "Transcribe each audio channel independently."
          },
          "numerals": {
              "type": "boolean",
              "description": "Numerals converts numbers from written format to numerical format."
          },
          "paragraphs": {
              "type": "boolean",
              "description": "Splits audio into paragraphs to improve transcript readability."
          },
          "profanity_filter": {
              "type": "boolean",
              "description": "Profanity Filter looks for recognized profanity and converts it to the nearest recognized non-profane word or removes it from the transcript completely."
          },
          "punctuate": {
              "type": "boolean",
              "description": "Add punctuation and capitalization to the transcript."
          },
          "redact": {
              "type": "string",
              "description": "Redaction removes sensitive information from your transcripts."
          },
          "replace": {
              "type": "string",
              "description": "Search for terms or phrases in submitted audio and replaces them."
          },
          "search": {
              "type": "string",
              "description": "Search for terms or phrases in submitted audio."
          },
          "sentiment": {
              "type": "boolean",
              "description": "Recognizes the sentiment throughout a transcript or text."
          },
          "smart_format": {
              "type": "boolean",
              "description": "Apply formatting to transcript output. When set to true, additional formatting will be applied to transcripts to improve readability."
          },
          "topics": {
              "type": "boolean",
              "description": "Detect topics throughout a transcript or text."
          },
          "utterances": {
              "type": "boolean",
              "description": "Segments speech into meaningful semantic units."
          },
          "utt_split": {
              "type": "number",
              "description": "Seconds to wait before detecting a pause between words in submitted audio."
          },
          "channels": {
              "type": "number",
              "description": "The number of channels in the submitted audio"
          },
          "interim_results": {
              "type": "boolean",
              "description": "Specifies whether the streaming endpoint should provide ongoing transcription updates as more audio is received. When set to true, the endpoint sends continuous updates, meaning transcription results may evolve over time. Note: Supported only for webosockets."
          },
          "endpointing": {
              "type": "string",
              "description": "Indicates how long model will wait to detect whether a speaker has finished speaking or pauses for a significant period of time. When set to a value, the streaming endpoint immediately finalizes the transcription for the processed time range and returns the transcript with a speech_final parameter set to true. Can also be set to false to disable endpointing"
          },
          "vad_events": {
              "type": "boolean",
              "description": "Indicates that speech has started. You'll begin receiving Speech Started messages upon speech starting. Note: Supported only for webosockets."
          },
          "utterance_end_ms": {
              "type": "boolean",
              "description": "Indicates how long model will wait to send an UtteranceEnd message after a word has been transcribed. Use with interim_results. Note: Supported only for webosockets."
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
          "results": {
              "type": "object",
              "properties": {
                  "channels": {
                      "type": "array",
                      "items": {
                          "type": "object",
                          "properties": {
                              "alternatives": {
                                  "type": "array",
                                  "items": {
                                      "type": "object",
                                      "properties": {
                                          "confidence": {
                                              "type": "number"
                                          },
                                          "transcript": {
                                              "type": "string"
                                          },
                                          "words": {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "confidence": {
                                                          "type": "number"
                                                      },
                                                      "end": {
                                                          "type": "number"
                                                      },
                                                      "start": {
                                                          "type": "number"
                                                      },
                                                      "word": {
                                                          "type": "string"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  },
                  "summary": {
                      "type": "object",
                      "properties": {
                          "result": {
                              "type": "string"
                          },
                          "short": {
                              "type": "string"
                          }
                      }
                  },
                  "sentiments": {
                      "type": "object",
                      "properties": {
                          "segments": {
                              "type": "array",
                              "items": {
                                  "type": "object",
                                  "properties": {
                                      "text": {
                                          "type": "string"
                                      },
                                      "start_word": {
                                          "type": "number"
                                      },
                                      "end_word": {
                                          "type": "number"
                                      },
                                      "sentiment": {
                                          "type": "string"
                                      },
                                      "sentiment_score": {
                                          "type": "number"
                                      }
                                  }
                              }
                          },
                          "average": {
                              "type": "object",
                              "properties": {
                                  "sentiment": {
                                      "type": "string"
                                  },
                                  "sentiment_score": {
                                      "type": "number"
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  }
  ```
