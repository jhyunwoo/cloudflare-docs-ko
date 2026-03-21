---
title: RtkPipToggle · Cloudflare 실시간 문서
description: RtkPipToggle 구성 요소에 대한 API referenceXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpiptoggle/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpiptoggle/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpiptoggle/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpiptoggle/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보      | 제품정보                | 견적 요청 | 기본 정보                   | 이름 \*   |
| ---------- | ------------------- | ----- | ----------------------- | ------- |
| `config`   | `UIConfig1`         | ❌     | `createDefaultConfig()` | 사이트맵    |
| `iconPack` | `IconPack1`         | ❌     | `defaultIconPack`       | Icon 팩  |
| `meeting`  | `Meeting`           | ✅     | -                       | 회의 목표   |
| `size`     | `Size1`             | ✅     | -                       | 크기 (mm) |
| `states`   | `States1`           | ✅     | -                       | 미국 객체   |
| `t`        | `RtkI18n`           | ❌     | `useLanguage()`         | 한국어     |
| `variant`  | `ControlBarVariant` | ✅     | -                       | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkPipToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkPipToggle />;
}
```

### 재산

```tsx
import { RtkPipToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkPipToggle
      meeting={meeting}
      size="md"
      variant="button"
    />
  );
}
```
