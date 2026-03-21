---
title: RtkPlugins · Cloudflare 실시간 문서
description: RtkPlugins 구성 요소에 대한 API referenceXQ (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkplugins/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkplugins/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkplugins/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkplugins/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
사전 설정에서 모든 사용 가능한 플러그인을 나열하고 플러그인을 활성화하거나 비활성화 할 수있는 기능.

## 제품 정보

| 회사 정보      | 제품정보       | 견적 요청 | 기본 정보                   | 이름 \*   |
| ---------- | ---------- | ----- | ----------------------- | ------- |
| `config`   | `UIConfig` | ❌     | `createDefaultConfig()` | 사이트맵    |
| `iconPack` | `IconPack` | ❌     | `defaultIconPack`       | Icon 팩  |
| `meeting`  | `Meeting`  | ✅     | -                       | 회의 목표   |
| `size`     | `Size`     | ✅     | -                       | 크기 (mm) |
| `t`        | `RtkI18n`  | ❌     | `useLanguage()`         | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkPlugins } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkPlugins />;
}
```

### 재산

```tsx
import { RtkPlugins } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkPlugins
      meeting={meeting}
      size="md"
    />
  );
}
```
