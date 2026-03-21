---
title: Cloudflare 실시간 문서
description: RtkImageMessage 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkimagemessage/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkimagemessage/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkimagemessage/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkimagemessage/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
뚱 베어`rtk-image-message`deprecated는 곧 제거 될 것입니다. 제품 정보`rtk-image-message-view`대신. 채팅에서 이미지 메시지를 렌더링하는 구성 요소.

## 제품 정보

| 회사 정보         | 제품정보           | 견적 요청 | 기본 정보             | 이름 \*                     |
| ------------- | -------------- | ----- | ----------------- | ------------------------- |
| `iconPack`    | `IconPack`     | ❌     | `defaultIconPack` | Icon 팩                    |
| `isContinued` | `boolean`      | ✅     | -                 | 메시지가 계속되는지 여부             |
| `message`     | `ImageMessage` | ✅     | -                 | 텍스트 메시지 객체                |
| `now`         | `Date`         | ✅     | -                 | 현재 날짜 객체, 날짜 사이의 거리를 계산하기 |
| `showBubble`  | `boolean`      | ✅     | -                 | 메시지 표시                    |
| `t`           | `RtkI18n`      | ❌     | `useLanguage()`   | 한국어                       |

## 사용 예제

### 기본 사용

```tsx
import { RtkImageMessage } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkImageMessage />;
}
```

### 재산

```tsx
import { RtkImageMessage } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkImageMessage
      isContinued={true}
      message={imagemessage}
      now={date}
    />
  );
}
```
