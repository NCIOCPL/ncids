Feature: Component usa-list

	Scenario: Test ordered list partial
		Given user is navigating to 'http://localhost:6006/iframe.html?id=components-usa-list-usa-list--default&args=&viewMode=story'
		Then the 'ol' has 'decimal' list style type
		And loads custom font

	Scenario: Test unordered list partial
		Given user is navigating to 'http://localhost:6006/iframe.html?id=components-usa-list-usa-list--default&args=&viewMode=story'
		Then the 'ul' has 'disc' list style type
		And loads custom font

	Scenario: Test unstyled list partial
		Given user is navigating to 'http://localhost:6006/iframe.html?id=components-usa-list-unstyled--unstyled&args=&viewMode=story'
		Then the 'ul' has 'none' list style type
		And loads custom font
