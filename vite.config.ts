import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	root: "./src",
	build: {
		// root (= ./src) から見た相対パスで指定
		outDir: "../public",
		emptyOutDir: true,
	},
	plugins: [
		react({
			jsxImportSource: "@emotion/react",
			babel: {
				plugins: ["@emotion/babel-plugin"],
			},
		}),
	],
	esbuild: {
		jsxFactory: "jsx",
		jsxInject: `import { jsx } from "@emotion/react"`,
	},
});
