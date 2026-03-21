---
title: RtkImageMessageView · Cloudflare 실시간 문서
description: RtkImageMessageView 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkimagemessageview/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkimagemessageview/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkimagemessageview/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkimagemessageview/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
이미지 메시지를 렌더링하는 구성 요소.

## 제품 정보

| 회사 정보      | 제품정보        | 견적 요청 | 기본 정보             | 이름 \*    |
| ---------- | ----------- | ----- | ----------------- | -------- |
| `iconPack` | `IconPack1` | ❌     | `defaultIconPack` | Icon 팩   |
| `t`        | `RtkI18n1`  | ❌     | `useLanguage()`   | 한국어      |
| `url`      | `string`    | ✅     | -                 | 이미지의 Url |

## 사용 예제

### 기본 사용

```tsx
import { RtkImageMessageView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkImageMessageView />;
}
```

### 재산

```tsx
import { RtkImageMessageView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkImageMessageView
      url="example"
    />
  );
}
```
