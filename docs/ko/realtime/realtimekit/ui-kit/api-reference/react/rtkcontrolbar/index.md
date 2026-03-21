---
title: RtkControlbar · Cloudflare 실시간 문서
description: RtkControlbar 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcontrolbar/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcontrolbar/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcontrolbar/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcontrolbar/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
Controlbar 구성 요소는 다양한 디자인과 변형을 제공합니다.

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
import { RtkControlbar } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkControlbar />;
}
```

### 재산

```tsx
import { RtkControlbar } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkControlbar
      disableRender={true}
      meeting={meeting}
      size="md"
    />
  );
}
```
