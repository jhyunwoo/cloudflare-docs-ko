---
title: RtkBreakoutRoomsToggle · Cloudflare 실시간 문서
description: API reference RtkBreakoutRoomsToggle 구성 요소 (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroomstoggle/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroomstoggle/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroomstoggle/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroomstoggle/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
방재의 가시성을 견인하는 단추. 당신은 통과해야합니다`meeting`그것에 객체.

## 제품 정보

| 회사 정보      | 제품정보                | 견적 요청 | 기본 정보 | 이름 \*   |
| ---------- | ------------------- | ----- | ----- | ------- |
| `iconPack` | `IconPack`          | ✅     | -     | Icon 팩  |
| `meeting`  | `Meeting`           | ✅     | -     | 회의 목표   |
| `size`     | `Size`              | ✅     | -     | 크기 (mm) |
| `states`   | `States`            | ✅     | -     | 미국 객체   |
| `t`        | `RtkI18n`           | ✅     | -     | 한국어     |
| `variant`  | `ControlBarVariant` | ✅     | -     | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkBreakoutRoomsToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkBreakoutRoomsToggle />;
}
```

### 재산

```tsx
import { RtkBreakoutRoomsToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkBreakoutRoomsToggle
      iconPack={defaultIconPack}
      meeting={meeting}
      size="md"
    />
  );
}
```
