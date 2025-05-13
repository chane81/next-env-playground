import { PublicEnv, PrivateEnv } from '@/types/env';

type Env = PublicEnv & PrivateEnv;

const getEnv = (key: keyof Env) => {
  if (isClient() && key.includes('NEXT_PUBLIC_')) {
    console.log('client getEnv', key);
    return String(window.environment[key]);
  }

  if (!isClient()) {
    console.log('server getEnv', key);
    return String(process.env[key]);
  }

  return '';
};

const isClient = () => typeof window !== 'undefined';

export default getEnv;
