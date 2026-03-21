---
title: RtkMessageView · Cloudflare 실시간 문서
description: RtkMessageView 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmessageview/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmessageview/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmessageview/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmessageview/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보            | 제품정보                       | 견적 요청 | 기본 정보             | 이름 \*              |
| ---------------- | -------------------------- | ----- | ----------------- | ------------------ |
| `actions`        | `MessageAction[]`          | ✅     | -                 | 본문 바로가기            |
| `authorName`     | `string`                   | ✅     | -                 | 저자 디스플레이 라벨        |
| `avatarUrl`      | `string`                   | ✅     | -                 | Avatar 이미지 URL     |
| `hideAuthorName` | `boolean`                  | ✅     | -                 | Hides 저자 디스플레이 라벨  |
| `hideAvatar`     | `boolean`                  | ✅     | -                 | avatar 숨기기         |
| `hideMetadata`   | `boolean`                  | ✅     | -                 | 메타데이터 숨기기 (time)   |
| `iconPack`       | `IconPack1`                | ❌     | `defaultIconPack` | Icon 팩             |
| `isEdited`       | `boolean`                  | ✅     | -                 | 메시지가 편집되었습니다.      |
| `isSelf`         | `boolean`                  | ✅     | -                 | 현재 사용자가 보낸 메시지입니다. |
| `messageType`    | `Message['type']`          | ✅     | -                 | 이름 \*              |
| `pinned`         | `boolean`                  | ✅     | -                 | 메시지 핀              |
| `time`           | `Date`                     | ✅     | -                 | 메시지가 전송되었을 때       |
| `variant`        | `'plain' \| 'bubble'`      | ✅     | -                 | 이름 \*              |
| `viewType`       | `'incoming' \| 'outgoing'` | ✅     | -                 | 이름 \*              |

## 사용 예제

### 기본 사용

```tsx
import { RtkMessageView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkMessageView />;
}
```

### 재산

```tsx
import { RtkMessageView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkMessageView
      actions={[]}
      authorName="example"
      avatarUrl="example"
    />
  );
}
```
