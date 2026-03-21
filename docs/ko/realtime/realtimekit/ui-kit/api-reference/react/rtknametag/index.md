---
title: RtkName태그 · Cloudflare 실시간 문서
description: RtkNameTag 구성 요소에 대 한 API reference (ReactXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknametag/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknametag/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknametag/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknametag/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
participant의 이름을 보여줍니다.

## 제품 정보

| 회사 정보           | 제품정보                | 견적 요청 | 기본 정보             | 이름 \*           |
| --------------- | ------------------- | ----- | ----------------- | --------------- |
| `iconPack`      | `IconPack`          | ❌     | `defaultIconPack` | Icon 팩          |
| `isScreenShare` | `boolean`           | ✅     | -                 | 화면 공유보기에서 사용 여부 |
| `meeting`       | `Meeting`           | ✅     | -                 | 회의 목표           |
| `participant`   | `Peer`              | ✅     | -                 | 부품 객체           |
| `size`          | `Size`              | ✅     | -                 | 크기 (mm)         |
| `t`             | `RtkI18n`           | ❌     | `useLanguage()`   | 한국어             |
| `variant`       | `RtkNameTagVariant` | ✅     | -                 | 이름 태그 변형        |

## 사용 예제

### 기본 사용

```tsx
import { RtkNameTag } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkNameTag />;
}
```

### 재산

```tsx
import { RtkNameTag } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkNameTag
      isScreenShare={true}
      meeting={meeting}
      participant={participant}
    />
  );
}
```
