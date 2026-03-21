---
title: RtkAudioGrid · Cloudflare 실시간 문서
description: RtkAudioGrid 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiogrid/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiogrid/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiogrid/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiogrid/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보      | 제품정보        | 견적 요청 | 기본 정보             | 이름 \*          |
| ---------- | ----------- | ----- | ----------------- | -------------- |
| `config`   | `UIConfig1` | ✅     | -                 | 사이트맵           |
| `hideSelf` | `boolean`   | ✅     | -                 | 그리드에서 자기를 숨길 것 |
| `iconPack` | `IconPack1` | ❌     | `defaultIconPack` | 아이콘 팩          |
| `meeting`  | `Meeting`   | ✅     | -                 | 회사연혁           |
| `size`     | `Size1`     | ✅     | -                 | 크기 (mm)        |
| `states`   | `States1`   | ✅     | -                 | 한국어            |
| `t`        | `RtkI18n1`  | ❌     | `useLanguage()`   | 한국어            |

## 사용 예제

### 기본 사용

```tsx
import { RtkAudioGrid } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkAudioGrid />;
}
```

### 재산

```tsx
import { RtkAudioGrid } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkAudioGrid
      config={defaultUiConfig}
      hideSelf={true}
      meeting={meeting}
    />
  );
}
```
