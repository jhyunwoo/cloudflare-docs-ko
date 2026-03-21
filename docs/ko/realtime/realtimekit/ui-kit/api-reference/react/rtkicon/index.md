---
title: RtkIcon · Cloudflare 실시간 문서
description: RtkIcon 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkicon/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkicon/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkicon/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkicon/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
svg 문자열을 받아들이는 아이콘 구성 요소와 렌더링.

## 제품 정보

| 회사 정보     | 제품정보          | 견적 요청 | 기본 정보 | 이름 \*   |
| --------- | ------------- | ----- | ----- | ------- |
| `icon`    | `string`      | ✅     | -     | 아이콘     |
| `size`    | `Size1`       | ✅     | -     | 크기 (mm) |
| `variant` | `IconVariant` | ✅     | -     | Icon 변형 |

## 사용 예제

### 기본 사용

```tsx
import { RtkIcon } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkIcon />;
}
```

### 재산

```tsx
import { RtkIcon } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkIcon
      icon="example"
      size="md"
      variant="primary"
    />
  );
}
```
