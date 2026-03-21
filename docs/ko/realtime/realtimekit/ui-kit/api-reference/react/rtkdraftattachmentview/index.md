---
title: RtkDraftAttachmentView · Cloudflare 실시간 문서
description: API reference RtkDraftAttachmentView 구성 요소 (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdraftattachmentview/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdraftattachmentview/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdraftattachmentview/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdraftattachmentview/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
초안 부착을 렌더링하는 구성 요소

## 제품 정보

| 회사 정보        | 제품정보                                       | 견적 요청 | 기본 정보             | 이름 \*   |
| ------------ | ------------------------------------------ | ----- | ----------------- | ------- |
| `attachment` | `{ type: 'image' \| 'file'; file: File; }` | ✅     | -                 | 본문 바로가기 |
| `iconPack`   | `IconPack1`                                | ❌     | `defaultIconPack` | Icon 팩  |
| `t`          | `RtkI18n1`                                 | ❌     | `useLanguage()`   | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkDraftAttachmentView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkDraftAttachmentView />;
}
```

### 재산

```tsx
import { RtkDraftAttachmentView } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkDraftAttachmentView
      attachment={{}}
    />
  );
}
```
