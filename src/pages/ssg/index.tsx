import getEnv from '@/utils/env';
import { GetStaticProps } from 'next';
import { env } from 'next-runtime-env';

interface SSGPageProps {
  data: string;
}

function SSGPage({ data }: SSGPageProps) {
  // const pulbicEnv = process.env.NEXT_PUBLIC_ENV ?? '';
  // const publicEnv = getEnv('NEXT_PUBLIC_ENV');
  const publicEnv = env('NEXT_PUBLIC_ENV');

  return (
    <div>
      <div>SSG Page</div>
      <div>Public 환경변수: {publicEnv}</div>
      <div>데이터: {data}</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { data: new Date().toLocaleString() }
  };
};
export default SSGPage;
