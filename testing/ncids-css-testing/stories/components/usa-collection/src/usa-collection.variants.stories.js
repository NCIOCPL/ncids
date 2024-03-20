import React from 'react';
import Test from '@nciocpl/ncids-twig/components/usa-collection/usa-collection.twig';
import { CondensedContent } from './content';
import { TestCase } from '../../../../components/test-case';
import css from './index.scss';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg';

export default {
	title: 'Components/Collection/Variants',
};

// Replace condensed collection svgs for storybook static path files
const replaceContent = () => {
	const template = TestTemplate.bind({})(CondensedContent)
	return template.replaceAll('./img/sprite.svg', img);
};

const TestTemplate = (args) => Test(args);

export const Condensed = () => <TestCase css={css} html={replaceContent()} />;
