---
title: RtkUiProvider · Cloudflare 실시간 문서
description: RtkUiProvider 구성 요소에 대한 API referenceXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkuiprovider/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkuiprovider/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkuiprovider/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkuiprovider/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보             | 제품정보              | 견적 요청 | 기본 정보              | 이름 \*                |
| ----------------- | ----------------- | ----- | ------------------ | -------------------- |
| `config`          | `UIConfig1`       | ✅     | -                  | 사이트맵                 |
| `iconPack`        | `IconPack1`       | ❌     | `defaultIconPack`  | Icon 팩               |
| `meeting`         | `Meeting \| null` | ❌     | `null`             | 회사연혁                 |
| `mode`            | `MeetingMode1`    | ✅     | -                  | 충전 유형                |
| `overrides`       | `Overrides1`      | ❌     | `defaultOverrides` | UI 키트 오버라이드          |
| `showSetupScreen` | `boolean`         | ✅     | -                  | 설정 화면을 표시하거나하지 않는 여부 |
| `t`               | `RtkI18n1`        | ❌     | `useLanguage()`    | 언어 유틸리티              |

## 사용 예제

### 기본 사용

```tsx
import { RtkUiProvider } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkUiProvider />;
}
```

### 재산

```tsx
import { RtkUiProvider } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkUiProvider
      config={defaultUiConfig}
      mode={meeting}
      showSetupScreen={true}
    />
  );
}
```
