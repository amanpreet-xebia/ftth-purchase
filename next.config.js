// @ts-check
/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    API_BASE_LOCAL_URL: 'http://165.227.158.208/api',
    API_BASE_DEV_URL: 'http://165.227.158.208/api',
    API_BASE_PROD_URL: 'http://165.227.158.208/api',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    });
    return config;
  },
};
