import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ["localhost"],
	},
	ignoreDuringBuilds: true,
};

export default nextConfig;
