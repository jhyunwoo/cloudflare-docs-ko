---
title: RtkEndedScreen · Cloudflare 실시간 문서
description: RtkEndedScreen 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkendedscreen/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkendedscreen/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkendedscreen/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkendedscreen/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
회의가 종료된 화면입니다.

## 제품 정보

| 회사 정보      | 제품정보       | 견적 요청 | 기본 정보                   | 이름 \*     |
| ---------- | ---------- | ----- | ----------------------- | --------- |
| `config`   | `UIConfig` | ❌     | `createDefaultConfig()` | Config 객체 |
| `iconPack` | `IconPack` | ❌     | `defaultIconPack`       | Icon 팩    |
| `meeting`  | `Meeting`  | ✅     | -                       | 글로벌 국가    |
| `size`     | `Size`     | ✅     | -                       | 크기 (mm)   |
| `states`   | `States`   | ✅     | -                       | 글로벌 국가    |
| `t`        | `RtkI18n`  | ❌     | `useLanguage()`         | 한국어       |

## 사용 예제

### 기본 사용

```tsx
import { RtkEndedScreen } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkEndedScreen />;
}
```

### 재산

```tsx
import { RtkEndedScreen } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkEndedScreen
      meeting={meeting}
      size="md"
    />
  );
}
```
