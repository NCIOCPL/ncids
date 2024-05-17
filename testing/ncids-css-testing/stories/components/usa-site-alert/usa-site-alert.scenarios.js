const viewports = [
	{
		label: 'mobile',
		width: 479,
		height: 360,
	},
	{
		label: 'desktop',
		width: 1024,
		height: 768,
	},
];

module.exports = [
	// Default
	// Default example
	{
		label: 'usa-site-alert default',
		storyId: 'components-site-alert-default--default',
		readySelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	{
		label: 'usa-site-alert default toggle focus',
		storyId: 'components-site-alert-default--default',
		readySelector: '.usa-alert__nci-button--toggle',
		focusSelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	{
		label: 'usa-site-alert default toggle click',
		storyId: 'components-site-alert-default--default',
		readySelector: '.usa-alert__nci-button--toggle',
		clickSelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	// Default dismissible
	{
		label: 'usa-site-alert default close',
		storyId: 'components-site-alert-default--default-dismissible',
		readySelector: '.usa-alert__nci-button--close',
		viewports
	},
	{
		label: 'usa-site-alert default close focus',
		storyId: 'components-site-alert-default--default-dismissible',
		readySelector: '.usa-alert__nci-button--close',
		focusSelector: '.usa-alert__nci-button--close',
		viewports
	},

	// Slim
	// Slim example
	{
		label: 'usa-site-alert slim',
		storyId: 'components-site-alert-variants--slim',
		viewports
	},
	// Slim dismissible
	{
		label: 'usa-site-alert slim close',
		storyId: 'components-site-alert-variants--slim-dismissible',
		viewports
	},
	{
		label: 'usa-site-alert slim close focus',
		storyId: 'components-site-alert-variants--slim-dismissible',
		readySelector: '.usa-alert__nci-button--close',
		focusSelector: '.usa-alert__nci-button--close',
		viewports
	},

	// Modifiers
	// Emergency
	{
		label: 'usa-site-alert default emergency',
		storyId: 'components-site-alert-modifiers-emergency-default--default',
		readySelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	{
		label: 'usa-site-alert default emergency toggle click',
		storyId: 'components-site-alert-modifiers-emergency-default--default',
		readySelector: '.usa-alert__nci-button--toggle',
		clickSelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	{
		label: 'usa-site-alert default emergency close',
		storyId: 'components-site-alert-modifiers-emergency-default--default-dismissible',
		readySelector: '.usa-alert__nci-button--close',
		viewports
	},
	{
		label: 'usa-site-alert slim emergency',
		storyId: 'components-site-alert-modifiers-emergency-slim--slim',
		viewports
	},
	{
		label: 'usa-site-alert slim emergency close',
		storyId: 'components-site-alert-modifiers-emergency-slim--slim-dismissible',
		viewports
	},

	// Info
	{
		label: 'usa-site-alert default info',
		storyId: 'components-site-alert-modifiers-info-default--default',
		readySelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	{
		label: 'usa-site-alert default info toggle click',
		storyId: 'components-site-alert-modifiers-info-default--default',
		readySelector: '.usa-alert__nci-button--toggle',
		clickSelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	{
		label: 'usa-site-alert default info close',
		storyId: 'components-site-alert-modifiers-info-default--default-dismissible',
		readySelector: '.usa-alert__nci-button--close',
		viewports
	},
	{
		label: 'usa-site-alert slim info',
		storyId: 'components-site-alert-modifiers-info-slim--slim',
		viewports
	},
	{
		label: 'usa-site-alert slim info close',
		storyId: 'components-site-alert-modifiers-info-slim--slim-dismissible',
		viewports
	},

	// Test cases
	// No JS
	{
		label: 'usa-site-alert test-cases no-js',
		storyId: 'components-site-alert-test-cases-no-js--default',
		viewports
	},
	// Two column emergency
	{
		label: 'usa-site-alert test-cases two-column emergency',
		storyId: 'components-site-alert-test-cases-two-column-list--emergency',
		readySelector: '.usa-alert__nci-button--toggle',
		clickSelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	// Two column info
	{
		label: 'usa-site-alert test-cases two-column info',
		storyId: 'components-site-alert-test-cases-two-column-list--info',
		readySelector: '.usa-alert__nci-button--toggle',
		clickSelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	// Deprecated emergency
	{
		label: 'usa-site-alert test-cases deprecated emergency',
		storyId: 'components-site-alert-test-cases-deprecated--emergency',
		readySelector: '.usa-alert__nci-button--toggle',
		clickSelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	// Deprecated info
	{
		label: 'usa-site-alert test-cases deprecated info',
		storyId: 'components-site-alert-test-cases-deprecated--info',
		readySelector: '.usa-alert__nci-button--toggle',
		clickSelector: '.usa-alert__nci-button--toggle',
		viewports
	},
	// USWDS default
	{
		label: 'usa-site-alert test-cases uswds default',
		storyId: 'components-site-alert-test-cases-uswds--default',
		viewports
	},
	// USWDS slim
	{
		label: 'usa-site-alert test-cases uswds slim',
		storyId: 'components-site-alert-test-cases-uswds--slim',
		viewports
	},
];
