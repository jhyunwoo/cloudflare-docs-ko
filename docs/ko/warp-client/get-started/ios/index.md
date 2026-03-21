---
title: iOS 모바일 클라이언트 · Cloudflare WARP client 문서
description: 기본적으로 1.1.1.1:Faster Internet는 WARP 모드로 설정되어 있습니다.
  DNS 질의만 암호화하고 나머지 트래픽은 암호화하지 않도록 구성할 수도 있습니다.
lastUpdated: 2025-08-20T21:45:15.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/warp-client/get-started/ios/
  md: https://developers.cloudflare.com/warp-client/get-started/ios/index.md
---

Consumer WARP

이 문서는 WARP의 소비자용 버전을 위한 것입니다. Cloudflare Zero Trust와 함께 WARP를 사용 중이라면 [Zero Trust documentation](https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/warp/)를 참고하세요.

기본적으로 1.1.1.1:Faster Internet는 WARP 모드로 설정되어 있습니다. DNS 질의만 암호화하고 나머지 트래픽은 암호화하지 않도록 구성할 수도 있습니다.

## 1.1.1.1: Faster Internet 설정

1. [App Store의 1.1.1.1: Faster Internet](https://apps.apple.com/us/app/1-1-1-1-faster-internet/id1423538627)을 무료로 다운로드합니다.
2. 1.1.1.1: Faster Internet를 실행하고 Terms of Service에 동의합니다.
3. 휴대폰이 1.1.1.1에 안전하게 연결되도록 해 주는 VPN profile을 설치합니다.
4. **WARP** 버튼을 **Connected**로 전환합니다.

이제 인터넷 연결과 DNS 질의가 보호됩니다.

## DNS 질의만 암호화하기

1.1.1.1: Faster Internet를 설치한 뒤에는 DNS 질의만 암호화하고 나머지 트래픽은 암호화하지 않도록 하고 싶을 수 있습니다. 이 경우 다음 단계를 따르세요.

1. 1.1.1.1: Faster Internet를 엽니다.
2. WARP 버튼을 전환하고 **Switch to DNS only mode**를 선택합니다.
3. WARP 토글이 연결 해제 상태라면 **menu** 버튼을 탭합니다.
4. 1.1.1.1과 WARP라는 두 옵션이 표시됩니다. **1.1.1.1** > **Done**을 선택합니다.

이제 DNS 질의에 대해서만 암호화를 사용하고 있습니다.

## 1.1.1.1 for Families 활성화

1. 1.1.1.1: Faster Internet를 엽니다.
2. **menu button**을 탭합니다.
3. **Advanced** > **Connection options**를 선택합니다.
4. **DNS settings** > **1.1.1.1 for Families**에서 사용할 옵션을 선택합니다.

## 애플리케이션 제거 방법

1. 홈 화면에서 애플리케이션을 찾습니다.
2. 애플리케이션 타일을 길게 터치합니다.
3. **Remove App**을 선택합니다.
4. **Delete App**을 선택합니다.
