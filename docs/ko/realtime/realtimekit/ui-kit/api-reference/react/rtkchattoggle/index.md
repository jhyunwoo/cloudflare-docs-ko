---
title: · Cloudflare 실시간 문서
description: RtkChatToggle 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchattoggle/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchattoggle/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchattoggle/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchattoggle/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
채팅의 가시성을 견인하는 버튼. 당신은 통과해야합니다`meeting`읽지 않은 메시지 수 배지를 볼 수 있는 객체. 클릭할 때`rtkStateUpdate`데이터가있는 이벤트 :

```ts
{ activeSidebar: boolean; sidebar: 'chat' }
```

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
import { RtkChatToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkChatToggle />;
}
```

### 재산

```tsx
import { RtkChatToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkChatToggle
      meeting={meeting}
      size="md"
      variant="button"
    />
  );
}
```
