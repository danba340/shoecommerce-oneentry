/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "ecommerce.oneentry.cloud",
			},
			{
				hostname: "assets.aceternity.com"
			},
			{
				hostname: "ui.aceternity.com"
			},
			{
				hostname: "danielbark.oneentry.cloud"
			}

		],
	},
};

export default nextConfig;
