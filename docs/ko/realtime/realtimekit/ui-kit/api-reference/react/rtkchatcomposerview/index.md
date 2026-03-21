---
title: RtkChatComposerView · Cloudflare 실시간 문서
description: RtkChatComposerView 구성 요소에 대한 API referenceXQXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatcomposerview/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatcomposerview/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatcomposerview/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatcomposerview/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
채팅 작곡가를 렌더링하는 구성 요소

## 제품 정보

| 회사 정보                  | 제품정보                                          | 견적 요청 | 기본 정보             | 이름 \*                    |
| ---------------------- | --------------------------------------------- | ----- | ----------------- | ------------------------ |
| `canSendFiles`         | `boolean`                                     | ✅     | -                 | 사용자가 파일 메시지를 보낼 수 있는지 여부 |
| `canSendTextMessage`   | `boolean`                                     | ✅     | -                 | 사용자가 문자 메시지를 보낼 수 있는지 여부 |
| `iconPack`             | `IconPack1`                                   | ❌     | `defaultIconPack` | Icon 팩                   |
| `inputTextPlaceholder` | `string`                                      | ✅     | -                 | 본문 바로가기                  |
| `isEditing`            | `boolean`                                     | ✅     | -                 | 모드를 편집하는 작곡가 설정          |
| `maxLength`            | `number`                                      | ✅     | -                 | 텍스트 입력을위한 최대 길이          |
| `message`              | `string`                                      | ✅     | -                 | 사전 판매되는 메시지              |
| `quotedMessage`        | `string`                                      | ✅     | -                 | 본문 바로가기                  |
| `rateLimits`           | `{ period: number; maxInvocations: number; }` | ✅     | -                 | 비율 제한                    |
| `storageKey`           | `string`                                      | ✅     | -                 | localStorage 메시지 저장      |
| `t`                    | `RtkI18n1`                                    | ❌     | `useLanguage()`   | 한국어                      |

## 사용 예제

### 기본 사용

```tsx
import { RtkChatComposerView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkChatComposerView />;
}
```

### 재산

```tsx
import { RtkChatComposerView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkChatComposerView
      canSendFiles={true}
      canSendTextMessage={true}
      inputTextPlaceholder="example"
    />
  );
}
```
