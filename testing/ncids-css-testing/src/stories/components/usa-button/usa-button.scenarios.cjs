const viewports = [
	{
		label: 'mobile',
		width: 479,
		height: 360,
	},
	{
		label: 'tablet-lg',
		width: 880,
		height: 360,
	},
];

const viewports_lg = [
	{
		label: 'mobile',
		width: 479,
		height: 360,
	},
	{
		label: 'mobile-lg',
		width: 480,
		height: 360,
	},
	{
		label: 'tablet-lg',
		width: 880,
		height: 360,
	},
];

module.exports = [
	// Default
	{
		label: 'usa-button default button',
		storyId: 'components-button-default--button',
		viewports: viewports,
	},
	{
		label: 'usa-button default anchor',
		storyId: 'components-button-default--anchor',
		viewports: viewports,
	},

	// Variants
	// Outline
	{
		label: 'usa-button outline button',
		storyId: 'components-button-variants-outline--button',
		viewports: viewports,
	},
	{
		label: 'usa-button outline anchor',
		storyId: 'components-button-variants-outline--anchor',
		viewports: viewports,
	},

	// Unstyled
	{
		label: 'usa-button unstyled button',
		storyId: 'components-button-variants-unstyled--button',
		viewports: viewports_lg,
	},
	{
		label: 'usa-button unstyled anchor',
		storyId: 'components-button-variants-unstyled--anchor',
		viewports: viewports_lg,
	},

	// Modifiers
	// Big
	{
		label: 'usa-button big button',
		storyId: 'components-button-modifiers-size-big--button',
		viewports: viewports,
	},
	{
		label: 'usa-button big anchor',
		storyId: 'components-button-modifiers-size-big--anchor',
		viewports: viewports,
	},

	// Small
	{
		label: 'usa-button small button',
		storyId: 'components-button-modifiers-size-small--button',
		viewports: viewports,
	},
	{
		label: 'usa-button small anchor',
		storyId: 'components-button-modifiers-size-small--anchor',
		viewports: viewports,
	},

	// Full width
	{
		label: 'usa-button full-width button',
		storyId: 'components-button-modifiers-full-width--anchor',
		viewports: viewports,
	},
	{
		label: 'usa-button full-width anchor',
		storyId: 'components-button-modifiers-full-width--button',
		viewports: viewports,
	},

	// Icons
	// Icon, left
	{
		label: 'usa-button icon-left button',
		storyId: 'components-button-modifiers-icon-icon-left--button',
		viewports: viewports_lg,
	},
	{
		label: 'usa-button icon-left anchor',
		storyId: 'components-button-modifiers-icon-icon-left--anchor',
		viewports: viewports_lg,
	},

	// Icon, right
	{
		label: 'usa-button icon-right button',
		storyId: 'components-button-modifiers-icon-icon-right--button',
		viewports: viewports_lg,
	},
	{
		label: 'usa-button icon-right anchor',
		storyId: 'components-button-modifiers-icon-icon-right--anchor',
		viewports: viewports_lg,
	},

	// Test Cases
	// Unsupported
	{
		label: 'usa-button unsupported',
		storyId: 'components-button-test-cases-unsupported--outline-colors',
		viewports: viewports,
	},
	// External icons
	{
		label: 'usa-button anchors external-icons',
		storyId: 'components-button-test-cases--external-icons',
		viewports: viewports,
	}
];
