import ClientComponent from './components/ClientComponent';
import ServerComponent from './components/ServerComponent';

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}
