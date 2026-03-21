---
title: RtkMessageListView · Cloudflare 실시간 문서
description: RtkMessageListView 구성 요소에 대한 API reference (QXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmessagelistview/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmessagelistview/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmessagelistview/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmessagelistview/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
메시지 목록을 렌더링하는 구성 요소.

## 제품 정보

| 회사 정보               | 제품정보                                | 견적 요청 | 기본 정보             | 이름 \*                           |
| ------------------- | ----------------------------------- | ----- | ----------------- | ------------------------------- |
| `estimateItemSize`  | `number`                            | ✅     | -                 | 상품의 예상 높이                       |
| `iconPack`          | `IconPack1`                         | ❌     | `defaultIconPack` | Icon 팩                          |
| `loadMore`          | `(lastMessage: Message)`            | ✅     | -                 | 더 많은 메시지를 로드 하는 기능. 메시지가 반환됩니다. |
| `messages`          | `Message[]`                         | ✅     | -                 | 메시지 렌더링                         |
| `renderer`          | `(message: Message, index: number)` | ✅     | -                 | 메시지의 기능 렌더링                     |
| `visibleItemsCount` | `number`                            | ✅     | -                 | 최대 눈에 보이는 메시지                   |

## 사용 예제

### 기본 사용

```tsx
import { RtkMessageListView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkMessageListView />;
}
```

### 재산

```tsx
import { RtkMessageListView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkMessageListView
      estimateItemSize={42}
      loadMore={(lastmessage: message)}
      messages={[]}
    />
  );
}
```
