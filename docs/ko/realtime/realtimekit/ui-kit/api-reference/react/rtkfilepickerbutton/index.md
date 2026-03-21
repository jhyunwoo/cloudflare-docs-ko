---
title: RtkFilePickerButton · Cloudflare 실시간 문서
description: API reference RtkFilePickerButton 구성 요소 (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfilepickerbutton/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfilepickerbutton/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfilepickerbutton/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkfilepickerbutton/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보      | 제품정보              | 견적 요청 | 기본 정보             | 이름 \*                   |
| ---------- | ----------------- | ----- | ----------------- | ----------------------- |
| `filter`   | `string`          | ✅     | -                 | 파일 형식 필터를 열고 파일 선택기와 함께 |
| `icon`     | `keyof IconPack1` | ✅     | -                 | 아이콘                     |
| `iconPack` | `IconPack1`       | ❌     | `defaultIconPack` | Icon 팩                  |
| `label`    | `string`          | ✅     | -                 | Tooltip용 라벨             |
| `t`        | `RtkI18n1`        | ❌     | `useLanguage()`   | 한국어                     |

## 사용 예제

### 기본 사용

```tsx
import { RtkFilePickerButton } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkFilePickerButton />;
}
```

### 재산

```tsx
import { RtkFilePickerButton } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkFilePickerButton
      filter="example"
      icon={defaultIconPack}
      label="example"
    />
  );
}
```
