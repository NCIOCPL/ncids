import React from 'react';
import { TestCase } from '../../../../../../components/test-case';
import css from '../../fonts.scss';

const html = `
<section class="usa-section">
	<div class="grid-container">
	<h1 class="nci-heading-display">Page heading (display)</h1>
	<div class="usa-intro usa-prose">
		<p>
			The page heading communicates the main focus of the page
			and changes based on the screen's size.
		</p>
	</div>
		<h1 class="nci-heading-h1">Page heading (h1)</h1>
		<div class="usa-intro usa-prose">
			<p>
				The page heading communicates the main focus of the page. Make your
				page heading descriptive and keep it succinct.
			</p>
		</div>
		<h2 class="nci-heading-h2">Section heading (h2)</h2>
		<div class="usa-prose">
			<p>
				These headings introduce, respectively, sections and subsections
				within your body copy. As you create these headings, follow the same
				guidelines that you use when writing section headings: Be succinct,
				descriptive, and precise.
			</p>
		</div>
		<h3 class="nci-heading-h3">Subsection heading (h3)</h3>
		<div class="usa-prose">
			<p>
				The particulars of your body copy will be determined by the topic of
				your page. Regardless of topic, it's a good practice to follow the
				inverted pyramid structure when writing copy: Begin with the
				information that's most important to your users and then present
				information of less importance.
			</p>
			<p>
				Keep each section and subsection focused — a good approach is to
				include one theme (topic) per section.
			</p>
		</div>
		<h4 class="nci-heading-h4">Subsection heading (h4)</h4>
		<div class="usa-prose">
			<p>
				Use the side navigation menu to help your users quickly skip to
				different sections of your page. The menu is best suited to
				displaying a hierarchy with one to three levels and, as we
				mentioned, to display the sub-navigation of a given page.
			</p>
		</div>
		<h5 class="nci-heading-h5">Subsection heading (h5)</h5>
		<div class="usa-prose">
			<p>
				Use the side navigation menu to help your users quickly skip to
				different sections of your page. The menu is best suited to
				displaying a hierarchy with one to three levels and, as we
				mentioned, to display the sub-navigation of a given page.
			</p>
		</div>
		<h6 class="nci-heading-h6">Subsection heading (h6)</h6>
		<div class="usa-prose">
			<p>
				Use the side navigation menu to help your users quickly skip to
				different sections of your page. The menu is best suited to
				displaying a hierarchy with one to three levels and, as we
				mentioned, to display the sub-navigation of a given page.
			</p>
		</div>
		<h1 class="nci-heading-h1 nci-heading--label">Page heading (h1 --label)</h1>
		<div class="usa-intro usa-prose">
			<p>
				The page heading communicates the main focus of the page. Make your
				page heading descriptive and keep it succinct.
			</p>
		</div>
		<h2 class="nci-heading-h2 nci-heading--label">Section heading (h2 --label)</h2>
		<div class="usa-prose">
			<p>
				These headings introduce, respectively, sections and subsections
				within your body copy. As you create these headings, follow the same
				guidelines that you use when writing section headings: Be succinct,
				descriptive, and precise.
			</p>
		</div>
		<h3 class="nci-heading-h3 nci-heading--label">Subsection heading (h3 --label)</h3>
		<div class="usa-prose">
			<p>
				The particulars of your body copy will be determined by the topic of
				your page. Regardless of topic, it's a good practice to follow the
				inverted pyramid structure when writing copy: Begin with the
				information that's most important to your users and then present
				information of less importance.
			</p>
			<p>
				Keep each section and subsection focused — a good approach is to
				include one theme (topic) per section.
			</p>
		</div>
		<h4 class="nci-heading-h4 nci-heading--label">Subsection heading (h4 --label)</h4>
		<div class="usa-prose">
			<p>
				Use the side navigation menu to help your users quickly skip to
				different sections of your page. The menu is best suited to
				displaying a hierarchy with one to three levels and, as we
				mentioned, to display the sub-navigation of a given page.
			</p>
		</div>
		<h5 class="nci-heading-h5 nci-heading--label">Subsection heading (h5 --label)</h5>
		<div class="usa-prose">
			<p>
				Use the side navigation menu to help your users quickly skip to
				different sections of your page. The menu is best suited to
				displaying a hierarchy with one to three levels and, as we
				mentioned, to display the sub-navigation of a given page.
			</p>
		</div>
		<h6 class="nci-heading-h6 nci-heading--label">Subsection heading (h6 --label)</h6>
		<div class="usa-prose">
			<p>
				Use the side navigation menu to help your users quickly skip to
				different sections of your page. The menu is best suited to
				displaying a hierarchy with one to three levels and, as we
				mentioned, to display the sub-navigation of a given page.
			</p>
		</div>
	</div>
</section>
`;

export const NciHeadingWithContent = () => <TestCase css={css} html={html} />;
