/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    sassOptions: {
        additionalData: "@import './src/styles/common/gem.scss'\r\n",
    }
};

export default nextConfig;
