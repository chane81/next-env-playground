import { PublicEnv, PrivateEnv } from '@/types/env';

type Env = PublicEnv & PrivateEnv;

let cachedEnv: Record<string, string> | null = null;

/**
 * SSR에서만 사용: public/env.js의 값을 읽어 환경변수 반환 (비동기)
 */
export const getEnv = (key: keyof Env) => {
  if (isClient() && key.includes('NEXT_PUBLIC_')) {
    return String(window.environment?.[key] ?? '');
  }

  if (!isClient() && key.includes('NEXT_PUBLIC_')) {
    if (!cachedEnv) {
      try {
        // SSR 분기 안에서만 동적 import
        const fs = import('fs').default;
        const path = import('path').default;
        const envJsPath = path.join(process.cwd(), 'public/env.js');
        const content = fs.readFileSync(envJsPath, 'utf-8');
        const match = content.match(/window\.environment\s*=\s*({[\s\S]*});?/);
        if (match) {
          cachedEnv = JSON.parse(match[1]);
        } else {
          cachedEnv = {};
        }
      } catch {
        cachedEnv = {};
      }
    }
    return String(cachedEnv?.[key] ?? '');
  }

  if (!isClient()) {
    return String(process.env[key]);
  }

  return '';
};

// const getEnv = (key: keyof Env) => {
//   if (isClient() && key.includes('NEXT_PUBLIC_')) {
//     return String(window.environment?.[key] ?? '');
//   }

//   if (!isClient() && key.includes('NEXT_PUBLIC_')) {
//     // SSR 동기 사용 시에는 process.env 사용 (비추천)
//     return String(process.env[key]);
//   }

//   if (!isClient()) {
//     return String(process.env[key]);
//   }

//   return '';
// };

const isClient = () => typeof window !== 'undefined';

export default getEnv;
