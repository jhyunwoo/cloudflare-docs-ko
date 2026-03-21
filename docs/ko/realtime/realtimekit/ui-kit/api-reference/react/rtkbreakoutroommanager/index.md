---
title: RtkBreakoutRoomManager · Cloudflare 실시간 문서
description: RtkBreakoutRoomManager 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroommanager/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroommanager/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroommanager/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbreakoutroommanager/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보                   | 제품정보                 | 견적 요청 | 기본 정보             | 이름 \*                     |
| ----------------------- | -------------------- | ----- | ----------------- | ------------------------- |
| `allowDelete`           | `boolean`            | ✅     | -                 | 룸 삭제                      |
| `assigningParticipants` | `boolean`            | ✅     | -                 | 회원 가입                     |
| `defaultExpanded`       | `boolean`            | ✅     | -                 | 기본으로 확장된 카드               |
| `iconPack`              | `IconPack`           | ❌     | `defaultIconPack` | Icon 팩                    |
| `isDragMode`            | `boolean`            | ✅     | -                 | 드래그 모드                    |
| `meeting`               | `Meeting`            | ✅     | -                 | 회의 목표                     |
| `mode`                  | `'edit' \| 'create'` | ✅     | -                 | 어떤 selector에 있는 형태는 사용됩니다 |
| `room`                  | `DraftMeeting`       | ✅     | -                 | 연결된 객실 Config 개체          |
| `states`                | `States`             | ✅     | -                 | 미국 객체                     |
| `t`                     | `RtkI18n`            | ❌     | `useLanguage()`   | 한국어                       |

## 사용 예제

### 기본 사용

```tsx
import { RtkBreakoutRoomManager } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkBreakoutRoomManager />;
}
```

### 재산

```tsx
import { RtkBreakoutRoomManager } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkBreakoutRoomManager
      allowDelete={true}
      assigningParticipants={true}
      defaultExpanded={true}
    />
  );
}
```
