// import Script from 'next/script';
import { type PropsWithChildren } from 'react';

// Props 타입 정의 (nonce 추가)
type PublicEnvironmentVariablesScriptProps = PropsWithChildren<{
  nonce: string;
}>;

function PublicEnvironmentVariablesScript({
  nonce
}: PublicEnvironmentVariablesScriptProps) {
  const environmentVariables = Object.entries(process.env).reduce<
    Record<string, string>
  >((accum, [key, value]) => {
    if (key.includes('NEXT_PUBLIC_') && value) {
      accum[key] = value;
    }
    return accum;
  }, {});

  return (
    <script
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: `window.environment = ${JSON.stringify(environmentVariables)}`
      }}
      // strategy='beforeInteractive' // Pages Router에서는 strategy 명시가 필요할 수 있습니다.
    />
  );
}

export default PublicEnvironmentVariablesScript;
