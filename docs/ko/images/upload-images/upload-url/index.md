---
title: URL을 통해 업로드 · Cloudflare 이미지 docs
description: 이미지를 업로드하기 전에 지원되는 형식과 크기를 확인하여 이미지를 확인할 수 있습니다.
lastUpdated: 2024-10-07T14:21:49.000Z
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/images/upload-images/upload-url/'
  md: 'https://developers.cloudflare.com/images/upload-images/upload-url/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/images/upload-images/upload-url/'
translation_source_md: 'https://developers.cloudflare.com/images/upload-images/upload-url/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
이미지를 업로드하기 전에, 목록 확인[지원되는 체재 및 차원](https://developers.cloudflare.com/images/upload-images/#supported-image-formats)이미지를 확인하려면 허용됩니다.

이미지 API를 사용하여 데이터 업로드 대신 이미지의 URL을 사용할 수 있습니다.

더 보기`POST`참고 자료로 아래 예제를 사용하여 요청. 마음으로 유지`--form 'file=<FILE>'`·`--form 'url=<URL>'`필드는 상호 전용입니다.

이름 \*

더 보기`metadata`요청에 포함 된 것은 최종 사용자와 공유되지 않습니다.

```bash
curl --request POST \
https://api.cloudflare.com/client/v4/accounts/{account_id}/images/v1 \
--header "Authorization: Bearer <API_TOKEN>" \
--form 'url=https://[user:password@]example.com/<PATH_TO_IMAGE>' \
--form 'metadata={"key":"value"}' \
--form 'requireSignedURLs=false'
```

이미지를 성공적으로 업로드 한 후 아래 예와 비슷한 응답을 받게됩니다.

```json
{
    "result": {
        "id": "2cdc28f0-017a-49c4-9ed7-87056c83901",
        "filename": "image.jpeg",
        "metadata": {
            "key": "value"
        },
        "uploaded": "2022-01-31T16:39:28.458Z",
        "requireSignedURLs": false,
        "variants": [
            "https://imagedelivery.net/Vi7wi5KSItxGFsWRG2Us6Q/2cdc28f0-017a-49c4-9ed7-87056c83901/public",
            "https://imagedelivery.net/Vi7wi5KSItxGFsWRG2Us6Q/2cdc28f0-017a-49c4-9ed7-87056c83901/thumbnail"
        ]
    },
    "success": true,
    "errors": [],
    "messages": []
}
```

원본 서버가 이미지를 태깅하면서 오류를 반환하면 API 응답은 4xx 오류를 반환합니다.
