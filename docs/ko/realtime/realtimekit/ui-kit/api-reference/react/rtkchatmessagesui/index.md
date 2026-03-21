---
title: RtkChatMessagesUi · Cloudflare 실시간 문서
description: RtkChatMessagesUi 구성 요소에 대한 API referenceXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessagesui/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessagesui/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessagesui/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessagesui/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
@deprecated 사용`rtk-chat-messages-ui-paginated`대신.

## 제품 정보

| 회사 정보            | 제품정보        | 견적 요청 | 기본 정보             | 이름 \*              |
| ---------------- | ----------- | ----- | ----------------- | ------------------ |
| `canPinMessages` | `boolean`   | ✅     | -                 | 현재 사용자 핀/unpin 메시지 |
| `iconPack`       | `IconPack1` | ❌     | `defaultIconPack` | Icon 팩             |
| `messages`       | `Chat[]`    | ✅     | -                 | 채팅 메시지             |
| `selectedGroup`  | `string`    | ✅     | -                 | 선택한 그룹 키           |
| `selfUserId`     | `string`    | ✅     | -                 | 사용자 ID             |
| `size`           | `Size1`     | ✅     | -                 | 크기 (mm)            |
| `t`              | `RtkI18n`   | ❌     | `useLanguage()`   | 한국어                |

## 사용 예제

### 기본 사용

```tsx
import { RtkChatMessagesUi } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkChatMessagesUi />;
}
```

### 재산

```tsx
import { RtkChatMessagesUi } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkChatMessagesUi
      canPinMessages={true}
      messages={[]}
      selectedGroup="example"
    />
  );
}
```
