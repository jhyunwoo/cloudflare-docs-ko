---
title: Cloudflare 실시간 문서
description: API reference RtkPaginatedList 구성 요소 (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpaginatedlist/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpaginatedlist/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpaginatedlist/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkpaginatedlist/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품 정보

| 회사 정보            | 제품정보                                                   | 견적 요청 | 기본 정보             | 이름 \*                        |
| ---------------- | ------------------------------------------------------ | ----- | ----------------- | ---------------------------- |
| `autoScroll`     | `boolean`                                              | ✅     | -                 | 자동 스크롤 목록                    |
| `createNodes`    | `(data: unknown[])`                                    | ✅     | -                 | 노드 생성                        |
| `emptyListLabel` | `string`                                               | ✅     | -                 | 비어있을 때 표시하는 상표               |
| `fetchData`      | `(timestamp: number, size: number, reversed: boolean)` | ✅     | -                 | 데이터 가져 오기                    |
| `iconPack`       | `IconPack`                                             | ❌     | `defaultIconPack` | Icon 팩                       |
| `pageSize`       | `number`                                               | ✅     | -                 | 페이지 크기                       |
| `pagesAllowed`   | `number`                                               | ✅     | -                 | 표시된 페이지 수                    |
| `rerenderList`   | `()`                                                   | ✅     | -                 | 검색 폼                         |
| `reset`          | `(timestamp?: number)`                                 | ❌     | -                 | 지정된 타임스탬프에 paginated 목록을 재설정 |
| `t`              | `RtkI18n`                                              | ❌     | `useLanguage()`   | 한국어                          |

## 사용 예제

### 기본 사용

```tsx
import { RtkPaginatedList } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkPaginatedList />;
}
```

### 재산

```tsx
import { RtkPaginatedList } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkPaginatedList
      autoScroll={true}
      createNodes={[]}
      emptyListLabel="example"
    />
  );
}
```
