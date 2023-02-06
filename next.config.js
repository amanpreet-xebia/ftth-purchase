// @ts-check
/** @type {import('next').NextConfig} */
const fs = require('fs');
const dotenv = require('dotenv');
const env = dotenv.parse(fs.readFileSync('.env'));
// eslint-disable-next-line no-undef
module.exports = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  env: env,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    });
    return config;
  },
};
