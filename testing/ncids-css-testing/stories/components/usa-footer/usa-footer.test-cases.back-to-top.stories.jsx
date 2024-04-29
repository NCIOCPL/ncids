import Component from './content/back-to-top.twig';
import css from './nci-big.scss';

import { TestCase } from '../../../components/test-case';
import { NciBigFooterContent } from './content';
import { NCIBigFooter } from '@nciocpl/ncids-js/usa-footer';

export default {
	title: 'Components/Footer/Test Cases',
	args: {
		ncidsInitJs: () => {
			const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
			const element = NCIBigFooter.create(footer, {
				backToTopText: document.documentElement.lang === 'es' ? 'Volver Arriba' : 'Back To Top'
			});
			return element;
		},
	},
};

const Template = (args) => Component(args);

export const BackToTop = () => (
	<TestCase css={css} html={Template.bind({})(NciBigFooterContent)} langcode='en' />
);
