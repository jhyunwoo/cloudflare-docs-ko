---
title: RTKPermissionsPreset · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpermissionspreset/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpermissionspreset/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpermissionspreset/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpermissionspreset/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

PermissionPreset 클래스는 현재 참가자를위한 회의 권한을 나타냅니다

- [제출Preset](#module_PermissionPreset)

  - *이름 \**

    - [.Enabled의](#module_PermissionPreset+stageEnabled)
    - [.stage액세스](#module_PermissionPreset+stageAccess)
    - [.accept와 제품정보](#module_PermissionPreset+acceptWaitingRequests)
    - [.request비디오](#module_PermissionPreset+requestProduceVideo)
    - [.requestProduce오디오](#module_PermissionPreset+requestProduceAudio)
    - [.request프로그램](#module_PermissionPreset+requestProduceScreenshare)
    - [.canAllow파트너](#module_PermissionPreset+canAllowParticipantAudio)
    - [.canAllow파트너스](#module_PermissionPreset+canAllowParticipantScreensharing)
    - [.canAllow파트너영상](#module_PermissionPreset+canAllowParticipantVideo)
    - [.canDisableParticipant오디오](#module_PermissionPreset+canDisableParticipantAudio)
    - [.canDisable파트너스](#module_PermissionPreset+canDisableParticipantVideo)
    - [.kick파트너](#module_PermissionPreset+kickParticipant)
    - [.pin파트너](#module_PermissionPreset+pinParticipant)
    - [.canRecord에 관하여](#module_PermissionPreset+canRecord)
    -
    - [숙박 플랜](#module_PermissionPreset+waitingRoomBehaviour)
    - [. 플러그인](#module_PermissionPreset+plugins)
    - [· .polls](#module_PermissionPreset+polls)
    -
    -
    - [.canProduce비디오](#module_PermissionPreset+canProduceVideo)
    -
    - [.canProduceScreenshare의](#module_PermissionPreset+canProduceScreenshare)
    -
    - [.canProduce오디오](#module_PermissionPreset+canProduceAudio)
    - [.chat 홍보](#module_PermissionPreset+chatPublic)
    - [.chat개인](#module_PermissionPreset+chatPrivate)
    - [.hidden파트너](#module_PermissionPreset+hiddenParticipant)
    - [.show파트너스](#module_PermissionPreset+showParticipantList)
    -
    - [.canChange파트너십](#module_PermissionPreset+canChangeParticipantPermissions)
    -
    -
    -
    -
    - [.canLivestream의](#module_PermissionPreset+canLivestream)

  - *제품 정보*

    - [.fromResponse()에서](#module_PermissionPreset.fromResponse)
    - [. 과태 ()](#module_PermissionPreset.default)

[]()

### 회의.self.permissions.stageEnabled

더 보기`stageEnabled`속성은 boolean 값을 반환합니다. 이름 \*`true`, 단계 관리는 참가자를 위해 유효합니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.stageAccess

더 보기`stageAccess`속성은 사용자가 단계와 상호 작용하는 방법을 결정합니다. 가능한 값`ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`;

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.acceptWaitingRequests

더 보기`acceptWaitingRequests`boolean 값을 반환합니다. 이름 \*`true`, participant는 대기 참가자의 요구를 받아들여서 좋습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.requestProduceVideo

더 보기`requestProduceVideo`boolean 값을 반환합니다. 이름 \*`true`, participant는 영상 생성에 관하여 참가자에게 요구에 보낼 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.requestProduceAudio

더 보기`requestProduceAudio`boolean 값을 반환합니다. 이름 \*`true`, participant는 오디오 생성에 관하여 참가자에게 요구를 보낼 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.requestProduceScreenshare

더 보기`requestProduceScreenshare`boolean 값을 반환합니다. 이름 \*`true`, participant는 스크린을 공유하는 참가자에게 요청을 보낼 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canAllowParticipantAudio

더 보기`canAllowParticipantAudio`boolean 값을 반환합니다. 이름 \*`true`, 참가자는 다른 참가자의 오디오를 가능하게 할 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canAllowParticipantScreensharing

더 보기`canAllowParticipantScreensharing`boolean 값을 반환합니다. 이름 \*`true`, 참가자는 다른 참가자의 스크린 공유를 가능하게 할 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canAllowParticipant비디오

더 보기`canAllowParticipantVideo`boolean 값을 반환합니다. 이름 \*`true`, 참가자는 다른 참가자의 영상을 가능하게 할 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canDisableParticipantAudio

이름 \*`true`, 참가자는 다른 참가자의 오디오를 비활성화 할 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canDisableParticipant비디오

이름 \*`true`참가자는 다른 참가자의 비디오를 비활성화 할 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.kickParticipant

더 보기`kickParticipant`boolean 값을 반환합니다. 이름 \*`true`, 참가자는 회의에서 다른 참가자를 제거 할 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.pinParticipant

더 보기`pinParticipant`boolean 값을 반환합니다. 이름 \*`true`, participant는 회의에 있는 참가자를 핀으로 만들 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canRecord

더 보기`canRecord`boolean 값을 반환합니다. 이름 \*`true`, participant는 회의를 기록할 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

###

***인기 있는***

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.waitingRoomBehaviour

더 보기`waitingRoomType`문자열 값을 반환합니다. 대기실 행동 가능한 값의 유형은`SKIP`, `ON_PRIVILEGED_USER_ENTRY`, `SKIP_ON_ACCEPT`

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.plugins

더 보기`plugins`participant가 플러그인에 행동 할 수 있다면 boolean 값으로 2 권한이 있습니다.`canStart`·`canClose`.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.polls

더 보기`polls`참가자가 polls를 사용할 수 있는지 알려줍니다. boolean 값을 가진 3개의 허가가 있습니다,`canCreate`, `canVote`, `canViewResults`

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

###

***인기 있는***

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

###

***인기 있는***

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canProduceVideo

더 보기`canProduceVideo`비디오 활성화를위한 권한을 보여줍니다. 가능한 값`ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

###

***인기 있는***

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canProduceScreenshare

더 보기`canProduceScreenshare`공유 화면의 권한을 보여줍니다. 가능한 값`ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

###

***인기 있는***

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canProduceAudio

더 보기`canProduceAudio`오디오를 활성화하기위한 권한을 보여줍니다. 가능한 값`ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.chatPublic

더 보기`chatPublic`공개 채팅에 대한 권한을 보여줍니다 4 권한`canSend`- true이면 참가자는 채팅을 보낼 수 있습니다.`text`- true이면 참가자는 텍스트를 보낼 수 있습니다.`files`- true이면 참가자는 파일을 보낼 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.chatPrivate

더 보기`chatPrivate`공개 채팅에 대한 권한을 보여줍니다 4 권한`canSend`- true인 경우, 참가자는 개인 채팅을 보낼 수 있습니다.`text`- true이면 participant는 개인 채팅으로 텍스트를 보낼 수 있습니다.`files`- true이면 participant는 개인 채팅으로 파일을 보낼 수 있습니다.`canReceive`- (선택 사항) true, participant는 개인 채팅을받을 수 있습니다

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.hiddenParticipant

더 보기`hiddenParticipant`boolean 값을 반환합니다. 이름 \*`true`, participant 숨겨진.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.showParticipantList

더 보기`showParticipantList`boolean 값을 반환합니다. 이름 \*`true`, participant 명부는 참가자에 보일 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

###

***인기 있는***

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canChangeParticipantPermissions

더 보기`canChangeParticipantPermissions`boolean 값을 반환합니다. 이름 \*`true`, 참가자의 권한을 변경할 수 있습니다.

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

###

***인기 있는***

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

###

***인기 있는***

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

###

***인기 있는***

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

###

***인기 있는***

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.canLivestream

라이브스트림

**이름 \***: 인스턴스 속성[`PermissionPreset`](#module_PermissionPreset)\
[]()

### 회의.self.permissions.fromResponse()

**이름 \***: 정적 방법[`PermissionPreset`](#module_PermissionPreset)\
**인기 있는**: 사용 init()\
[]()

### 회의.self.permissions.default ()

**이름 \***: 정적 방법[`PermissionPreset`](#module_PermissionPreset)\
**인기 있는**: 사용 init()
