Feature: Component usa-list

	Scenario: Test ordered list partial
		Given user is navigating to 'http://localhost:6006/iframe.html?id=components-usa-list-usa-list--default&args=&viewMode=story'
		Then the 'ol' has 'list-style-type' of 'decimal'
		And the 'ol' loads 'sans' font

	Scenario: Test unordered list partial
		Given user is navigating to 'http://localhost:6006/iframe.html?id=components-usa-list-usa-list--default&args=&viewMode=story'
		Then the 'ul' has 'list-style-type' of 'disc'
		And the 'ul' loads 'sans' font

	Scenario: Test unstyled list partial
		Given user is navigating to 'http://localhost:6006/iframe.html?id=components-usa-list-unstyled--unstyled&args=&viewMode=story'
		Then the 'ul' has 'list-style-type' of 'none'
		And the 'ul' loads 'sans' font
