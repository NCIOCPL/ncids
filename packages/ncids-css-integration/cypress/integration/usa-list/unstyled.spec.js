describe('usa-list', () => {
	it('visits component', () => {
		cy.visit(
			'http://localhost:6006/iframe.html?id=components-usa-list-unstyled--unstyled&args=&viewMode=story'
		);
	});

	it('finds shadow', () => {
		cy.get('#root > div').shadow();
	});

	it('has unstyled list', () => {
		cy.get('#root > div')
			.shadow()
			.find('ul')
			.should('have.class', 'usa-list usa-list--unstyled');
	});

	it('does not find marker', () => {
		cy.get('#root > div')
			.shadow()
			.find('.usa-list--unstyled')
			.should('have.css', 'list-style-type', 'none');
	});

	it('has fonts', () => {
		cy.get('#root > div')
			.shadow()
			.find('.usa-list')
			.should(
				'have.css',
				'font-family',
				'"Open Sans", -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
			);
	});
});
