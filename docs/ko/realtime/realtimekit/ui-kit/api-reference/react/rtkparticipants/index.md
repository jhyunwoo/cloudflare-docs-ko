---
title: RtkParticipants · Cloudflare 실시간 문서
description: RtkParticipants 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipants/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipants/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipants/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipants/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
모든 참가자를 나열하는 구성 요소는 허가에 따라 각 참가자의 권한 작업을 실행할 수 있습니다.

## 제품 정보

| 회사 정보                      | 제품정보                | 견적 요청 | 기본 정보                   | 이름 \*   |
| -------------------------- | ------------------- | ----- | ----------------------- | ------- |
| `config`                   | `UIConfig`          | ❌     | `createDefaultConfig()` | 사이트맵    |
| `defaultParticipantsTabId` | `ParticipantsTabId` | ✅     | -                       | 기본 섹션   |
| `iconPack`                 | `IconPack`          | ❌     | `defaultIconPack`       | Icon 팩  |
| `meeting`                  | `Meeting`           | ✅     | -                       | 회의 목표   |
| `size`                     | `Size`              | ✅     | -                       | 크기 (mm) |
| `states`                   | `States`            | ✅     | -                       | 미국 객체   |
| `t`                        | `RtkI18n`           | ❌     | `useLanguage()`         | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkParticipants } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkParticipants />;
}
```

### 재산

```tsx
import { RtkParticipants } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkParticipants
      defaultParticipantsTabId={participantstabid}
      meeting={meeting}
      size="md"
    />
  );
}
```
