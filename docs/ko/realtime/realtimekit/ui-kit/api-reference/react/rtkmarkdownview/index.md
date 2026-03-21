---
title: RtkMarkdownView · Cloudflare 실시간 문서
description: RtkMarkdownView 구성 요소에 대한 API referenceXQ (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmarkdownview/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmarkdownview/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmarkdownview/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmarkdownview/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보       | 제품정보     | 견적 요청 | 기본 정보 | 이름 \*                      |
| ----------- | -------- | ----- | ----- | -------------------------- |
| `maxLength` | `number` | ✅     | -     | markdown로 렌더링 할 텍스트의 최대 길이 |
| `text`      | `string` | ✅     | -     | Markdown으로 렌더링 할 수있는 원본    |

## 사용 예제

### 기본 사용

```tsx
import { RtkMarkdownView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkMarkdownView />;
}
```

### 재산

```tsx
import { RtkMarkdownView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkMarkdownView
      maxLength={42}
      text="example"
    />
  );
}
```
