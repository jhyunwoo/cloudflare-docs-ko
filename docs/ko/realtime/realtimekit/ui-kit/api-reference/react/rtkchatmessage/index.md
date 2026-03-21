---
title: RtkChatMessage · Cloudflare 실시간 문서
description: RtkChatMessage 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessage/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessage/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessage/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessage/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
뚱 베어`rtk-chat-message`deprecated는 곧 제거 될 것입니다. 제품 정보`rtk-message-view`대신.

## 제품 정보

| 회사 정보                  | 제품정보          | 견적 요청 | 기본 정보             | 이름 \*             |
| ---------------------- | ------------- | ----- | ----------------- | ----------------- |
| `alignRight`           | `boolean`     | ✅     | -                 | 메시지 정렬            |
| `canDelete`            | `boolean`     | ✅     | -                 | 메시지 삭제            |
| `canEdit`              | `boolean`     | ✅     | -                 | 메시지 편집            |
| `canPin`               | `boolean`     | ✅     | -                 | 이 메시지를 핀 할 수 있습니다 |
| `canReply`             | `boolean`     | ✅     | -                 | 이 메시지를 인용할 수 있습니다 |
| `child`                | `HTMLElement` | ✅     | -                 | 이름 \*             |
| `disableControls`      | `boolean`     | ✅     | -                 | disables 통제       |
| `hideAvatar`           | `boolean`     | ✅     | -                 | avatar 숨기기        |
| `iconPack`             | `IconPack1`   | ❌     | `defaultIconPack` | Icon 팩            |
| `isContinued`          | `boolean`     | ✅     | -                 | 계속하기              |
| `isSelf`               | `boolean`     | ✅     | -                 | sender는 각자입니다     |
| `isUnread`             | `boolean`     | ✅     | -                 | 읽음                |
| `leftAlign`            | `boolean`     | ✅     | -                 | 채팅 버블을 좌우하는 것     |
| `message`              | `Message`     | ✅     | -                 | 메시지 항목            |
| `senderDisplayPicture` | `string`      | ✅     | -                 | sender 전시 그림 url  |
| `size`                 | `Size`        | ✅     | -                 | 크기 (mm)           |
| `t`                    | `RtkI18n1`    | ❌     | `useLanguage()`   | 한국어               |

## 사용 예제

### 기본 사용

```tsx
import { RtkChatMessage } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkChatMessage />;
}
```

### 재산

```tsx
import { RtkChatMessage } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkChatMessage
      alignRight={true}
      canDelete={true}
      canEdit={true}
    />
  );
}
```
