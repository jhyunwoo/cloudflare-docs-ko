---
title: RtkChatMessagesUiPaginated · Cloudflare 실시간 문서
description: RtkChatMessagesUiPaginated 구성 요소 (React 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessagesuipaginated/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessagesuipaginated/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessagesuipaginated/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatmessagesuipaginated/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보                  | 제품정보                  | 견적 요청 | 기본 정보             | 이름 \*                                                     |
| ---------------------- | --------------------- | ----- | ----------------- | --------------------------------------------------------- |
| `iconPack`             | `IconPack`            | ❌     | `defaultIconPack` | Icon 팩                                                    |
| `meeting`              | `Meeting`             | ✅     | -                 | 회의 목표                                                     |
| `privateChatRecipient` | `Participant \| null` | ✅     | -                 | 개인 채팅을위한 선택한 수신자; unset 할 때, 메시지는 공개 채팅 (Everyone)에로드됩니다. |
| `size`                 | `Size`                | ✅     | -                 | 크기 (mm)                                                   |
| `t`                    | `RtkI18n`             | ❌     | `useLanguage()`   | 한국어                                                       |

## 사용 예제

### 기본 사용

```tsx
import { RtkChatMessagesUiPaginated } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkChatMessagesUiPaginated />;
}
```

### 재산

```tsx
import { RtkChatMessagesUiPaginated } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkChatMessagesUiPaginated
      meeting={meeting}
      privateChatRecipient={participant | null}
      size="md"
    />
  );
}
```
