---
title: RtkCameraSelector · Cloudflare 실시간 문서
description: RtkCameraSelector 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcameraselector/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcameraselector/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcameraselector/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcameraselector/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
오디오 장치와 오디오 preferenceS를 관리할 수 있는 구성품. 사이트맵`rtkStateUpdate`muting 통보를 위한 자료로 사건 소리:

```ts
{
 prefs: {
   muteNotificationSounds: boolean
 }
}
```

## 제품 정보

| 회사 정보      | 제품정보                 | 견적 요청 | 기본 정보             | 이름 \*   |
| ---------- | -------------------- | ----- | ----------------- | ------- |
| `iconPack` | `IconPack`           | ❌     | `defaultIconPack` | Icon 팩  |
| `meeting`  | `Meeting`            | ✅     | -                 | 회의 목표   |
| `size`     | `Size`               | ✅     | -                 | 크기 (mm) |
| `t`        | `RtkI18n`            | ❌     | `useLanguage()`   | 한국어     |
| `variant`  | `'full' \| 'inline'` | ✅     | -                 | 기타 제품   |

## 사용 예제

### 기본 사용

```tsx
import { RtkCameraSelector } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkCameraSelector />;
}
```

### 재산

```tsx
import { RtkCameraSelector } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkCameraSelector
      meeting={meeting}
      size="md"
      variant={'full' | 'inline'}
    />
  );
}
```
