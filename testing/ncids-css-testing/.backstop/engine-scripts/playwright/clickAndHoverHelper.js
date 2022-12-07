module.exports = async (page, scenario) => {
	const hoverSelector = scenario.hoverSelectors || scenario.hoverSelector;
	const clickSelector = scenario.clickSelectors || scenario.clickSelector;
	const focusSelector = scenario.focusSelectors || scenario.focusSelector;
	const keyPressSelector =
		scenario.keyPressSelectors || scenario.keyPressSelector;
	const scrollToSelector = scenario.scrollToSelector;
	const postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

	if (keyPressSelector) {
		for (const keyPressSelectorItem of [].concat(keyPressSelector)) {
			await page.waitForSelector(keyPressSelectorItem.selector);
			await page.type(
				keyPressSelectorItem.selector,
				keyPressSelectorItem.keyPress
			);
		}
	}

	if (hoverSelector) {
		for (const hoverSelectorIndex of [].concat(hoverSelector)) {
			await page.waitForSelector(hoverSelectorIndex);
			await page.hover(hoverSelectorIndex);
		}
	}

	if (focusSelector) {
		for (const focusSelectorIndex of [].concat(focusSelector)) {
			await page.waitForSelector(focusSelectorIndex);
			await page.focus(focusSelectorIndex);
			await page.mouse.move(10000,10000);
		}
	}

	if (clickSelector) {
		for (const clickSelectorIndex of [].concat(clickSelector)) {
			await page.waitForSelector(clickSelectorIndex);
			await page.click(clickSelectorIndex);
		}
	}

	if (postInteractionWait) {
		if (parseInt(postInteractionWait) > 0) {
			await page.waitForTimeout(parseInt(postInteractionWait));
		} else {
			await page.waitForSelector(postInteractionWait);
		}
	}

	if (scrollToSelector) {
		await page.waitForSelector(scrollToSelector);
		await page.evaluate((scrollToSelector) => {
			document.querySelector(scrollToSelector).scrollIntoView();
		}, scrollToSelector);
	}
};
