---
title: RtkParticipantSetup · Cloudflare 실시간 문서
description: RtkParticipantSetup 구성 요소에 대한 API referenceXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipantsetup/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipantsetup/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipantsetup/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkparticipantsetup/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보             | 제품정보                                                                                                 | 견적 요청 | 기본 정보                   | 이름 \*            |
| ----------------- | ---------------------------------------------------------------------------------------------------- | ----- | ----------------------- | ---------------- |
| `config`          | `UIConfig`                                                                                           | ❌     | `createDefaultConfig()` | Config 객체        |
| `iconPack`        | `IconPack`                                                                                           | ❌     | `defaultIconPack`       | Icon 팩           |
| `isPreview`       | `boolean`                                                                                            | ✅     | -                       | 타일은 미리보기에 사용됩니다. |
| `nameTagPosition` | `\| 'bottom-left' \| 'bottom-right' \| 'bottom-center' \| 'top-left' \| 'top-right' \| 'top-center'` | ✅     | -                       | 이름 태그의 위치        |
| `participant`     | `Peer`                                                                                               | ✅     | -                       | 부품 객체            |
| `size`            | `Size`                                                                                               | ✅     | -                       | 크기 (mm)          |
| `states`          | `States`                                                                                             | ✅     | -                       | 미국 객체            |
| `t`               | `RtkI18n`                                                                                            | ❌     | `useLanguage()`         | 한국어              |
| `variant`         | `'solid' \| 'gradient'`                                                                              | ✅     | -                       | 한국어              |

## 사용 예제

### 기본 사용

```tsx
import { RtkParticipantSetup } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkParticipantSetup />;
}
```

### 재산

```tsx
import { RtkParticipantSetup } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkParticipantSetup
      isPreview={true}
      nameTagPosition={| 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'top-left'
    | 'top-right'
    | 'top-center'}
      participant={participant}
    />
  );
}
```
