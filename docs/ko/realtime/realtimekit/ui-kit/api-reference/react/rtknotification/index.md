---
title: RtkNotification · Cloudflare 실시간 문서
description: RtkNotification 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknotification/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknotification/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknotification/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtknotification/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
알림을 보여주는 구성 요소. 당신은 후에 요소를 제거해야합니다.`rtkNotificationDismiss`이벤트

## 제품 정보

| 회사 정보          | 제품정보           | 견적 요청 | 기본 정보             | 이름 \*             |
| -------------- | -------------- | ----- | ----------------- | ----------------- |
| `iconPack`     | `IconPack`     | ❌     | `defaultIconPack` | Icon 팩            |
| `notification` | `Notification` | ✅     | -                 | 이름 \*             |
| `paused`       | `boolean`      | ✅     | -                 | true 때 timeout 중지 |
| `size`         | `Size`         | ✅     | -                 | 크기 (mm)           |
| `t`            | `RtkI18n`      | ❌     | `useLanguage()`   | 한국어               |

## 사용 예제

### 기본 사용

```tsx
import { RtkNotification } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkNotification />;
}
```

### 재산

```tsx
import { RtkNotification } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkNotification
      notification={notification}
      paused={true}
      size="md"
    />
  );
}
```
