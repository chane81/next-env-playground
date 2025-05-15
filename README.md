# Next.js 15 Environment Playground

## 참고

- Bash Replace

  - https://github.com/vercel/next.js/discussions/44628#discussioncomment-10295053
  - https://github.com/vercel/next.js/discussions/44628#discussioncomment-7523793

- next-runtime-env

  - page router 에서 사용시

    - 문제점
      - 1.x 버전 라이브러리로 사용해야한다.
      - react 19 버전은 사용할 수 없다. (에러남)
    - 셋팅 방법

      - `_document.tsx` Head 에 아래 코드 추가
        ```tsx
        <script src='/__ENV.js' />"를 추가
        ```
      - next.config.js 에 아래 코드 추가

        ```tsx
        const {
          configureRuntimeEnv
        } = require('next-runtime-env/build/configure');

        configureRuntimeEnv();
        ```

# 동적 환경변수 주입 및 env.js 생성 방법

1. 환경변수 파일(.env) 또는 환경변수 직접 주입 후 아래 명령어 실행

```sh
NEXT_PUBLIC_ENV=production pnpm generate:env
```

- public/env.js 파일이 생성됩니다.
- 여러 NEXT*PUBLIC* 접두사 환경변수도 지원합니다.

2. 배포 시점에 환경에 맞는 env.js를 반드시 생성/덮어쓰기 하세요.

# Page Router에서 동적 환경변수 주입 방법

1. src/pages/\_document.tsx 파일의 <Head> 내부에 아래 코드 추가

```tsx
<script src='/env.js' />
```

2. 나머지 사용법은 App Router와 동일합니다.
