---
title: RtkButton · Cloudflare 실시간 문서
description: RtkButton 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbutton/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbutton/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbutton/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkbutton/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
RTK 디자인 시스템을 따르는 버튼.

## 제품 정보

| 회사 정보      | 제품정보                        | 견적 요청 | 기본 정보 | 이름 \*            |
| ---------- | --------------------------- | ----- | ----- | ---------------- |
| `disabled` | `boolean`                   | ✅     | -     | 버튼이 비활성화되지 않은 경우 |
| `kind`     | `ButtonKind`                | ✅     | -     | 단추 유형            |
| `reverse`  | `boolean`                   | ✅     | -     | 아이들의 역순 여부       |
| `size`     | `Size`                      | ✅     | -     | 크기 (mm)          |
| `type`     | `HTMLButtonElement['type']` | ✅     | -     | 단추 유형            |
| `variant`  | `ButtonVariant`             | ✅     | -     | 버튼 변종            |

## 사용 예제

### 기본 사용

```tsx
import { RtkButton } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkButton />;
}
```

### 재산

```tsx
import { RtkButton } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkButton
      disabled={true}
      kind={buttonkind}
      reverse={true}
    />
  );
}
```
