import { GetStaticProps } from 'next';

interface ISRPageProps {
  data: string;
}

function ISRPage({ data }: ISRPageProps) {
  const pulbicEnv = process.env.NEXT_PUBLIC_ENV ?? '';

  return (
    <div>
      <div>ISR Page</div>
      <div>Public 환경변수: {pulbicEnv}</div>
      <div>데이터: {data}</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { data: new Date().toLocaleString() },
    revalidate: 60
  };
};
export default ISRPage;
