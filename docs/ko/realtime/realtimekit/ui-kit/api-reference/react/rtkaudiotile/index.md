---
title: RtkAudioTile · Cloudflare 실시간 문서
description: RtkAudioTile 구성 요소에 대한 API referenceXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiotile/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiotile/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiotile/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiotile/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보         | 제품정보        | 견적 요청 | 기본 정보             | 이름 \*   |
| ------------- | ----------- | ----- | ----------------- | ------- |
| `config`      | `UIConfig`  | ✅     | -                 | 사이트맵    |
| `iconPack`    | `IconPack1` | ❌     | `defaultIconPack` | Icon 팩  |
| `meeting`     | `Meeting`   | ✅     | -                 | 회사연혁    |
| `participant` | `Peer`      | ✅     | -                 | 부품 객체   |
| `size`        | `Size`      | ✅     | -                 | 크기 (mm) |
| `states`      | `States1`   | ✅     | -                 | 한국어     |
| `t`           | `RtkI18n1`  | ❌     | `useLanguage()`   | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkAudioTile } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkAudioTile />;
}
```

### 재산

```tsx
import { RtkAudioTile } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkAudioTile
      config={defaultUiConfig}
      meeting={meeting}
      participant={participant}
    />
  );
}
```
