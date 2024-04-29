const processSelectors = async (page, selectorsObject) => {
	const hoverSelector = selectorsObject.hoverSelectors || selectorsObject.hoverSelector;
	const clickSelector = selectorsObject.clickSelectors || selectorsObject.clickSelector;
	const focusSelector = selectorsObject.focusSelectors || selectorsObject.focusSelector;
	const blurSelector = selectorsObject.blurSelector;
	const activeSelector = selectorsObject.activeSelectors || selectorsObject.activeSelector;
	const keyPressSelector =
		selectorsObject.keyPressSelectors || selectorsObject.keyPressSelector;
	const scrollToSelector = selectorsObject.scrollToSelector;
	const scrollAmount = selectorsObject.scrollAmount;
	const postInteractionWait = selectorsObject.postInteractionWait; // selector [str] | ms [int]
	const nextSelectorGroup = selectorsObject.nextSelectorGroup;

	if (keyPressSelector) {
		for (const keyPressSelectorItem of [].concat(keyPressSelector)) {
			await page.waitForSelector(keyPressSelectorItem.selector);
			await page.type(
				keyPressSelectorItem.selector,
				keyPressSelectorItem.keyPress
			);
		}
	}

	if (blurSelector) {
		const locator = await page.locator(blurSelector);
		locator.waitFor();
		// Our copy of playwright does not have the blur method.
		await locator.evaluate((element) => element.blur());
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

	if (activeSelector) {
		for (const activeSelectorIndex of [].concat(activeSelector)) {
			await page.waitForSelector(activeSelectorIndex);
			await page.hover(activeSelectorIndex);
			await page.mouse.down();
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
		page.locator(scrollToSelector).scrollIntoViewIfNeeded();
		await page.waitForSelector(scrollToSelector);
		await page.evaluate((scrollToSelector) => {
			document.querySelector(scrollToSelector).scrollIntoView();
		}, scrollToSelector);
	}

	if (scrollAmount) {
		await page.mouse.wheel(scrollAmount.x, scrollAmount.y);
	}

	// The next selector group is an object that can have the same properties
	// as the selectors on a scenario. This just allows for us to control the
	// order of the selectors that are run.
	// In hindsight, we should have made the conditionals above a switch
	// statement with only 1 selector allowed at a time, and forced the order
	// through the config, not this code. This approach allows us to be backwards
	// compatible.
	if (nextSelectorGroup) {
		await processSelectors(page, nextSelectorGroup)
	}
};

module.exports = processSelectors;
