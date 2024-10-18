import Component from '@nciocpl/ncids-twig/components/usa-footer/usa-footer.twig';
import css from './nci-big.scss';

import { TestCase } from '../../../components/test-case';
import { NciBigFooterContentNoForm } from './content';
import { NCIBigFooter } from '@nciocpl/ncids-js/usa-footer';

export default {
	title: 'Components/Footer/Test Cases',
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

export const NoForm = () => (
	<TestCase css={css} html={Template.bind({})(NciBigFooterContentNoForm)} />
);
