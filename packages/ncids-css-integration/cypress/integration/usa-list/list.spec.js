describe('usa-list', () => {
	it('visits component', () => {
		cy.visit(
			'http://localhost:6006/iframe.html?id=components-usa-list-usa-list--default&args=&viewMode=story'
		);
	});

	it('finds shadow', () => {
		cy.get('#root > div').shadow();
	});

	it('has default lists', () => {
		cy.get('#root > div').shadow().find('ul').should('have.class', 'usa-list');
		cy.get('#root > div').shadow().find('ol').should('have.class', 'usa-list');
	});

	it('finds markers', () => {
		cy.get('#root > div')
			.shadow()
			.find('ul.usa-list')
			.should('have.css', 'list-style-type', 'disc');
		cy.get('#root > div')
			.shadow()
			.find('ol.usa-list')
			.should('have.css', 'list-style-type', 'decimal');
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
