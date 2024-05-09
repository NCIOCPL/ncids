import Component from './summary-box-row.twig';
import USAList from '@nciocpl/ncids-twig/components/usa-list/usa-list.twig';
import SummaryBox from '@nciocpl/ncids-twig/components/usa-summary-box/usa-summary-box.twig';
import { TestCase } from '../../../../components/test-case';
import css from './index.scss';

export default {
	title: 'Components/Summary Box/Test Cases',
};

const Template = (args) => Component(args);

export const SummaryBoxRow = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			items: [
				{
					summarybox: SummaryBox.bind({})({
						heading: 'Common Cancer Types',
						content: USAList.bind({})({
							variant: 'twoColumn unstyled',
							items: [
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Bladder Cancer</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Breast Cancer</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Colorectal Cancer</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Endometrial Cancer</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Kidney Cancer</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Lung Cancer</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Melanoma</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Non-Hodgkin Lymphoma</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Pancreatic Cancer</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Prostate Cancer</a>",
							],
						}),
					}),
				},
				{
					summarybox: SummaryBox.bind({})({
						heading: 'Advanced and Ongoing Diagnosis',
						content: USAList.bind({})({
							variant: 'unstyled',
							items: [
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Advanced Cancer</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Managing Cancer Care</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Metastatic Cancer</a>",
								"<a class='usa-summary-box__link text-no-underline hover:text-underline' href='#'>Recurrent Cancer</a>",
							],
						}),
					}),
				},
			],
		})}
	/>
);
