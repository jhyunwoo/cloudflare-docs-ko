---
title: RtkPermissionsMessage · Cloudflare 실시간 문서
description: RtkPermissionsMessage 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpermissionsmessage/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpermissionsmessage/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpermissionsmessage/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpermissionsmessage/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
허가 관련 문제 해결 정보를 보여주는 구성 요소.

## 제품 정보

| 회사 정보      | 제품정보       | 견적 요청 | 기본 정보             | 이름 \* |
| ---------- | ---------- | ----- | ----------------- | ----- |
| `iconPack` | `IconPack` | ❌     | `defaultIconPack` | 아이콘 팩 |
| `meeting`  | `Meeting`  | ✅     | -                 | 회의 목표 |
| `states`   | `States`   | ✅     | -                 | 미국 객체 |
| `t`        | `RtkI18n`  | ❌     | `useLanguage()`   | 한국어   |

## 사용 예제

### 기본 사용

```tsx
import { RtkPermissionsMessage } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkPermissionsMessage />;
}
```

### 재산

```tsx
import { RtkPermissionsMessage } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkPermissionsMessage
      meeting={meeting}
    />
  );
}
```
