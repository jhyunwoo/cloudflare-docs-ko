---
title: DEX 장치 국가 이벤트
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/dex_device_state_events/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/dex_device_state_events/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`dex_device_state_events`.

## 계정 ID

유형:`string`

Cloudflare 계정 ID.

## 항상에

유형:`bool`

WARP daemon가 자동 또는 아닙니다.

## AppFirewall사용

유형:`bool`

Application-level 방화벽이 활성화되거나 비활성화되었는지 여부.

## 배터리 충전

유형:`bool`

건전지가 위탁하든.

## 배터리사이클

유형:`int`

건전지 주기의 수. 모든 플랫폼에서 사용할 수 없습니다.

## 배터리요금

유형:`float`

배터리의 비율은 0에서 나머지 - 1.

## CPU의 장점

유형:`float`

0에서 CPU 이용률의 비율 - 1.

## CPUPercentageByApp의 장점

유형:`array[object]`

CPU의 비율에 의해 최고 신청은, 예를 들면 사용했습니다`[{"name": "app0", "percentage": 0.55}, {"name": "app1", "percentage": 0.45}]`.

## Client플랫폼

유형:`string`

클라이언트의 OS.

## 고객Version

유형:`string`

WARP 클라이언트 버전.

## 연결 유형

유형:`string`

연결의 유형에는 있습니다. 수 있습니다`cellular`, `ethernet`, 또는`wifi`.

## 장치ID

유형:`string`

유일한 장치 ID.

## DeviceIPv4주소

유형:`string`

장치의 개인 IPv4 주소.

## 장치IPv4Netmask

유형:`string`

장치의 개인 IPv4 netmask.

## DeviceIPv6주소

유형:`string`

장치의 개인 IPv6 주소.

## 장치IPv6Netmask

유형:`string`

장치의 개인 IPv6 netmask.

## 장치등록ID

유형:`string`

장치 등록에 대한 독특한 ID.

## 디스크ReadBPS

유형:`int`

초당 디스크 바이트 읽는 수.

## DiskUsage요금

유형:`float`

0에서 사용되는 디스크의 비율 - 1.

## 디스크WriteBPS

유형:`int`

초당 기록된 디스크 바이트 수.

## 다운로드

유형:`string`

WARP 클라이언트의 DoH subdomain.

## 방화벽Enabled

유형:`bool`

시스템 수준 방화벽이 활성화되거나 비활성화되었는지 여부.

## GatewayIPv4주소

유형:`string`

Gateway/router의 개인 IPv4 주소는 장치에 연결됩니다.

## 게이트웨이IPv4Netmask

유형:`string`

Gateway/router의 프라이빗 IPv4 netmask 장치가 연결됩니다.

## GatewayIPv6주소

유형:`string`

Gateway/router의 개인 IPv6 주소는 장치에 연결됩니다.

## 게이트웨이IPv6Netmask

유형:`string`

Gateway/router의 프라이빗 IPv6 netmask 장치가 연결됩니다.

## HandshakeLatencyMs의 장점

유형:`int`

WARP가 연결될 때, 밀리 초에 있는 갱도의 추정된 대기권. 분리될 때, -1.

## 모델 번호: ISPIPv4ASN

유형:`int`

ISP에 의해 할당 된 장치의 공용 IPv4 자율 시스템 번호, 예를 들어`13335`.

## 아이SPIPv4 사이트맵

유형:`string`

ISP에 의해 할당 된 장치의 공용 IPv4 자율 시스템 조직, 예를 들어`Cloudflare Inc`.

## ISPIPv4주소

유형:`string`

ISP에 의해 할당된 장치의 공용 IPv4 주소.

## ISPIPv4도시

유형:`string`

ISP에 의해 할당 된 장치의 영어 언어의 공용 IPv4 도시 이름, 예를 들어`San Francisco`.

## ISPIPv4카트리

유형:`string`

ISP에 의해 할당 된 장치의 공용 IPv4 국가 ISO 코드, 예를 들어`US`미국.

## ISPIPv4Netmask의 특징

유형:`string`

ISP에 의해 할당된 장치의 공개 IPv4 netmask.

## ISPIPv4스타트

유형:`string`

ISP에 의해 할당 된 장치의 공개 IPv4 상태 ISO 코드, 예를 들어`CA`캘리포니아.

## ISPIPv4지프

유형:`string`

ISP에 의해 할당 된 장치의 공개 IPv4 우편 번호, 예를 들어`90001`.

## 모델 번호: ISPIPv6ASN

유형:`int`

ISP에 의해 할당 된 장치의 공용 IPv6 자율 시스템 번호, 예를 들어`13335`.

## 아이SPIPv6ASO

유형:`string`

ISP에 의해 할당 된 장치의 공용 IPv6 자율 시스템 조직, 예를 들어`Cloudflare Inc`.

## ISPIPv6주소

유형:`string`

ISP에 의해 할당된 장치의 공용 IPv6 주소.

## ISPIPv6도시

유형:`string`

ISP에 의해 할당 된 장치의 영어 언어의 공용 IPv6 도시 이름, 예를 들어`San Francisco`.

## ISPIPv6CountryISO의 특징

유형:`string`

ISP에 의해 할당 된 장치의 공용 IPv6 국가 ISO 코드, 예를 들어`US`미국.

## ISPIPv6Netmask의 특징

유형:`string`

ISP에 의해 할당된 장치의 공개 IPv6 netmask.

## ISPIPv6스타트

유형:`string`

ISP에 의해 할당 된 장치의 공개 IPv6 상태 ISO 코드, 예를 들어`CA`캘리포니아.

## ISPIPv6지프

유형:`string`

ISP에 의해 할당 된 장치의 공개 IPv6 우편 번호, 예를 들어`90001`.

## 주요 특징

유형:`string`

WARP 클라이언트 연결 형태, 예를들면.`warp+doh`, `proxy`.

## 네트워크ReceivedBPS

유형:`int`

초당 수신되는 네트워크 바이트 수.

## 네트워크

유형:`string`

네트워크의 SSID는 장치에, 최대 32의 특성 연결됩니다.

## 네트워크SentBPS

유형:`int`

초당 전송되는 네트워크 바이트 수.

## RAMAvailableKB

유형:`int`

킬로바이트의 총 사용 가능한 RAM.

## RAMUsedPercentage

유형:`float`

0에서 RAM 활용의 비율 - 1.

## RAM사용PercentageByApp

유형:`array[object]`

RAM의 비율로 최고 응용 프로그램, 예를 들어`[{"name": "app0", "percentage": 0.55}, {"name": "app1", "percentage": 0.45}]`.

## 주요연혁

유형:`string`

WARP 클라이언트 연결 상태, 예를들면.`connected`, `paused`.

## Switch잠금 해제

유형:`bool`

WARP 클라이언트가 항상 활성화되었는지 여부.

## 스크린 샷

유형:`int or string`

이벤트 타임스탬프.

## TunnelStatsDownstream의 장점

유형:`object`

전쟁 터널 다운스트림 통계, MASQUE 터널에 초점을 맞추고, 예를 들어`{"rttUs": 5, "minRttUs": 1, "rttVarUs": 1, "packetsSent": 100, "packetsLost": 50, "packetsRetransmitted": 25, "bytesSent": 1000, "bytesLost": 500, "bytesRetransmitted": 250}`.

## TunnelStats업스트림

유형:`object`

전쟁 터널 업스트림 통계, MASQUE 터널에 초점을 맞추고, 예를 들어`{"rttUs": 5, "minRttUs": 1, "rttVarUs": 1, "packetsSent": 100, "packetsLost": 50, "packetsRetransmitted": 25, "bytesSent": 1000, "bytesLost": 500, "bytesRetransmitted": 250}`.

## 비밀번호

유형:`string`

터널 유형 장치는 가장자리에 연결을 설정하는 데 사용됩니다. 수 있습니다`http2`, `masque`, 또는`wireguard`.

## 다운로드

유형:`string`

클라이언트가 우리의 API에 연결되는 colo 부호. 사이트맵`DFW`또는`none`.

## 와이파이StrengthDBM

유형:`int`

decibel milliwatts의 WiFi 강도. -30와 -90 사이 가늠자.
