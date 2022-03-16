import { NCIMegaMenuOptions } from './nci-mega-menu-options';

export class NCIMegaMenu {
	protected element: HTMLElement;
	protected options: NCIMegaMenuOptions;
	private menuButtons: HTMLElement[] = [];

	private static optionDefaults: NCIMegaMenuOptions = {
		menuButtonClass: '.nci-primary__link',
	};

	private static _components: Map<HTMLElement, NCIMegaMenu> = new Map<
		HTMLElement,
		NCIMegaMenu
	>();

	protected constructor(element: HTMLElement, options?: NCIMegaMenuOptions) {
		this.element = element;
		this.options = options || NCIMegaMenu.optionDefaults;

		const existingComponent = NCIMegaMenu._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}

		this.initialize();
		NCIMegaMenu._components.set(this.element, this);
	}

	public unregister(): void {
		NCIMegaMenu._components.delete(this.element);
	}

	private initialize(): void {
		console.log('init');
		this.activateMenuButtons();
		//this.createMegaMenuSections();
	}

	/**
	 * @private
	 */
	private activateMenuButtons(): void {
		console.log('buttons');
		console.log(this.menuButtons);
	}

	/**
	 * Queries a list of buttons that may be used to trigger collapsible content.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 * @return {NodeListOf<HTMLElement>} All buttons attached to the collapse.
	 * @private
	 */
	// private queryMenuButtons(section: HTMLElement): NodeListOf<HTMLElement> {
	// 	const selector =
	// 		this.options.menuButtonClass ||
	// 		NCIMegaMenu.optionDefaults.menuButtonClass;
	// 	return section.querySelectorAll(<string>selector);
	// }
}
