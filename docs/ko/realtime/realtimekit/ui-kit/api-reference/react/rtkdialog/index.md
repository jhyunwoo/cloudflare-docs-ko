---
title: RtkDialog · Cloudflare 실시간 문서
description: RtkDialog 성분 (referenceXQXQXQ 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdialog/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdialog/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdialog/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkdialog/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
대화 상자 구성 요소.

## 제품 정보

| 회사 정보              | 제품정보       | 견적 요청 | 기본 정보                   | 이름 \*                    |
| ------------------ | ---------- | ----- | ----------------------- | ------------------------ |
| `config`           | `UIConfig` | ❌     | `createDefaultConfig()` | UI 구성                    |
| `disableEscapeKey` | `boolean`  | ✅     | -                       | 탈출 키가 modal을 닫을 수 있는지 여부 |
| `hideCloseButton`  | `boolean`  | ✅     | -                       | 닫기 버튼을 표시 할 수 있습니다.      |
| `iconPack`         | `IconPack` | ❌     | `defaultIconPack`       | Icon 팩                   |
| `meeting`          | `Meeting`  | ✅     | -                       | 회의 목표                    |
| `open`             | `boolean`  | ✅     | -                       | 대화 상자가 열리지 않거나           |
| `size`             | `Size`     | ✅     | -                       | 크기 (mm)                  |
| `states`           | `States`   | ✅     | -                       | 미국 객체                    |
| `t`                | `RtkI18n`  | ❌     | `useLanguage()`         | 한국어                      |

## 사용 예제

### 기본 사용

```tsx
import { RtkDialog } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkDialog />;
}
```

### 재산

```tsx
import { RtkDialog } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkDialog
      disableEscapeKey={true}
      hideCloseButton={true}
      meeting={meeting}
    />
  );
}
```
