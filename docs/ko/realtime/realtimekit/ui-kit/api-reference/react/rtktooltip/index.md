---
title: RtkTooltip · Cloudflare 실시간 문서
description: RtkTooltip 구성 요소에 대한 API reference (React 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktooltip/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktooltip/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktooltip/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtktooltip/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
RTK Design System을 따르는 Tooltip 구성 요소.

## 제품 정보

| 회사 정보       | 제품정보             | 견적 요청 | 기본 정보 | 이름 \*          |
| ----------- | ---------------- | ----- | ----- | -------------- |
| `delay`     | `number`         | ✅     | -     | 툴팁을 보여주기 전에 지연 |
| `disabled`  | `boolean`        | ✅     | -     | 지원하다           |
| `kind`      | `TooltipKind`    | ✅     | -     | Tooltip 종류     |
| `label`     | `string`         | ✅     | -     | Tooltip 상표     |
| `open`      | `boolean`        | ✅     | -     | 기타             |
| `placement` | `Placement`      | ✅     | -     | 메뉴의 배치         |
| `size`      | `Size`           | ✅     | -     | 크기 (mm)        |
| `variant`   | `TooltipVariant` | ✅     | -     | Tooltip 변형     |

## 사용 예제

### 기본 사용

```tsx
import { RtkTooltip } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkTooltip />;
}
```

### 재산

```tsx
import { RtkTooltip } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkTooltip
      delay={42}
      disabled={true}
      kind={tooltipkind}
    />
  );
}
```
