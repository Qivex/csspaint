import { defineConfig } from "vite"

export default defineConfig({
	publicDir: "static",
	build: {
		assetsDir: "bundle"
	},
	define: {
		__BUILD_TIMESTAMP__: JSON.stringify(Date.now())
	}
})