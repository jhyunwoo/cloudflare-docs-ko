---
title: RtkClock · Cloudflare 실시간 문서
description: RtkClock 성분 (React 도서관)를 위한 API referenceXQXQ
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkclock/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkclock/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkclock/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkclock/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
회의에서 탈출 한 시간을 표시합니다.

## 제품 정보

| 회사 정보      | 제품정보       | 견적 요청 | 기본 정보             | 이름 \*   |
| ---------- | ---------- | ----- | ----------------- | ------- |
| `iconPack` | `IconPack` | ❌     | `defaultIconPack` | Icon 팩  |
| `meeting`  | `Meeting`  | ✅     | -                 | 회의 목표   |
| `size`     | `Size`     | ✅     | -                 | 크기 (mm) |

## 사용 예제

### 기본 사용

```tsx
import { RtkClock } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkClock />;
}
```

### 재산

```tsx
import { RtkClock } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkClock
      meeting={meeting}
      size="md"
    />
  );
}
```
