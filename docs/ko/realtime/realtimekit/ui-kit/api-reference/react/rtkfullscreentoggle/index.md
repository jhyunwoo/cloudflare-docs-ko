---
title: RtkFullscreenToggle · Cloudflare 실시간 문서
description: RtkFullscreenToggle 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfullscreentoggle/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfullscreentoggle/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfullscreentoggle/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfullscreentoggle/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
모든 기존의 스크린 모드를 견인하는 버튼`rtk-meeting`DOM의 구성 요소.

## 제품 정보

| 회사 정보           | 제품정보                | 견적 요청 | 기본 정보             | 이름 \*       |
| --------------- | ------------------- | ----- | ----------------- | ----------- |
| `iconPack`      | `IconPack`          | ❌     | `defaultIconPack` | Icon 팩      |
| `size`          | `Size`              | ✅     | -                 | 크기 (mm)     |
| `states`        | `States`            | ✅     | -                 | 미국 객체       |
| `t`             | `RtkI18n`           | ❌     | `useLanguage()`   | 한국어         |
| `targetElement` | `HTMLElement`       | ✅     | -                 | 대상 요소 전체 화면 |
| `variant`       | `ControlBarVariant` | ✅     | -                 | 한국어         |

## 사용 예제

### 기본 사용

```tsx
import { RtkFullscreenToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkFullscreenToggle />;
}
```

### 재산

```tsx
import { RtkFullscreenToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkFullscreenToggle
      size="md"
      targetElement={htmlelement}
      variant="button"
    />
  );
}
```
