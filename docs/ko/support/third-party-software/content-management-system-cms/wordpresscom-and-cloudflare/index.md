---
title: WordPress.com 및 Cloudflare · Cloudflare 지원 docs
description: >-
  Cloudflare 및 WordPress.com은 고객 Cloudflare의 성능 및 보안 솔루션을 WordPress.com의 웹 호스팅
  플랫폼을 제공하는 파트너입니다. 시작하기 쉽습니다.
lastUpdated: 2025-11-05T16:12:24.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/support/third-party-software/content-management-system-cms/wordpresscom-and-cloudflare/
  md: >-
    https://developers.cloudflare.com/support/third-party-software/content-management-system-cms/wordpresscom-and-cloudflare/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/support/third-party-software/content-management-system-cms/wordpresscom-and-cloudflare/
translation_source_md: >-
  https://developers.cloudflare.com/support/third-party-software/content-management-system-cms/wordpresscom-and-cloudflare/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## WordPress.com 및 CloudflareXQ로 시작하기

Cloudflare 및 WordPress.com은 고객 Cloudflare의 성능 및 보안 솔루션을 WordPress.com의 웹 호스팅 플랫폼을 제공하는 파트너입니다. 시작하기 쉽습니다.

1\. CloudflareXQ에 WordPress 사이트를 추가하십시오. 다음을 수행:

- [Cloudflare 계정 만들기](https://developers.cloudflare.com/fundamentals/account/create-account/).
- [도메인 등록](https://developers.cloudflare.com/fundamentals/manage-domains/add-site/)Cloudflare.에.

이 과정에서 Cloudflare는 기존의 WordPress.com DNS 레코드를 스캔하고 표시합니다. 기록은 아래 예와 유사합니다.

- `A example.com 192.0.78.12`
- `A example.com 192.0.78.13`

WordPress.com은 IP 주소를 결코 변경하지 않습니다. 최대 가동 시간을 위해, 당신은 뒤에 완료해야 합니다:

2\. 찾기`<site>.wordpress.com`도메인에서[도메인 관리](https://wordpress.com/domains/manage)사이트 맵 도메인은 다음과 같습니다.`examplecom.wordpress.com`, i.e. 귀하의 도메인은 non-alphanumeric 문자가 제거되었습니다.

3\. 도메인을 브라우저의 주소 표시줄에 입력하여 도메인이 올바른지 확인합니다.

4\. 기록 추가`CNAME @ examplecom.wordpress.com`.

5\. 기록 제거.

![완료된 CNAME 레코드 설정의 예.](https://developers.cloudflare.com/_astro/add-cname-wp.lnbdP-lN_ZfVriO.webp)

감사합니다! 귀하의 사이트는 이제 CloudflareXQ에 의해 가속화되고 보호됩니다.

***

## 추가 Cloudflare 제품 활성화

## **Cloudflare 웹 분석 (무료)**

Cloudflare 웹 Analytics는 웹 제작자에게 방문자의 개인 정보를 희생하지 않는 단순하고 깨끗한 방식으로 필요한 정보를 제공합니다. 파트너십의 목표 중 하나는 WordPress.com 사이트에 개인 정보 보호 우선 분석 솔루션을 가져올 것입니다.

### 모델 번호: Cloudflare

1\. [대시보드](https://dash.cloudflare.com/)계정 메뉴 선택 >**계정 홈**.

2\. 계정 홈페이지에서, 선택**Analytics 및 로그 > 웹 분석**.

3\. Web Analytics를 사용하여 호스트명을 입력합니다. 일반적으로 호스트 이름은 최상위 도메인이며,`example.com`.

4\. 클릭**이름 \***.

5\. 선택**자주 묻는 질문**이름 \***복사 JS Snippet**.

### 사이트 맵

1\. WordPress를 열고 사이트를 선택하십시오.

2\. 선택**회사 소개** > **회사 소개**.

3\. Cloudflare 단면도를 찾아내십시오.

4\. Cloudflare에서 복사한 코드를 붙여넣기**추적 ID**이름 \* 이 필드는 snippet에서 추적 ID를 추출합니다.

5\. 토글**Cloudflare에 추가**추적을 가능하게 합니다.

WordPress.com은 사이트의 각 페이지에 자바 스크립트를 자동으로 추가합니다. Cloudflare QX대시보드XQ에서 새로운 통찰력을 볼 수 있습니다.**웹 분석**.

## **WordPress.com ($ 5 / 월, Pro 및 Business 플랜 포함)에 대한 자동 플랫폼 최적화**

Cloudflare의[자동 플랫폼 최적화](https://www.cloudflare.com/automatic-platform-optimization/wordpress/)WordPress.com에 대한 가장 쉬운 방법은 WordPress.com 사이트를 가속화하는 것입니다. 이름 \*[APO 플러그인](https://wordpress.org/plugins/cloudflare/), Cloudflare는 지능적으로 캐싱 동적 콘텐츠로 WordPress.com 사이트를 가속화합니다. 방문자를위한 빠른 성능을 의미하지는 않습니다. 더 많은 정보를 원하시면, 참조[자동 플랫폼 최적화](https://developers.cloudflare.com/automatic-platform-optimization/)그리고에[블로그](https://blog.cloudflare.com/automatic-platform-optimizations-starting-with-wordpress/).

### **제품 정보**

제품정보

더 보기[자동 플랫폼 최적화 (APO)](https://www.cloudflare.com/automatic-platform-optimization/wordpress/)특징은 당신이 위에 있어야 합니다[전체 설정](https://developers.cloudflare.com/dns/zone-setups/full-setup/)Cloudflare 이름서버를 사용하여.

- Cloudflare 무료 플랜 + $5/month APO 추가 또는 프로 또는 비즈니스 플랜 구독 (APO 포함)
- WordPress.com 비즈니스 계획 이상 ( 플러그인 필요)

### **설치 및 활성화 APO**

1\. WordPress에서 설치[Cloudflare 워드 프레스 플러그인](https://wordpress.org/plugins/cloudflare/)WordPress 웹 사이트 또는 최신 버전으로 업데이트 (3.8.2 이상).

2\. [플러그인 인증](https://wordpress.org/plugins/cloudflare/#installation)CloudflareXQ에 연결하려면 이미 수행되지 않은 경우.

3\. Cloudflare 단면도의 가정 스크린에서, 자동적인 플랫폼 Optimization에 돌십시오.

더 자세한 내용은 참조[WordPress로 자동 플랫폼 최적화 (APO) 이해](https://developers.cloudflare.com/automatic-platform-optimization/).

***

## 문제 해결

### **CloudflareXQ가 이제 DNS 공급자가 기록되었는지 확인합니까?**

1\. 방문[모델 번호: https://dnschecker.org](https://dnschecker.org/#A/s-steiner.com).

2\. 아래 드롭다운에서**DNS 확인, s**elect NS 레코드.

3\. 텍스트 필드에서 도메인 이름을 입력하고 클릭**이름 \***.

4\. Cloudflare 네임서버 디스플레이를 검증합니다.

### **APO가 가동되고 실행되는 것을 어떻게 확인할 수 있습니까?**

터미널에서 다음의 cURL을 사용하십시오. 헤드러`'accept: text/html'`중요 정보

```sh
curl -svo /dev/null -A "CF" 'https://example.com/' -H 'accept: text/html' 2>&1 | grep 'cf-cache-status\|cf-edge\|cf-apo-via'
```

```sh
< cf-cache-status: HIT
< cf-apo-via: cache
< cf-edge-cache: cache,platform=wordpress
```

항상,`cf-cache-status`자산이 캐시를 명중하거나 역동적 인 것으로 간주 된 경우 표시.

- 더 보기`cf-apo-via`헤더는 주어진 요청에 대한 APO 상태를 반환합니다.
- 더 보기`cf-edge-cache`헤더는 WordPress 플러그인이 설치되고 활성화됩니다.

### 어떻게 APO와 WordPress.com 통합 작업을 확인할 수 있습니까?

1\. WordPress 웹 사이트에서 변경을 게시했습니다.

2\. 페이지를 두 번 새로 고침.

3\. 당신은 변화를 볼 수 있습니다. 페이지는 캐시되어야한다.`cf-cache-status: HIT`·`cf-apo-via: cache`응답 헤더에서.
