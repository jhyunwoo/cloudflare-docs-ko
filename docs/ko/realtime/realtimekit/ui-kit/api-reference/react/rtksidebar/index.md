---
title: RtkSidebar · Cloudflare 실시간 문서
description: RtkSidebar 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksidebar/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksidebar/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksidebar/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksidebar/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
사이드바를 처리하는 구성 요소와 당신이 원하는 섹션을 사용자 정의 할 수 있습니다, 그리고 기본으로 원하는 섹션.

## 제품 정보

| 회사 정보             | 제품정보                | 견적 요청 | 기본 정보                   | 이름 \*               |
| ----------------- | ------------------- | ----- | ----------------------- | ------------------- |
| `config`          | `UIConfig`          | ❌     | `createDefaultConfig()` | 사이트맵                |
| `defaultSection`  | `RtkSidebarSection` | ✅     | -                       | 기본 섹션               |
| `enabledSections` | `RtkSidebarTab[]`   | ✅     | -                       | sidebar의 Enabled 섹션 |
| `iconPack`        | `IconPack`          | ❌     | `defaultIconPack`       | Icon 팩              |
| `meeting`         | `Meeting`           | ✅     | -                       | 회의 목표               |
| `size`            | `Size`              | ✅     | -                       | 크기 (mm)             |
| `states`          | `States`            | ✅     | -                       | 미국 객체               |
| `t`               | `RtkI18n`           | ❌     | `useLanguage()`         | 한국어                 |
| `view`            | `RtkSidebarView`    | ✅     | -                       | 보기 유형               |

## 사용 예제

### 기본 사용

```tsx
import { RtkSidebar } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkSidebar />;
}
```

### 재산

```tsx
import { RtkSidebar } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkSidebar
      defaultSection={rtksidebarsection}
      enabledSections={[]}
      meeting={meeting}
    />
  );
}
```
