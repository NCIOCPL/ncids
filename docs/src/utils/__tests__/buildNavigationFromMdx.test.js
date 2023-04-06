import buildNavigationFromMdx from '../buildNavigationFromMdx';

const mockMdxQuery = jest.requireActual(
	'./../__mocks__/mock-query-mdx-data.js'
);

describe('use-nav-data', () => {
	it('should sanitize the query response and return appropriate nav data in order', () => {
		const navData = buildNavigationFromMdx(mockMdxQuery.mockMdxQueryResponse);
		expect(navData).toEqual(mockMdxQuery.mockSanitizedNavData);
	});
});
