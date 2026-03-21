---
title: RtkMenuList · Cloudflare 실시간 문서
description: RtkMenuList 구성 요소에 대한 API reference (QXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmenulist/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmenulist/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmenulist/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmenulist/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
메뉴 목록 구성 요소.

## 제품 정보

| 회사 정보         | 제품정보                       | 견적 요청 | 기본 정보             | 이름 \*  |
| ------------- | -------------------------- | ----- | ----------------- | ------ |
| `iconPack`    | `IconPack`                 | ❌     | `defaultIconPack` | Icon 팩 |
| `menuVariant` | `'primary' \| 'secondary'` | ✅     | -                 | 한국어    |
| `t`           | `RtkI18n`                  | ❌     | `useLanguage()`   | 한국어    |

## 사용 예제

### 기본 사용

```tsx
import { RtkMenuList } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkMenuList />;
}
```

### 재산

```tsx
import { RtkMenuList } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkMenuList
      menuVariant={'primary' | 'secondary'}
    />
  );
}
```
