---
title: Durable Objects · Cloudflare 브라우저 렌더링 docs로 브라우저 렌더링 작업자를 배포하십시오.
description: Durable Objects와 함께 브라우저 렌더링 API를 사용하여 웹 페이지에서 스크린 샷을 찍고 R2에서 저장하십시오.
lastUpdated: 2026-02-02T18:38:11.000Z
chatbotDeprioritize: false
tags: JavaScript
source_url:
  html: >-
    https://developers.cloudflare.com/browser-rendering/workers-bindings/browser-rendering-with-do/
  md: >-
    https://developers.cloudflare.com/browser-rendering/workers-bindings/browser-rendering-with-do/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/browser-rendering/workers-bindings/browser-rendering-with-do/
translation_source_md: >-
  https://developers.cloudflare.com/browser-rendering/workers-bindings/browser-rendering-with-do/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
이 가이드를 따르면 브라우저 렌더링 API를 사용하여 Worker를 만들 것입니다.[모델 번호: Durable Objects](https://developers.cloudflare.com/durable-objects/)웹 페이지에서 스크린 샷을 찍고 저장하십시오.[R2](https://developers.cloudflare.com/r2/).

Durable Objects를 사용하여 브라우저 세션은 새로운 브라우저 세션을 회전시키는 데 걸리는 시간을 제거함으로써 성능을 향상시킵니다. Durable Objects는 세션을 재사용하므로 동시 세션의 수를 줄일 수 있습니다.

1. 로그인[Cloudflare 계정](https://dash.cloudflare.com/sign-up/workers-and-pages).
2. 설치하기[`Node.js`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Node.js 버전 관리자

Node 버전 관리자를 사용하여[볼트](https://volta.sh/)또는[사이트맵](https://github.com/nvm-sh/nvm)허가 문제를 방지하고 Node.js 버전을 변경하십시오.[Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/), 이 가이드에서 나중에 논의, 노드 버전의 필요`16.17.0`또는 나중에.

## 1. Worker 프로젝트 만들기

[Cloudflare Workers](https://developers.cloudflare.com/workers/)configuring나 유지 인프라 없이 새로운 애플리케이션 또는 augment 기존의 하나들을 만들 수 있는 Serverless 실행 환경을 제공합니다. 작업자 응용 프로그램은 스크린 샷을 복용과 같은 행동을 수행하는 헤드리스 브라우저와 상호 작용하는 용기입니다.

새로운 Worker 프로젝트 만들기`browser-worker`으로 실행:

- ₢ 킹

  ```sh
  npm create cloudflare@latest -- browser-worker
  ```

- 주요 특징

  ```sh
  yarn create cloudflare browser-worker
  ```

- 사이트맵

  ```sh
  pnpm create cloudflare@latest browser-worker
  ```

## 2. Puppeteer 설치

내 계정`browser-worker`디렉토리, Cloudflare의 설치[Puppeteer의 포크](https://developers.cloudflare.com/browser-rendering/puppeteer/):

- ₢ 킹

  ```sh
  npm i -D @cloudflare/puppeteer
  ```

- 주요 특징

  ```sh
  yarn add -D @cloudflare/puppeteer
  ```

- 사이트맵

  ```sh
  pnpm add -D @cloudflare/puppeteer
  ```

## 3. R2 물통 만들기

2개의 R2 물통을 창조하고, 생산을 위해 하나, 그리고 발달을 위해 하나.

버킷 이름은 더 낮은 케이스이어야하며 dashes를 포함 할 수 있습니다.

```sh
wrangler r2 bucket create screenshots
wrangler r2 bucket create screenshots-test
```

버킷이 생성 된 것을 확인하려면, 실행 :

```sh
wrangler r2 bucket list
```

실행 후`list`명령, 당신은 단지 생성 한 것들을 포함하여 모든 버킷 이름을 볼 것입니다.

## 4. Wrangler 구성 파일 구성

설정하기`browser-worker`프로젝트[Wrangler 구성 파일](https://developers.cloudflare.com/workers/wrangler/configuration/)브라우저 추가[관련 제품](https://developers.cloudflare.com/workers/runtime-apis/bindings/)·[Node.js 호환성 깃발](https://developers.cloudflare.com/workers/configuration/compatibility-flags/#nodejs-compatibility-flag). 브라우저 바인딩은 Worker와 headless 브라우저 간의 통신을 허용하여 스크린 샷을 복용하고 PDF 등을 생성 할 수 있습니다.

브라우저 렌더링 API 바인딩, R2 버킷을 사용하여 R2 버킷을 업데이트하십시오.

이름 \*

작업자 구성을 포함해야 합니다.`nodejs_compat`호환성 깃발 및`compatibility_date`2025-09-15 이상.

- 다운로드

  ```jsonc
  {
    "$schema": "./node_modules/wrangler/config-schema.json",
    "name": "rendering-api-demo",
    "main": "src/index.js",
    //오늘 날짜로 설정
    "compatibility_date": "2026-03-13",
    "compatibility_flags": [
      "nodejs_compat"
    ],
    "account_id": "<ACCOUNT_ID>",
    //브라우저 렌더링 API 바인딩
    "browser": {
      "binding": "MYBROWSER"
    },
    //R2 제품정보
    "r2_buckets": [
      {
        "binding": "BUCKET",
        "bucket_name": "screenshots",
        "preview_bucket_name": "screenshots-test"
      }
    ],
    //튼튼한 개체에 바인딩
    "durable_objects": {
      "bindings": [
        {
          "name": "BROWSER",
          "class_name": "Browser"
        }
      ]
    },
    "migrations": [
      {
        "tag": "v1", //각 항목에 고유해야합니다
        "new_sqlite_classes": [ //새로운 클래스의 배열
          "Browser"
        ]
      }
    ]
  }
  ```

- 와일러.toml

  ```toml
  "$schema" = "./node_modules/wrangler/config-schema.json"
  name = "rendering-api-demo"
  main = "src/index.js"
  # Set this to today's date
  compatibility_date = "2026-03-13"
  compatibility_flags = [ "nodejs_compat" ]
  account_id = "<ACCOUNT_ID>"


  [browser]
  binding = "MYBROWSER"


  [[r2_buckets]]
  binding = "BUCKET"
  bucket_name = "screenshots"
  preview_bucket_name = "screenshots-test"


  [[durable_objects.bindings]]
  name = "BROWSER"
  class_name = "Browser"


  [[migrations]]
  tag = "v1"
  new_sqlite_classes = [ "Browser" ]
  ```

## 5. 부호

아래 코드는 Puppeteer를 사용하여 브라우저를 즉시 사용하는 튼튼한 개체를 사용합니다. 그런 다음 다른 해상도로 웹 페이지의 시리즈를 열고 각 스크린 샷을 찍고 R2에 업로드합니다.

튼튼한 개체는 마지막 사용 후 60 초 동안 브라우저 세션을 엽니다. 브라우저 세션이 열리면, 어떤 요청은 기존 세션을 사용하지 않고 새 세션을 만들 수 있습니다. 다음을 복사하여 Worker 코드를 업데이트하십시오.

- 모델 번호: JavaScript

  ```js
  import { DurableObject } from "cloudflare:workers";
  import * as puppeteer from "@cloudflare/puppeteer";


  export default {
    async fetch(request, env) {
      const obj = env.BROWSER.getByName("browser");


      //튼튼한 개체에 요청을 보내면 응답을 기다립니다.
      const resp = await obj.fetch(request);


      return resp;
    },
  };


  const KEEP_BROWSER_ALIVE_IN_SECONDS = 60;


  export class Browser extends DurableObject {
    browser;
    keptAliveInSeconds = 0;
    storage;


    constructor(state, env) {
      super(state, env);
      this.storage = state.storage;
    }


    async fetch(request) {
      //밖으로 시험하는 스크린 해결책
      const width = [1920, 1366, 1536, 360, 414];
      const height = [1080, 768, 864, 640, 896];


      //현재 날짜와 시간을 사용하여 R2의 폴더 구조를 만들 수 있습니다.
      const nowDate = new Date();
      const coeff = 1000 * 60 * 5;
      const roundedDate = new Date(
        Math.round(nowDate.getTime() / coeff) * coeff,
      ).toString();
      const folder = roundedDate.split(" GMT")[0];


      //브라우저 세션이 열린 경우, 재사용
      if (!this.browser || !this.browser.isConnected()) {
        console.log(`Browser DO: Starting new instance`);
        try {
          this.browser = await puppeteer.launch(this.env.MYBROWSER);
        } catch (e) {
          console.log(
            `Browser DO: Could not start browser instance. Error: ${e}`,
          );
        }
      }


      //Reset KeepAlive 각 통화 후 DO
      this.keptAliveInSeconds = 0;


      //본문내용 바로가기 주메뉴 바로가기
      if (!this.browser)
        return new Response("Browser launch failed", { status: 500 });


      const page = await this.browser.newPage();


      //각 화면 크기의 스크린 샷 찍기
      for (let i = 0; i < width.length; i++) {
        await page.setViewport({ width: width[i], height: height[i] });
        await page.goto("https://workers.cloudflare.com/");
        const fileName = `screenshot_${width[i]}x${height[i]}`;
        const sc = await page.screenshot();


        await this.env.BUCKET.put(`${folder}/${fileName}.jpg`, sc);
      }


      //페이지에 더 많은 작업을 수행 할 때 닫기 탭
      await page.close();


      //keepAlive 후 수행 작업 수행 DO
      this.keptAliveInSeconds = 0;


      //DO 생존을 유지하기 위해 첫 번째 알람 설정
      const currentAlarm = await this.storage.getAlarm();
      if (currentAlarm == null) {
        console.log(`Browser DO: setting alarm`);
        const TEN_SECONDS = 10 * 1000;
        await this.storage.setAlarm(Date.now() + TEN_SECONDS);
      }


      return new Response("success");
    }


    async alarm() {
      this.keptAliveInSeconds += 10;


      //브라우저 DO 수명
      if (this.keptAliveInSeconds < KEEP_BROWSER_ALIVE_IN_SECONDS) {
        console.log(
          `Browser DO: has been kept alive for ${this.keptAliveInSeconds} seconds. Extending lifespan.`,
        );
        await this.storage.setAlarm(Date.now() + 10 * 1000);
        //ws 연결이 살아있을 수 있습니다.
        //또는 작업을 수행 할 때 자동으로 닫습니다.
        //예를 들면, `await this.browser.version()`
      } else {
        console.log(
          `Browser DO: exceeded life of ${KEEP_BROWSER_ALIVE_IN_SECONDS}s.`,
        );
        if (this.browser) {
          console.log(`Closing browser.`);
          await this.browser.close();
        }
      }
    }
  }
  ```

  [놀이터에서 노동자를 실행](https://workers.cloudflare.com/playground#LYVwNgLglgDghgJwgegGYHsHALQBM4RwDcABAEbogB2+CAngLzbPYZb6HbW5QDGU2AAyCAnCICsARhEAOAOwAmcSIBcLFm2Ac4XGnwHCxU2YuUBYAFABhdFQgBTO9gAiUAM4x0bqNFsqSmngExCRUcMD2DABEUDT2AB4AdABWblGkqFBgjuGRMXFJqVGWNnaOENgAKnQw9v5wMDBgfARQtsjJcABucG68CLAQANTA6Ljg9paWUMCeSCQA3iTOIAhwZNkA8mTJ9rwQJAC+AQjowCRRvGCUuKhgiHUA7pgA1vYIaUQWM3MHAFQkXokGAgRr2BzvE5nC4AASuNzuD2QILBEIQ6QsFgSvxIuHsqDg4AOCwsJEBbjoVF4AXBvAAFgAKBD2ACOIHsbggABoSI4ugBKRakskkXi2TkkdA7EgMXlULqJABCACVNgB1ADKAFFlYkAObgxV0AByuQZUTIp0ebneUX5X2FZOQyBIGscuEBJGZbI5Bwg6BIEDp9mWq3W2RI212+x5QccgMecB8JB8bi9HM8VBtjtF4oOzI8MoTSYOUuSiVQtMZ3vZnPtmJF6Ygqyo6Y8XzJhy5FkODrFWYOAGktVqAAoAfRV6u1yvHAEEADIASQAalrx0vjePtVZNsbnBqiwA2QQO7GYA5XXppxVWm0IXnxBw0NMrNYbexRvbE4WW9DW94OxIN4YAgOdmi6ewlyoN1+1wNNZVPYVOUwOADQdMl+05BAQH2TAGU5Ah7B5PlBRJRs3FBd4CMIBwSPletGyDdxEhQtYDSLQiHFY-12PsIDDgbclKWpSsIHpJlWVrCAyJzZ1XX6ex4wLdAwBAXws0DAMHAlSgIBzLCDkeKBcCDIsAG1pAUQQeUkABmI8j1s8QHJ5BybJIAAWSRPIAXSAzC8xIYMoD1OkDllSzBBkDy5CPGQeRkI9PJ5ZKPJkEQj38oSnRdABVG1A2DUVVmZOxcSIwEaEDGYQ39UVmUquAAlUvEH2w3Dm2ZFqH2VBQDKCqh-2cSrZSoexHmWIiGUYkVDNzfFUCLSRhEEEgARPdaSHEALcwHL1KDiXARocItxsmk77AZHMyQAWQIOlElObgGSGx5Lv1cFKlqmaSBdMVFsFAEAdQVBu0bflEn9DUIAGKg9Rm3b5owMA2qLZ6jo+jxmggc0SAAcVuyo7XMwRsrkl0lyWuNuvcT0-wA9qOW8WxJVqKgeWZLhCp8HMoCWhkAEJmLcRIGfvEgAB9JZIYW6RY8X3kSdxSnG-Z7FwGbZMbQKs1U+xEmuBGAANb3-CXnE2fwYcQaB4dCCaUwHOAqXsY3ZqY+ghR1kURbFu9IVlOBE2TFFajRQ3CSpRk-b5RJboATSnTUdQ9kVjl4Ah6RIBl7G1n29rcfXDfQBGbp102A4fS3-BscAPSGg5CPmRWH1iQjXcSEgtQQU4EH8AASBZ7EOY3wYLtPOxzQSKZIZUOXBYD7FA8CoEgwFUAcB97DgbPM7AMAtKKkNLZzP2QLAiCoJgvZbHgoskNnqxg14F4UyW1vH3cCA0zIfFMBDOgdmsQ9TAjQvYPmAs5YKyrvycuzIuqtnOnPDM4orpRDNozEg9xqDZwJFkDWUQeRLC4iANw-hxDCCOPWAa+14AcSDiHP08tRat0SOdUc4DEY5T+i6SocA3gkD6MyRwbg6ToB-pKJaO9s7CKUq2bwAAvCBjY2A52yAcKAD9SBaIADwkGMqZR62R4ZBh0UMIY+dGzBxLGAg0rFwQrigBNX4DIliGKDP4DxdJzJQF8jyEKYUID+ECeFXxvlqG7TJDY0O4D9QSPQOacKEAYDkOdM8BAbwPiJHhCAW49xmQ5LOMgO0UTC4HEyNkU0EQizGzkaI8REBxxD28eEw48Qh6hIgG042ZT5p9CLDEg49CDb1KzI07h5chlFRYnHRUeUrDDkqIkEEuNjZDxRm1Q4yANkEOqSPFIMA9RjyEbwNOM9GzySsNcQqhAyAGODK2GmIY6ZDRIKMbqGS371T-riWwgCnnFRGTmaZIyck3KujQy5Lp542gOBfVe684Cb0hLUBAmgQGBl6C8NM9U4zLE2GfFhiQEVX2grBO+CESCP2ha6Re+LMgfAOHAAp5x6pvGXgSwEV9aESl4KVco4FEDnEYbYv2bE4kGkvsK7hjZ+Y535b3QVrKZRjXAGAKxc1xTFyNgySu5tIQ1yEeCO2oCWXCvdn0oKlQtRbh3HuA8y01oAhWsIMp0zxW8TiXCoVWAGQfTer9IYJAbV2q1LufcGpzk8IQS2B2k1YWZhtOaSivBeDM1KcKC5wkqTcplZq8+y9L5r2vhSl8JAhiyhWhhEU8ktRPndOQKuXLmiVkgTnQtK8yU3zgmmfRw4xyTlVCnWci5Vzrk3NucNDqo3ex1lhHVpdroFxIPqrBRq6RAj-vGC+3KS09RIEPTtxbILktvi+Y4Npe1d3rc+Hg9tW0ZhdokMe5dJ7FmTJ61C9ifWsv9URdh-4g0kBWltV1gh33yQTpQUULs5SUW6vi60e01YaRTGmXdLL91kDoOmH0nJMVFwiMxeG5d5KYBIMkMhBwNEpkvBCwE6kzitH3mAXDjxHnH1pmmN5Xyj6-NwP8sjLo1EJHCE0Yiq6PXErYZBD4bQqAzWNtPXkYBCrkXndq7IJcy4rrXRbK2j500aw1tg-mgClpDwHROZOM55zLjXBuMNEaDyHFFq+n2775UMj9q3TVjYF3ad1cba5XhMVsMteXaJTCZmsKruCrwkKymCUbClo4PZLDqGYJobQugeD8CEKICQ0h5BKBECUWwz4KiuA8GFjS-hAjaFIGECI0RiNwG0OkAIBCWt5A2FKYo1hKvlCqDUOogJGjNEzhpDoRcqBTAsAsKIwAkxUHHKMcY2QogqHyHiQoaRDiZayzl4IeX9CFaMCV0wIhmCWCAA)

- TypeScript

  ```ts
  import { DurableObject } from "cloudflare:workers";
  import * as puppeteer from "@cloudflare/puppeteer";


  interface Env {
    MYBROWSER: Fetcher;
    BUCKET: R2Bucket;
    BROWSER: DurableObjectNamespace;
  }


  export default {
    async fetch(request, env): Promise<Response> {
      const obj = env.BROWSER.getByName("browser");


      //튼튼한 개체에 요청을 보내면 응답을 기다립니다.
      const resp = await obj.fetch(request);


      return resp;
    },
  } satisfies ExportedHandler<Env>;


  const KEEP_BROWSER_ALIVE_IN_SECONDS = 60;


  export class Browser extends DurableObject<Env> {
    private browser?: puppeteer.Browser;
    private keptAliveInSeconds: number = 0;
    private storage: DurableObjectStorage;


    constructor(state: DurableObjectState, env: Env) {
      super(state, env);
      this.storage = state.storage;
    }


    async fetch(request: Request): Promise<Response> {
      //밖으로 시험하는 스크린 해결책
      const width: number[] = [1920, 1366, 1536, 360, 414];
      const height: number[] = [1080, 768, 864, 640, 896];


      //현재 날짜와 시간을 사용하여 R2의 폴더 구조를 만들 수 있습니다.
      const nowDate = new Date();
      const coeff = 1000 * 60 * 5;
      const roundedDate = new Date(
        Math.round(nowDate.getTime() / coeff) * coeff,
      ).toString();
      const folder = roundedDate.split(" GMT")[0];


      //브라우저 세션이 열린 경우, 재사용
      if (!this.browser || !this.browser.isConnected()) {
        console.log(`Browser DO: Starting new instance`);
        try {
          this.browser = await puppeteer.launch(this.env.MYBROWSER);
        } catch (e) {
          console.log(
            `Browser DO: Could not start browser instance. Error: ${e}`,
          );
        }
      }


      //Reset KeepAlive 각 통화 후 DO
      this.keptAliveInSeconds = 0;


      //본문내용 바로가기 주메뉴 바로가기
      if (!this.browser) return new Response("Browser launch failed", { status: 500 });


      const page = await this.browser.newPage();


      //각 화면 크기의 스크린 샷 찍기
      for (let i = 0; i < width.length; i++) {
        await page.setViewport({ width: width[i], height: height[i] });
        await page.goto("https://workers.cloudflare.com/");
        const fileName = `screenshot_${width[i]}x${height[i]}`;
        const sc = await page.screenshot();


        await this.env.BUCKET.put(`${folder}/${fileName}.jpg`, sc);
      }


      //페이지에 더 많은 작업을 수행 할 때 닫기 탭
      await page.close();


      //keepAlive 후 수행 작업 수행 DO
      this.keptAliveInSeconds = 0;


      //DO 생존을 유지하기 위해 첫 번째 알람 설정
      const currentAlarm = await this.storage.getAlarm();
      if (currentAlarm == null) {
        console.log(`Browser DO: setting alarm`);
        const TEN_SECONDS = 10 * 1000;
        await this.storage.setAlarm(Date.now() + TEN_SECONDS);
      }


      return new Response("success");
    }


    async alarm(): Promise<void> {
      this.keptAliveInSeconds += 10;


      //브라우저 DO 수명
      if (this.keptAliveInSeconds < KEEP_BROWSER_ALIVE_IN_SECONDS) {
        console.log(
          `Browser DO: has been kept alive for ${this.keptAliveInSeconds} seconds. Extending lifespan.`,
        );
        await this.storage.setAlarm(Date.now() + 10 * 1000);
        //ws 연결이 살아있을 수 있습니다.
        //또는 작업을 수행 할 때 자동으로 닫습니다.
        //예를 들면, `await this.browser.version()`
      } else {
        console.log(
          `Browser DO: exceeded life of ${KEEP_BROWSER_ALIVE_IN_SECONDS}s.`,
        );
        if (this.browser) {
          console.log(`Closing browser.`);
          await this.browser.close();
        }
      }
    }
  }
  ```

## 6. 시험

지원하다`npx wrangler dev`작업자를 로컬로 테스트합니다.

로컬 개발 중에 실제 헤드리스 브라우저 사용

로컬 개발 중에 실제 헤드리스 브라우저와 상호 작용하기, set`"remote" : true`브라우저 바인딩 설정에서. 더 알아보기[원격 바인딩 문서](https://developers.cloudflare.com/workers/development-testing/#remote-bindings).

## 7. 배포

지원하다[`npx wrangler deploy`](https://developers.cloudflare.com/workers/wrangler/commands/#deploy)Cloudflare 글로벌 네트워크에 작업자를 배치합니다.

## 관련 자료

- 이름 \*[Puppeteer 예제](https://github.com/cloudflare/puppeteer/tree/main/examples)
- 시작하기[모델 번호: Durable Objects](https://developers.cloudflare.com/durable-objects/get-started/)
- [R2XQXQXQXQXQ에서 사용하기](https://developers.cloudflare.com/r2/api/workers/workers-api-usage/)
