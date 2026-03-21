---
title: RtkGrid · Cloudflare 실시간 문서
description: RtkGrid 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkgrid/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkgrid/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkgrid/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkgrid/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
모든 그리드 처리 논리를 요약하고 당신을 위해 렌더링하는 주요 그리드 구성 요소.

## 제품 정보

| 회사 정보         | 제품정보         | 견적 요청 | 기본 정보                   | 이름 \*        |
| ------------- | ------------ | ----- | ----------------------- | ------------ |
| `aspectRatio` | `string`     | ✅     | -                       | 각 참가자의 측면 비율 |
| `config`      | `UIConfig`   | ❌     | `createDefaultConfig()` | Config 객체    |
| `gap`         | `number`     | ✅     | -                       | 참가자들         |
| `gridSize`    | `GridSize`   | ✅     | -                       | 격자 크기        |
| `iconPack`    | `IconPack`   | ❌     | `defaultIconPack`       | Icon 팩       |
| `layout`      | `GridLayout` | ✅     | -                       | 격자 배치        |
| `meeting`     | `Meeting`    | ✅     | -                       | 회의 목표        |
| `overrides`   | `any`        | ✅     | -                       | 뚱 베어         |
| `size`        | `Size`       | ✅     | -                       | 크기 (mm)      |
| `states`      | `States`     | ✅     | -                       | 한국어          |
| `t`           | `RtkI18n`    | ❌     | `useLanguage()`         | 한국어          |

## 사용 예제

### 기본 사용

```tsx
import { RtkGrid } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkGrid />;
}
```

### 재산

```tsx
import { RtkGrid } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkGrid
      aspectRatio="example"
      gap={42}
      gridSize="md"
    />
  );
}
```
