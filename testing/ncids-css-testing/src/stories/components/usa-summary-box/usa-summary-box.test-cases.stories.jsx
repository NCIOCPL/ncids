import Component from './content/summary-box-row.twig';
import USAList from '@nciocpl/ncids-twig/components/usa-list/usa-list.twig?twig';
import SummaryBox from '@nciocpl/ncids-twig/components/usa-summary-box/usa-summary-box.twig?twig';
import css from './index.scss?inline';

export default {
	title: 'Components/Summary Box/Test Cases',
	component: Component,
	parameters: { css },
};

export const SummaryBoxRow = {
	args: {
		items: [
			{
				summarybox: SummaryBox({
					heading: 'Common Cancer Types',
					content: USAList({
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
				summarybox: SummaryBox({
					heading: 'Advanced and Ongoing Diagnosis',
					content: USAList({
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
	}
};
