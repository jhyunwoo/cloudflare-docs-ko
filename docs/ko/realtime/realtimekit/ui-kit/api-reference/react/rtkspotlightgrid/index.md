---
title: RtkSpotlightGrid · Cloudflare 실시간 문서
description: RtkSpotlightGrid 구성 요소에 대한 API referenceXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkspotlightgrid/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkspotlightgrid/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkspotlightgrid/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkspotlightgrid/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
참가자의 두 목록을 렌더링하는 그리드 구성 요소 :`pinnedParticipants`·`participants`. 당신은 배치를 a에 주문을 받아서 만들 수 있습니다`column`기본값으로 보기는`row`.

- 참가자의`pinnedParticipants[]`더 큰 그리드 안에 렌더링됩니다.
- 참가자의`participants[]`배열은 더 작은 격자에서 렌더링됩니다.

## 제품 정보

| 회사 정보                | 제품정보          | 견적 요청 | 기본 정보                   | 이름 \*                          |
| -------------------- | ------------- | ----- | ----------------------- | ------------------------------ |
| `aspectRatio`        | `string`      | ✅     | -                       | 부분적인 도와 체재의 종횡비:`width:height` |
| `config`             | `UIConfig`    | ❌     | `createDefaultConfig()` | UI 구성                          |
| `gap`                | `number`      | ✅     | -                       | participant 도와 사이 간격           |
| `gridSize`           | `GridSize1`   | ✅     | -                       | 격자 크기                          |
| `iconPack`           | `IconPack`    | ❌     | `defaultIconPack`       | 아이콘 팩                          |
| `layout`             | `GridLayout1` | ✅     | -                       | 격자 배치                          |
| `meeting`            | `Meeting`     | ✅     | -                       | 회의 목표                          |
| `participants`       | `Peer[]`      | ✅     | -                       | 회사 소개                          |
| `pinnedParticipants` | `Peer[]`      | ✅     | -                       | Pinned 참가자                     |
| `size`               | `Size`        | ✅     | -                       | 크기 (mm)                        |
| `states`             | `States`      | ✅     | -                       | 미국 객체                          |
| `t`                  | `RtkI18n`     | ❌     | `useLanguage()`         | 한국어                            |

## 사용 예제

### 기본 사용

```tsx
import { RtkSpotlightGrid } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkSpotlightGrid />;
}
```

### 재산

```tsx
import { RtkSpotlightGrid } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkSpotlightGrid
      aspectRatio="example"
      gap={42}
      gridSize="md"
    />
  );
}
```
