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
