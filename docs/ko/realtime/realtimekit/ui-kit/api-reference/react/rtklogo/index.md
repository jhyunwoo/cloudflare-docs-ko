---
title: · Cloudflare 실시간 문서
description: RtkLogo 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtklogo/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtklogo/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtklogo/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtklogo/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
구성에서 로고를로드하는 구성 요소 또는`logo-url`이름 \*

## 제품 정보

| 회사 정보     | 제품정보       | 견적 요청 | 기본 정보                   | 이름 \*     |
| --------- | ---------- | ----- | ----------------------- | --------- |
| `config`  | `UIConfig` | ❌     | `createDefaultConfig()` | Config 객체 |
| `logoUrl` | `string`   | ✅     | -                       | 로고 URL    |
| `meeting` | `Meeting`  | ✅     | -                       | 회의 목표     |
| `t`       | `RtkI18n`  | ❌     | `useLanguage()`         | 한국어       |

## 사용 예제

### 기본 사용

```tsx
import { RtkLogo } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkLogo />;
}
```

### 재산

```tsx
import { RtkLogo } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkLogo
      logoUrl="example"
      meeting={meeting}
    />
  );
}
```
