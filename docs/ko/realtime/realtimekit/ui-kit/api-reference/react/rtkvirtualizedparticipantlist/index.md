---
title: RtkVirtualizedParticipantList · Cloudflare 실시간 문서
description: RtkVirtualizedParticipantList 구성 요소에 대한 API referenceXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkvirtualizedparticipantlist/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkvirtualizedparticipantlist/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkvirtualizedparticipantlist/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkvirtualizedparticipantlist/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보                | 제품정보                           | 견적 요청 | 기본 정보 | 이름 \*                   |
| -------------------- | ------------------------------ | ----- | ----- | ----------------------- |
| `bufferedItemsCount` | `number`                       | ✅     | -     | 버퍼 아이템은 눈에 보이는 영역 후 렌더링 |
| `emptyListElement`   | `HTMLElement`                  | ✅     | -     | 렌더링 하는 요소 목록 빈          |
| `itemHeight`         | `number`                       | ✅     | -     | 픽셀의 각 항목의 높이 (조정)       |
| `items`              | `Peer1[]`                      | ✅     | -     | 가상화되는 항목                |
| `renderItem`         | `(item: Peer1, index: number)` | ✅     | -     | 각 항목을 렌더링하는 기능          |

## 사용 예제

### 기본 사용

```tsx
import { RtkVirtualizedParticipantList } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkVirtualizedParticipantList />;
}
```

### 재산

```tsx
import { RtkVirtualizedParticipantList } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkVirtualizedParticipantList
      bufferedItemsCount={42}
      emptyListElement={htmlelement}
      itemHeight={42}
    />
  );
}
```
