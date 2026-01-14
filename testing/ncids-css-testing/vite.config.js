import { defineConfig } from 'vite';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import react from '@vitejs/plugin-react';
import twig from 'vite-plugin-twig-drupal';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {
		include: ['twig', 'drupal-attribute', 'drupal-twig-extensions', 'drupal-twig-extensions/twig'],
	},
	plugins: [
		react(),
		twig({
			namespaces: {
				// components: join(__dirname, 'src/stories/components'),
				// Other namespaces as required.
				// TODO
				'nciocpl/ncids-twig': resolve(__dirname, './../../packages/ncids-twig'),
				'components': resolve(__dirname, './src/stories/uswds-native'),
				'templates': resolve(__dirname, '../../../packages/ncids-css/uswds-packages/templates'),
			},
			// Optional if you are using React storybook renderer. The default is 'html' and works with storybook's html
			// renderer.
			framework: 'react',
			functions: {
				// You can add custom functions - each is a function that is passed the active Twig instance and should call
				// e.g. extendFunction to register a function
				// reverse: (twigInstance) => twigInstance.extendFunction("reverse", () => (text) => text.split(' ').reverse().join(' ')),
				// e.g. extendFilter to register a filter
				// clean_unique_id: (twigInstance) => twigInstance.extendFilter("clean_unique_id", () => (text) => text.split(' ').reverse().join(' ')),
			},
			globalContext: {
				// Global variables that should be present in all templates.
				// active_theme: 'my_super_theme',
				// is_front_page: false,
			},
		}),
	],
	resolve: {
	},
	build: {
		minify: true,
		cssMinify: true,
		rollupOptions: {
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
				includePaths: [
					join(__dirname, 'node_modules/@nciocpl/ncids-css/packages'),
					join(__dirname, 'node_modules/@nciocpl/ncids-css/uswds-packages'),
				],
			},
		},
	},
});
