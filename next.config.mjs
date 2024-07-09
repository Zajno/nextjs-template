/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        additionalData: "@import './src/styles/common/gem.scss'\r\n",
    },
    env: {
        APP_ENV: process.env.APP_ENV,
    }
};

export default nextConfig;
