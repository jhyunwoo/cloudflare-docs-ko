---
title: RtkScreenShareToggle · Cloudflare 실시간 문서
description: RtkScreenShareToggle 구성 요소에 대한 API referenceXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkscreensharetoggle/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkscreensharetoggle/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkscreensharetoggle/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkscreensharetoggle/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
스크린 공유를 견인하는 버튼.

## 제품 정보

| 회사 정보      | 제품정보                | 견적 요청 | 기본 정보             | 이름 \*   |
| ---------- | ------------------- | ----- | ----------------- | ------- |
| `iconPack` | `IconPack`          | ❌     | `defaultIconPack` | Icon 팩  |
| `meeting`  | `Meeting`           | ✅     | -                 | 회의 목표   |
| `size`     | `Size`              | ✅     | -                 | 크기 (mm) |
| `states`   | `States`            | ✅     | -                 | 미국 객체   |
| `t`        | `RtkI18n`           | ❌     | `useLanguage()`   | 한국어     |
| `variant`  | `ControlBarVariant` | ✅     | -                 | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkScreenShareToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkScreenShareToggle />;
}
```

### 재산

```tsx
import { RtkScreenShareToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkScreenShareToggle
      meeting={meeting}
      size="md"
      variant="button"
    />
  );
}
```
