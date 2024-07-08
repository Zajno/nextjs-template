/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    sassOptions: {
        additionalData: "@import './src/styles/common/gem.scss'\r\n",
    },
    images: {
        loader: "custom",
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    transpilePackages: ["next-image-export-optimizer"],
    env: {
        APP_ENV: process.env.APP_ENV,
        nextImageExportOptimizer_imageFolderPath: "public/images",
        nextImageExportOptimizer_exportFolderPath: "dist",
        nextImageExportOptimizer_quality: "75",
        nextImageExportOptimizer_storePicturesInWEBP: "true",
        nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
        nextImageExportOptimizer_generateAndUseBlurImages: "true",
        nextImageExportOptimizer_remoteImageCacheTTL: "0",
    }
};

export default nextConfig;
