---
title: 하이브리드 사용자를위한 분산 자체 호스팅 VoIP 서비스 · Cloudflare 참고 자료 건축 문서
description: Cloudflare가 글로벌 네트워크를 활용하여 기존의 VPN 솔루션을 개선하는 방법을 알아보세요.
lastUpdated: 2026-01-30T22:09:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/reference-architecture/diagrams/sase/deploying-self-hosted-voip-services-for-hybrid-users/
  md: >-
    https://developers.cloudflare.com/reference-architecture/diagrams/sase/deploying-self-hosted-voip-services-for-hybrid-users/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/reference-architecture/diagrams/sase/deploying-self-hosted-voip-services-for-hybrid-users/
translation_source_md: >-
  https://developers.cloudflare.com/reference-architecture/diagrams/sase/deploying-self-hosted-voip-services-for-hybrid-users/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품정보

전통적인 VPN 솔루션은 VoIP 배포에 대한 몇 가지 문제를 발생시키고, 주로 실시간 트래픽 프로토콜을 처리하는 데있어[사이트맵](https://en.wikipedia.org/wiki/Session_Initiation_Protocol)·[사이트맵](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol). Legacy VPN 배포는 음성 통화 품질에 부정적인 영향을 미치는 높은 지연 및 지터를 소개합니다. 또한, 그들은 종종 투쟁과[사이트맵](https://en.wikipedia.org/wiki/Network_address_translation)VoIP 통화에 대한 연결 문제로 선두.

Cloudflare는 기존의 VPN 솔루션을 통해 개선하여[글로벌 네트워크](https://www.cloudflare.com/network/)의 데이터 센터 이상 330 도시는 크게 원격 사용자를위한 대기 시간을 감소. 우리의 장치 대리인을 사용할 때, 원격 사용자는 가장 가까운 Cloudflare 자료 센터에 자동적으로 연결되고, 따라서 대기권을 감소시킵니다.

이 문서는 Cloudflare를 사용하여 자체 호스팅 VoIP 서비스에 대한 건축가 접근 방법을 설명합니다. 아래의 솔루션을 참고하세요.[WARP 연결관](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/private-net/warp-connector/), VoIP 서버와 같은 서브넷에 서버에 배포 된 소프트웨어의 작은 조각 및 사용자 Cloudflare를 통해 양방향 트래픽 흐름을 생성합니다.

## 양방향 VoIP 트래픽 흐름

![그림 1: Cloudflare는 SIP 서버가 실행되는 네트워크에 사용자 장치에서 안전한 연결을 촉진합니다.](https://developers.cloudflare.com/_astro/figure1.lv12Z4R7_S2e8p.svg)

위의 다이어그램은 WARP 커넥터 및 당사의 장치 에이전트는 전용 VoIP 서비스에 대한 높은 실행, 신뢰할 수있는 연결성을 구축합니다. Cloudflare는 장치 대리인 사이에서 창조된 개인적인 네트워크를 위해 사용되는 CGNAT 범위에서 먼 사용자를, 할당할 것입니다. WARP 커넥터는 원격 사용자와 공공 인터넷에 서버를 exposing하지 않고 온프레미스 SIP 서버 간의 보안, 양방향 통신을 보장합니다. 실시간 통신을 위한 원활하고 암호화된 연결을 유지하면서 잠재적인 공격으로부터의 VoIP 인프라를 보호합니다.

1. VoIP 서버는 공공 IP가없는 개인 네트워크에 의존합니다.
2. 모델 번호: WARP 연결관은 Cloudflare에 안전한 갱도를 창조하고 개인 네트워크에 있는 사실상 대패로 형성됩니다.
3. VoIP 서버에 도달하려면 Cloudflare에서 트래픽을 허용하지만, 또한 서버에서 아웃 바운드 VoIP 통화와 같은 개인 네트워크 개시 트래픽을 허용, Cloudflare 터널을 통해 경로. 위의 다이어그램에서 우리는 기본 게이트웨이의 정적 경로를 추가합니다.`100.96.0.0/12`(WARP CGNAT 범위)를 통해`10.0.50.10`(WARP 연결관 가상 대패).
4. 교통 패스를 통해[보안 웹 게이트웨이](https://developers.cloudflare.com/cloudflare-one/traffic-policies/)(SWG)는 네트워크 수준의 방화벽 규칙을 inbound 및 outbound 트래픽에 적용합니다.
5. 장치 에이전트는 원격 사용자 장치에 설치됩니다. 에이전트는 Cloudflare에 안전한 터널을 설치, VoIP 소프트웨어를 수신하고 통화를 만들 수 있습니다.

## 통화 흐름 예제

원격 사용자의 장치에서 실행되는 VoIP 소프트웨어는 SIP를 사용하여 VoIP 서버로 등록합니다. Cloudflare 장치 대리인은 CGNAT IP 범위에서 주소를 할당될 것입니다,`100.96.0.0/12`. 여정으로 Cloudflare에 설치되었습니다`100.96.0.0/12`그리고 온-프레미스 네트워크`10.0.50.0/24`, 통화 흐름은 정상으로 작동한다 - 직접 및 간접 미디어 모두 지원된다.

### 원격 사용자 다른 원격 사용자 호출

호출이 사용자에서 사용자까지 만들 때, Cloudflare를 통해 사용자 장치에서 온프레미스 서버로, 다른 트래픽이 Cloudflare를 통해 직접 다른 사용자에 흐릅니다. 장치 에이전트는 CGNAT 주소가 경로를 통해 안전한 터널을 만들 것입니다. 이 흐름의 두 사용자는 서버와 SIP 클라이언트를 등록했습니다.

![그림 2: 리모트 사용자를 위해, SIP 서버에 WARP 연결관에 모든 교통 교류.](https://developers.cloudflare.com/_astro/figure2.DATzV5BV_Z1krIAt.svg)

위의 다이어그램은 고도 신호 및 미디어 경로를 보여줍니다.

1. Alice는 SIP 서버에 직접 등록합니다 (`10.0.50.60`) Cloudflare로 CGNAT IP 할당`100.96.0.12`.
2. Bob은 SIP 서버에 직접 등록합니다 (`10.0.50.60`) CGNAT IP로`100.96.0.13`.
3. Alice가 Bob에게 전화를 걸 때 SIP 서버는 SIP INVITE 메시지를 Bob에게 보낼 것입니다.`100.96.0.13`.
4. SIP 서버의 기본 게이트웨이는`10.50.0.1`, 그러나 우리는 목적지를 위해 그런 정체되는 노선을 정의했습니다`100.96.0.0/12`, 다음 hop는 WARP 커넥터 인터페이스 (`10.0.50.10`).
5. SIP INVITE 메시지는 WARP 커넥터를 Cloudflare 네트워크에 따라 경로로 변환되며 Bob이 받았습니다.
6. Bob은 SIP 서버가 Alice와 Bob 둘 다에 SIP/SDP 메시지를 보낼 것입니다.
7. SIP 서버가 오디오 경로에 있지 않은 Direct Media 경로와 RTP 스트림은 Alice와 Bob과 직접 연결됩니다.[**모든 Cloudflare 허용 등록 장치에 도달 한 트래픽**](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/private-net/warp-to-warp/#enable-warp-to-warp)Cloudflare에서 활성화되었습니다. 다이렉트 미디어 사용 케이스의 오디오 스트림은 WARP 커넥터를 넘길 필요가 없습니다.

### 원격 사용자 on-premise 사용자

원격 및 온프레미스 사용자 사이의 통화는 매우 유사하지만 RTP 오디오는 SIP 신호 외에도 WARP 커넥터를 통해 전송됩니다.

![그림 3: 온프레미스 사용자에게 원격 사용자는 SIP 서버 및 클라이언트에 Cloudflare를 통해 모든 트래픽을 경로를 가지고 있습니다.](https://developers.cloudflare.com/_astro/figure3.Bnu64MY9_Z1i39Dm.svg)

고수준 신호 및 매체 경로는 아래에 보입니다:

![그림 4: 두 신호 및 매체 (오디오, 영상 등)는 원격 장치에서 온프레미스 클라이언트에 안전한 갱도를 통해 여행합니다.](https://developers.cloudflare.com/_astro/figure4.pvAsOncQ_pPYt5.svg)

1. Alice는 SIP 서버에 직접 등록합니다 (`10.0.50.60`) 그녀의 CGNAT IP로`100.96.0.12`.
2. Bob은 SIP 서버에 직접 등록합니다 (`10.0.50.60`) LAN IP로`10.0.50.101`.
3. Alice가 Bob에게 전화를 걸 때 SIP 서버는 SIP INVITE 메시지를 Bob에게 보낼 것입니다.`10.0.50.101`.
4. SIP 서버의 기본 게이트웨이는`10.50.0.1`, 그러나 우리는 목적지를 위해 그런 정체되는 노선을 정의했습니다`100.96.0.0/12`, 다음 hop는 WARP 커넥터 인터페이스 (`10.0.50.10`).
5. SIP INVITE 메시지는 로컬 네트워크에서 Bob로 전송됩니다.
6. Bob은 SIP 서버가 Alice와 Bob 둘 다에 SIP/SDP 메시지를 보낼 것입니다.
7. 밥은 앨리스에게 오디오를 보낼 것입니다`100.96.0.12`WARP 연결관을 Cloudflare에 건너골, 앨리스는 밥에 오디오를 보낼 것입니다`10.0.50.101`WARP 연결관에서 온프레미스 국부적으로 네트워크에 Cloudflare에서 보내질 것입니다.

## 제품정보

Cloudflare의 WARP로 커넥터, 원격 사용자는 다른 원격 사용자 또는 온-프레미스 SIP 서버를 통해 온-프레미스 사용자와 통신 모두에 대한 원활하고 안전한 경험을 가질 것입니다. 주요 이점은 다음을 포함합니다:

1. **양방향 연결**: WARP 커넥터는 원격 사용자를 위해 중요한 양방향 트래픽을 지원합니다. 신호 및 미디어 트래픽 모두 (SIP/RTP)는 사용자가 물리적으로 위치하는 곳에 관계없이 2 사이에서 안전하게 흐릅니다. 암호화 터널을 사용하여 Cloudflare의 글로벌 네트워크를 통해 수행되며 데이터 무결성 및 암호화를 보장합니다.

2. **CGNAT에 대한 개인 통신**: WARP 커넥터는 캐리어 등급 NAT (CGNAT) IP를 장치에 할당하여 원격 사용자가 개인 네트워크에서 온프레미스 사용자와 안전하게 통신 할 수 있습니다. 이 통신은 공공 인터넷에서 격리되어 보안을 강화하는 것을 보장합니다. CGNAT 기능은 원격 및 온프레미스 사용자가 같은 네트워크에 있지만 통신 할 수 있음을 의미합니다.

3. **NAT 트래블 문제 없음**: NAT는 종종 VoIP 시나리오에서 도전을 포즈하지만 WARP 커넥터는 소스 IP 주소를 보존하고 추가 NAT 경계없이 양방향 트래픽을 처리, 원격 및 온-프레미스 사용자는 일반적으로 방화벽 또는 NAT 장치에 의해 발생하지 않고 통신 할 수 있습니다, 전체 통화 설정 및 품질 향상.

## 관련 자료

- [WARP 연결관을 설치하십시오](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/private-net/warp-connector/)
- [Enable WARP-to-WARP 연결](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/private-net/warp-to-warp/#enable-warp-to-warp)
- [Cloudflare WARP에 관하여](https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/warp/)
