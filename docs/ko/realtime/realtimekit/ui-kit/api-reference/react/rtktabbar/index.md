---
title: RtkTabBar · Cloudflare 실시간 문서
description: RtkTabBar 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktabbar/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktabbar/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktabbar/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktabbar/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보       | 제품정보          | 견적 요청 | 기본 정보                   | 이름 \*    |
| ----------- | ------------- | ----- | ----------------------- | -------- |
| `activeTab` | `Tab`         | ✅     | -                       | Active 탭 |
| `config`    | `UIConfig`    | ❌     | `createDefaultConfig()` | UI 구성    |
| `iconPack`  | `IconPack`    | ❌     | `defaultIconPack`       | 아이콘 팩    |
| `layout`    | `GridLayout1` | ✅     | -                       | 격자 배치    |
| `meeting`   | `Meeting`     | ✅     | -                       | 회의 목표    |
| `size`      | `Size`        | ✅     | -                       | 크기 (mm)  |
| `states`    | `States`      | ✅     | -                       | 미국 객체    |
| `t`         | `RtkI18n`     | ❌     | `useLanguage()`         | 한국어      |
| `tabs`      | `Tab[]`       | ✅     | -                       | 탭        |

## 사용 예제

### 기본 사용

```tsx
import { RtkTabBar } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkTabBar />;
}
```

### 재산

```tsx
import { RtkTabBar } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkTabBar
      activeTab={tab}
      layout={gridlayout1}
      meeting={meeting}
    />
  );
}
```
