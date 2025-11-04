import css from './blog-post.scss?inline';
import Component from './blog.twig';
import { bodyContent, publicUse } from './body-content.js';
import { leadImage, cardImage, seriesHeader } from './blog-images';

import { nciImgLogo } from '../nci-header-logo';
import { primaryNojs } from '../nci-header-primary';
import { secondary } from '../nci-header-secondary';

export default {
	title: 'templates/Blogs',
	component: Component,
	parameters: {
		css,
	},
};

export const BlogPost = {
	args: {
		post: {
			title:
				'Study Aims to Reduce Lung Cancer Stigma by Teaching Health Professionals Empathy',
			blog_subscribe: 'Subscribe',
			publish_date: 'January 15, 2025',
			blog_byline: 'by Edward Winstead',
			field_image_article: leadImage,
			field_intro_text:
				"For people with a history of smoking, a diagnosis of lung cancer can cause feelings of guilt and shame due to the stigma that's often associated with the disease. This stigma can hinder open communication between patients and health care providers and hinder patients' use of tobacco cessation counseling. Researchers at Memorial Sloan Kettering Cancer Center have developed a training program to help health care providers reduce lung cancer-related stigma. In this interview, the trial's leaders, Smita Banerjee, Ph.D., a behavioral scientist, and Jamie Ostroff, Ph.D., a psychologist, discuss the impact of stigma on people with lung cancer and an NCI-supported clinical trial that's evaluating the training program.",
			body: bodyContent,
			field_related_resources: [
				'Nullam eget gravida leo. Vivamus sapien felis, dapibus sit ame',
				'Fusce dignissim nulla nisl, vitae convallis sapien suscipit eu',
				'Donec aliquet, arcu sed viverra facilisis',
				'Vestibulum ante: Ipsum primis in faucibus orci luctus',
			],
			field_citation: [
				'Pellentesque tempus vulputate purus sit amet elementum. Fusce dignissim nulla nisl, vitae convallis sapien suscipit eu. Nam commodo tellus vitae lorem luctus tincidunt.',
				'Harris JE, Thun MJ, Mondul AM, Calle EE. Cigarette tar yields in relation to mortality from lung cancer in the cancer prevention study II prospective cohort, 1982–8. British Medical Journal 2004; 328(7431):72.',
				'Federal Trade Commission. Statement of William Kovacik, FTC Commissioner, Testimony Before the Committee on Science, Commerce, and Transportation, United States Senate (November 13, 2007).',
			],
			public_use: publicUse,
			categories: [
				{ name: 'Biology of Cancer', isSelected: false },
				{ name: 'Cancer Risk', isSelected: false },
				{ name: 'Childhood Cancer', isSelected: false },
				{ name: 'Clinical Trail Results', isSelected: false },
				{ name: 'Disparities', isSelected: false },
				{ name: 'FDA Approval', isSelected: false },
				{ name: 'Global Health', isSelected: false },
				{ name: 'Leadership & Expert Views', isSelected: false },
				{ name: 'Prevention', isSelected: false },
				{ name: 'Prognosis', isSelected: false },
				{ name: 'Screening & Early Detection', isSelected: false },
				{ name: 'Survivorship & Supportive Care', isSelected: false },
				{ name: 'Technology', isSelected: false },
				{
					name: 'Test For a Really Long Title or Category Name Here',
					isSelected: true,
				},
				{ name: 'Treatment', isSelected: false },
			],
			archive: [
				{ date: '2025', total: '25', isSelected: true },
				{ date: '2024', total: '18', isSelected: false },
				{ date: '2023', total: '22', isSelected: false },
				{ date: '2022', total: '15', isSelected: false },
				{ date: '2021', total: '12', isSelected: false },
			],
			cardImage: cardImage,
		},
		nci_img_logo: nciImgLogo,
		mega_menu: primaryNojs,
		secondary,
	},
};

export const BlogSeries = {
	args: {
		series: {
			title: 'Cancer Currents: An NCI Cancer Research Blog',
			field_image_article: seriesHeader,
			field_intro_text:
				'A blog featuring news and research updates from the National Cancer Institute. Learn more <a href="#acc">about Cancer Currents.</a>',
			body: bodyContent,
			categories: [
				{ name: 'Biology of Cancer', isSelected: false },
				{ name: 'Cancer Risk', isSelected: false },
				{ name: 'Childhood Cancer', isSelected: false },
				{ name: 'Clinical Trail Results', isSelected: false },
				{ name: 'Disparities', isSelected: false },
				{ name: 'FDA Approval', isSelected: false },
				{ name: 'Global Health', isSelected: false },
				{ name: 'Leadership & Expert Views', isSelected: true },
				{ name: 'Prevention', isSelected: false },
				{ name: 'Prognosis', isSelected: false },
				{ name: 'Screening & Early Detection', isSelected: false },
				{ name: 'Survivorship & Supportive Care', isSelected: false },
				{ name: 'Technology', isSelected: false },
				{
					name: 'Test For a Really Long Title or Category Name Here',
					isSelected: false,
				},
				{ name: 'Treatment', isSelected: false },
			],
			archive: [
				{ date: '2025', total: '25', isSelected: true },
				{ date: '2024', total: '18', isSelected: false },
				{ date: '2023', total: '22', isSelected: false },
				{ date: '2022', total: '15', isSelected: false },
				{ date: '2021', total: '12', isSelected: false },
			],
			collection: [
				{
					title:
						'As Rates of Some Cancers Increase in Younger People, Researchers Search for Answers',
					field_author: 'By Carmen Phillips',
					field_date_posted: 'May 14, 2025',
					field_about_blog:
						'As diagnoses of colorectal, breast, and other cancers continue to climb in people under age 50, researchers are trying to understand what’s behind this phenomenon. Is it environmental exposures, genetics, lifestyle? The culprits, they say, remain unclear.',
				},
				{
					title: 'Rapid Genetic Test Could Help Guide Brain Cancer Surgery',
					field_author: 'By Edward Winstead',
					field_date_posted: 'May 8, 2025',
					field_about_blog:
						'Scientists have developed a test for use during brain cancer surgery that rapidly measures the levels of certain genetic mutations in patients’ tumor samples. The test uses droplet digital polymerase chain reaction technology and produces results within 15 minutes.',
				},
				{
					title: 'Will This Cancer Metastasize? Check Its “Stickiness”',
					field_author: 'By Melissa Madden',
					field_date_posted: 'May 6, 2025',
					field_about_blog:
						'A device that measures the “stickiness” of cancer cells in tumor samples may help predict the likelihood of a patient’s cancer metastasizing. Researchers believe the device could eventually help doctors make more informed treatment choices.',
				},
				{
					title:
						'FDA Approval Likely to Change Initial Treatment for Some People with Advanced Colorectal Cancer',
					field_author: 'By Carmen Phillips',
					field_date_posted: 'May 2, 2025',
					field_about_blog:
						'FDA has approved the combination of the immunotherapy drugs ipilimumab (Yervoy) and nivolumab (Opdivo) for the initial treatment of people with advanced colorectal cancer whose tumors are classified as MSI-H or dMMR.',
				},
				{
					title:
						'As Rates of Some Cancers Increase in Younger People, Researchers Search for Answers',
					field_author: 'By Carmen Phillips',
					field_date_posted: 'May 14, 2025',
					field_about_blog:
						'As diagnoses of colorectal, breast, and other cancers continue to climb in people under age 50, researchers are trying to understand what’s behind this phenomenon. Is it environmental exposures, genetics, lifestyle? The culprits, they say, remain unclear.',
				},
				{
					title: 'Rapid Genetic Test Could Help Guide Brain Cancer Surgery',
					field_author: 'By Edward Winstead',
					field_date_posted: 'May 8, 2025',
					field_about_blog:
						'Scientists have developed a test for use during brain cancer surgery that rapidly measures the levels of certain genetic mutations in patients’ tumor samples. The test uses droplet digital polymerase chain reaction technology and produces results within 15 minutes.',
				},
			],
		},
		nci_img_logo: nciImgLogo,
		mega_menu: primaryNojs,
		secondary,
	},
};
