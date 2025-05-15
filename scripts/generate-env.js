#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// const dotenv = require('dotenv');

// .env 파일 로드 (존재할 경우)
// dotenv.config();

const envVars = Object.keys(process.env)
  .filter((key) => key.startsWith('NEXT_PUBLIC_'))
  .reduce((acc, key) => {
    acc[key] = process.env[key];
    return acc;
  }, {});

const content = `window.environment = ${JSON.stringify(envVars, null, 2)};\n`;

const outPath = path.join(__dirname, '../public/env.js');
fs.writeFileSync(outPath, content);

console.log('public/env.js 파일이 생성되었습니다.');
