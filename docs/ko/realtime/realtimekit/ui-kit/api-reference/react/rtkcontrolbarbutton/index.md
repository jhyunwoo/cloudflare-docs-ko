---
title: RtkControlbarButton · Cloudflare 실시간 문서
description: RtkControlbarButton 구성 요소에 대한 API referenceXQ (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcontrolbarbutton/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcontrolbarbutton/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcontrolbarbutton/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkcontrolbarbutton/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
사용자 정의 컨트롤 바 버튼을 구성하는 데 사용되는 골격 구성 요소.

## 제품 정보

| 회사 정보         | 제품정보                 | 견적 요청 | 기본 정보             | 이름 \*                                         |
| ------------- | -------------------- | ----- | ----------------- | --------------------------------------------- |
| `brandIcon`   | `boolean`            | ✅     | -                 | 아이콘이 브랜드 색상을 필요로 하는지                          |
| `disabled`    | `boolean`            | ✅     | -                 | 버튼이 비활성화되어 있습니다.                              |
| `icon`        | `string`             | ✅     | -                 | 아이콘                                           |
| `iconPack`    | `IconPack`           | ❌     | `defaultIconPack` | Icon 팩                                        |
| `isLoading`   | `boolean`            | ✅     | -                 | 로드 상태 Ignores 현재 아이콘을 무시하고 진정한 경우 스피너를 보여줍니다. |
| `label`       | `string`             | ✅     | -                 | 단추의 상표                                        |
| `showWarning` | `boolean`            | ✅     | -                 | 경고 아이콘을 표시하는 것                                |
| `size`        | `Size`               | ✅     | -                 | 크기 (mm)                                       |
| `variant`     | `ControlBarVariant1` | ✅     | -                 | 한국어                                           |

## 사용 예제

### 기본 사용

```tsx
import { RtkControlbarButton } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkControlbarButton />;
}
```

### 재산

```tsx
import { RtkControlbarButton } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkControlbarButton
      brandIcon={true}
      disabled={true}
      icon="example"
    />
  );
}
```
