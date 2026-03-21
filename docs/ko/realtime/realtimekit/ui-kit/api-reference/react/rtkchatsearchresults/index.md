---
title: RtkChatSearchResults · Cloudflare 실시간 문서
description: API reference RtkChatSearchResults 구성 요소 (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatsearchresults/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatsearchresults/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatsearchresults/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchatsearchresults/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
뚱 베어`rtk-chat-search-results`deprecated는 곧 제거 될 것입니다. 제품 정보`rtk-chat-messages-ui-paginated`대신. -

## 제품 정보

| 회사 정보       | 제품정보        | 견적 요청 | 기본 정보             | 이름 \*  |
| ----------- | ----------- | ----- | ----------------- | ------ |
| `channelId` | `string`    | ✅     | -                 | 채널 ID  |
| `iconPack`  | `IconPack1` | ❌     | `defaultIconPack` | Icon 팩 |
| `meeting`   | `Meeting`   | ✅     | -                 | 회의 목표  |
| `query`     | `string`    | ✅     | -                 | 검색 쿼리  |
| `t`         | `RtkI18n1`  | ❌     | `useLanguage()`   | 한국어    |

## 사용 예제

### 기본 사용

```tsx
import { RtkChatSearchResults } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkChatSearchResults />;
}
```

### 재산

```tsx
import { RtkChatSearchResults } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkChatSearchResults
      channelId="example"
      meeting={meeting}
      query="example"
    />
  );
}
```
