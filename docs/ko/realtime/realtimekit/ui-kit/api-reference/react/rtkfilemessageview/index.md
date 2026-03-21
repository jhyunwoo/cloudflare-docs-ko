---
title: RtkFileMessageView · Cloudflare 실시간 문서
description: RtkFileMessageView 구성 요소에 대한 API reference (React 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfilemessageview/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfilemessageview/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfilemessageview/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfilemessageview/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
파일 메시지를 렌더링하는 구성 요소.

## 제품 정보

| 회사 정보      | 제품정보        | 견적 요청 | 기본 정보             | 이름 \*   |
| ---------- | ----------- | ----- | ----------------- | ------- |
| `iconPack` | `IconPack1` | ❌     | `defaultIconPack` | Icon 팩  |
| `name`     | `string`    | ✅     | -                 | 파일 이름   |
| `size`     | `number`    | ✅     | -                 | 파일 크기   |
| `url`      | `string`    | ✅     | -                 | 파일의 Url |

## 사용 예제

### 기본 사용

```tsx
import { RtkFileMessageView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkFileMessageView />;
}
```

### 재산

```tsx
import { RtkFileMessageView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkFileMessageView
      name="example"
      size={42}
      url="example"
    />
  );
}
```
