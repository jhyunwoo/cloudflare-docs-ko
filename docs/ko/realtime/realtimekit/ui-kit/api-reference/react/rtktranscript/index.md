---
title: Cloudflare 실시간 문서
description: RtkTranscript 구성 요소에 대한 API reference (ReactXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktranscript/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktranscript/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktranscript/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktranscript/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
transcript를 보여주는 구성 요소. 당신은 후에 요소를 제거해야합니다.`rtkTranscriptDismiss`이벤트

## 제품 정보

| 회사 정보        | 제품정보                                   | 견적 요청 | 기본 정보           | 이름 \* |
| ------------ | -------------------------------------- | ----- | --------------- | ----- |
| `t`          | `RtkI18n`                              | ❌     | `useLanguage()` | 한국어   |
| `transcript` | `Transcript & { renderedId?: string }` | ❌     | -               | 이름 \* |

## 사용 예제

### 기본 사용

```tsx
import { RtkTranscript } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkTranscript />;
}
```

### 재산

```tsx
import { RtkTranscript } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkTranscript
      t={rtki18n}
      transcript="example"
    />
  );
}
```
