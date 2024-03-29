import Component from './usa-checkbox.twig';
import Tile from './usa-checkbox--tile.twig';
import TestComponent from './test/test-patterns/test-usa-checkbox.twig';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';

export default {
	title: 'USWDS/Components/Form Inputs/Checkbox',
};

const Template = (args) => Component(args);
const TileTemplate = (args) => Tile(args);
const TestTemplate = (args) => TestComponent(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;
export const CheckboxTile  = () => <TestCase css={css} html={TileTemplate.bind({})()} />;
export const Test  = () => <TestCase css={css} html={TestTemplate.bind({})()} />;
