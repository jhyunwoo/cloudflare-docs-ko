---
title: glm-4.7-flash · Cloudflare Workers AI 문서
description: >-
  GLM-4.7-Flash는 131,072 토큰 컨텍스트 창을 가진 빠르고 효율적인 다국어 텍스트 생성 모델입니다. 100개 이상의 언어에
  걸쳐 대화, 교육 및 멀티턴 도구에 최적화되었습니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/glm-4.7-flash/'
  md: 'https://developers.cloudflare.com/workers-ai/models/glm-4.7-flash/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/glm-4.7-flash/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/glm-4.7-flash/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
₢ 킹

# glm-4.7 플래시

텍스트 생성 • zai-org

@cf/zai-org/glm-4.7 플래시

GLM-4.7-Flash는 131,072 토큰 컨텍스트 창을 가진 빠르고 효율적인 다국어 텍스트 생성 모델입니다. 100개 이상의 언어에 걸쳐 대화, 교육 및 멀티턴 도구에 최적화되었습니다.

| 모델 정보                                                                  |                                  |
| ---------------------------------------------------------------------- | -------------------------------- |
| Context 창[](https://developers.cloudflare.com/workers-ai/glossary/)    | 131,072 토큰                       |
| 기능 호출[](https://developers.cloudflare.com/workers-ai/function-calling) | 이름 \*                            |
| 단위 가격                                                                  | M 입력 토큰 당 $0.06, M 출력 토큰 당 $0.40 |

## 회사연혁

Workers AI LLM 놀이터와 함께이 모델을보십시오. 설정이나 인증이 필요 없으며 즉시 미리 볼 수 있으며 브라우저에서 모델을 직접 테스트 할 수 있습니다.

[LLM 놀이터 출시](https://playground.ai.cloudflare.com/?model=@cf/zai-org/glm-4.7-flash)

## 제품 정보

- 작업자 (Streaming)

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {


      const messages = [
        { role: "system", content: "You are a friendly assistant" },
        {
          role: "user",
          content: "What is the origin of the phrase Hello, World",
        },
      ];


      const stream = await env.AI.run("@cf/zai-org/glm-4.7-flash", {
        messages,
        stream: true,
      });


      return new Response(stream, {
        headers: { "content-type": "text/event-stream" },
      });
    },
  } satisfies ExportedHandler<Env>;
  ```

- TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {


      const messages = [
        { role: "system", content: "You are a friendly assistant" },
        {
          role: "user",
          content: "What is the origin of the phrase Hello, World",
        },
      ];
      const response = await env.AI.run("@cf/zai-org/glm-4.7-flash", { messages });


      return Response.json(response);
    },
  } satisfies ExportedHandler<Env>;
  ```

- Python

  ```py
  import os
  import requests


  ACCOUNT_ID = "your-account-id"
  AUTH_TOKEN = os.environ.get("CLOUDFLARE_AUTH_TOKEN")


  prompt = "Tell me all about PEP-8"
  response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/zai-org/glm-4.7-flash",
      headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
      json={
        "messages": [
          {"role": "system", "content": "You are a friendly assistant"},
          {"role": "user", "content": prompt}
        ]
      }
  )
  result = response.json()
  print(result)
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/zai-org/glm-4.7-flash \
    -X POST \
    -H "Authorization: Bearer $CLOUDFLARE_AUTH_TOKEN" \
    -d '{ "messages": [{ "role": "system", "content": "You are a friendly assistant" }, { "role": "user", "content": "Why is pizza so good" }]}'
  ```

OpenAI 호환 엔드포인트

Workers AI는 또한 OpenAI 호환성 API 엔드포인트를 지원합니다`/v1/chat/completions`·`/v1/embeddings`. 자세한 내용은, 참조[제품 설명](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/).

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `0`기타 제품

  - `prompt`문자열 필수 최소 1

    모델에 대한 입력 텍스트 프롬프트는 응답을 생성합니다.

  - `model`이름 \*

    모델의 ID 사용 (예 : '@cf/zai-org/glm-4.7-flash 등).

  - `audio`기타 제품

    오디오 출력을 위한 모수. modalities가 'audio'를 포함합니다.

    - `voice`1개의 필수

      - `0`이름 \*

      - `1`기타 제품

        - `id`문자열 필수

    - `format`문자열 필수

  - `frequency_penalty`

    - `0`번호 0 분 -2 최대 2

      텍스트의 기존 주파수를 기반으로 한 새로운 토큰을 훨씬 웁니다.

    - `1`오류 0

      텍스트의 기존 주파수를 기반으로 한 새로운 토큰을 훨씬 웁니다.

  - `logit_bias`

    - `0`기타 제품

      완료된 토큰의 likelihood를 수정합니다. 지도 토큰 ID는 -100에서 100으로 비스듬한 값입니다.

    - `1`한국어

      완료된 토큰의 likelihood를 수정합니다. 지도 토큰 ID는 -100에서 100으로 비스듬한 값입니다.

  - `logprobs`

    - `0`한국어

      출력 토큰의 로그 확률을 반환 여부.

    - `1`한국어

      출력 토큰의 로그 확률을 반환 여부.

  - `top_logprobs`

    - `0`정수 분 0 최대 20

      각 토큰 위치 (0-20)에서 반환하는 몇 가지 최고 로그 확률. logprobs=true를 요구합니다.

    - `1`한국어

      각 토큰 위치 (0-20)에서 반환하는 몇 가지 최고 로그 확률. logprobs=true를 요구합니다.

  - `max_tokens`

    - `0`뚱 베어

      max completion tokens의 호의에서 발췌. 토큰의 최대 수는 생성됩니다.

    - `1`한국어

      max completion tokens의 호의에서 발췌. 토큰의 최대 수는 생성됩니다.

  - `max_completion_tokens`

    - `0`뚱 베어

      완료를 위해 생성될 수 있는 토큰의 수를 위한 위 경계.

    - `1`한국어

      완료를 위해 생성될 수 있는 토큰의 수를 위한 위 경계.

  - `metadata`

    - `0`기타 제품

      객체에 부착 할 수있는 16 키 값 쌍 세트.

    - `1`한국어

      객체에 부착 할 수있는 16 키 값 쌍 세트.

  - `modalities`

    - `0`지원하다

      모델 (예 : \['text'] 또는 \['text', 'audio'])에서 요구하는 출력 유형.

      - `items`이름 \*

    - `1`한국어

      모델 (예 : \['text'] 또는 \['text', 'audio'])에서 요구하는 출력 유형.

  - `n`

    - `0`정수 기본 1 분 1 최대 128

      각 입력 메시지에 대해 생성하는 몇 채팅 완료 선택.

    - `1`null 기본 1

      각 입력 메시지에 대해 생성하는 몇 채팅 완료 선택.

  - `parallel_tool_calls`boolean 기본 true

    도구 사용 중에 병렬 함수를 호출 할 수 있는지 여부.

  - `prediction`기타 제품

    - `type`문자열 필수

    - `content`\*필수

      - `0`이름 \*

      - `1`지원하다

        - `items`기타 제품

          - `type`문자열 필수

          - `text`문자열 필수

  - `presence_penalty`

    - `0`번호 0 분 -2 최대 2

      텍스트에 나타나는지 여부에 따라 새로운 토큰을 Penalizes.

    - `1`오류 0

      텍스트에 나타나는지 여부에 따라 새로운 토큰을 Penalizes.

  - `reasoning_effort`

    - `0`이름 \*

      원인 모델 (o1, o3-mini 등)에 대한 노력.

    - `1`한국어

      원인 모델 (o1, o3-mini 등)에 대한 노력.

  - `response_format`1 중

    모델을 출력해야 할 형식을 지정합니다.

    - `0`기타 제품

      - `type`문자열 필수

    - `1`기타 제품

      - `type`문자열 필수

    - `2`기타 제품

      - `type`문자열 필수

      - `json_schema`자주 묻는 질문

        - `name`문자열 필수

        - `description`이름 \*

        - `schema`기타 제품

        - `strict`

          - `0`한국어

          - `1`한국어

  - `seed`

    - `0`뚱 베어

      지정된 경우, 시스템은 deterministically 샘플에 가장 좋은 노력을 만들 것입니다.

    - `1`한국어

      지정된 경우, 시스템은 deterministically 샘플에 가장 좋은 노력을 만들 것입니다.

  - `service_tier`

    - `0`string 기본 자동

      요청을 제공하는 데 사용되는 처리 유형을 지정합니다.

    - `1`null 기본 자동

      요청을 제공하는 데 사용되는 처리 유형을 지정합니다.

  - `stop`

    - `0`한국어

      API가 더 많은 토큰을 생성하는 4개의 순서까지.

    - `1`이름 \*

      API가 더 많은 토큰을 생성하는 4개의 순서까지.

    - `2`지원하다

      API가 더 많은 토큰을 생성하는 4개의 순서까지.

      - `items`이름 \*

  - `store`

    - `0`한국어

      모델 증류 / evals에 대한 출력을 저장하는 것.

    - `1`한국어

      모델 증류 / evals에 대한 출력을 저장하는 것.

  - `stream`

    - `0`한국어

      true, 부분 메시지 deltas는 서버 상태 이벤트로 전송됩니다.

    - `1`한국어

      true, 부분 메시지 deltas는 서버 상태 이벤트로 전송됩니다.

  - `stream_options`기타 제품

    - `include_usage`한국어

    - `include_obfuscation`한국어

  - `temperature`

    - `0`수 기본 1 분 0 최대 2

      0과 2. 사이 표본 추출 온도

    - `1`null 기본 1

      0과 2. 사이 표본 추출 온도

  - `tool_choice`1 중

    (모든 경우) 도구가 모델에 의해 호출되는 제어. 'none' = 도구 없음, 'auto' = 모델 결정, 'required' = 도구로 호출해야합니다.

    - `0`이름 \*

    - `1`기타 제품

      특정 기능 도구를 강제하십시오.

      - `type`문자열 필수

      - `function`자주 묻는 질문

        - `name`문자열 필수

    - `2`기타 제품

      특정 사용자 정의 도구를 강제.

      - `type`문자열 필수

      - `custom`자주 묻는 질문

        - `name`문자열 필수

    - `3`기타 제품

      도구의 허용된 하위 설정에 제약.

      - `type`문자열 필수

      - `allowed_tools`자주 묻는 질문

        - `mode`문자열 필수

        - `tools`지원되는

          - `items`기타 제품

  - `tools`지원하다

    도구 목록은 모델을 호출 할 수 있습니다.

    - `items`1 중

      - `0`기타 제품

        - `type`문자열 필수

        - `function`자주 묻는 질문

          - `name`문자열 필수

            함수의 이름은 호출됩니다.

          - `description`이름 \*

            기능의 설명.

          - `parameters`기타 제품

            매개변수는 JSON Schema 객체로 설명된 함수를 받아들입니다.

          - `strict`

            - `0`한국어

              엄격한 schema 부착을 가능하게하는 것.

            - `1`한국어

              엄격한 schema 부착을 가능하게하는 것.

      - `1`기타 제품

        - `type`문자열 필수

        - `custom`자주 묻는 질문

          - `name`문자열 필수

          - `description`이름 \*

          - `format`1 중

            - `0`기타 제품

              - `type`문자열 필수

            - `1`기타 제품

              - `type`문자열 필수

              - `grammar`자주 묻는 질문

                - `definition`문자열 필수

                - `syntax`문자열 필수

  - `top_p`

    - `0`수 기본 1 분 0 최대 1

      Nucleus 표본 추출: top p 확률 질량을 가진 토큰의 결과를 고려합니다.

    - `1`null 기본 1

      Nucleus 표본 추출: top p 확률 질량을 가진 토큰의 결과를 고려합니다.

  - `user`이름 \*

    최종 사용자를 나타내는 독특한 식별자, 학대 모니터링.

  - `web_search_options`기타 제품

    웹 검색 도구에 대한 옵션 (웹 검색을 사용하여).

    - `search_context_size`string 기본 매체

    - `user_location`기타 제품

      - `type`문자열 필수

      - `approximate`자주 묻는 질문

        - `city`이름 \*

        - `country`이름 \*

        - `region`이름 \*

        - `timezone`이름 \*

  - `function_call`

    - `0`이름 \*

    - `1`기타 제품

      - `name`문자열 필수

  - `functions`지원하다

    - `items`기타 제품

      - `name`문자열 필수

        함수의 이름은 호출됩니다.

      - `description`이름 \*

        기능의 설명.

      - `parameters`기타 제품

        매개변수는 JSON Schema 객체로 설명된 함수를 받아들입니다.

      - `strict`

        - `0`한국어

          엄격한 schema 부착을 가능하게하는 것.

        - `1`한국어

          엄격한 schema 부착을 가능하게하는 것.

- `1`기타 제품

  - `messages`지원되는

    지금까지 대화를 나누는 메시지 목록.

    - `items`1 중

      - `0`기타 제품

        - `role`문자열 필수

        - `content`\*필수

          - `0`이름 \*

          - `1`지원하다

            - `items`기타 제품

              - `type`문자열 필수

              - `text`문자열 필수

        - `name`이름 \*

      - `1`기타 제품

        - `role`문자열 필수

        - `content`\*필수

          - `0`이름 \*

          - `1`지원하다

            - `items`기타 제품

              - `type`문자열 필수

              - `text`문자열 필수

        - `name`이름 \*

      - `2`기타 제품

        - `role`문자열 필수

        - `content`\*필수

          - `0`이름 \*

          - `1`지원하다

            - `items`기타 제품

              - `type`문자열 필수

              - `text`이름 \*

              - `image_url`기타 제품

                - `url`이름 \*

                - `detail`string 기본 자동

              - `input_audio`기타 제품

                - `data`이름 \*

                - `format`이름 \*

              - `file`기타 제품

                - `file_data`이름 \*

                - `file_id`이름 \*

                - `filename`이름 \*

        - `name`이름 \*

      - `3`기타 제품

        - `role`문자열 필수

        - `content`

          - `0`이름 \*

          - `1`한국어

          - `2`지원하다

            - `items`기타 제품

              - `type`문자열 필수

              - `text`이름 \*

              - `refusal`이름 \*

        - `refusal`

          - `0`이름 \*

          - `1`한국어

        - `name`이름 \*

        - `audio`기타 제품

          - `id`문자열 필수

        - `tool_calls`지원하다

          - `items`1 중

            - `0`기타 제품

              - `id`문자열 필수

              - `type`문자열 필수

              - `function`자주 묻는 질문

                - `name`문자열 필수

                - `arguments`문자열 필수

                  JSON-encoded 인수 문자열.

            - `1`기타 제품

              - `id`문자열 필수

              - `type`문자열 필수

              - `custom`자주 묻는 질문

                - `name`문자열 필수

                - `input`문자열 필수

        - `function_call`기타 제품

          - `name`문자열 필수

          - `arguments`문자열 필수

      - `4`기타 제품

        - `role`문자열 필수

        - `content`\*필수

          - `0`이름 \*

          - `1`지원하다

            - `items`기타 제품

              - `type`문자열 필수

              - `text`문자열 필수

        - `tool_call_id`문자열 필수

      - `5`기타 제품

        - `role`문자열 필수

        - `content`문자열 필수

        - `name`문자열 필수

  - `model`이름 \*

    모델의 ID 사용 (예 : '@cf/zai-org/glm-4.7-flash 등).

  - `audio`기타 제품

    오디오 출력을 위한 모수. modalities가 'audio'를 포함합니다.

    - `voice`1개의 필수

      - `0`이름 \*

      - `1`기타 제품

        - `id`문자열 필수

    - `format`문자열 필수

  - `frequency_penalty`

    - `0`번호 0 분 -2 최대 2

      텍스트의 기존 주파수를 기반으로 한 새로운 토큰을 훨씬 웁니다.

    - `1`오류 0

      텍스트의 기존 주파수를 기반으로 한 새로운 토큰을 훨씬 웁니다.

  - `logit_bias`

    - `0`기타 제품

      완료된 토큰의 likelihood를 수정합니다. 지도 토큰 ID는 -100에서 100으로 비스듬한 값입니다.

    - `1`한국어

      완료된 토큰의 likelihood를 수정합니다. 지도 토큰 ID는 -100에서 100으로 비스듬한 값입니다.

  - `logprobs`

    - `0`한국어

      출력 토큰의 로그 확률을 반환 여부.

    - `1`한국어

      출력 토큰의 로그 확률을 반환 여부.

  - `top_logprobs`

    - `0`정수 분 0 최대 20

      각 토큰 위치 (0-20)에서 반환하는 몇 가지 최고 로그 확률. logprobs=true를 요구합니다.

    - `1`한국어

      각 토큰 위치 (0-20)에서 반환하는 몇 가지 최고 로그 확률. logprobs=true를 요구합니다.

  - `max_tokens`

    - `0`뚱 베어

      max completion tokens의 호의에서 발췌. 토큰의 최대 수는 생성됩니다.

    - `1`한국어

      max completion tokens의 호의에서 발췌. 토큰의 최대 수는 생성됩니다.

  - `max_completion_tokens`

    - `0`뚱 베어

      완료를 위해 생성될 수 있는 토큰의 수를 위한 위 경계.

    - `1`한국어

      완료를 위해 생성될 수 있는 토큰의 수를 위한 위 경계.

  - `metadata`

    - `0`기타 제품

      객체에 부착 할 수있는 16 키 값 쌍 세트.

    - `1`한국어

      객체에 부착 할 수있는 16 키 값 쌍 세트.

  - `modalities`

    - `0`지원하다

      모델 (예 : \['text'] 또는 \['text', 'audio'])에서 요구하는 출력 유형.

      - `items`이름 \*

    - `1`한국어

      모델 (예 : \['text'] 또는 \['text', 'audio'])에서 요구하는 출력 유형.

  - `n`

    - `0`정수 기본 1 분 1 최대 128

      각 입력 메시지에 대해 생성하는 몇 채팅 완료 선택.

    - `1`null 기본 1

      각 입력 메시지에 대해 생성하는 몇 채팅 완료 선택.

  - `parallel_tool_calls`boolean 기본 true

    도구 사용 중에 병렬 함수를 호출 할 수 있는지 여부.

  - `prediction`기타 제품

    - `type`문자열 필수

    - `content`\*필수

      - `0`이름 \*

      - `1`지원하다

        - `items`기타 제품

          - `type`문자열 필수

          - `text`문자열 필수

  - `presence_penalty`

    - `0`번호 0 분 -2 최대 2

      텍스트에 나타나는지 여부에 따라 새로운 토큰을 Penalizes.

    - `1`오류 0

      텍스트에 나타나는지 여부에 따라 새로운 토큰을 Penalizes.

  - `reasoning_effort`

    - `0`이름 \*

      원인 모델 (o1, o3-mini 등)에 대한 노력.

    - `1`한국어

      원인 모델 (o1, o3-mini 등)에 대한 노력.

  - `response_format`1 중

    모델을 출력해야 할 형식을 지정합니다.

    - `0`기타 제품

      - `type`문자열 필수

    - `1`기타 제품

      - `type`문자열 필수

    - `2`기타 제품

      - `type`문자열 필수

      - `json_schema`자주 묻는 질문

        - `name`문자열 필수

        - `description`이름 \*

        - `schema`기타 제품

        - `strict`

          - `0`한국어

          - `1`한국어

  - `seed`

    - `0`뚱 베어

      지정된 경우, 시스템은 deterministically 샘플에 가장 좋은 노력을 만들 것입니다.

    - `1`한국어

      지정된 경우, 시스템은 deterministically 샘플에 가장 좋은 노력을 만들 것입니다.

  - `service_tier`

    - `0`string 기본 자동

      요청을 제공하는 데 사용되는 처리 유형을 지정합니다.

    - `1`null 기본 자동

      요청을 제공하는 데 사용되는 처리 유형을 지정합니다.

  - `stop`

    - `0`한국어

      API가 더 많은 토큰을 생성하는 4개의 순서까지.

    - `1`이름 \*

      API가 더 많은 토큰을 생성하는 4개의 순서까지.

    - `2`지원하다

      API가 더 많은 토큰을 생성하는 4개의 순서까지.

      - `items`이름 \*

  - `store`

    - `0`한국어

      모델 증류 / evals에 대한 출력을 저장하는 것.

    - `1`한국어

      모델 증류 / evals에 대한 출력을 저장하는 것.

  - `stream`

    - `0`한국어

      true, 부분 메시지 deltas는 서버 상태 이벤트로 전송됩니다.

    - `1`한국어

      true, 부분 메시지 deltas는 서버 상태 이벤트로 전송됩니다.

  - `stream_options`기타 제품

    - `include_usage`한국어

    - `include_obfuscation`한국어

  - `temperature`

    - `0`수 기본 1 분 0 최대 2

      0과 2. 사이 표본 추출 온도

    - `1`null 기본 1

      0과 2. 사이 표본 추출 온도

  - `tool_choice`1 중

    (모든 경우) 도구가 모델에 의해 호출되는 제어. 'none' = 도구 없음, 'auto' = 모델 결정, 'required' = 도구로 호출해야합니다.

    - `0`이름 \*

    - `1`기타 제품

      특정 기능 도구를 강제하십시오.

      - `type`문자열 필수

      - `function`자주 묻는 질문

        - `name`문자열 필수

    - `2`기타 제품

      특정 사용자 정의 도구를 강제.

      - `type`문자열 필수

      - `custom`자주 묻는 질문

        - `name`문자열 필수

    - `3`기타 제품

      도구의 허용된 하위 설정에 제약.

      - `type`문자열 필수

      - `allowed_tools`자주 묻는 질문

        - `mode`문자열 필수

        - `tools`지원되는

          - `items`기타 제품

  - `tools`지원하다

    도구 목록은 모델을 호출 할 수 있습니다.

    - `items`1 중

      - `0`기타 제품

        - `type`문자열 필수

        - `function`자주 묻는 질문

          - `name`문자열 필수

            함수의 이름은 호출됩니다.

          - `description`이름 \*

            기능의 설명.

          - `parameters`기타 제품

            매개변수는 JSON Schema 객체로 설명된 함수를 받아들입니다.

          - `strict`

            - `0`한국어

              엄격한 schema 부착을 가능하게하는 것.

            - `1`한국어

              엄격한 schema 부착을 가능하게하는 것.

      - `1`기타 제품

        - `type`문자열 필수

        - `custom`자주 묻는 질문

          - `name`문자열 필수

          - `description`이름 \*

          - `format`1 중

            - `0`기타 제품

              - `type`문자열 필수

            - `1`기타 제품

              - `type`문자열 필수

              - `grammar`자주 묻는 질문

                - `definition`문자열 필수

                - `syntax`문자열 필수

  - `top_p`

    - `0`수 기본 1 분 0 최대 1

      Nucleus 표본 추출: top p 확률 질량을 가진 토큰의 결과를 고려합니다.

    - `1`null 기본 1

      Nucleus 표본 추출: top p 확률 질량을 가진 토큰의 결과를 고려합니다.

  - `user`이름 \*

    최종 사용자를 나타내는 독특한 식별자, 학대 모니터링.

  - `web_search_options`기타 제품

    웹 검색 도구에 대한 옵션 (웹 검색을 사용하여).

    - `search_context_size`string 기본 매체

    - `user_location`기타 제품

      - `type`문자열 필수

      - `approximate`자주 묻는 질문

        - `city`이름 \*

        - `country`이름 \*

        - `region`이름 \*

        - `timezone`이름 \*

  - `function_call`

    - `0`이름 \*

    - `1`기타 제품

      - `name`문자열 필수

  - `functions`지원하다

    - `items`기타 제품

      - `name`문자열 필수

        함수의 이름은 호출됩니다.

      - `description`이름 \*

        기능의 설명.

      - `parameters`기타 제품

        매개변수는 JSON Schema 객체로 설명된 함수를 받아들입니다.

      - `strict`

        - `0`한국어

          엄격한 schema 부착을 가능하게하는 것.

        - `1`한국어

          엄격한 schema 부착을 가능하게하는 것.

### 출력 전압

- `0`기타 제품

  - `id`문자열 필수

    채팅 완료를위한 독특한 식별자.

  - `object`문자열 필수

  - `created`integer 필수

    완료가 생성되었을 때 유닉스 타임스탬프 (둘째).

  - `model`문자열 필수

    채팅 완료에 사용되는 모델.

  - `choices`지원되는

    - `items`기타 제품

      - `index`integer 필수

      - `message`자주 묻는 질문

        - `role`문자열 필수

        - `content`\*필수

          - `0`이름 \*

          - `1`한국어

        - `refusal`\*필수

          - `0`이름 \*

          - `1`한국어

        - `annotations`지원하다

          - `items`기타 제품

            - `type`문자열 필수

            - `url_citation`자주 묻는 질문

              - `url`문자열 필수

              - `title`문자열 필수

              - `start_index`integer 필수

              - `end_index`integer 필수

        - `audio`기타 제품

          - `id`문자열 필수

          - `data`문자열 필수

            Base64 인코딩된 오디오 바이트.

          - `expires_at`integer 필수

          - `transcript`문자열 필수

        - `tool_calls`지원하다

          - `items`1 중

            - `0`기타 제품

              - `id`문자열 필수

              - `type`문자열 필수

              - `function`자주 묻는 질문

                - `name`문자열 필수

                - `arguments`문자열 필수

                  JSON-encoded 인수 문자열.

            - `1`기타 제품

              - `id`문자열 필수

              - `type`문자열 필수

              - `custom`자주 묻는 질문

                - `name`문자열 필수

                - `input`문자열 필수

        - `function_call`

          - `0`기타 제품

            - `name`문자열 필수

            - `arguments`문자열 필수

          - `1`한국어

      - `finish_reason`문자열 필수

      - `logprobs`\*필수

        - `0`기타 제품

          - `content`

            - `0`지원하다

              - `items`기타 제품

                - `token`문자열 필수

                - `logprob`이름 \*

                - `bytes`\*필수

                  - `0`지원하다

                    - `items`뚱 베어

                  - `1`한국어

                - `top_logprobs`지원되는

                  - `items`기타 제품

                    - `token`문자열 필수

                    - `logprob`이름 \*

                    - `bytes`\*필수

                      - `0`지원하다

                        - `items`뚱 베어

                      - `1`한국어

            - `1`한국어

          - `refusal`

            - `0`지원하다

              - `items`기타 제품

                - `token`문자열 필수

                - `logprob`이름 \*

                - `bytes`\*필수

                  - `0`지원하다

                    - `items`뚱 베어

                  - `1`한국어

                - `top_logprobs`지원되는

                  - `items`기타 제품

                    - `token`문자열 필수

                    - `logprob`이름 \*

                    - `bytes`\*필수

                      - `0`지원하다

                        - `items`뚱 베어

                      - `1`한국어

            - `1`한국어

        - `1`한국어

  - `usage`기타 제품

    - `prompt_tokens`integer 필수

    - `completion_tokens`integer 필수

    - `total_tokens`integer 필수

    - `prompt_tokens_details`기타 제품

      - `cached_tokens`뚱 베어

      - `audio_tokens`뚱 베어

    - `completion_tokens_details`기타 제품

      - `reasoning_tokens`뚱 베어

      - `audio_tokens`뚱 베어

      - `accepted_prediction_tokens`뚱 베어

      - `rejected_prediction_tokens`뚱 베어

  - `system_fingerprint`

    - `0`이름 \*

    - `1`한국어

  - `service_tier`

    - `0`이름 \*

    - `1`한국어

- `1`이름 \*

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "oneOf": [
          {
              "title": "Prompt",
              "properties": {
                  "prompt": {
                      "type": "string",
                      "minLength": 1,
                      "description": "The input text prompt for the model to generate a response."
                  },
                  "model": {
                      "type": "string",
                      "description": "ID of the model to use (e.g. '@cf/zai-org/glm-4.7-flash, etc')."
                  },
                  "audio": {
                      "anyOf": [
                          {
                              "type": "object",
                              "description": "Parameters for audio output. Required when modalities includes 'audio'.",
                              "properties": {
                                  "voice": {
                                      "oneOf": [
                                          {
                                              "type": "string"
                                          },
                                          {
                                              "type": "object",
                                              "properties": {
                                                  "id": {
                                                      "type": "string"
                                                  }
                                              },
                                              "required": [
                                                  "id"
                                              ]
                                          }
                                      ]
                                  },
                                  "format": {
                                      "type": "string",
                                      "enum": [
                                          "wav",
                                          "aac",
                                          "mp3",
                                          "flac",
                                          "opus",
                                          "pcm16"
                                      ]
                                  }
                              },
                              "required": [
                                  "voice",
                                  "format"
                              ]
                          }
                      ]
                  },
                  "frequency_penalty": {
                      "anyOf": [
                          {
                              "type": "number",
                              "minimum": -2,
                              "maximum": 2
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": 0,
                      "description": "Penalizes new tokens based on their existing frequency in the text so far."
                  },
                  "logit_bias": {
                      "anyOf": [
                          {
                              "type": "object"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "Modify the likelihood of specified tokens appearing in the completion. Maps token IDs to bias values from -100 to 100."
                  },
                  "logprobs": {
                      "anyOf": [
                          {
                              "type": "boolean"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": false,
                      "description": "Whether to return log probabilities of the output tokens."
                  },
                  "top_logprobs": {
                      "anyOf": [
                          {
                              "type": "integer",
                              "minimum": 0,
                              "maximum": 20
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "How many top log probabilities to return at each token position (0-20). Requires logprobs=true."
                  },
                  "max_tokens": {
                      "anyOf": [
                          {
                              "type": "integer"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "Deprecated in favor of max_completion_tokens. The maximum number of tokens to generate."
                  },
                  "max_completion_tokens": {
                      "anyOf": [
                          {
                              "type": "integer"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "An upper bound for the number of tokens that can be generated for a completion."
                  },
                  "metadata": {
                      "anyOf": [
                          {
                              "type": "object"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "Set of 16 key-value pairs that can be attached to the object."
                  },
                  "modalities": {
                      "anyOf": [
                          {
                              "type": "array",
                              "items": {
                                  "type": "string",
                                  "enum": [
                                      "text",
                                      "audio"
                                  ]
                              }
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "Output types requested from the model (e.g. ['text'] or ['text', 'audio'])."
                  },
                  "n": {
                      "anyOf": [
                          {
                              "type": "integer",
                              "minimum": 1,
                              "maximum": 128
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": 1,
                      "description": "How many chat completion choices to generate for each input message."
                  },
                  "parallel_tool_calls": {
                      "type": "boolean",
                      "default": true,
                      "description": "Whether to enable parallel function calling during tool use."
                  },
                  "prediction": {
                      "anyOf": [
                          {
                              "type": "object",
                              "properties": {
                                  "type": {
                                      "type": "string",
                                      "enum": [
                                          "content"
                                      ]
                                  },
                                  "content": {
                                      "anyOf": [
                                          {
                                              "type": "string"
                                          },
                                          {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "type": {
                                                          "type": "string",
                                                          "enum": [
                                                              "text"
                                                          ]
                                                      },
                                                      "text": {
                                                          "type": "string"
                                                      }
                                                  },
                                                  "required": [
                                                      "type",
                                                      "text"
                                                  ]
                                              }
                                          }
                                      ]
                                  }
                              },
                              "required": [
                                  "type",
                                  "content"
                              ]
                          }
                      ]
                  },
                  "presence_penalty": {
                      "anyOf": [
                          {
                              "type": "number",
                              "minimum": -2,
                              "maximum": 2
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": 0,
                      "description": "Penalizes new tokens based on whether they appear in the text so far."
                  },
                  "reasoning_effort": {
                      "anyOf": [
                          {
                              "type": "string",
                              "enum": [
                                  "low",
                                  "medium",
                                  "high"
                              ]
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "Constrains effort on reasoning for reasoning models (o1, o3-mini, etc.)."
                  },
                  "response_format": {
                      "anyOf": [
                          {
                              "description": "Specifies the format the model must output.",
                              "oneOf": [
                                  {
                                      "type": "object",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "text"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type"
                                      ]
                                  },
                                  {
                                      "type": "object",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "json_object"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type"
                                      ]
                                  },
                                  {
                                      "type": "object",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "json_schema"
                                              ]
                                          },
                                          "json_schema": {
                                              "type": "object",
                                              "properties": {
                                                  "name": {
                                                      "type": "string"
                                                  },
                                                  "description": {
                                                      "type": "string"
                                                  },
                                                  "schema": {
                                                      "type": "object"
                                                  },
                                                  "strict": {
                                                      "anyOf": [
                                                          {
                                                              "type": "boolean"
                                                          },
                                                          {
                                                              "type": "null"
                                                          }
                                                      ]
                                                  }
                                              },
                                              "required": [
                                                  "name"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type",
                                          "json_schema"
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  "seed": {
                      "anyOf": [
                          {
                              "type": "integer"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "If specified, the system will make a best effort to sample deterministically."
                  },
                  "service_tier": {
                      "anyOf": [
                          {
                              "type": "string",
                              "enum": [
                                  "auto",
                                  "default",
                                  "flex",
                                  "scale",
                                  "priority"
                              ]
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": "auto",
                      "description": "Specifies the processing type used for serving the request."
                  },
                  "stop": {
                      "description": "Up to 4 sequences where the API will stop generating further tokens.",
                      "anyOf": [
                          {
                              "type": "null"
                          },
                          {
                              "type": "string"
                          },
                          {
                              "type": "array",
                              "items": {
                                  "type": "string"
                              },
                              "minItems": 1,
                              "maxItems": 4
                          }
                      ]
                  },
                  "store": {
                      "anyOf": [
                          {
                              "type": "boolean"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": false,
                      "description": "Whether to store the output for model distillation / evals."
                  },
                  "stream": {
                      "anyOf": [
                          {
                              "type": "boolean"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": false,
                      "description": "If true, partial message deltas will be sent as server-sent events."
                  },
                  "stream_options": {
                      "anyOf": [
                          {
                              "type": "object",
                              "properties": {
                                  "include_usage": {
                                      "type": "boolean"
                                  },
                                  "include_obfuscation": {
                                      "type": "boolean"
                                  }
                              }
                          }
                      ]
                  },
                  "temperature": {
                      "anyOf": [
                          {
                              "type": "number",
                              "minimum": 0,
                              "maximum": 2
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": 1,
                      "description": "Sampling temperature between 0 and 2."
                  },
                  "tool_choice": {
                      "anyOf": [
                          {
                              "description": "Controls which (if any) tool is called by the model. 'none' = no tools, 'auto' = model decides, 'required' = must call a tool.",
                              "oneOf": [
                                  {
                                      "type": "string",
                                      "enum": [
                                          "none",
                                          "auto",
                                          "required"
                                      ]
                                  },
                                  {
                                      "type": "object",
                                      "description": "Force a specific function tool.",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "function"
                                              ]
                                          },
                                          "function": {
                                              "type": "object",
                                              "properties": {
                                                  "name": {
                                                      "type": "string"
                                                  }
                                              },
                                              "required": [
                                                  "name"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type",
                                          "function"
                                      ]
                                  },
                                  {
                                      "type": "object",
                                      "description": "Force a specific custom tool.",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "custom"
                                              ]
                                          },
                                          "custom": {
                                              "type": "object",
                                              "properties": {
                                                  "name": {
                                                      "type": "string"
                                                  }
                                              },
                                              "required": [
                                                  "name"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type",
                                          "custom"
                                      ]
                                  },
                                  {
                                      "type": "object",
                                      "description": "Constrain to an allowed subset of tools.",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "allowed_tools"
                                              ]
                                          },
                                          "allowed_tools": {
                                              "type": "object",
                                              "properties": {
                                                  "mode": {
                                                      "type": "string",
                                                      "enum": [
                                                          "auto",
                                                          "required"
                                                      ]
                                                  },
                                                  "tools": {
                                                      "type": "array",
                                                      "items": {
                                                          "type": "object"
                                                      }
                                                  }
                                              },
                                              "required": [
                                                  "mode",
                                                  "tools"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type",
                                          "allowed_tools"
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  "tools": {
                      "type": "array",
                      "description": "A list of tools the model may call.",
                      "items": {
                          "oneOf": [
                              {
                                  "type": "object",
                                  "properties": {
                                      "type": {
                                          "type": "string",
                                          "enum": [
                                              "function"
                                          ]
                                      },
                                      "function": {
                                          "type": "object",
                                          "properties": {
                                              "name": {
                                                  "type": "string",
                                                  "description": "The name of the function to be called."
                                              },
                                              "description": {
                                                  "type": "string",
                                                  "description": "A description of what the function does."
                                              },
                                              "parameters": {
                                                  "type": "object",
                                                  "description": "The parameters the function accepts, described as a JSON Schema object."
                                              },
                                              "strict": {
                                                  "anyOf": [
                                                      {
                                                          "type": "boolean"
                                                      },
                                                      {
                                                          "type": "null"
                                                      }
                                                  ],
                                                  "default": false,
                                                  "description": "Whether to enable strict schema adherence."
                                              }
                                          },
                                          "required": [
                                              "name"
                                          ]
                                      }
                                  },
                                  "required": [
                                      "type",
                                      "function"
                                  ]
                              },
                              {
                                  "type": "object",
                                  "properties": {
                                      "type": {
                                          "type": "string",
                                          "enum": [
                                              "custom"
                                          ]
                                      },
                                      "custom": {
                                          "type": "object",
                                          "properties": {
                                              "name": {
                                                  "type": "string"
                                              },
                                              "description": {
                                                  "type": "string"
                                              },
                                              "format": {
                                                  "oneOf": [
                                                      {
                                                          "type": "object",
                                                          "properties": {
                                                              "type": {
                                                                  "type": "string",
                                                                  "enum": [
                                                                      "text"
                                                                  ]
                                                              }
                                                          },
                                                          "required": [
                                                              "type"
                                                          ]
                                                      },
                                                      {
                                                          "type": "object",
                                                          "properties": {
                                                              "type": {
                                                                  "type": "string",
                                                                  "enum": [
                                                                      "grammar"
                                                                  ]
                                                              },
                                                              "grammar": {
                                                                  "type": "object",
                                                                  "properties": {
                                                                      "definition": {
                                                                          "type": "string"
                                                                      },
                                                                      "syntax": {
                                                                          "type": "string",
                                                                          "enum": [
                                                                              "lark",
                                                                              "regex"
                                                                          ]
                                                                      }
                                                                  },
                                                                  "required": [
                                                                      "definition",
                                                                      "syntax"
                                                                  ]
                                                              }
                                                          },
                                                          "required": [
                                                              "type",
                                                              "grammar"
                                                          ]
                                                      }
                                                  ]
                                              }
                                          },
                                          "required": [
                                              "name"
                                          ]
                                      }
                                  },
                                  "required": [
                                      "type",
                                      "custom"
                                  ]
                              }
                          ]
                      }
                  },
                  "top_p": {
                      "anyOf": [
                          {
                              "type": "number",
                              "minimum": 0,
                              "maximum": 1
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": 1,
                      "description": "Nucleus sampling: considers the results of the tokens with top_p probability mass."
                  },
                  "user": {
                      "type": "string",
                      "description": "A unique identifier representing your end-user, for abuse monitoring."
                  },
                  "web_search_options": {
                      "anyOf": [
                          {
                              "type": "object",
                              "description": "Options for the web search tool (when using built-in web search).",
                              "properties": {
                                  "search_context_size": {
                                      "type": "string",
                                      "enum": [
                                          "low",
                                          "medium",
                                          "high"
                                      ],
                                      "default": "medium"
                                  },
                                  "user_location": {
                                      "type": "object",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "approximate"
                                              ]
                                          },
                                          "approximate": {
                                              "type": "object",
                                              "properties": {
                                                  "city": {
                                                      "type": "string"
                                                  },
                                                  "country": {
                                                      "type": "string"
                                                  },
                                                  "region": {
                                                      "type": "string"
                                                  },
                                                  "timezone": {
                                                      "type": "string"
                                                  }
                                              }
                                          }
                                      },
                                      "required": [
                                          "type",
                                          "approximate"
                                      ]
                                  }
                              }
                          }
                      ]
                  },
                  "function_call": {
                      "anyOf": [
                          {
                              "type": "string",
                              "enum": [
                                  "none",
                                  "auto"
                              ]
                          },
                          {
                              "type": "object",
                              "properties": {
                                  "name": {
                                      "type": "string"
                                  }
                              },
                              "required": [
                                  "name"
                              ]
                          }
                      ]
                  },
                  "functions": {
                      "type": "array",
                      "items": {
                          "type": "object",
                          "properties": {
                              "name": {
                                  "type": "string",
                                  "description": "The name of the function to be called."
                              },
                              "description": {
                                  "type": "string",
                                  "description": "A description of what the function does."
                              },
                              "parameters": {
                                  "type": "object",
                                  "description": "The parameters the function accepts, described as a JSON Schema object."
                              },
                              "strict": {
                                  "anyOf": [
                                      {
                                          "type": "boolean"
                                      },
                                      {
                                          "type": "null"
                                      }
                                  ],
                                  "default": false,
                                  "description": "Whether to enable strict schema adherence."
                              }
                          },
                          "required": [
                              "name"
                          ]
                      },
                      "minItems": 1,
                      "maxItems": 128
                  }
              },
              "required": [
                  "prompt"
              ]
          },
          {
              "title": "Messages",
              "properties": {
                  "messages": {
                      "type": "array",
                      "description": "A list of messages comprising the conversation so far.",
                      "items": {
                          "oneOf": [
                              {
                                  "type": "object",
                                  "properties": {
                                      "role": {
                                          "type": "string",
                                          "enum": [
                                              "developer"
                                          ]
                                      },
                                      "content": {
                                          "anyOf": [
                                              {
                                                  "type": "string"
                                              },
                                              {
                                                  "type": "array",
                                                  "items": {
                                                      "type": "object",
                                                      "properties": {
                                                          "type": {
                                                              "type": "string",
                                                              "enum": [
                                                                  "text"
                                                              ]
                                                          },
                                                          "text": {
                                                              "type": "string"
                                                          }
                                                      },
                                                      "required": [
                                                          "type",
                                                          "text"
                                                      ]
                                                  }
                                              }
                                          ]
                                      },
                                      "name": {
                                          "type": "string"
                                      }
                                  },
                                  "required": [
                                      "role",
                                      "content"
                                  ]
                              },
                              {
                                  "type": "object",
                                  "properties": {
                                      "role": {
                                          "type": "string",
                                          "enum": [
                                              "system"
                                          ]
                                      },
                                      "content": {
                                          "anyOf": [
                                              {
                                                  "type": "string"
                                              },
                                              {
                                                  "type": "array",
                                                  "items": {
                                                      "type": "object",
                                                      "properties": {
                                                          "type": {
                                                              "type": "string",
                                                              "enum": [
                                                                  "text"
                                                              ]
                                                          },
                                                          "text": {
                                                              "type": "string"
                                                          }
                                                      },
                                                      "required": [
                                                          "type",
                                                          "text"
                                                      ]
                                                  }
                                              }
                                          ]
                                      },
                                      "name": {
                                          "type": "string"
                                      }
                                  },
                                  "required": [
                                      "role",
                                      "content"
                                  ]
                              },
                              {
                                  "type": "object",
                                  "properties": {
                                      "role": {
                                          "type": "string",
                                          "enum": [
                                              "user"
                                          ]
                                      },
                                      "content": {
                                          "anyOf": [
                                              {
                                                  "type": "string"
                                              },
                                              {
                                                  "type": "array",
                                                  "items": {
                                                      "type": "object",
                                                      "properties": {
                                                          "type": {
                                                              "type": "string",
                                                              "enum": [
                                                                  "text",
                                                                  "image_url",
                                                                  "input_audio",
                                                                  "file"
                                                              ]
                                                          },
                                                          "text": {
                                                              "type": "string"
                                                          },
                                                          "image_url": {
                                                              "type": "object",
                                                              "properties": {
                                                                  "url": {
                                                                      "type": "string"
                                                                  },
                                                                  "detail": {
                                                                      "type": "string",
                                                                      "enum": [
                                                                          "auto",
                                                                          "low",
                                                                          "high"
                                                                      ],
                                                                      "default": "auto"
                                                                  }
                                                              }
                                                          },
                                                          "input_audio": {
                                                              "type": "object",
                                                              "properties": {
                                                                  "data": {
                                                                      "type": "string"
                                                                  },
                                                                  "format": {
                                                                      "type": "string",
                                                                      "enum": [
                                                                          "wav",
                                                                          "mp3"
                                                                      ]
                                                                  }
                                                              }
                                                          },
                                                          "file": {
                                                              "type": "object",
                                                              "properties": {
                                                                  "file_data": {
                                                                      "type": "string"
                                                                  },
                                                                  "file_id": {
                                                                      "type": "string"
                                                                  },
                                                                  "filename": {
                                                                      "type": "string"
                                                                  }
                                                              }
                                                          }
                                                      },
                                                      "required": [
                                                          "type"
                                                      ]
                                                  },
                                                  "minItems": 1
                                              }
                                          ]
                                      },
                                      "name": {
                                          "type": "string"
                                      }
                                  },
                                  "required": [
                                      "role",
                                      "content"
                                  ]
                              },
                              {
                                  "type": "object",
                                  "properties": {
                                      "role": {
                                          "type": "string",
                                          "enum": [
                                              "assistant"
                                          ]
                                      },
                                      "content": {
                                          "anyOf": [
                                              {
                                                  "type": "string"
                                              },
                                              {
                                                  "type": "null"
                                              },
                                              {
                                                  "type": "array",
                                                  "items": {
                                                      "type": "object",
                                                      "properties": {
                                                          "type": {
                                                              "type": "string",
                                                              "enum": [
                                                                  "text",
                                                                  "refusal"
                                                              ]
                                                          },
                                                          "text": {
                                                              "type": "string"
                                                          },
                                                          "refusal": {
                                                              "type": "string"
                                                          }
                                                      },
                                                      "required": [
                                                          "type"
                                                      ]
                                                  }
                                              }
                                          ]
                                      },
                                      "refusal": {
                                          "anyOf": [
                                              {
                                                  "type": "string"
                                              },
                                              {
                                                  "type": "null"
                                              }
                                          ]
                                      },
                                      "name": {
                                          "type": "string"
                                      },
                                      "audio": {
                                          "anyOf": [
                                              {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "string"
                                                      }
                                                  },
                                                  "required": [
                                                      "id"
                                                  ]
                                              }
                                          ]
                                      },
                                      "tool_calls": {
                                          "type": "array",
                                          "items": {
                                              "oneOf": [
                                                  {
                                                      "type": "object",
                                                      "properties": {
                                                          "id": {
                                                              "type": "string"
                                                          },
                                                          "type": {
                                                              "type": "string",
                                                              "enum": [
                                                                  "function"
                                                              ]
                                                          },
                                                          "function": {
                                                              "type": "object",
                                                              "properties": {
                                                                  "name": {
                                                                      "type": "string"
                                                                  },
                                                                  "arguments": {
                                                                      "type": "string",
                                                                      "description": "JSON-encoded arguments string."
                                                                  }
                                                              },
                                                              "required": [
                                                                  "name",
                                                                  "arguments"
                                                              ]
                                                          }
                                                      },
                                                      "required": [
                                                          "id",
                                                          "type",
                                                          "function"
                                                      ]
                                                  },
                                                  {
                                                      "type": "object",
                                                      "properties": {
                                                          "id": {
                                                              "type": "string"
                                                          },
                                                          "type": {
                                                              "type": "string",
                                                              "enum": [
                                                                  "custom"
                                                              ]
                                                          },
                                                          "custom": {
                                                              "type": "object",
                                                              "properties": {
                                                                  "name": {
                                                                      "type": "string"
                                                                  },
                                                                  "input": {
                                                                      "type": "string"
                                                                  }
                                                              },
                                                              "required": [
                                                                  "name",
                                                                  "input"
                                                              ]
                                                          }
                                                      },
                                                      "required": [
                                                          "id",
                                                          "type",
                                                          "custom"
                                                      ]
                                                  }
                                              ]
                                          }
                                      },
                                      "function_call": {
                                          "anyOf": [
                                              {
                                                  "type": "object",
                                                  "properties": {
                                                      "name": {
                                                          "type": "string"
                                                      },
                                                      "arguments": {
                                                          "type": "string"
                                                      }
                                                  },
                                                  "required": [
                                                      "name",
                                                      "arguments"
                                                  ]
                                              }
                                          ]
                                      }
                                  },
                                  "required": [
                                      "role"
                                  ]
                              },
                              {
                                  "type": "object",
                                  "properties": {
                                      "role": {
                                          "type": "string",
                                          "enum": [
                                              "tool"
                                          ]
                                      },
                                      "content": {
                                          "anyOf": [
                                              {
                                                  "type": "string"
                                              },
                                              {
                                                  "type": "array",
                                                  "items": {
                                                      "type": "object",
                                                      "properties": {
                                                          "type": {
                                                              "type": "string",
                                                              "enum": [
                                                                  "text"
                                                              ]
                                                          },
                                                          "text": {
                                                              "type": "string"
                                                          }
                                                      },
                                                      "required": [
                                                          "type",
                                                          "text"
                                                      ]
                                                  }
                                              }
                                          ]
                                      },
                                      "tool_call_id": {
                                          "type": "string"
                                      }
                                  },
                                  "required": [
                                      "role",
                                      "content",
                                      "tool_call_id"
                                  ]
                              },
                              {
                                  "type": "object",
                                  "properties": {
                                      "role": {
                                          "type": "string",
                                          "enum": [
                                              "function"
                                          ]
                                      },
                                      "content": {
                                          "type": "string"
                                      },
                                      "name": {
                                          "type": "string"
                                      }
                                  },
                                  "required": [
                                      "role",
                                      "content",
                                      "name"
                                  ]
                              }
                          ]
                      },
                      "minItems": 1
                  },
                  "model": {
                      "type": "string",
                      "description": "ID of the model to use (e.g. '@cf/zai-org/glm-4.7-flash, etc')."
                  },
                  "audio": {
                      "anyOf": [
                          {
                              "type": "object",
                              "description": "Parameters for audio output. Required when modalities includes 'audio'.",
                              "properties": {
                                  "voice": {
                                      "oneOf": [
                                          {
                                              "type": "string"
                                          },
                                          {
                                              "type": "object",
                                              "properties": {
                                                  "id": {
                                                      "type": "string"
                                                  }
                                              },
                                              "required": [
                                                  "id"
                                              ]
                                          }
                                      ]
                                  },
                                  "format": {
                                      "type": "string",
                                      "enum": [
                                          "wav",
                                          "aac",
                                          "mp3",
                                          "flac",
                                          "opus",
                                          "pcm16"
                                      ]
                                  }
                              },
                              "required": [
                                  "voice",
                                  "format"
                              ]
                          }
                      ]
                  },
                  "frequency_penalty": {
                      "anyOf": [
                          {
                              "type": "number",
                              "minimum": -2,
                              "maximum": 2
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": 0,
                      "description": "Penalizes new tokens based on their existing frequency in the text so far."
                  },
                  "logit_bias": {
                      "anyOf": [
                          {
                              "type": "object"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "Modify the likelihood of specified tokens appearing in the completion. Maps token IDs to bias values from -100 to 100."
                  },
                  "logprobs": {
                      "anyOf": [
                          {
                              "type": "boolean"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": false,
                      "description": "Whether to return log probabilities of the output tokens."
                  },
                  "top_logprobs": {
                      "anyOf": [
                          {
                              "type": "integer",
                              "minimum": 0,
                              "maximum": 20
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "How many top log probabilities to return at each token position (0-20). Requires logprobs=true."
                  },
                  "max_tokens": {
                      "anyOf": [
                          {
                              "type": "integer"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "Deprecated in favor of max_completion_tokens. The maximum number of tokens to generate."
                  },
                  "max_completion_tokens": {
                      "anyOf": [
                          {
                              "type": "integer"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "An upper bound for the number of tokens that can be generated for a completion."
                  },
                  "metadata": {
                      "anyOf": [
                          {
                              "type": "object"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "Set of 16 key-value pairs that can be attached to the object."
                  },
                  "modalities": {
                      "anyOf": [
                          {
                              "type": "array",
                              "items": {
                                  "type": "string",
                                  "enum": [
                                      "text",
                                      "audio"
                                  ]
                              }
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "Output types requested from the model (e.g. ['text'] or ['text', 'audio'])."
                  },
                  "n": {
                      "anyOf": [
                          {
                              "type": "integer",
                              "minimum": 1,
                              "maximum": 128
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": 1,
                      "description": "How many chat completion choices to generate for each input message."
                  },
                  "parallel_tool_calls": {
                      "type": "boolean",
                      "default": true,
                      "description": "Whether to enable parallel function calling during tool use."
                  },
                  "prediction": {
                      "anyOf": [
                          {
                              "type": "object",
                              "properties": {
                                  "type": {
                                      "type": "string",
                                      "enum": [
                                          "content"
                                      ]
                                  },
                                  "content": {
                                      "anyOf": [
                                          {
                                              "type": "string"
                                          },
                                          {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "type": {
                                                          "type": "string",
                                                          "enum": [
                                                              "text"
                                                          ]
                                                      },
                                                      "text": {
                                                          "type": "string"
                                                      }
                                                  },
                                                  "required": [
                                                      "type",
                                                      "text"
                                                  ]
                                              }
                                          }
                                      ]
                                  }
                              },
                              "required": [
                                  "type",
                                  "content"
                              ]
                          }
                      ]
                  },
                  "presence_penalty": {
                      "anyOf": [
                          {
                              "type": "number",
                              "minimum": -2,
                              "maximum": 2
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": 0,
                      "description": "Penalizes new tokens based on whether they appear in the text so far."
                  },
                  "reasoning_effort": {
                      "anyOf": [
                          {
                              "type": "string",
                              "enum": [
                                  "low",
                                  "medium",
                                  "high"
                              ]
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "Constrains effort on reasoning for reasoning models (o1, o3-mini, etc.)."
                  },
                  "response_format": {
                      "anyOf": [
                          {
                              "description": "Specifies the format the model must output.",
                              "oneOf": [
                                  {
                                      "type": "object",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "text"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type"
                                      ]
                                  },
                                  {
                                      "type": "object",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "json_object"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type"
                                      ]
                                  },
                                  {
                                      "type": "object",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "json_schema"
                                              ]
                                          },
                                          "json_schema": {
                                              "type": "object",
                                              "properties": {
                                                  "name": {
                                                      "type": "string"
                                                  },
                                                  "description": {
                                                      "type": "string"
                                                  },
                                                  "schema": {
                                                      "type": "object"
                                                  },
                                                  "strict": {
                                                      "anyOf": [
                                                          {
                                                              "type": "boolean"
                                                          },
                                                          {
                                                              "type": "null"
                                                          }
                                                      ]
                                                  }
                                              },
                                              "required": [
                                                  "name"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type",
                                          "json_schema"
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  "seed": {
                      "anyOf": [
                          {
                              "type": "integer"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "description": "If specified, the system will make a best effort to sample deterministically."
                  },
                  "service_tier": {
                      "anyOf": [
                          {
                              "type": "string",
                              "enum": [
                                  "auto",
                                  "default",
                                  "flex",
                                  "scale",
                                  "priority"
                              ]
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": "auto",
                      "description": "Specifies the processing type used for serving the request."
                  },
                  "stop": {
                      "description": "Up to 4 sequences where the API will stop generating further tokens.",
                      "anyOf": [
                          {
                              "type": "null"
                          },
                          {
                              "type": "string"
                          },
                          {
                              "type": "array",
                              "items": {
                                  "type": "string"
                              },
                              "minItems": 1,
                              "maxItems": 4
                          }
                      ]
                  },
                  "store": {
                      "anyOf": [
                          {
                              "type": "boolean"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": false,
                      "description": "Whether to store the output for model distillation / evals."
                  },
                  "stream": {
                      "anyOf": [
                          {
                              "type": "boolean"
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": false,
                      "description": "If true, partial message deltas will be sent as server-sent events."
                  },
                  "stream_options": {
                      "anyOf": [
                          {
                              "type": "object",
                              "properties": {
                                  "include_usage": {
                                      "type": "boolean"
                                  },
                                  "include_obfuscation": {
                                      "type": "boolean"
                                  }
                              }
                          }
                      ]
                  },
                  "temperature": {
                      "anyOf": [
                          {
                              "type": "number",
                              "minimum": 0,
                              "maximum": 2
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": 1,
                      "description": "Sampling temperature between 0 and 2."
                  },
                  "tool_choice": {
                      "anyOf": [
                          {
                              "description": "Controls which (if any) tool is called by the model. 'none' = no tools, 'auto' = model decides, 'required' = must call a tool.",
                              "oneOf": [
                                  {
                                      "type": "string",
                                      "enum": [
                                          "none",
                                          "auto",
                                          "required"
                                      ]
                                  },
                                  {
                                      "type": "object",
                                      "description": "Force a specific function tool.",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "function"
                                              ]
                                          },
                                          "function": {
                                              "type": "object",
                                              "properties": {
                                                  "name": {
                                                      "type": "string"
                                                  }
                                              },
                                              "required": [
                                                  "name"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type",
                                          "function"
                                      ]
                                  },
                                  {
                                      "type": "object",
                                      "description": "Force a specific custom tool.",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "custom"
                                              ]
                                          },
                                          "custom": {
                                              "type": "object",
                                              "properties": {
                                                  "name": {
                                                      "type": "string"
                                                  }
                                              },
                                              "required": [
                                                  "name"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type",
                                          "custom"
                                      ]
                                  },
                                  {
                                      "type": "object",
                                      "description": "Constrain to an allowed subset of tools.",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "allowed_tools"
                                              ]
                                          },
                                          "allowed_tools": {
                                              "type": "object",
                                              "properties": {
                                                  "mode": {
                                                      "type": "string",
                                                      "enum": [
                                                          "auto",
                                                          "required"
                                                      ]
                                                  },
                                                  "tools": {
                                                      "type": "array",
                                                      "items": {
                                                          "type": "object"
                                                      }
                                                  }
                                              },
                                              "required": [
                                                  "mode",
                                                  "tools"
                                              ]
                                          }
                                      },
                                      "required": [
                                          "type",
                                          "allowed_tools"
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  "tools": {
                      "type": "array",
                      "description": "A list of tools the model may call.",
                      "items": {
                          "oneOf": [
                              {
                                  "type": "object",
                                  "properties": {
                                      "type": {
                                          "type": "string",
                                          "enum": [
                                              "function"
                                          ]
                                      },
                                      "function": {
                                          "type": "object",
                                          "properties": {
                                              "name": {
                                                  "type": "string",
                                                  "description": "The name of the function to be called."
                                              },
                                              "description": {
                                                  "type": "string",
                                                  "description": "A description of what the function does."
                                              },
                                              "parameters": {
                                                  "type": "object",
                                                  "description": "The parameters the function accepts, described as a JSON Schema object."
                                              },
                                              "strict": {
                                                  "anyOf": [
                                                      {
                                                          "type": "boolean"
                                                      },
                                                      {
                                                          "type": "null"
                                                      }
                                                  ],
                                                  "default": false,
                                                  "description": "Whether to enable strict schema adherence."
                                              }
                                          },
                                          "required": [
                                              "name"
                                          ]
                                      }
                                  },
                                  "required": [
                                      "type",
                                      "function"
                                  ]
                              },
                              {
                                  "type": "object",
                                  "properties": {
                                      "type": {
                                          "type": "string",
                                          "enum": [
                                              "custom"
                                          ]
                                      },
                                      "custom": {
                                          "type": "object",
                                          "properties": {
                                              "name": {
                                                  "type": "string"
                                              },
                                              "description": {
                                                  "type": "string"
                                              },
                                              "format": {
                                                  "oneOf": [
                                                      {
                                                          "type": "object",
                                                          "properties": {
                                                              "type": {
                                                                  "type": "string",
                                                                  "enum": [
                                                                      "text"
                                                                  ]
                                                              }
                                                          },
                                                          "required": [
                                                              "type"
                                                          ]
                                                      },
                                                      {
                                                          "type": "object",
                                                          "properties": {
                                                              "type": {
                                                                  "type": "string",
                                                                  "enum": [
                                                                      "grammar"
                                                                  ]
                                                              },
                                                              "grammar": {
                                                                  "type": "object",
                                                                  "properties": {
                                                                      "definition": {
                                                                          "type": "string"
                                                                      },
                                                                      "syntax": {
                                                                          "type": "string",
                                                                          "enum": [
                                                                              "lark",
                                                                              "regex"
                                                                          ]
                                                                      }
                                                                  },
                                                                  "required": [
                                                                      "definition",
                                                                      "syntax"
                                                                  ]
                                                              }
                                                          },
                                                          "required": [
                                                              "type",
                                                              "grammar"
                                                          ]
                                                      }
                                                  ]
                                              }
                                          },
                                          "required": [
                                              "name"
                                          ]
                                      }
                                  },
                                  "required": [
                                      "type",
                                      "custom"
                                  ]
                              }
                          ]
                      }
                  },
                  "top_p": {
                      "anyOf": [
                          {
                              "type": "number",
                              "minimum": 0,
                              "maximum": 1
                          },
                          {
                              "type": "null"
                          }
                      ],
                      "default": 1,
                      "description": "Nucleus sampling: considers the results of the tokens with top_p probability mass."
                  },
                  "user": {
                      "type": "string",
                      "description": "A unique identifier representing your end-user, for abuse monitoring."
                  },
                  "web_search_options": {
                      "anyOf": [
                          {
                              "type": "object",
                              "description": "Options for the web search tool (when using built-in web search).",
                              "properties": {
                                  "search_context_size": {
                                      "type": "string",
                                      "enum": [
                                          "low",
                                          "medium",
                                          "high"
                                      ],
                                      "default": "medium"
                                  },
                                  "user_location": {
                                      "type": "object",
                                      "properties": {
                                          "type": {
                                              "type": "string",
                                              "enum": [
                                                  "approximate"
                                              ]
                                          },
                                          "approximate": {
                                              "type": "object",
                                              "properties": {
                                                  "city": {
                                                      "type": "string"
                                                  },
                                                  "country": {
                                                      "type": "string"
                                                  },
                                                  "region": {
                                                      "type": "string"
                                                  },
                                                  "timezone": {
                                                      "type": "string"
                                                  }
                                              }
                                          }
                                      },
                                      "required": [
                                          "type",
                                          "approximate"
                                      ]
                                  }
                              }
                          }
                      ]
                  },
                  "function_call": {
                      "anyOf": [
                          {
                              "type": "string",
                              "enum": [
                                  "none",
                                  "auto"
                              ]
                          },
                          {
                              "type": "object",
                              "properties": {
                                  "name": {
                                      "type": "string"
                                  }
                              },
                              "required": [
                                  "name"
                              ]
                          }
                      ]
                  },
                  "functions": {
                      "type": "array",
                      "items": {
                          "type": "object",
                          "properties": {
                              "name": {
                                  "type": "string",
                                  "description": "The name of the function to be called."
                              },
                              "description": {
                                  "type": "string",
                                  "description": "A description of what the function does."
                              },
                              "parameters": {
                                  "type": "object",
                                  "description": "The parameters the function accepts, described as a JSON Schema object."
                              },
                              "strict": {
                                  "anyOf": [
                                      {
                                          "type": "boolean"
                                      },
                                      {
                                          "type": "null"
                                      }
                                  ],
                                  "default": false,
                                  "description": "Whether to enable strict schema adherence."
                              }
                          },
                          "required": [
                              "name"
                          ]
                      },
                      "minItems": 1,
                      "maxItems": 128
                  }
              },
              "required": [
                  "messages"
              ]
          }
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
                  "id": {
                      "type": "string",
                      "description": "A unique identifier for the chat completion."
                  },
                  "object": {
                      "type": "string"
                  },
                  "created": {
                      "type": "integer",
                      "description": "Unix timestamp (seconds) of when the completion was created."
                  },
                  "model": {
                      "type": "string",
                      "description": "The model used for the chat completion."
                  },
                  "choices": {
                      "type": "array",
                      "items": {
                          "anyOf": [
                              {
                                  "type": "object",
                                  "properties": {
                                      "index": {
                                          "type": "integer"
                                      },
                                      "message": {
                                          "anyOf": [
                                              {
                                                  "type": "object",
                                                  "properties": {
                                                      "role": {
                                                          "type": "string",
                                                          "enum": [
                                                              "assistant"
                                                          ]
                                                      },
                                                      "content": {
                                                          "anyOf": [
                                                              {
                                                                  "type": "string"
                                                              },
                                                              {
                                                                  "type": "null"
                                                              }
                                                          ]
                                                      },
                                                      "refusal": {
                                                          "anyOf": [
                                                              {
                                                                  "type": "string"
                                                              },
                                                              {
                                                                  "type": "null"
                                                              }
                                                          ]
                                                      },
                                                      "annotations": {
                                                          "type": "array",
                                                          "items": {
                                                              "type": "object",
                                                              "properties": {
                                                                  "type": {
                                                                      "type": "string",
                                                                      "enum": [
                                                                          "url_citation"
                                                                      ]
                                                                  },
                                                                  "url_citation": {
                                                                      "type": "object",
                                                                      "properties": {
                                                                          "url": {
                                                                              "type": "string"
                                                                          },
                                                                          "title": {
                                                                              "type": "string"
                                                                          },
                                                                          "start_index": {
                                                                              "type": "integer"
                                                                          },
                                                                          "end_index": {
                                                                              "type": "integer"
                                                                          }
                                                                      },
                                                                      "required": [
                                                                          "url",
                                                                          "title",
                                                                          "start_index",
                                                                          "end_index"
                                                                      ]
                                                                  }
                                                              },
                                                              "required": [
                                                                  "type",
                                                                  "url_citation"
                                                              ]
                                                          }
                                                      },
                                                      "audio": {
                                                          "anyOf": [
                                                              {
                                                                  "type": "object",
                                                                  "properties": {
                                                                      "id": {
                                                                          "type": "string"
                                                                      },
                                                                      "data": {
                                                                          "type": "string",
                                                                          "description": "Base64 encoded audio bytes."
                                                                      },
                                                                      "expires_at": {
                                                                          "type": "integer"
                                                                      },
                                                                      "transcript": {
                                                                          "type": "string"
                                                                      }
                                                                  },
                                                                  "required": [
                                                                      "id",
                                                                      "data",
                                                                      "expires_at",
                                                                      "transcript"
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      "tool_calls": {
                                                          "type": "array",
                                                          "items": {
                                                              "oneOf": [
                                                                  {
                                                                      "type": "object",
                                                                      "properties": {
                                                                          "id": {
                                                                              "type": "string"
                                                                          },
                                                                          "type": {
                                                                              "type": "string",
                                                                              "enum": [
                                                                                  "function"
                                                                              ]
                                                                          },
                                                                          "function": {
                                                                              "type": "object",
                                                                              "properties": {
                                                                                  "name": {
                                                                                      "type": "string"
                                                                                  },
                                                                                  "arguments": {
                                                                                      "type": "string",
                                                                                      "description": "JSON-encoded arguments string."
                                                                                  }
                                                                              },
                                                                              "required": [
                                                                                  "name",
                                                                                  "arguments"
                                                                              ]
                                                                          }
                                                                      },
                                                                      "required": [
                                                                          "id",
                                                                          "type",
                                                                          "function"
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "object",
                                                                      "properties": {
                                                                          "id": {
                                                                              "type": "string"
                                                                          },
                                                                          "type": {
                                                                              "type": "string",
                                                                              "enum": [
                                                                                  "custom"
                                                                              ]
                                                                          },
                                                                          "custom": {
                                                                              "type": "object",
                                                                              "properties": {
                                                                                  "name": {
                                                                                      "type": "string"
                                                                                  },
                                                                                  "input": {
                                                                                      "type": "string"
                                                                                  }
                                                                              },
                                                                              "required": [
                                                                                  "name",
                                                                                  "input"
                                                                              ]
                                                                          }
                                                                      },
                                                                      "required": [
                                                                          "id",
                                                                          "type",
                                                                          "custom"
                                                                      ]
                                                                  }
                                                              ]
                                                          }
                                                      },
                                                      "function_call": {
                                                          "anyOf": [
                                                              {
                                                                  "type": "object",
                                                                  "properties": {
                                                                      "name": {
                                                                          "type": "string"
                                                                      },
                                                                      "arguments": {
                                                                          "type": "string"
                                                                      }
                                                                  },
                                                                  "required": [
                                                                      "name",
                                                                      "arguments"
                                                                  ]
                                                              },
                                                              {
                                                                  "type": "null"
                                                              }
                                                          ]
                                                      }
                                                  },
                                                  "required": [
                                                      "role",
                                                      "content",
                                                      "refusal"
                                                  ]
                                              }
                                          ]
                                      },
                                      "finish_reason": {
                                          "type": "string",
                                          "enum": [
                                              "stop",
                                              "length",
                                              "tool_calls",
                                              "content_filter",
                                              "function_call"
                                          ]
                                      },
                                      "logprobs": {
                                          "anyOf": [
                                              {
                                                  "type": "object",
                                                  "properties": {
                                                      "content": {
                                                          "anyOf": [
                                                              {
                                                                  "type": "array",
                                                                  "items": {
                                                                      "type": "object",
                                                                      "properties": {
                                                                          "token": {
                                                                              "type": "string"
                                                                          },
                                                                          "logprob": {
                                                                              "type": "number"
                                                                          },
                                                                          "bytes": {
                                                                              "anyOf": [
                                                                                  {
                                                                                      "type": "array",
                                                                                      "items": {
                                                                                          "type": "integer"
                                                                                      }
                                                                                  },
                                                                                  {
                                                                                      "type": "null"
                                                                                  }
                                                                              ]
                                                                          },
                                                                          "top_logprobs": {
                                                                              "type": "array",
                                                                              "items": {
                                                                                  "type": "object",
                                                                                  "properties": {
                                                                                      "token": {
                                                                                          "type": "string"
                                                                                      },
                                                                                      "logprob": {
                                                                                          "type": "number"
                                                                                      },
                                                                                      "bytes": {
                                                                                          "anyOf": [
                                                                                              {
                                                                                                  "type": "array",
                                                                                                  "items": {
                                                                                                      "type": "integer"
                                                                                                  }
                                                                                              },
                                                                                              {
                                                                                                  "type": "null"
                                                                                              }
                                                                                          ]
                                                                                      }
                                                                                  },
                                                                                  "required": [
                                                                                      "token",
                                                                                      "logprob",
                                                                                      "bytes"
                                                                                  ]
                                                                              }
                                                                          }
                                                                      },
                                                                      "required": [
                                                                          "token",
                                                                          "logprob",
                                                                          "bytes",
                                                                          "top_logprobs"
                                                                      ]
                                                                  }
                                                              },
                                                              {
                                                                  "type": "null"
                                                              }
                                                          ]
                                                      },
                                                      "refusal": {
                                                          "anyOf": [
                                                              {
                                                                  "type": "array",
                                                                  "items": {
                                                                      "type": "object",
                                                                      "properties": {
                                                                          "token": {
                                                                              "type": "string"
                                                                          },
                                                                          "logprob": {
                                                                              "type": "number"
                                                                          },
                                                                          "bytes": {
                                                                              "anyOf": [
                                                                                  {
                                                                                      "type": "array",
                                                                                      "items": {
                                                                                          "type": "integer"
                                                                                      }
                                                                                  },
                                                                                  {
                                                                                      "type": "null"
                                                                                  }
                                                                              ]
                                                                          },
                                                                          "top_logprobs": {
                                                                              "type": "array",
                                                                              "items": {
                                                                                  "type": "object",
                                                                                  "properties": {
                                                                                      "token": {
                                                                                          "type": "string"
                                                                                      },
                                                                                      "logprob": {
                                                                                          "type": "number"
                                                                                      },
                                                                                      "bytes": {
                                                                                          "anyOf": [
                                                                                              {
                                                                                                  "type": "array",
                                                                                                  "items": {
                                                                                                      "type": "integer"
                                                                                                  }
                                                                                              },
                                                                                              {
                                                                                                  "type": "null"
                                                                                              }
                                                                                          ]
                                                                                      }
                                                                                  },
                                                                                  "required": [
                                                                                      "token",
                                                                                      "logprob",
                                                                                      "bytes"
                                                                                  ]
                                                                              }
                                                                          }
                                                                      },
                                                                      "required": [
                                                                          "token",
                                                                          "logprob",
                                                                          "bytes",
                                                                          "top_logprobs"
                                                                      ]
                                                                  }
                                                              },
                                                              {
                                                                  "type": "null"
                                                              }
                                                          ]
                                                      }
                                                  }
                                              },
                                              {
                                                  "type": "null"
                                              }
                                          ]
                                      }
                                  },
                                  "required": [
                                      "index",
                                      "message",
                                      "finish_reason",
                                      "logprobs"
                                  ]
                              }
                          ]
                      },
                      "minItems": 1
                  },
                  "usage": {
                      "anyOf": [
                          {
                              "type": "object",
                              "properties": {
                                  "prompt_tokens": {
                                      "type": "integer"
                                  },
                                  "completion_tokens": {
                                      "type": "integer"
                                  },
                                  "total_tokens": {
                                      "type": "integer"
                                  },
                                  "prompt_tokens_details": {
                                      "type": "object",
                                      "properties": {
                                          "cached_tokens": {
                                              "type": "integer"
                                          },
                                          "audio_tokens": {
                                              "type": "integer"
                                          }
                                      }
                                  },
                                  "completion_tokens_details": {
                                      "type": "object",
                                      "properties": {
                                          "reasoning_tokens": {
                                              "type": "integer"
                                          },
                                          "audio_tokens": {
                                              "type": "integer"
                                          },
                                          "accepted_prediction_tokens": {
                                              "type": "integer"
                                          },
                                          "rejected_prediction_tokens": {
                                              "type": "integer"
                                          }
                                      }
                                  }
                              },
                              "required": [
                                  "prompt_tokens",
                                  "completion_tokens",
                                  "total_tokens"
                              ]
                          }
                      ]
                  },
                  "system_fingerprint": {
                      "anyOf": [
                          {
                              "type": "string"
                          },
                          {
                              "type": "null"
                          }
                      ]
                  },
                  "service_tier": {
                      "anyOf": [
                          {
                              "type": "string",
                              "enum": [
                                  "auto",
                                  "default",
                                  "flex",
                                  "scale",
                                  "priority"
                              ]
                          },
                          {
                              "type": "null"
                          }
                      ]
                  }
              },
              "required": [
                  "id",
                  "object",
                  "created",
                  "model",
                  "choices"
              ]
          },
          {
              "type": "string",
              "contentType": "text/event-stream",
              "format": "binary"
          }
      ]
  }
  ```
