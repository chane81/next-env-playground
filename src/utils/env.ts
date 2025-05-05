import { PublicEnv, PrivateEnv } from '@/types/env';

type Env = PublicEnv & PrivateEnv;

const getEnv = (key: keyof Env) => {
  let envValue = '';

  if (key.includes('NEXT_PUBLIC_') && isClient()) {
    envValue = window.environment[key] as string;
  }

  if (!isClient()) {
    envValue = process.env[key] as string;
  }

  return envValue;
};

const isClient = () => typeof window !== 'undefined';

export default getEnv;
