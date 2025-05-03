import ClientComponent from './components/ClientComponent';
import ServerComponent from './components/ServerComponent';

export default function Home() {
  const serverEnv = process.env.SERVER_ENV;

  return (
    <div className='flex flex-col gap-4'>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}
