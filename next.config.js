/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_MAIN_URL: process.env.SERVER_MAIN_URL,
    SERVER_SERVICE_URL: process.env.SERVER_SERVICE_URL,
    SERVER_ESSAY_WRITER_URL: process.env.SERVER_ESSAY_WRITER_URL,
  },
};

module.exports = nextConfig;
