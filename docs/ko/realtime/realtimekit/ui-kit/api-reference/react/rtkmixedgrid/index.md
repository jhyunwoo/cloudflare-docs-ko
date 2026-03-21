---
title: RtkMixedGrid · Cloudflare 실시간 문서
description: RtkMixedGrid 구성 요소에 대한 API referenceXQXQXQ 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmixedgrid/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmixedgrid/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmixedgrid/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmixedgrid/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
Screenshares, 플러그인 및 참가자를 처리하는 그리드 구성 요소.

## 제품 정보

| 회사 정보                     | 제품정보          | 견적 요청 | 기본 정보                   | 이름 \*                          |
| ------------------------- | ------------- | ----- | ----------------------- | ------------------------------ |
| `aspectRatio`             | `string`      | ✅     | -                       | 부분적인 도와 체재의 종횡비:`width:height` |
| `config`                  | `UIConfig`    | ❌     | `createDefaultConfig()` | UI 구성                          |
| `gap`                     | `number`      | ✅     | -                       | participant 도와 사이 간격           |
| `gridSize`                | `GridSize1`   | ✅     | -                       | 격자 크기                          |
| `iconPack`                | `IconPack`    | ❌     | `defaultIconPack`       | 아이콘 팩                          |
| `layout`                  | `GridLayout1` | ✅     | -                       | 격자 배치                          |
| `meeting`                 | `Meeting`     | ✅     | -                       | 회의 목표                          |
| `participants`            | `Peer[]`      | ✅     | -                       | 회사 소개                          |
| `pinnedParticipants`      | `Peer[]`      | ✅     | -                       | Pinned 참가자                     |
| `plugins`                 | `RTKPlugin[]` | ✅     | -                       | Active 플러그인                    |
| `screenShareParticipants` | `Peer[]`      | ✅     | -                       | Screenshare 참가자                |
| `size`                    | `Size`        | ✅     | -                       | 크기 (mm)                        |
| `states`                  | `States`      | ✅     | -                       | 미국 객체                          |
| `t`                       | `RtkI18n`     | ❌     | `useLanguage()`         | 한국어                            |

## 사용 예제

### 기본 사용

```tsx
import { RtkMixedGrid } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkMixedGrid />;
}
```

### 재산

```tsx
import { RtkMixedGrid } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkMixedGrid
      aspectRatio="example"
      gap={42}
      gridSize="md"
    />
  );
}
```
