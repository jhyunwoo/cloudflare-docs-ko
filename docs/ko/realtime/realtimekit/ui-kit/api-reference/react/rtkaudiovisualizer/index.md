---
title: RtkAudioVisualizer · Cloudflare 실시간 문서
description: RtkAudioVisualizer 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiovisualizer/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiovisualizer/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiovisualizer/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkaudiovisualizer/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
참가자 오디오를 시각화하는 오디오 시각화기 구성 요소. 일반적으로 내부에 사용`rtk-name-tag`.

## 제품 정보

| 회사 정보           | 제품정보                     | 견적 요청 | 기본 정보             | 이름 \*                                                                         |
| --------------- | ------------------------ | ----- | ----------------- | ----------------------------------------------------------------------------- |
| `hideMuted`     | `boolean`                | ✅     | -                 | 오디오가 뮤트인 경우 시각화기를 숨기기                                                         |
| `iconPack`      | `IconPack`               | ❌     | `defaultIconPack` | Icon 팩                                                                        |
| `isScreenShare` | `boolean`                | ✅     | -                 | Screensharing에 대한 오디오 시각화, 그것은 ScreenShareTracks를 사용할 것입니다. 오디오 대신 audioTrack |
| `participant`   | `Peer`                   | ✅     | -                 | 부품 객체                                                                         |
| `size`          | `Size`                   | ✅     | -                 | 크기 (mm)                                                                       |
| `t`             | `RtkI18n`                | ❌     | `useLanguage()`   | 한국어                                                                           |
| `variant`       | `AudioVisualizerVariant` | ✅     | -                 | 한국어                                                                           |

## 사용 예제

### 기본 사용

```tsx
import { RtkAudioVisualizer } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkAudioVisualizer />;
}
```

### 재산

```tsx
import { RtkAudioVisualizer } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkAudioVisualizer
      hideMuted={true}
      isScreenShare={true}
      participant={participant}
    />
  );
}
```
