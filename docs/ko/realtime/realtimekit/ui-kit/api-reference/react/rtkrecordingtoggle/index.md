---
title: RtkRecordingToggle · Cloudflare 실시간 문서
description: RtkRecordingToggle 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkrecordingtoggle/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkrecordingtoggle/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkrecordingtoggle/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkrecordingtoggle/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
회의의 국가를 기록하는 단추. 권한이 있는 사용자는 이 작업을 수행 할 수 있습니다. 따라서 버튼은 회의를 기록하는 권한이 없습니다.

## 제품 정보

| 회사 정보      | 제품정보                | 견적 요청 | 기본 정보             | 이름 \*   |
| ---------- | ------------------- | ----- | ----------------- | ------- |
| `disabled` | `boolean`           | ✅     | -                 | 버튼 비활성화 |
| `iconPack` | `IconPack`          | ❌     | `defaultIconPack` | Icon 팩  |
| `meeting`  | `Meeting`           | ✅     | -                 | 회의 목표   |
| `size`     | `Size`              | ✅     | -                 | 크기 (mm) |
| `t`        | `RtkI18n`           | ❌     | `useLanguage()`   | 한국어     |
| `variant`  | `ControlBarVariant` | ✅     | -                 | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkRecordingToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkRecordingToggle />;
}
```

### 재산

```tsx
import { RtkRecordingToggle } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkRecordingToggle
      disabled={true}
      meeting={meeting}
      size="md"
    />
  );
}
```
