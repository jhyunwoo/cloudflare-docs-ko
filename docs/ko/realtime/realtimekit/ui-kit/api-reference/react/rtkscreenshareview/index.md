---
title: RtkScreenshareView · Cloudflare 실시간 문서
description: RtkScreenshareView 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkscreenshareview/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkscreenshareview/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkscreenshareview/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkscreenshareview/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
participant의 Screenshared 비디오를 재생하는 구성 요소. 그것은 또한 다른 성분의 배치를 위해 유사한`rtk-participant-tile`. 이 성분은 participant가 screensharing를 시작하지 않는 경우에 아무것도 렌더링하지 않을 것입니다.

## 제품 정보

| 회사 정보                  | 제품정보                                                                                                 | 견적 요청 | 기본 정보             | 이름 \*        |
| ---------------------- | ---------------------------------------------------------------------------------------------------- | ----- | ----------------- | ------------ |
| `hideFullScreenButton` | `boolean`                                                                                            | ✅     | -                 | 전체 화면 버튼 숨기기 |
| `iconPack`             | `IconPack`                                                                                           | ❌     | `defaultIconPack` | Icon 팩       |
| `meeting`              | `Meeting`                                                                                            | ✅     | -                 | 회의 목표        |
| `nameTagPosition`      | `\| 'bottom-left' \| 'bottom-right' \| 'bottom-center' \| 'top-left' \| 'top-right' \| 'top-center'` | ✅     | -                 | 이름 태그의 위치    |
| `participant`          | `Peer`                                                                                               | ✅     | -                 | 부품 객체        |
| `size`                 | `Size`                                                                                               | ✅     | -                 | 크기 (mm)      |
| `t`                    | `RtkI18n`                                                                                            | ❌     | `useLanguage()`   | 한국어          |
| `variant`              | `'solid' \| 'gradient'`                                                                              | ✅     | -                 | 한국어          |

## 사용 예제

### 기본 사용

```tsx
import { RtkScreenshareView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkScreenshareView />;
}
```

### 재산

```tsx
import { RtkScreenshareView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkScreenshareView
      hideFullScreenButton={true}
      meeting={meeting}
      nameTagPosition={| 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'top-left'
    | 'top-right'
    | 'top-center'}
    />
  );
}
```
