---
title: RtkChatComposerUi · Cloudflare 실시간 문서
description: RtkChatComposerUi 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatcomposerui/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatcomposerui/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatcomposerui/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatcomposerui/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
@deprecated 니다. 이 성분은 deprecated, rtk-chat-composer-view를 대신 사용하십시오.

## 제품 정보

| 회사 정보                | 제품정보                                                                                      | 견적 요청 | 기본 정보             | 이름 \*                    |
| -------------------- | ----------------------------------------------------------------------------------------- | ----- | ----------------- | ------------------------ |
| `canSendFiles`       | `boolean`                                                                                 | ✅     | -                 | 사용자가 파일 메시지를 보낼 수 있는지 여부 |
| `canSendTextMessage` | `boolean`                                                                                 | ✅     | -                 | 사용자가 문자 메시지를 보낼 수 있는지 여부 |
| `iconPack`           | `IconPack1`                                                                               | ❌     | `defaultIconPack` | Icon 팩                   |
| `prefill`            | `{ suggestedReplies?: string[]; editMessage?: TextMessage; replyMessage?: TextMessage; }` | ❌     | -                 | 작곡가 prefill              |
| `size`               | `Size1`                                                                                   | ✅     | -                 | 크기 (mm)                  |
| `t`                  | `RtkI18n`                                                                                 | ❌     | `useLanguage()`   | 한국어                      |

## 사용 예제

### 기본 사용

```tsx
import { RtkChatComposerUi } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkChatComposerUi />;
}
```

### 재산

```tsx
import { RtkChatComposerUi } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkChatComposerUi
      canSendFiles={true}
      canSendTextMessage={true}
      size="md"
    />
  );
}
```
