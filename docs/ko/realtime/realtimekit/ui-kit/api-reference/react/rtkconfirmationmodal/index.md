---
title: RtkConfirmationModal · Cloudflare 실시간 문서
description: RtkConfirmationModal 성분 (QXQX0066XQ 도서관)를 위한 API referenceXQXQXQXQ
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkconfirmationmodal/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkconfirmationmodal/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkconfirmationmodal/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkconfirmationmodal/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
확인 양식.

## 제품 정보

| 회사 정보      | 제품정보       | 견적 요청 | 기본 정보             | 이름 \*  |
| ---------- | ---------- | ----- | ----------------- | ------ |
| `iconPack` | `IconPack` | ❌     | `defaultIconPack` | Icon 팩 |
| `meeting`  | `Meeting`  | ✅     | -                 | 회의 목표  |
| `states`   | `States`   | ✅     | -                 | 미국 객체  |
| `t`        | `RtkI18n`  | ❌     | `useLanguage()`   | 한국어    |

## 사용 예제

### 기본 사용

```tsx
import { RtkConfirmationModal } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkConfirmationModal />;
}
```

### 재산

```tsx
import { RtkConfirmationModal } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkConfirmationModal
      meeting={meeting}
    />
  );
}
```
