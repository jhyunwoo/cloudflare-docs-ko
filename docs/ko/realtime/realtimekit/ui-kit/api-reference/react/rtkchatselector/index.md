---
title: RtkChatSelector · Cloudflare 실시간 문서
description: RtkChatSelector 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatselector/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatselector/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatselector/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatselector/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보       | 제품정보         | 견적 요청 | 기본 정보                   | 이름 \*    |
| ----------- | ------------ | ----- | ----------------------- | -------- |
| `config`    | `UIConfig1`  | ❌     | `createDefaultConfig()` | 사이트맵     |
| `iconPack`  | `IconPack`   | ❌     | `defaultIconPack`       | Icon 팩   |
| `meeting`   | `Meeting`    | ✅     | -                       | 회의 목표    |
| `overrides` | `Overrides1` | ❌     | `defaultOverrides`      | UI 오버라이드 |
| `size`      | `Size`       | ✅     | -                       | 크기 (mm)  |
| `states`    | `States1`    | ✅     | -                       | 미국 객체    |
| `t`         | `RtkI18n`    | ❌     | `useLanguage()`         | 한국어      |

## 사용 예제

### 기본 사용

```tsx
import { RtkChatSelector } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkChatSelector />;
}
```

### 재산

```tsx
import { RtkChatSelector } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkChatSelector
      meeting={meeting}
      size="md"
    />
  );
}
```
