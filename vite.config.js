import SortCss from 'postcss-sort-media-queries'
import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig(({ command }) => {
	return {
		define: {
			[command === 'serve' ? 'global' : '_global']: {},
		},
		root: 'src',
		base: '/goit-js-hw-11/',
		build: {
			sourcemap: true,
			outDir: 'dist',
			assetsDir: 'assets',
			rollupOptions: {
				input: {
					main: './src/index.html',
				},
				output: {
					manualChunks(id) {
						if (id.includes('node_modules')) {
							return 'vendor'
						}
					},
					entryFileNames: chunkInfo => {
						if (chunkInfo.name === 'commonHelpers') {
							return 'commonHelpers.js'
						}
						return '[name].js'
					},
					assetFileNames: assetInfo => {
						if (assetInfo.name && assetInfo.name.endsWith('.html')) {
							return '[name].[ext]'
						}
						return 'assets/[name]-[hash][extname]'
					},
				},
			},
			emptyOutDir: true,
		},
		plugins: [
			injectHTML(),
			FullReload(['./src/**/**.html']),
			SortCss({
				sort: 'mobile-first',
			}),
		],
	}
})
