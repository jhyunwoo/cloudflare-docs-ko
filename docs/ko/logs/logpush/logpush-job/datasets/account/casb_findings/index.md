---
title: CASB 찾기
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/casb_findings/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/casb_findings/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`casb_findings`.

## AssetDisplay이름

유형:`string`

Asset display name (예를 들어, 'My File Name.docx').

## 자산ExternalID

유형:`string`

이 유형의 자산에 대한 고유 식별자. 체재는 정책 납품업자에 의해 변화할 것입니다.

## 자산링크

유형:`string`

자산에 URL. 일부 정책 공급업체 및 자산 유형에 사용할 수 없습니다.

## 자산Metadata

유형:`object`

자산과 관련된 메타데이터. 구조는 정책 납품업자에 의해 변화할 것입니다.

## 감지시간표

유형:`int or string`

날짜와 시간은 처음 확인되었습니다 (예 : '2021-07-27T00:01:07Z').

## FindingTypeDisplay이름

유형:`string`

발견 유형의 인간 읽기 쉬운 이름 (예를 들면, 'File Publicly Accessible Read Only').

## 찾기TypeID

유형:`string`

Cloudflare의 체계에 있는 찾는 유형의 UUID.

## FindingTypeSeverity에 대하여

유형:`string`

검색 유형의 심각성 (예 : 'High').

## 이름 \*

유형:`string`

Cloudflare의 체계에서 찾아내기의 UUID.

## 통합 표시 이름

유형:`string`

통합의 인간 읽기 가능한 이름 (예를 들어, '내 Google Workspace Integration').

## 통합ID

유형:`string`

Cloudflare의 시스템에 통합의 UUID.

## 통합PolicyVendor

유형:`string`

통합의 정책(예: 'Google Workspace Standard Policy')의 Human-readable 공급 업체명.
