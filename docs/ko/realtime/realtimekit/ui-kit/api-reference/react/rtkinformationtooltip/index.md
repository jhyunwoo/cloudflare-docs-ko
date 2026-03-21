---
title: RtkInformationTooltip · Cloudflare 실시간 문서
description: API reference RtkInformationTooltip 구성 요소 (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkinformationtooltip/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkinformationtooltip/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkinformationtooltip/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkinformationtooltip/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보      | 제품정보        | 견적 요청 | 기본 정보             | 이름 \*  |
| ---------- | ----------- | ----- | ----------------- | ------ |
| `iconPack` | `IconPack1` | ❌     | `defaultIconPack` | Icon 팩 |

## 사용 예제

### 기본 사용

```tsx
import { RtkInformationTooltip } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkInformationTooltip />;
}
```

### 재산

```tsx
import { RtkInformationTooltip } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkInformationTooltip
      iconPack={defaultIconPack}
    />
  );
}
```
