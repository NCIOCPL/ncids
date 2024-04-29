import Component from '@nciocpl/ncids-twig/components/usa-footer/usa-footer.twig';
import css from './nci-big.scss';

import { TestCase } from '../../../components/test-case';
import { NciBigFooterContent, NciBigFooterContentSpanish } from './content';
import { NCIBigFooter } from '@nciocpl/ncids-js/usa-footer';

export default {
	title: 'Components/Footer/Variants/NCI Big',
	args: {
		ncidsInitJs: () => {
			const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
			return NCIBigFooter.create(footer, {
				backToTopText: null,
			});
		},
	},
};

const Template = (args) => Component(args);

export const English = () => (
	<TestCase css={css} html={Template.bind({})(NciBigFooterContent)} langcode='en' />
);
export const Spanish = () => (
	<TestCase css={css} html={Template.bind({})(NciBigFooterContentSpanish)} langcode='es'  />
);
