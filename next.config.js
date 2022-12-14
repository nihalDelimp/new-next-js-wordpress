/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	trailingSlash: true,
	distDir: "build",
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	optimizeFonts: false,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	env: {
		WORDPRESS_GRAPHQL_ENDPOINT:
			"https://dev-acf-testing.pantheonsite.io/graphql",
		WORDPRESS_URL: "https://dev-acf-testing.pantheonsite.io",
	},
};

module.exports = nextConfig;
