/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com", 
        // hostname: "upload.wikimedia.org", 
        pathname: "/**",          
      },
    ],
  },
};

export default nextConfig;
