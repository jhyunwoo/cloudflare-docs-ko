---
title: RtkCameraToggle · Cloudflare 실시간 문서
description: RtkCameraToggle 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcameratoggle/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcameratoggle/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcameratoggle/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcameratoggle/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
카메라를 견인하는 버튼.

## 제품 정보

| 회사 정보      | 제품정보                | 견적 요청 | 기본 정보             | 이름 \*   |
| ---------- | ------------------- | ----- | ----------------- | ------- |
| `iconPack` | `IconPack`          | ❌     | `defaultIconPack` | Icon 팩  |
| `meeting`  | `Meeting`           | ✅     | -                 | 회의 목표   |
| `size`     | `Size`              | ✅     | -                 | 크기 (mm) |
| `t`        | `RtkI18n`           | ❌     | `useLanguage()`   | 한국어     |
| `variant`  | `ControlBarVariant` | ✅     | -                 | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkCameraToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkCameraToggle />;
}
```

### 재산

```tsx
import { RtkCameraToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkCameraToggle
      meeting={meeting}
      size="md"
      variant="button"
    />
  );
}
```
