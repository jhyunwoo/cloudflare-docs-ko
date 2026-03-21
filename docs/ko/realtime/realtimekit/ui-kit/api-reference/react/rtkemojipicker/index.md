---
title: RtkEmojiPicker · Cloudflare 실시간 문서
description: API reference RtkEmojiPicker 구성 요소 (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkemojipicker/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkemojipicker/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkemojipicker/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkemojipicker/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
아주 간단한 이모티콘 피커 성분.

## 제품 정보

| 회사 정보             | 제품정보       | 견적 요청 | 기본 정보             | 이름 \*              |
| ----------------- | ---------- | ----- | ----------------- | ------------------ |
| `focusWhenOpened` | `boolean`  | ✅     | -                 | 마운트에 초점을 맞추지 않고 제어 |
| `iconPack`        | `IconPack` | ❌     | `defaultIconPack` | Icon 팩             |
| `t`               | `RtkI18n`  | ❌     | `useLanguage()`   | 한국어                |

## 사용 예제

### 기본 사용

```tsx
import { RtkEmojiPicker } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkEmojiPicker />;
}
```

### 재산

```tsx
import { RtkEmojiPicker } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkEmojiPicker
      focusWhenOpened={true}
    />
  );
}
```
