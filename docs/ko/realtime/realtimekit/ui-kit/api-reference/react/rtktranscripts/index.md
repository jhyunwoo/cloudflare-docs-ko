---
title: RtkTranscripts · Cloudflare 실시간 문서
description: RtkTranscripts 구성 요소에 대한 API referenceXQ (ReactXQXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktranscripts/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktranscripts/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktranscripts/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktranscripts/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
transcripts를 처리하는 구성 요소. 당신이보고 싶은 성적을 구성 할 수 있습니다. 그리고 당신이 듣고 싶은 것. 설정할 수 있는 제한도 있습니다.

## 제품 정보

| 회사 정보     | 제품정보       | 견적 요청 | 기본 정보                   | 이름 \*     |
| --------- | ---------- | ----- | ----------------------- | --------- |
| `config`  | `UIConfig` | ❌     | `createDefaultConfig()` | Config 객체 |
| `meeting` | `Meeting`  | ✅     | -                       | 회의 목표     |
| `states`  | `States`   | ✅     | -                       | 미국 객체     |
| `t`       | `RtkI18n`  | ❌     | `useLanguage()`         | 한국어       |

## 사용 예제

### 기본 사용

```tsx
import { RtkTranscripts } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkTranscripts />;
}
```

### 재산

```tsx
import { RtkTranscripts } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkTranscripts
      meeting={meeting}
    />
  );
}
```
