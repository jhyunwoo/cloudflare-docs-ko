---
title: RtkSimpleGrid · Cloudflare 실시간 문서
description: RtkSimpleGrid 구성 요소에 대한 API referenceXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksimplegrid/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksimplegrid/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksimplegrid/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksimplegrid/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
간단한 그리드에서 참가자 만 렌더링하는 그리드 구성 요소.

## 제품 정보

| 회사 정보          | 제품정보       | 견적 요청 | 기본 정보                   | 이름 \*                          |
| -------------- | ---------- | ----- | ----------------------- | ------------------------------ |
| `aspectRatio`  | `string`   | ✅     | -                       | 부분적인 도와 체재의 종횡비:`width:height` |
| `config`       | `UIConfig` | ❌     | `createDefaultConfig()` | UI 구성                          |
| `gap`          | `number`   | ✅     | -                       | participant 도와 사이 간격           |
| `iconPack`     | `IconPack` | ❌     | `defaultIconPack`       | 아이콘 팩                          |
| `meeting`      | `Meeting`  | ✅     | -                       | 회의 목표                          |
| `participants` | `Peer[]`   | ✅     | -                       | 회사 소개                          |
| `size`         | `Size`     | ✅     | -                       | 크기 (mm)                        |
| `states`       | `States`   | ✅     | -                       | 미국 객체                          |
| `t`            | `RtkI18n`  | ❌     | `useLanguage()`         | 한국어                            |

## 사용 예제

### 기본 사용

```tsx
import { RtkSimpleGrid } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkSimpleGrid />;
}
```

### 재산

```tsx
import { RtkSimpleGrid } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkSimpleGrid
      aspectRatio="example"
      gap={42}
      meeting={meeting}
    />
  );
}
```
