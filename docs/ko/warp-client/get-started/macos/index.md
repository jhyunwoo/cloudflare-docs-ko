---
title: macOS 데스크톱 클라이언트 · Cloudflare WARP client 문서
description: WARP가 이제 실행 중이며 인터넷 연결을 보호하고 있습니다.
lastUpdated: 2025-08-20T21:45:15.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/warp-client/get-started/macos/
  md: https://developers.cloudflare.com/warp-client/get-started/macos/index.md
---

Consumer WARP

이 문서는 WARP의 소비자용 버전을 위한 것입니다. Cloudflare Zero Trust와 함께 WARP를 사용 중이라면 [Zero Trust documentation](https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/warp/)를 참고하세요.

1. [Download](https://downloads.cloudflareclient.com/v1/download/macos/ga) Cloudflare WARP for macOS.
2. 미리 지정된 다운로드 폴더로 이동해 `.pkg` 파일을 엽니다.
3. 안내에 따라 설치를 완료합니다. Cloudflare WARP는 자동으로 실행되며 Cloudflare 로고와 함께 menu bar에 표시됩니다.
4. **Next**와 **Accept**를 선택해 Cloudflare의 privacy policy에 동의합니다.
5. 토글을 켜서 WARP를 활성화합니다.

이제 WARP가 실행 중이며 인터넷 연결을 보호하고 있습니다.

## WARP 모드

WARP 앱에는 두 가지 주요 동작 모드가 있습니다. WARP와 1.1.1.1입니다.

WARP 모드에서는 DNS 트래픽을 포함해 컴퓨터를 떠나는 모든 트래픽이 암호화되어 WARP를 통해 전송됩니다. 1.1.1.1 모드에서는 WARP 앱이 1.1.1.1 resolver로 향하는 DNS 트래픽만 암호화합니다.

WARP 모드는 기본값이자 권장 모드입니다. 그러나 1.1.1.1 resolver 모드만 사용하고 싶다면 다음 단계를 따르세요.

1. WARP 앱 아이콘을 선택합니다.
2. cog 아이콘을 선택하고 WARP에 사용할 원하는 동작 모드를 고릅니다.

## WARP 옵션

두 가지 동작 모드 외에도 WARP 앱은 필요에 더 잘 맞도록 추가 옵션을 구성할 수 있게 해 줍니다. 예를 들어 Cloudflare에 연결할 때 사용할 프로토콜을 바꾸거나 [1.1.1.1 for Families](https://developers.cloudflare.com/1.1.1.1/setup/#1111-for-families)를 활성화할 수 있습니다. 이 옵션에 접근하려면 다음 단계를 따르세요.

1. WARP 앱 아이콘을 선택합니다.
2. **cog icon** > **Preferences**를 선택합니다.

**Connection** 탭에서 구성할 수 있는 옵션은 다음과 같습니다.

* **Disable for all Wi-Fi / wired networks**: WARP가 동작하지 않게 할 네트워크에 해당하는 체크박스를 선택합니다.

* **DNS Protocol**: 사용 중인 WARP 모드에 따라 선택 가능한 옵션이 달라집니다.

  * **WARP**: WARP 모드가 활성화되어 있을 때만 사용할 수 있습니다. 모든 DNS 트래픽이 암호화되어 [Cloudflare's global network](https://developers.cloudflare.com/warp-client/warp-modes/#1111-with-warp)로 전송됩니다.
  * **HTTPS**: 모든 DNS 트래픽이 터널 밖에서 [DNS over HTTPS](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/)를 통해 전송됩니다.
  * **TLS**: 모든 DNS 트래픽이 터널 밖에서 [encrypted TLS](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-tls/)를 통해 전송됩니다.

* **1.1.1.1 for Families**: [1.1.1.1 for Families](https://developers.cloudflare.com/1.1.1.1/setup/#1111-for-families)를 활성화하고 malware 차단 또는 malware와 adult content 차단 중에서 선택할 수 있습니다.

**Advanced** 옵션에 대한 자세한 내용은 [Exclude or include network traffic with WARP](https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/warp/configure-warp/route-traffic/)를 참고하세요.

## Cloudflare가 기기에 설치하는 항목

### Cloudflare WARP.app

이 애플리케이션은 사용자가 직접 상호작용하는 기본 GUI 애플리케이션입니다. ` /Applications/Cloudflare WARP.app`가 아니라 `/Applications/Cloudflare WARP.app`에서 찾을 수 있습니다.

### Cloudflare WARP Daemon

이 daemon service는 wireguard tunnel을 설정하고 서비스 endpoint와 Cloudflare WARP 애플리케이션 사이의 모든 상호작용을 담당합니다. 다음 위치에서 찾을 수 있습니다.

- **Service**: `/Applications/Cloudflare WARP.app/Contents/Resources/CloudflareWARP`
- **Definition**: `/Library/LaunchDaemons/com.cloudflare.1dot1dot1dot1.macos.warp.daemon.plist`

### 로그 파일

macOS 애플리케이션은 어떤 부분이 정보를 기록하는지에 따라 두 위치에 로그 파일을 저장합니다. 이 로그는 **Feedback** > **Share debug information**에서 체크박스를 선택했을 때 피드백 제출에 포함됩니다.

- **Daemon and install logs**: `/Library/Application Support/Cloudflare`.
- **Application GUI logs**: `/Users/<your local username>/Library/Logs/Cloudflare`.

## 애플리케이션 제거 방법

설치한 macOS 패키지에는 uninstall script가 포함되어 있습니다. 터미널 창에서 다음을 입력해 WARP를 제거하세요.

```sh
cd /Applications/Cloudflare\ WARP.app/Contents/Resources
./uninstall.sh
```

Note

애플리케이션을 제거하는 동안 자격 증명을 입력하라는 메시지가 나타날 수 있습니다.
