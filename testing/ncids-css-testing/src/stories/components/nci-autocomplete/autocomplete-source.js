export default async (searchText) => {
	const items =	[
		'bile duct cancer',
		'bile duct',
		'biliary cancer',
		'biliary',
		'extrahepatic bile duct cancer',
		'help with bills',
		'bilateral',
		'bilateral cancer',
		'bilateral nephrectomy',
		'bilateral prophylactic mastectomy',
	];

	return items.filter((item) => item.toLowerCase().startsWith(searchText.toLowerCase()));
};
