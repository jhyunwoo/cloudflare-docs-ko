---
title: · Cloudflare 실시간 문서
description: RtkMeeting 구성 요소에 대한 API reference (React 도서관)
lastUpdated: 2026-02-10T17:40:43.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmeeting/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmeeting/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmeeting/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/ui-kit/api-reference/react/rtkmeeting/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
전체 회의 UI를 렌더링하는 단일 구성 요소. 미리 설정하고 UI를 렌더링합니다. 이 구성 요소로, 응용 프로그램을 관리의 모든 국가, 대화 상자 및 기타 작은 비트를 처리 할 필요가 없습니다.

## 제품 정보

| 회사 정보                  | 제품정보          | 견적 요청 | 기본 정보              | 이름 \*                                  |
| ---------------------- | ------------- | ----- | ------------------ | -------------------------------------- |
| `applyDesignSystem`    | `boolean`     | ✅     | -                  | config에서 문서 루트에 디자인 시스템을 적용하는 것        |
| `config`               | `UIConfig`    | ✅     | -                  | UI 구성                                  |
| `gridLayout`           | `GridLayout1` | ✅     | -                  | 격자 배치                                  |
| `iconPack`             | `IconPack`    | ❌     | `defaultIconPack`  | Icon 팩                                 |
| `leaveOnUnmount`       | `boolean`     | ✅     | -                  | participant는 이 성분이 unmounted 때 떠나야 합니다 |
| `loadConfigFromPreset` | `boolean`     | ✅     | -                  | preset에서 config를 로드하는 것                |
| `meeting`              | `Meeting`     | ✅     | -                  | 회의 목표                                  |
| `mode`                 | `MeetingMode` | ✅     | -                  | 충전 유형                                  |
| `overrides`            | `Overrides`   | ❌     | `defaultOverrides` | UI 키트 오버라이드                            |
| `showSetupScreen`      | `boolean`     | ✅     | -                  | 설정 화면을 표시하거나하지 않는 여부                   |
| `size`                 | `Size`        | ✅     | -                  | 크기 (mm)                                |
| `t`                    | `RtkI18n`     | ❌     | `useLanguage()`    | 한국어                                    |

## 사용 예제

### 기본 사용

```tsx
import { RtkMeeting } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return <RtkMeeting />;
}
```

### 재산

```tsx
import { RtkMeeting } from '@cloudflare/realtimekit-react-ui';


function MyComponent() {
  return (
    <RtkMeeting
      applyDesignSystem={true}
      config={defaultUiConfig}
      gridLayout={gridlayout1}
    />
  );
}
```
