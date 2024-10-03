import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(jsx|tsx)"],
	staticDirs: [ '../public' ],
  addons: [],
	core: {
		builder: '@storybook/builder-vite', // 👈 The builder enabled here.
		disableTelemetry: true,
		disableWhatsNewNotifications: true,
		enableCrashReports: true,
	},
	docs: false,
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
	async viteFinal(config, { configType }) {
		// Merge custom configuration into the default config
		const { mergeConfig } = await import('vite');

		// vite-plugin-twig-drupal needs some help resolving the packages on build
		const prodConfig = {
			resolve: {
				alias: {
					'drupal-attribute': require.resolve('drupal-attribute'),
					'drupal-twig-extensions/twig': require.resolve('drupal-twig-extensions/twig'),
					'twig': require.resolve('twig'),
				}
			}
		};
		const devContent = {};

		const newConfig = mergeConfig(config, (configType === 'PRODUCTION') ? prodConfig : devContent);

		return newConfig;
	},
};
export default config;
