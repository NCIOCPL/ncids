import Component from './usa-step-indicator.twig';
import {
  DefaultContent,
  CenterCountersSmContent,
  CenterCountersContent,
  CenterNoLabelContent,
  CenterContent,
  CountersSmContent,
  CountersContent,
  NoLabelsContent,
  ShortContent,
} from './content';
import css from './index.scss?inline';

export default {
	title: 'USWDS/Components/Step Indicator',
	component: Component,
	parameters: { css },
};

export const Default = { args: DefaultContent};
export const CenterCountersSm = { args: CenterCountersSmContent};
export const CenterCounters = { args: CenterCountersContent};
export const CenterNoLabel = { args: CenterNoLabelContent};
export const Center = { args: CenterContent};
export const CountersSm = { args: CountersSmContent};
export const Counters = { args: CountersContent};
export const NoLabels = { args: NoLabelsContent};
export const Short = { args: ShortContent};
