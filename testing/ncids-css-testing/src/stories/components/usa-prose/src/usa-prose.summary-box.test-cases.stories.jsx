import Component from './content/summary-box.twig';
import SummaryBox from '@nciocpl/ncids-twig/components/usa-summary-box/usa-summary-box.twig?twig';
import css from './prose-summary-box.scss?inline';

export default {
	title: 'Components/Prose/Test Cases',
	component: Component,
	parameters: { css },
};

export const ProseWithSummaryBox = {
	args: {
		summarybox: SummaryBox({
			heading: 'Survivorship Clinics',
			content:
				'<div class="usa-prose"><p>Some cancer centers and hospitals have programs that specialize in long-term follow-up care for cancer survivors. Many <a href="/research/infrastructure/cancer-centers">NCI-Designated Cancer Centers</a> and large community treatment centers offer some form of survivorship program or clinic for adults who have been treated for cancer. Also, the cancer education website <a href="https://www.oncolink.org/">OncoLink</a> has a searchable <a href="http://www.oncolink.org/clinics/search">database</a> of survivorship clinics across the United States.</p> <p>For children and adolescents, NCI’s <a href="https://cancercontrol.cancer.gov/ocs/resources/follow-up-care.html">Office of Cancer Survivorship</a> provides information on where to get follow-up care after treatment, in addition to other posttreatment resources. In addition, the National Children\'s Cancer Society also&nbsp;provides a <a href="https://www.thenccs.org/long-term-clinics">list of long-term follow-up care clinics for children</a> who have had cancer.</p></div>',
		}),
	},
};
