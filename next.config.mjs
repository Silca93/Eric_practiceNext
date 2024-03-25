/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol:"https",
                hostname:"static.canva.com"
            },
            {
                protocol:"https",
                hostname:"assets.mmsrg.com"
            }
        ]
    }
};

export default nextConfig;
