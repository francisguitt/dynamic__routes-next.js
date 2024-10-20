/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com', // Apenas o domínio
        },
      ],
    },
  };
  
  export default nextConfig;
  