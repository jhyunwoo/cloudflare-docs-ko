---
title: 플럭스 · Cloudflare Workers AI 문서
description: Flux는 음성 에이전트에 특히 내장 된 첫 번째 대화 형 음성 인식 모델입니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/flux/'
  md: 'https://developers.cloudflare.com/workers-ai/models/flux/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/flux/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/flux/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![Deepgram 로고](https://developers.cloudflare.com/_astro/deepgram.DVGPhlbc.svg)

# RSS 피드

자동 연설 인식 • Deepgram

@cf/deepgram/플럭스

Flux는 음성 에이전트에 특히 내장 된 첫 번째 대화 형 음성 인식 모델입니다.

| 모델 정보  |                                     |
| ------ | ----------------------------------- |
| 이용 약관  | [이름 \*](https://deepgram.com/terms) |
| 회사연혁   | 이름 \*                               |
| 실시간 채팅 | 이름 \*                               |
| 단위 가격  | 오디오 분 당 $0.0077 (웹소켓)               |

## 제품 정보

단계 1: WebSocket 연결을 설정하는 Worker 만들기

```ts
export default {
  async fetch(request, env, ctx): Promise<Response> {
    const resp = await env.AI.run("@cf/deepgram/flux", {
      encoding: "linear16",
      sample_rate: "16000"
    }, {
      websocket: true
    });
    return resp;
  },
} satisfies ExportedHandler<Env>;
```

단계 2: 당신의 노동자를 배포

```sh
npx wrangler deploy
```

단계 3: 클라이언트 스크립트를 작성하여 작업자와 오디오를 보내

```js
const ws = new WebSocket('wss://<your-worker-url.com>');


ws.onopen = () => {
  console.log('Connected to WebSocket');


  //생성 및 임의 오디오 바이트를 전송
  //이 부분을 함수로 교체할 수 있습니다.
  //그것은 당신의 mic 또는 다른 오디오 소스에서 읽습니다
  const audioData = generateRandomAudio();
  ws.send(audioData);
  console.log('Audio data sent');
};


ws.onmessage = (event) => {
  //자주 묻는 질문
  //데이터를 파는 사용자 정의 논리를 추가
  console.log('Received:', event.data);
};


ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};


ws.onclose = () => {
  console.log('WebSocket closed');
};


//임의 오디오 데이터를 생성 (44.1kHz, mono)
function generateRandomAudio() {
  const sampleRate = 44100;
  const duration = 1;
  const numSamples = sampleRate * duration;
  const buffer = new ArrayBuffer(numSamples * 2);
  const view = new Int16Array(buffer);


  for (let i = 0; i < numSamples; i++) {
    view[i] = Math.floor(Math.random() * 65536 - 32768);
  }


  return buffer;
}
```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `encoding`문자열 필수

  오디오 스트림의 인코딩. 현재는 서명한 little-endian 16 비트 PCM만 지원합니다.

- `sample_rate`문자열 필수

  Hz에서 오디오 스트림의 샘플 속도.

- `eager_eot_threshold`이름 \*

  eager end-of-turn 이벤트를 불문하는 데 필요한 End-of-turn 신뢰. 설정할 때 EagerEndOfTurn 및 TurnResumed 이벤트를 활성화합니다. 유효한 가치 0.3 - 0.9.

- `eot_threshold`문자열 기본값 0.7

  턴을 완료해야 할 끝없는 신뢰. 유효한 가치 0.5 - 0.9.

- `eot_timeout_ms`문자열 기본 5000

  턴은 EOT 신뢰에 관계없이 많은 시간이 연설 후 전달되었을 때 완료됩니다.

- `keyterm`이름 \*

  Keyterm prompting은 전문화한 terminology의 승인을 개량할 수 있습니다. 여러 keyterm 쿼리 매개 변수를 통과하여 여러 keyterms를 밀어줍니다.

- `mip_opt_out`string 기본 false

  Deepgram Model 개선 프로그램에서 요청을 실행합니다. Deepgram Docs에 이를 true로 설정하기 전에 가격 영향에 대한 참조.<https://dpgr.am/deepgram-mip>

- `tag`이름 \*

  사용법 보고 도중 ID의 목적을 위한 당신의 요구 상표

### 출력 전압

- `request_id`이름 \*

  요청의 고유 식별자 (uuid)

- `sequence_id`정수 분 0

  각 메시지에 대해 0 및 increments에서 시작하면 서버가 클라이언트에게 보냅니다.

- `event`이름 \*

  보고되는 행사의 유형.

- `turn_index`정수 분 0

  현재 회전의 인덱스

- `audio_window_start`이름 \*

  transcribed 오디오 범위의 초에 시작 시간

- `audio_window_end`이름 \*

  오디오 범위의 초에 종료 시간 transcribed

- `transcript`이름 \*

  현재 차례의 과정 위에 말했다 텍스트

- `words`지원하다

  성적표

  - `items`기타 제품

    - `word`문자열 필수

      개인의 학력, 성적서에서 제대로 분류 된 단어

    - `confidence`이름 \*

      이 단어는 제대로 transcribed

- `end_of_turn_confidence`이름 \*

  더 많은 연설이이 차례로 오지 않는 분

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "encoding": {
              "type": "string",
              "description": "Encoding of the audio stream. Currently only supports raw signed little-endian 16-bit PCM.",
              "enum": [
                  "linear16"
              ]
          },
          "sample_rate": {
              "type": "string",
              "description": "Sample rate of the audio stream in Hz.",
              "pattern": "^[0-9]+$"
          },
          "eager_eot_threshold": {
              "type": "string",
              "description": "End-of-turn confidence required to fire an eager end-of-turn event. When set, enables EagerEndOfTurn and TurnResumed events. Valid Values 0.3 - 0.9."
          },
          "eot_threshold": {
              "type": "string",
              "description": "End-of-turn confidence required to finish a turn. Valid Values 0.5 - 0.9.",
              "default": "0.7"
          },
          "eot_timeout_ms": {
              "type": "string",
              "description": "A turn will be finished when this much time has passed after speech, regardless of EOT confidence.",
              "default": "5000",
              "pattern": "^[0-9]+$"
          },
          "keyterm": {
              "type": "string",
              "description": "Keyterm prompting can improve recognition of specialized terminology. Pass multiple keyterm query parameters to boost multiple keyterms."
          },
          "mip_opt_out": {
              "type": "string",
              "description": "Opts out requests from the Deepgram Model Improvement Program. Refer to Deepgram Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip",
              "enum": [
                  "true",
                  "false"
              ],
              "default": "false"
          },
          "tag": {
              "type": "string",
              "description": "Label your requests for the purpose of identification during usage reporting"
          }
      },
      "required": [
          "sample_rate",
          "encoding"
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "object",
      "description": "Output will be returned as websocket messages.",
      "properties": {
          "request_id": {
              "type": "string",
              "description": "The unique identifier of the request (uuid)"
          },
          "sequence_id": {
              "type": "integer",
              "description": "Starts at 0 and increments for each message the server sends to the client.",
              "minimum": 0
          },
          "event": {
              "type": "string",
              "description": "The type of event being reported.",
              "enum": [
                  "Update",
                  "StartOfTurn",
                  "EagerEndOfTurn",
                  "TurnResumed",
                  "EndOfTurn"
              ]
          },
          "turn_index": {
              "type": "integer",
              "description": "The index of the current turn",
              "minimum": 0
          },
          "audio_window_start": {
              "type": "number",
              "description": "Start time in seconds of the audio range that was transcribed"
          },
          "audio_window_end": {
              "type": "number",
              "description": "End time in seconds of the audio range that was transcribed"
          },
          "transcript": {
              "type": "string",
              "description": "Text that was said over the course of the current turn"
          },
          "words": {
              "type": "array",
              "description": "The words in the transcript",
              "items": {
                  "type": "object",
                  "required": [
                      "word",
                      "confidence"
                  ],
                  "properties": {
                      "word": {
                          "type": "string",
                          "description": "The individual punctuated, properly-cased word from the transcript"
                      },
                      "confidence": {
                          "type": "number",
                          "description": "Confidence that this word was transcribed correctly"
                      }
                  }
              }
          },
          "end_of_turn_confidence": {
              "type": "number",
              "description": "Confidence that no more speech is coming in this turn"
          }
      }
  }
  ```
