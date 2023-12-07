import { MobileMenuAdapter, MobileMenuData, MobileMenuItem } from '.';

/**
 * Default header mobile menu source that generates mobile menu items
 * the mirror the primary navigation.
 */
export class DefaultMobileMenuSource implements MobileMenuAdapter {
	/** Use href for navigation id. */
	useUrlForNavigationId = true;
	/** List of navigation items from the primary navigation. */
	primaryNavItems: HTMLElement[];
	/** Use href for navigation id. */
	items: MobileMenuItem[];
	/** Nav item language code. */
	lang: string;

	constructor() {
		// Inherit mobile menu language from html.
		this.lang = document.documentElement.lang;

		// Create array from node list.
		this.primaryNavItems = Array.from(
			document.querySelectorAll('.nci-header-nav__primary-item a')
		);

		// Fallback menu item.
		this.items = [
			{
				id: 0,
				label: 'Error',
				path: '/',
				langcode: this.lang,
				hasChildren: false,
			},
		];
	}

	/**
	 * Gets initial menu id.
	 * @return {Promise<string | number>}
	 */
	async getInitialMenuId(): Promise<string | number> {
		return 0;
	}

	/**
	 * Gets mobile nav structure.
	 * @param {number | string} id
	 * @return {Promise<MobileMenuData>}
	 */
	async getNavigationLevel(id: number | string): Promise<MobileMenuData> {
		return this.createDefaultMobileMenu(id);
	}

	/**
	 * Creates mobile menu from primary nav items.
	 * @param {string | number} id
	 * @return {MobileMenuData}
	 */
	createDefaultMobileMenu(id: string | number): MobileMenuData {
		this.items = this.primaryNavItems.map((item, index) => {
			const anchor = item as HTMLAnchorElement;
			const path = anchor.href;
			const textContent = item.textContent as string;

			return {
				id: index,
				label: textContent,
				path: path,
				langcode: this.lang,
				hasChildren: false,
			};
		});

		return {
			id: id,
			label: '',
			path: '/',
			langcode: this.lang,
			hasChildren: true,
			items: this.items,
			parent: null,
		};
	}
}
