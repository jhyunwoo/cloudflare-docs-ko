---
title: RtkChat · Cloudflare 실시간 문서
description: RtkChat 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchat/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchat/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchat/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkchat/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
이미지 및 파일 업로드, emoji Picker 및 자동 스크롤을 갖춘 완벽한 채팅 구성 요소.

## 제품 정보

| 회사 정보       | 제품정보        | 견적 요청 | 기본 정보                   | 이름 \*    |
| ----------- | ----------- | ----- | ----------------------- | -------- |
| `config`    | `UIConfig1` | ❌     | `createDefaultConfig()` | 사이트맵     |
| `iconPack`  | `IconPack`  | ❌     | `defaultIconPack`       | Icon 팩   |
| `meeting`   | `Meeting`   | ✅     | -                       | 회의 목표    |
| `overrides` | `Overrides` | ❌     | `defaultOverrides`      | UI 오버라이드 |
| `size`      | `Size`      | ✅     | -                       | 크기 (mm)  |
| `t`         | `RtkI18n`   | ❌     | `useLanguage()`         | 한국어      |

## 사용 예제

### 기본 사용

```tsx
import { RtkChat } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkChat />;
}
```

### 재산

```tsx
import { RtkChat } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkChat
      meeting={meeting}
      size="md"
    />
  );
}
```
