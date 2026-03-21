---
title: · Cloudflare 실시간 문서
description: RtkMenu 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmenu/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmenu/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmenu/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmenu/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
메뉴 구성 요소.

## 제품 정보

| 회사 정보       | 제품정보        | 견적 요청 | 기본 정보             | 이름 \*   |
| ----------- | ----------- | ----- | ----------------- | ------- |
| `iconPack`  | `IconPack`  | ❌     | `defaultIconPack` | Icon 팩  |
| `offset`    | `number`    | ✅     | -                 | px의 오프셋 |
| `placement` | `Placement` | ✅     | -                 | 메뉴의 배치  |
| `size`      | `Size`      | ✅     | -                 | 크기 (mm) |
| `t`         | `RtkI18n`   | ❌     | `useLanguage()`   | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkMenu } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkMenu />;
}
```

### 재산

```tsx
import { RtkMenu } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkMenu
      offset={42}
      placement={placement}
      size="md"
    />
  );
}
```
