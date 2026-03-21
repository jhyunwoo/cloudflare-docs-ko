---
title: RtkParticipant · Cloudflare 실시간 문서
description: RtkParticipant 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipant/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipant/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipant/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipant/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
내부에 사용된 participant 입장 성분`rtk-participants`다음과 같은 데이터를 보여줍니다 : 이름, 그림 및 미디어 장치 상태. 참가자에게 특권을 부여 할 수 있습니다.

## 제품 정보

| 회사 정보         | 제품정보                  | 견적 요청 | 기본 정보                   | 이름 \*     |
| ------------- | --------------------- | ----- | ----------------------- | --------- |
| `config`      | `UIConfig1`           | ❌     | `createDefaultConfig()` | Config 객체 |
| `iconPack`    | `IconPack`            | ❌     | `defaultIconPack`       | Icon 팩    |
| `meeting`     | `Meeting`             | ✅     | -                       | 회의 목표     |
| `participant` | `Peer`                | ✅     | -                       | 부품 객체     |
| `states`      | `States1`             | ✅     | -                       | 한국어       |
| `t`           | `RtkI18n`             | ❌     | `useLanguage()`         | 한국어       |
| `view`        | `ParticipantViewMode` | ✅     | -                       | 참가자 요약보기  |

## 사용 예제

### 기본 사용

```tsx
import { RtkParticipant } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkParticipant />;
}
```

### 재산

```tsx
import { RtkParticipant } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkParticipant
      meeting={meeting}
      participant={participant}
      view={participantviewmode}
    />
  );
}
```
