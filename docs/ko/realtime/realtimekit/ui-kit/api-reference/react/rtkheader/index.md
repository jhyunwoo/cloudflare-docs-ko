---
title: RtkHeader · Cloudflare 실시간 문서
description: RtkHeader 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkheader/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkheader/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkheader/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkheader/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
모든 헤더 구성 요소가 있습니다.

## 제품 정보

| 회사 정보           | 제품정보                 | 견적 요청 | 기본 정보                   | 이름 \*          |
| --------------- | -------------------- | ----- | ----------------------- | -------------- |
| `config`        | `UIConfig1`          | ❌     | `createDefaultConfig()` | 사이트맵           |
| `disableRender` | `boolean`            | ✅     | -                       | 기본 UI를 렌더링하는 것 |
| `iconPack`      | `IconPack1`          | ❌     | `defaultIconPack`       | 아이콘 팩          |
| `meeting`       | `Meeting`            | ✅     | -                       | 회사연혁           |
| `size`          | `Size`               | ✅     | -                       | 크기 (mm)        |
| `states`        | `States`             | ✅     | -                       | 한국어            |
| `t`             | `RtkI18n`            | ❌     | `useLanguage()`         | 한국어            |
| `variant`       | `'solid' \| 'boxed'` | ✅     | -                       | 한국어            |

## 사용 예제

### 기본 사용

```tsx
import { RtkHeader } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkHeader />;
}
```

### 재산

```tsx
import { RtkHeader } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkHeader
      disableRender={true}
      meeting={meeting}
      size="md"
    />
  );
}
```
