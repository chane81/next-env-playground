import '@/styles/globals.css';
import App, {
  type AppContext,
  type AppInitialProps,
  type AppProps
} from 'next/app';
import Head from 'next/head';
import PublicEnvironmentVariablesScript from '@/components/PublicEnvScript';

// pageProps에 nonce 타입 추가 (getInitialProps가 추가하므로 유지)
interface CustomPageProps {
  nonce?: string;
  // 다른 pageProps 타입들...
}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  // pageProps에서 nonce 값을 가져옵니다. getInitialProps에서 주입됨
  const nonce = pageProps.nonce ?? '';

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <PublicEnvironmentVariablesScript nonce={nonce} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// _app.tsx에서 getInitialProps를 사용하여 nonce 가져오기
MyApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & { pageProps: CustomPageProps }> => {
  // 기본 App의 getInitialProps를 호출하여 pageProps를 가져옵니다.
  const appProps = await App.getInitialProps(appContext);

  // 서버 측 요청(req) 객체에서 nonce 헤더 값을 가져옵니다.
  // 클라이언트 측 네비게이션 시에는 req 객체가 없을 수 있습니다.
  const nonce = (appContext.ctx.req?.headers['x-nonce'] as string) || '';

  // 기존 pageProps에 nonce를 추가하여 반환합니다.
  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      nonce
    }
  };
};

export default MyApp;
