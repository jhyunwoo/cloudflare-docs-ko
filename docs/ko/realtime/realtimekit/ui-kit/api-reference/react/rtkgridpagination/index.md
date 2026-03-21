---
title: Cloudflare 실시간 문서
description: RtkGridPagination 성분 (ReactXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkgridpagination/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkgridpagination/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkgridpagination/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkgridpagination/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
현재 페이지를 변경하고 활성 참가자 목록의 모드를 볼 수있는 구성 요소. 이것은 반영됩니다`rtk-grid`부품.

## 제품 정보

| 회사 정보      | 제품정보                     | 견적 요청 | 기본 정보             | 이름 \*  |
| ---------- | ------------------------ | ----- | ----------------- | ------ |
| `iconPack` | `IconPack`               | ❌     | `defaultIconPack` | 아이콘 팩  |
| `meeting`  | `Meeting`                | ✅     | -                 | 회의 목표  |
| `size`     | `Size`                   | ✅     | -                 | 크기 버팀대 |
| `states`   | `States`                 | ✅     | -                 | 한국어    |
| `t`        | `RtkI18n`                | ❌     | `useLanguage()`   | 한국어    |
| `variant`  | `GridPaginationVariants` | ✅     | -                 | 한국어    |

## 사용 예제

### 기본 사용

```tsx
import { RtkGridPagination } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkGridPagination />;
}
```

### 재산

```tsx
import { RtkGridPagination } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkGridPagination
      meeting={meeting}
      size="md"
      variant={gridpaginationvariants}
    />
  );
}
```
