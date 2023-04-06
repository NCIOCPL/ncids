import findObjectByKey from '../findObjectByKey';

const mockMdxQuery = jest.requireActual(
	'./../__mocks__/mock-query-mdx-data.js'
);

describe('buildObjectByKey', () => {
	it('should return the navigation data of whatever path is passed to it', () => {
		const currentNavData = findObjectByKey(
			mockMdxQuery.mockSanitizedNavData,
			'name',
			'design-principles'
		);
		expect(currentNavData).toEqual({
			name: 'design-principles',
			path: '/design-principles/',
			navOrder: 2,
			label: 'Design Principles',
			children: [],
		});
	});
});
