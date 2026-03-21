---
title: RtkPoll · Cloudflare 실시간 문서
description: RtkPoll 구성 요소에 대한 API reference (React 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpoll/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpoll/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpoll/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpoll/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
설문 조사 사용자가 투표 할 수있는 설문 조사를 표시합니다.

## 제품 정보

| 회사 정보         | 제품정보                   | 견적 요청 | 기본 정보             | 이름 \*          |
| ------------- | ---------------------- | ----- | ----------------- | -------------- |
| `iconPack`    | `IconPack`             | ❌     | `defaultIconPack` | Icon 팩         |
| `permissions` | `RTKPermissionsPreset` | ✅     | -                 | Permissions 개체 |
| `poll`        | `Poll`                 | ✅     | -                 | 투자정보           |
| `self`        | `string`               | ✅     | -                 | 자기 ID          |
| `t`           | `RtkI18n`              | ❌     | `useLanguage()`   | 한국어            |

## 사용 예제

### 기본 사용

```tsx
import { RtkPoll } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkPoll />;
}
```

### 재산

```tsx
import { RtkPoll } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkPoll
      permissions={rtkpermissionspreset}
      poll={poll}
      self="example"
    />
  );
}
```
