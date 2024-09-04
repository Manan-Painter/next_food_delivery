/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mdbcdn.b-cdn.net"],
  },
  env: {
    NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  },
};

export default nextConfig;
