---
title: RtkNetworkIndicator · Cloudflare 실시간 문서
description: RtkNetworkIndicator 구성 요소에 대 한 API referenceXQ (QXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknetworkindicator/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknetworkindicator/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknetworkindicator/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknetworkindicator/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보           | 제품정보        | 견적 요청 | 기본 정보             | 이름 \*            |
| --------------- | ----------- | ----- | ----------------- | ---------------- |
| `iconPack`      | `IconPack1` | ❌     | `defaultIconPack` | Icon 팩           |
| `isScreenShare` | `boolean`   | ✅     | -                 | Screenshare에 대 한 |
| `meeting`       | `Meeting`   | ✅     | -                 | 회사연혁             |
| `participant`   | `Peer`      | ✅     | -                 | 참가자 또는 자기        |
| `t`             | `RtkI18n1`  | ❌     | `useLanguage()`   | 한국어              |

## 사용 예제

### 기본 사용

```tsx
import { RtkNetworkIndicator } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkNetworkIndicator />;
}
```

### 재산

```tsx
import { RtkNetworkIndicator } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkNetworkIndicator
      isScreenShare={true}
      meeting={meeting}
      participant={participant}
    />
  );
}
```
