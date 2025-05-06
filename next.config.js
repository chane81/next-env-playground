// import type { NextConfig } from 'next';
const { configureRuntimeEnv } = require('next-runtime-env/build/configure');

configureRuntimeEnv();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone'
};

// export default nextConfig;
module.exports = nextConfig;
