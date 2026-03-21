---
title: RtkParticipantsStageList · Cloudflare 실시간 문서
description: RtkParticipantsStageList 구성 요소에 대한 API referenceXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipantsstagelist/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipantsstagelist/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipantsstagelist/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipantsstagelist/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
모든 참가자를 나열하는 구성 요소는 허가에 따라 각 참가자의 권한 작업을 실행할 수 있습니다.

## 제품 정보

| 회사 정보        | 제품정보                   | 견적 요청 | 기본 정보                   | 이름 \*                 |
| ------------ | ---------------------- | ----- | ----------------------- | --------------------- |
| `config`     | `UIConfig`             | ❌     | `createDefaultConfig()` | 사이트맵                  |
| `hideHeader` | `boolean`              | ✅     | -                       | Hide Stage 참가자 카운트 헤더 |
| `iconPack`   | `IconPack`             | ❌     | `defaultIconPack`       | Icon 팩                |
| `meeting`    | `Meeting`              | ✅     | -                       | 회의 목표                 |
| `search`     | `string`               | ✅     | -                       | 이름 \*                 |
| `size`       | `Size`                 | ✅     | -                       | 크기 (mm)               |
| `states`     | `States1`              | ✅     | -                       | 회의 목표                 |
| `t`          | `RtkI18n`              | ❌     | `useLanguage()`         | 한국어                   |
| `view`       | `ParticipantsViewMode` | ✅     | -                       | 참가자 목록 보기             |

## 사용 예제

### 기본 사용

```tsx
import { RtkParticipantsStageList } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkParticipantsStageList />;
}
```

### 재산

```tsx
import { RtkParticipantsStageList } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkParticipantsStageList
      hideHeader={true}
      meeting={meeting}
      search="example"
    />
  );
}
```
