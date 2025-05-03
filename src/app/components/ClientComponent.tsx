'use client';

function ClientComponent() {
  const serverEnv = process.env.SERVER_ENV;
  const pulbicEnv = process.env.NEXT_PUBLIC_ENV;

  return (
    <div className='p-4 rounded-md bg-sky-200'>
      <div className='text-lg font-bold mb-4'>클라이언트 컴포넌트</div>
      <div>Server 환경변수: {serverEnv}</div>
      <div>Public 환경변수: {pulbicEnv}</div>
    </div>
  );
}

export default ClientComponent;
