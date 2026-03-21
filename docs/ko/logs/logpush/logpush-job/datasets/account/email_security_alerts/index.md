---
title: 이메일 보안 경고
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/email_security_alerts/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/email_security_alerts/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`email_security_alerts`.

## 지원하다

유형:`string`

이메일 보안 경고에 대한 후보 ID (예 : '4WtWkr6nlBz9sNH-2024-08-28T15:32:35').

## 알림 받기

유형:`array[string]`

이 메시지의 최종 처분에 기여한 결과의 Human-readable list.

## 첨부파일

유형:`array[object]`

이 메시지에 포함 된 첨부 파일의 메타 데이터 목록 (예를 들어, \[{"Md5": "91f073bd208689ddbd248e8989ecae90", "Sha1": "62b77e14e2c43049c45b5725018e78d0f9986930", "Sha256": "3b57505305e7162141fd898ed87d08f92fc42579b5047495859e56b275c45b5725018e78d0f9986930", "Sha256": "3b57505305e7162141fd898ed898ed87d08f92fc42579b50474958e56b56b3b3b275e56b275e56b3b3b3b275f06f06f06f06f06f06f06f06f06f06f06f06f06f06f06f06f06f

## ·

유형:`array[string]`

보낸 사람에 의해 제공되는 CC 헤더의 이메일 주소 부분 (예를 들어, '[모델 번호: firstlast@cloudflare.com](mailto:firstlast@cloudflare.com)').

## CC이름

유형:`array[string]`

보낸 사람에 의해 제공 CC 헤더의 이메일 주소 부분 (예를 들어, '첫 번째 마지막').

## 파이널Disposition

유형:`string`

메시지에 속성의 최종 분해.<br />가능한 값은<em>지원하다</em> | <em>뚱 베어</em> | <em>인기있는</em> | <em>뚱 베어</em> | <em>사이트맵</em> | <em>대량 대량</em>.

## 이름 \*

유형:`string`

보낸 사람에 의해 제공되는 헤더의 이메일 주소 부분 (예를 들면, '[모델 번호: firstlast@cloudflare.com](mailto:firstlast@cloudflare.com)').

## 이름 \*

유형:`string`

보낸 사람에 의해 제공 된 헤더의 이름 부분 (예를 들어, '첫 번째 마지막').

## 관련 기사

유형:`array[string]`

이 메시지에서 감지 된 링크 목록, benign 또는 그렇지 않으면; 총 100에 제한.

## 메시지DeliveryMode

유형:`string`

이메일 보안에 전송의 메시지 모드.<br />가능한 값은<em>지원하다</em> | <em>한국어</em> | <em>제품 정보</em> | <em>₢ 킹</em> | <em>연구분야</em> | <em>복리후생</em>.

## 이름 \*

유형:`string`

보낸 사람에 의해 제공되는 Message-ID 헤더의 값.

## 이름 \*

유형:`string`

메시지의 기원.<br />가능한 값은<em>지원하다</em> | <em>내 계정</em> | <em>기타 제품</em> | <em>두 번째PartyInternal</em> | <em>제 3 부</em> | <em>아웃바운드</em>.

## 이름 \*

유형:`string`

이메일 보안 메일 처리에 의해 결정되는 원본 발송인 주소 (예를 들면, '[모델 번호: firstlast@cloudflare.com](mailto:firstlast@cloudflare.com)').

## 댓글To

유형:`string`

sender에 의해 제공된 대답에 대한 이메일 주소 부분 (예를 들면, '[모델 번호: firstlast@cloudflare.com](mailto:firstlast@cloudflare.com)').

## 댓글ToName

유형:`string`

의 이름 부분 대답에 헤더에 의해 제공 (예를 들어, '첫 번째 마지막').

## SMTPEnvelope에서

유형:`string`

보낸 사람에 의해 제공 된 SMTP 메일의 값 (예를 들어, '첫 번째 마지막[모델 번호: firstlast@cloudflare.com](mailto:firstlast@cloudflare.com)').

## SMTPEnvelope로

유형:`array[string]`

보낸 사람에 의해 제공 된 SMTP RCPT의 값 (예를 들어, '첫 번째 마지막[모델 번호: firstlast@cloudflare.com](mailto:firstlast@cloudflare.com)').

## 사이트맵

유형:`string`

SMTP HELO 서버의 IPv4/v6.

## SMTPHeloServerIPAs이름

유형:`string`

SMTP HELO 서버의 IP의 자율 시스템 이름.

## SMTPHeloServerIPAs수

유형:`string`

SMTP HELO 서버 IP의 자율 시스템 번호.

## SMTPHeloServerIPGeo의 특징

유형:`string`

SMTP HELO 서버 위치 정보 (예를 들면, 'US/NV/Las Vegas').

## SMTPHeloServer이름

유형:`string`

SMTP HELO 서버에서 제공하는 호스트 이름.

## 이름 \*

유형:`string`

보낸 사람에 의해 제공되는 주제 헤더의 가치.

## 카테고리

유형:`array[string]`

이메일 보안 처리에 의한 위협 범주 (예 : 'CredentialHarvester', 'Dropper').

## 스크린 샷

유형:`int or string`

메시지 처리 시작 시간 (예를 들면, '2024-08-28T15:32:35Z'). 타임스탬프 형식을 지정하려면, 참조[산출 유형](/logs/logpush/logpush-job/log-output-options/#output-types).

## 으로

유형:`array[string]`

sender가 제공하는 To header의 이메일 주소 부분 (예를 들면, '[모델 번호: firstlast@cloudflare.com](mailto:firstlast@cloudflare.com)').

## 이름 \*

유형:`array[string]`

보낸 사람에 의해 제공 된 To 헤더의 이름 부분 (예를 들어, '첫 번째 마지막').
