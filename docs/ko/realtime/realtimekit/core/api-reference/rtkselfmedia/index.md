---
title: RTKSelfMedia · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkselfmedia/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkselfmedia/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkselfmedia/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkselfmedia/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 이름 \*

- [오디오 트랙](#audioTrack)

  수익률`audioTrack`.

- [RawAudio트랙](#rawAudioTrack)

  수익률`rawAudioTrack`그것을 실행하는 미들웨어가 없습니다.

- [미디어Permissions](#mediaPermissions)

  사용자에 의해 주어진 현재 오디오 및 비디오 권한을 반환합니다. 'ACCEPTED' 사용자가 미디어를 사용할 권한을 부여 한 경우. 'CANCELED' 사용자가 Screenshare를 취소 한 경우. 'DENIED' 사용자가 미디어를 사용할 수있는 권한을 거부 한 경우. 'SYS DENIED' 사용자가 미디어를 사용하는 권한을 거부 한 경우. 미디어가 사용할 수없는 경우 'UNAVAILABLE' (또는 다른 응용 프로그램에 의해 사용됩니다).

- [동영상Track](#videoTrack)

  수익률`videoTrack`.

- [rawvideo트랙](#rawVideoTrack)

  수익률`videoTrack`그것을 실행하는 미들웨어가 없습니다.

- [스크린ShareTracks](#screenShareTracks)

  화면 공유 트랙을 반환합니다.

- [오디오Enabled](#audioEnabled)

  오디오가 활성화되면 true를 반환합니다.

- [비디오Enabled](#videoEnabled)

  비디오가 활성화되면 true를 반환합니다.

- [스크린ShareEnabled](#screenShareEnabled)

  화면 공유가 활성화되면 true를 반환합니다.

## 제품정보

- [init(옵션, \[skipAwaits\], \[context\])](#init)

- [addAudioMiddleware (오디오 미들웨어)](#addAudioMiddleware)

  원시 오디오 스트림에서 실행되는 오디오 미들웨어를 추가합니다. 1개 이상의 오디오 미들웨어가 있다면, 그들은 순서대로 실행됩니다. 변경할 수 있는 순서를 원하면 이전의 미들웨어와 재 추가를 제거하십시오.

- [removeAudioMiddleware (오디오 미들웨어)](#removeAudioMiddleware)

  오디오 미들웨어를 제거, 거기에 있다면.

- [제거AllAudioMiddlewares()](#removeAllAudioMiddlewares)

  모든 오디오 미들웨어를 제거하고 있다면.

- [addVideoMiddleware (videoMiddleware)에 추가](#addVideoMiddleware)

  원시 비디오 스트림에서 실행되는 비디오 미들웨어를 추가합니다. 1 개 이상의 비디오 미들웨어가 있다면, 그들은 순서대로 실행됩니다. 변경할 수 있는 순서를 원하면 이전의 미들웨어와 재 추가를 제거하십시오.

- [setVideoMiddlewareGlobalConfig(설정)](#setVideoMiddlewareGlobalConfig)

  Global config를 설정하여 비디오 미들웨어에 의해 사용됩니다.

- [removeVideoMiddleware (videoMiddleware)를 제거하십시오](#removeVideoMiddleware)

  비디오 미들웨어를 제거, 거기에 있다면.

- [제거AllVideoMiddlewares()](#removeAllVideoMiddlewares)

  모든 비디오 미들웨어를 제거, 그들은 거기에 있다면.

- [getCurrent장치()](#getCurrentDevices)

  현재 사용되는 미디어 장치를 반환합니다.

- [getAudio장치()](#getAudioDevices)

  지역 참가자의 오디오 장치를 반환합니다.

- [getVideo장치()](#getVideoDevices)

  지역 참가자의 비디오 장치를 반환합니다.

- [getSpeaker장치()](#getSpeakerDevices)

  현지 참가자의 스피커 장치를 반환합니다.

- [getDeviceById(deviceId, 종류)](#getDeviceById)

  지역 참가자의 장치를 반환, ID와 종류에 의해 색인.

- [setDevice(장치)](#setDevice)

  현지 참가자가 사용하는 현재 미디어 장치를 변경하십시오.

[]()

수익률`audioTrack`.

**이름 \***: 글로벌 변수\
[]()

수익률`rawAudioTrack`그것을 실행하는 미들웨어가 없습니다.

**이름 \***: 글로벌 변수\
[]()

사용자에 의해 주어진 현재 오디오 및 비디오 권한을 반환합니다. 'ACCEPTED' 사용자가 미디어를 사용할 권한을 부여 한 경우. 'CANCELED' 사용자가 Screenshare를 취소 한 경우. 'DENIED' 사용자가 미디어를 사용할 수있는 권한을 거부 한 경우. 'SYS DENIED' 사용자가 미디어를 사용하는 권한을 거부 한 경우. 미디어가 사용할 수없는 경우 'UNAVAILABLE' (또는 다른 응용 프로그램에 의해 사용됩니다).

**이름 \***: 글로벌 변수\
[]()

수익률`videoTrack`.

**이름 \***: 글로벌 변수\
[]()

수익률`videoTrack`그것을 실행하는 미들웨어가 없습니다.

**이름 \***: 글로벌 변수\
[]()

화면 공유 트랙을 반환합니다.

**이름 \***: 글로벌 변수\
[]()

오디오가 활성화되면 true를 반환합니다.

**이름 \***: 글로벌 변수\
[]()

비디오가 활성화되면 true를 반환합니다.

**이름 \***: 글로벌 변수\
[]()

화면 공유가 활성화되면 true를 반환합니다.

**이름 \***: 글로벌 변수\
[]()

**이름 \***: 글로벌 기능

| 계정 만들기      | 제품정보               | 기본 정보   |
| ----------- | ------------------ | ------- |
| 옵션 정보       | `Object`           |         |
| \[옵션.비디오]   | `boolean`          |         |
| \[옵션.audio] | `boolean`          |         |
| \[옵션.계약]    | `MediaConstraints` |         |
| \[스키프아와트]   | `boolean`          | `false` |
| \[컨텍스트]     | `Context`          | \`\`    |

[]()

원시 오디오 스트림에서 실행되는 오디오 미들웨어를 추가합니다. 1개 이상의 오디오 미들웨어가 있다면, 그들은 순서대로 실행됩니다. 변경할 수 있는 순서를 원하면 이전의 미들웨어와 재 추가를 제거하십시오.

**이름 \***: 글로벌 기능

| 계정 만들기        | 제품정보              |
| ------------- | ----------------- |
| 오디오Middleware | `AudioMiddleware` |

[]()

오디오 미들웨어를 제거, 거기에 있다면.

**이름 \***: 글로벌 기능

| 계정 만들기        | 제품정보              |
| ------------- | ----------------- |
| 오디오Middleware | `AudioMiddleware` |

[]()

모든 오디오 미들웨어를 제거하고 있다면.

**이름 \***: 글로벌 기능\
[]()

원시 비디오 스트림에서 실행되는 비디오 미들웨어를 추가합니다. 1 개 이상의 비디오 미들웨어가 있다면, 그들은 순서대로 실행됩니다. 변경할 수 있는 순서를 원하면 이전의 미들웨어와 재 추가를 제거하십시오.

**이름 \***: 글로벌 기능

| 계정 만들기        | 제품정보              |
| ------------- | ----------------- |
| 비디오Middleware | `VideoMiddleware` |

[]()

Global config를 설정하여 비디오 미들웨어에 의해 사용됩니다.

**이름 \***: 글로벌 기능

| 계정 만들기                           | 제품정보                          | 이름 \*                                                                                                                                                                             |
| -------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config 설정                        | `VideoMiddlewareGlobalConfig` | config 설정                                                                                                                                                                         |
| config.disablePerFrameCanvas 렌더링 | `boolean`                     | true로 설정하면 모든 프레임에 대한 Middleware를 호출하는 대신 Middleware는 빈 캔버스와 같은 한 번 호출됩니다. 이 캔버스를 업데이트하기 위해 Midware 저자의 책임입니다.`meeting.self.rawVideoTrack`주기적인 갱신을 위한 영상 궤도를 검색하기 위하여 사용될 수 있습니다. |

[]()

비디오 미들웨어를 제거, 거기에 있다면.

**이름 \***: 글로벌 기능

| 계정 만들기        | 제품정보              |
| ------------- | ----------------- |
| 비디오Middleware | `VideoMiddleware` |

[]()

모든 비디오 미들웨어를 제거, 그들은 거기에 있다면.

**이름 \***: 글로벌 기능\
[]()

현재 사용되는 미디어 장치를 반환합니다.

**이름 \***: 글로벌 기능\
[]()

지역 참가자의 오디오 장치를 반환합니다.

**이름 \***: 글로벌 기능\
[]()

지역 참가자의 비디오 장치를 반환합니다.

**이름 \***: 글로벌 기능\
[]()

현지 참가자의 스피커 장치를 반환합니다.

**이름 \***: 글로벌 기능\
[]()

지역 참가자의 장치를 반환, ID와 종류에 의해 색인.

**이름 \***: 글로벌 기능

| 계정 만들기 | 제품정보                                  | 이름 \*                    |
| ------ | ------------------------------------- | ------------------------ |
| 장치Id   | `string`                              | 장치의 ID.                  |
| 이름 \*  | `'audio'` \| `'video'` \| `'speaker'` | 장치의 종류: 오디오, 영상, 또는 스피커. |

[]()

현지 참가자가 사용하는 현재 미디어 장치를 변경하십시오.

**이름 \***: 글로벌 기능

| 계정 만들기 | 제품정보              | 이름 \*                                  |
| ------ | ----------------- | -------------------------------------- |
| 제품정보   | `MediaDeviceInfo` | 사용중인 장치. 같은 장치의`kind`대체될 것입니다. 기본 스트림. |
