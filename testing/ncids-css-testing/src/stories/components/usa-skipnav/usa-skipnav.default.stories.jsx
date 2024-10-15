import Component from './content/skipnav-with-content.twig';
import css from './index.scss?inline';

export default {
	title: 'Components/Skipnav/Default',
	component: Component,
	parameters: { css },
};

// For this example we want to use the skipnav component twig, but also need
// other content for the test. So we are making a local twig that includes
// the shared template.
export const English = {
	args: {
		label: 'Skip to main content',
		href: '#main-content',
		placeholder: 'Navigation Placeholder',
		maincontent: 'Main Page Content',
	}
};

export const Spanish = {
	args: {
		label: 'Saltar al contenido principal',
		href: '#main-content',
		placeholder: 'Marcador de posición de navegación',
		maincontent: 'Contenido de la página de inicio',
	}
};
