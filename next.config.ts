import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
	swSrc: "app/sw.ts",
	swDest: "public/sw.js",
	disable: process.env.NODE_ENV === "development",
	cacheOnNavigation: true,
	dontCacheBustURLsMatching:
		/^dist\/static\/([a-zA-Z0-9]+)\.([a-z0-9]+)\.(css|js)$/,
	exclude: [
		/\.map$/,
		/asset-manifest\.json$/,
		/LICENSE/,
		/README/,
		/robots.txt/,
	],
	reloadOnOnline: true,
});

const nextConfig: NextConfig = {
	poweredByHeader: false,
	compress: true,

	experimental: {
		// reactCompiler: true,
		// parallelServerCompiles: true,
		nextScriptWorkers: true,
		// useLightningcss: true,
	},
};
export default withSerwist(nextConfig);
