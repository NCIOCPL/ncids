import React from 'react';
import Component from './usa-collection--default.twig';
import FancyComponent from './usa-collection--fancy-date.twig';
import MediaComponent from './usa-collection--media.twig';
import HeadersComponent from './usa-collection--only-headers.twig';
import { TestCase } from '../../../../components/test-case';
import css from './index.scss';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg';

export default {
	title: 'Components/Collection/Test Cases',
};


const replaceContent = () => {
	const template = HeadersTemplate.bind({})()
	return template.replaceAll('./img/sprite.svg', img);
};

const Template = (args) => Component(args);
const FancyTemplate = (args) => FancyComponent(args);
const MediaTemplate = (args) => MediaComponent(args);
const HeadersTemplate = (args) => HeadersComponent(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;

export const Fancy = () => <TestCase css={css} html={FancyTemplate.bind({})()} />;

export const Media = () => <TestCase css={css} html={MediaTemplate.bind({})()} />;

export const OnlyHeaders = () => <TestCase css={css} html={replaceContent()} />;
