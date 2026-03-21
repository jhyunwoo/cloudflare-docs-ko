---
title: RtkRecordingIndicator · Cloudflare 실시간 문서
description: RtkRecordingIndicator 구성 요소에 대 한 API reference (ReactXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkrecordingindicator/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkrecordingindicator/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkrecordingindicator/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkrecordingindicator/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
회의의 기록 상태를 나타냅니다. 녹음이 일어나지 않는 경우 아무것도 렌더링하지 않습니다.

## 제품 정보

| 회사 정보      | 제품정보       | 견적 요청 | 기본 정보             | 이름 \*   |
| ---------- | ---------- | ----- | ----------------- | ------- |
| `iconPack` | `IconPack` | ❌     | `defaultIconPack` | Icon 팩  |
| `meeting`  | `Meeting`  | ✅     | -                 | 회의 목표   |
| `size`     | `Size`     | ✅     | -                 | 크기 (mm) |
| `t`        | `RtkI18n`  | ❌     | `useLanguage()`   | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkRecordingIndicator } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkRecordingIndicator />;
}
```

### 재산

```tsx
import { RtkRecordingIndicator } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkRecordingIndicator
      meeting={meeting}
      size="md"
    />
  );
}
```
