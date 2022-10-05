import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { screen } from '@testing-library/dom';
import { nciFeatureCardRow3Cards } from './nci-feature-card-row-dom';
import { NCIFeatureCardRow } from '../nci-feature-card-row';

describe('NCI Feature Card Row', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('should render the NCI Feature Card Row with 3 cards', () => {
		const container = nciFeatureCardRow3Cards();
		document.body.append(container);

		const element = document.getElementById('nci-feature-card-row-3cards');
		const featureCardRow = NCIFeatureCardRow.create(<HTMLElement>element);
		expect(featureCardRow).toBeTruthy();

		const cards = screen.queryAllByLabelText('Feature Card');
		expect(cards).toHaveLength(3);
	});

	it('should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCIFeatureCardRow.create('lemur');
		}).toThrow('Element is not an HTMLElement');
	});

	it('should return existing component if called more than once', () => {
		const container = nciFeatureCardRow3Cards();
		document.body.append(container);

		const element = document.getElementById('nci-feature-card-row-3cards');
		const featureCardRow = NCIFeatureCardRow.create(<HTMLElement>element);
		expect(featureCardRow).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const featureCardRow2 = new NCIFeatureCardRow(element);
		expect(featureCardRow2).toBeTruthy();
	});

	it('should unregister', () => {
		const container = nciFeatureCardRow3Cards();
		document.body.append(container);

		const element = document.getElementById('nci-feature-card-row-3cards');
		const featureCardRow = NCIFeatureCardRow.create(<HTMLElement>element);
		expect(featureCardRow).toBeTruthy();

		featureCardRow.unregister();
	});
});
