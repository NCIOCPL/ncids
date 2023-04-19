import Component from './usa-radio.twig';
import Tile from './usa-radio--tile.twig';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';

export default {
	title: 'USWDS/Components/Form Inputs/Radio',
};

const Template = (args) => Component(args);
const TileTemplate = (args) => Tile(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;
export const RadioTile = () => <TestCase css={css} html={TileTemplate.bind({})()} />;
