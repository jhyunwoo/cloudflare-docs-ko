---
title: RtkSettings비디오 · Cloudflare 실시간 문서
description: RtkSettingsVideo 분대를 위한 API reference (React 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksettingsvideo/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksettingsvideo/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksettingsvideo/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksettingsvideo/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
카메라 장치 및 비디오 preferenceS를 관리 할 수있는 구성 요소. 사이트맵`rtkStateUpdate`자기 비디오의 toggling 미러링을위한 데이터가있는 이벤트 :

```ts
{
 prefs: {
   mirrorVideo: boolean
 }
}
```

## 제품 정보

| 회사 정보      | 제품정보       | 견적 요청 | 기본 정보             | 이름 \*   |
| ---------- | ---------- | ----- | ----------------- | ------- |
| `iconPack` | `IconPack` | ❌     | `defaultIconPack` | Icon 팩  |
| `meeting`  | `Meeting`  | ✅     | -                 | 회의 목표   |
| `size`     | `Size`     | ✅     | -                 | 크기 (mm) |
| `states`   | `States`   | ✅     | -                 | 미국 객체   |
| `t`        | `RtkI18n`  | ❌     | `useLanguage()`   | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkSettingsVideo } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkSettingsVideo />;
}
```

### 재산

```tsx
import { RtkSettingsVideo } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkSettingsVideo
      meeting={meeting}
      size="md"
    />
  );
}
```
