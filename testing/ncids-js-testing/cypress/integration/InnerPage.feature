Feature: Inner page template

	I want to open see the example inner page

	Scenario: Opening a page template
		Given The user navigates to "/inner-pages/inner-page.html"
		Then The browser title is "Example Inner Page"
		Then The page title is "Page heading (h1)"
