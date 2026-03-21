---
title: RtkBreakoutRoomParticipants · Cloudflare 실시간 문서
description: API reference RtkBreakoutRoomParticipants 구성 요소 (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroomparticipants/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroomparticipants/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroomparticipants/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroomparticipants/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
모든 참가자를 나열하는 구성 요소는 허가에 따라 각 참가자의 권한 작업을 실행할 수 있습니다.

## 제품 정보

| 회사 정보                    | 제품정보       | 견적 요청 | 기본 정보             | 이름 \*   |
| ------------------------ | ---------- | ----- | ----------------- | ------- |
| `iconPack`               | `IconPack` | ❌     | `defaultIconPack` | Icon 팩  |
| `meeting`                | `Meeting`  | ✅     | -                 | 회의 목표   |
| `participantIds`         | `string[]` | ✅     | -                 | 참가자 ids |
| `selectedParticipantIds` | `string[]` | ✅     | -                 | 선택된 참가자 |
| `t`                      | `RtkI18n`  | ❌     | `useLanguage()`   | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkBreakoutRoomParticipants } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkBreakoutRoomParticipants />;
}
```

### 재산

```tsx
import { RtkBreakoutRoomParticipants } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkBreakoutRoomParticipants
      meeting={meeting}
      participantIds="example"
      selectedParticipantIds="example"
    />
  );
}
```
