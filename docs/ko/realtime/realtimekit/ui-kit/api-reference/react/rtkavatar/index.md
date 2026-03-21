---
title: RtkAvatar · Cloudflare 실시간 문서
description: RtkAvatar 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkavatar/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkavatar/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkavatar/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkavatar/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
participant의 이미지 또는 초기를 렌더링하는 Avatar 구성 요소.

## 제품 정보

| 회사 정보         | 제품정보                                                                 | 견적 요청 | 기본 정보             | 이름 \*     |
| ------------- | -------------------------------------------------------------------- | ----- | ----------------- | --------- |
| `iconPack`    | `IconPack`                                                           | ❌     | `defaultIconPack` | Icon 팩    |
| `participant` | `Peer \| WaitlistedParticipant \| { name: string; picture: string }` | ✅     | -                 | 부품 객체     |
| `size`        | `Size`                                                               | ✅     | -                 | 크기 (mm)   |
| `t`           | `RtkI18n`                                                            | ❌     | `useLanguage()`   | 한국어       |
| `variant`     | `AvatarVariant`                                                      | ✅     | -                 | Avatar 유형 |

## 사용 예제

### 기본 사용

```tsx
import { RtkAvatar } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkAvatar />;
}
```

### 재산

```tsx
import { RtkAvatar } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkAvatar
      participant="example"
      size="md"
      variant="circular"
    />
  );
}
```
