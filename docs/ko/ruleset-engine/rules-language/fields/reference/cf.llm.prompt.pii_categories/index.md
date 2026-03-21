---
title: cf.llm.prompt.pii categories · Cloudflare Ruleset 엔진 docs
description: 개인 식별 정보 (PII) 카테고리가 요청에 포함 된 LLM 프롬프트에 표시된 문자열 값의 배열.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.pii_categories/
  md: >-
    https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.pii_categories/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.pii_categories/
translation_source_md: >-
  https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.llm.prompt.pii_categories/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
# cf.llm.prompt.pii 카테고리

`cf.llm.prompt.pii_categories`배열\<String>

개인 식별 정보 (PII) 카테고리가 요청에 포함 된 LLM 프롬프트에 표시된 문자열 값의 배열.

가능한 값은 다음과 같습니다.

| (주)                         | 이름 \*                                                |
| --------------------------- | ---------------------------------------------------- |
| `CREDIT_CARD`               | 신용카드 번호                                              |
| `CRYPTO`                    | 암호화 지갑 번호 (현재 Bitcoin 주소만)                           |
| `DATE_TIME`                 | 절대 또는 상대 날짜 또는 기간 또는 하루에 더 작은 시간                     |
| `EMAIL_ADDRESS`             | 이메일 주소                                               |
| `IBAN_CODE`                 | 국제은행 계좌번호 (IBAN)                                     |
| `IP_ADDRESS`                | 인터넷 프로토콜 (IP) 주소                                     |
| `NRP`                       | 사람의 국적, 종교 또는 정치 그룹                                  |
| `LOCATION`                  | 정치 또는 지리적으로 정의 된 위치의 이름 (도시, 지방, 국가, 국제 지역, 물, 산의 몸) |
| `PERSON`                    | 이름 \*                                                |
| `PHONE_NUMBER`              | 전화번호                                                 |
| `MEDICAL_LICENSE`           | 일반 의료 면허 번호                                          |
| `URL`                       | 인터넷에 리소스를 찾아내는 데 사용되는 Uniform Resource Locator (URL) |
| `US_BANK_NUMBER`            | 미국 은행 계좌 번호                                          |
| `US_DRIVER_LICENSE`         | 미국 운전 면허증                                            |
| `US_ITIN`                   | 미국 개인 납세자 식별 번호 (ITIN)                               |
| `US_PASSPORT`               | 미국 여권 번호                                             |
| `US_SSN`                    | 미국 사회 보안 번호 (SSN)                                    |
| `UK_NHS`                    | 영국 NHS 번호                                            |
| `UK_NINO`                   | 영국 국민 보험 번호                                          |
| `ES_NIF`                    | 스페인어 NIF 번호 (개인 세금 ID)                               |
| `ES_NIE`                    | 스페인어 NIE 번호 (외국인 ID 카드)                              |
| `IT_FISCAL_CODE`            | 이탈리아어 개인 세금 ID 코드                                    |
| `IT_DRIVER_LICENSE`         | 이탈리아 운전 면허 번호                                        |
| `IT_VAT_CODE`               | 이탈리아 VAT 코드 번호                                       |
| `IT_PASSPORT`               | 이탈리아 여권 번호                                           |
| `IT_IDENTITY_CARD`          | 이탈리아 ID 카드 번호                                        |
| `PL_PESEL`                  | 폴란드 PESEL 번호                                         |
| `SG_NRIC_FIN`               | 국가등록증(싱가포르)                                          |
| `SG_UEN`                    | Unique Entity Number (싱가포르에 등록된 기업)                  |
| `AU_ABN`                    | 호주 사업 번호 (ABN)                                       |
| `AU_ACN`                    | 호주 회사 번호 (ACN)                                       |
| `AU_TFN`                    | 호주 세금 파일 번호 (TFN)                                    |
| `AU_MEDICARE`               | Medicare 번호 (호주 정부 발행)                               |
| `IN_PAN`                    | 인도 영주권 번호 (PAN)                                      |
| `IN_AADHAAR`                | 개인 정체 번호 (인도 정부 발행)                                  |
| `IN_VEHICLE_REGISTRATION`   | 차량 등록 번호 (인도 정부 발행)                                  |
| `IN_VOTER`                  | 숫자 투표자 ID (인도 선거위원회 발행)                              |
| `IN_PASSPORT`               | 인도 여권 번호                                             |
| `FI_PERSONAL_IDENTITY_CODE` | Finland 개인 식별 코드                                     |

카테고리 목록은[Presidio가 지원하는 PII entities 목록](https://microsoft.github.io/presidio/supported_entities/). Presidio는 AI Security for Apps에서 사용되는 데이터 보호 및 식별 SDK입니다.

Cloudflare 기업 계획을 요구합니다. 당신은 또한 활성화해야합니다[AI 보안 앱](https://developers.cloudflare.com/waf/detections/ai-security-for-apps/).

예제 사용:

```txt
# Matches requests where PII categorized as "EMAIL_ADDRESS" or "IBAN_CODE" was detected:
(cf.llm.prompt.pii_detected and any(cf.llm.prompt.pii_categories[*] in {"EMAIL_ADDRESS" "IBAN_CODE"}))
```

명세서:

- 제품 정보
