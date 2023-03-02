import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-radio.twig";
import Tile from "./usa-radio--tile.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/Radio",
  argTypes: {
    aria_disabled: {
      control: {type: 'boolean'},
      defaultValue: false,
      name: "aria-disabled",
    }
  }
};

const Template = (args) => Component(args);
const TileTemplate = (args) => Tile(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;
export const RadioTile = () => <TestCase css={css} html={TileTemplate.bind({})()} />;
