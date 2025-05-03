function ServerComponent() {
  const serverEnv = process.env.SERVER_ENV;

  return (
    <div className='p-4 bg-slate-200 rounded-md'>
      <div className='text-lg font-bold mb-4'>서버 컴포넌트</div>
      Server 환경변수: {serverEnv}
    </div>
  );
}

export default ServerComponent;
