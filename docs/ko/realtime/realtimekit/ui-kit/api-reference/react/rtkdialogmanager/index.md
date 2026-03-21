---
title: RtkDialogManager · Cloudflare 실시간 문서
description: RtkDialogManager 구성 요소에 대한 API reference (React 라이브러리)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdialogmanager/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdialogmanager/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdialogmanager/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdialogmanager/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
다음과 같은 구성 요소의 모든 대화 요소를 처리하는 구성 요소:

- rtk 설정
- rtk-leave-meeting에 대 한
- RSS 피드
- rtk 이미지 뷰어
- rtk-breakout-rooms 관리 이 구성 요소는 값에 따라 달라집니다.`states`객체.

## 제품 정보

| 회사 정보      | 제품정보       | 견적 요청 | 기본 정보                   | 이름 \*   |
| ---------- | ---------- | ----- | ----------------------- | ------- |
| `config`   | `UIConfig` | ❌     | `createDefaultConfig()` | UI 구성   |
| `iconPack` | `IconPack` | ❌     | `defaultIconPack`       | Icon 팩  |
| `meeting`  | `Meeting`  | ✅     | -                       | 회의 목표   |
| `size`     | `Size`     | ✅     | -                       | 크기 (mm) |
| `states`   | `States`   | ✅     | -                       | 미국 객체   |
| `t`        | `RtkI18n`  | ❌     | `useLanguage()`         | 한국어     |

## 사용 예제

### 기본 사용

```tsx
import { RtkDialogManager } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkDialogManager />;
}
```

### 재산

```tsx
import { RtkDialogManager } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkDialogManager
      meeting={meeting}
      size="md"
    />
  );
}
```
