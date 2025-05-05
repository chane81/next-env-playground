export interface PublicEnv {
  NEXT_PUBLIC_ENV: string;
  SERVER_ENV: string;
}

export interface PrivateEnv {
  SERVER_ENV: string;
}

declare global {
  interface Window {
    environment: PublicEnv;
  }
}

export {};
