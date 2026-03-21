---
title: RtkSetupScreen · Cloudflare 실시간 문서
description: RtkSetupScreen 구성 요소에 대 한 API reference (ReactXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksetupscreen/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksetupscreen/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksetupscreen/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtksetupscreen/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
회의에 참여하기 전에 표시된 화면은 디스플레이 이름과 미디어 설정을 편집할 수 있습니다.

## 제품 정보

| 회사 정보      | 제품정보       | 견적 요청 | 기본 정보                   | 이름 \*     |
| ---------- | ---------- | ----- | ----------------------- | --------- |
| `config`   | `UIConfig` | ❌     | `createDefaultConfig()` | Config 객체 |
| `iconPack` | `IconPack` | ❌     | `defaultIconPack`       | Icon 팩    |
| `meeting`  | `Meeting`  | ✅     | -                       | 회의 목표     |
| `size`     | `Size`     | ✅     | -                       | 크기 (mm)   |
| `states`   | `States`   | ✅     | -                       | 미국 객체     |
| `t`        | `RtkI18n`  | ❌     | `useLanguage()`         | 한국어       |

## 사용 예제

### 기본 사용

```tsx
import { RtkSetupScreen } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkSetupScreen />;
}
```

### 재산

```tsx
import { RtkSetupScreen } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkSetupScreen
      meeting={meeting}
      size="md"
    />
  );
}
```
