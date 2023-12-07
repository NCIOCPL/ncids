import { MobileMenuData } from './mobile-menu-data';

/**
 * Interface for creating mobile menu sources for NCI header components.
 *
 * The header component allows mobile visitors to traverse the navigation structure
 * of your web site though the mobile menu. At each level of the menu visitors can
 * drill deeper into a section before selecting the page they would like to visit.
 *
 * The ability to traverse the structure of the site is provided to the header
 * component via a class that implements the {@link MobileMenuAdapter } interface.
 * The design system does not force you to build your backend systems in any
 * specific way to expose the navigation. You can build a mobile menu adapter
 * that fetches the data for the mobile menu however your site needs it to be
 * fetched. The only thing we require is that the menu information returned
 * conforms to a {@link nci-header~MobileMenuData | MobileMenuData }
 * structure for each "level" of navigation within the site hierarchy.
 * Please see the {@link nci-header~MobileMenuData | MobileMenuData }
 * documentation for a visual example of what a level of navigation displays as,
 * as well as the shape of the object that should be returned.
 *
 * We will demonstrate how to create a mobile menu adapter and initialize a
 * NCIExtendedHeaderWithMegaMenu below. Begin by creating the adapter class.
 *
 * ```js
 * class CustomMobileMenuAdapter {
 *   constructor() {
 *   }
 * }
 * ```
 *
 * Now we will start filling out the adapter class. We start by setting the
 * `useUrlForNavigationId` property to true in order to indicate the URLs of
 * menu items will be used to fetch the navigation levels. See
 * {@link useUrlForNavigationId }
 * for more details on the difference between the options.
 *
 * ```js
 * class CustomMobileMenuAdapter {
 *   constructor() {
 *     this.useUrlForNavigationId = true;
 *   }
 * }
 * ```
 *
 * Next we will implement the
 * {@link nci-header~MobileMenuAdapter#getInitialMenuId | getInitialId}
 * method. We will return the current web pages path as the initial navigation
 * level to be displayed.
 *
 * ```js
 * class CustomMobileMenuAdapter {
 *   constructor() {
 *     this.useUrlForNavigationId = true;
 *   }
 *
 *   async getInitialMenuId() {
 * 	   return window.location.path;
 *   }
 * }
 * ```
 *
 * The `getInitialMenuId` is called when a visitor clicks the mobile menu button
 * before the first navigation level is fetched. This indicates what should be passed
 * in to the initial
 * {@link getNavigationLevel }
 * should be. Any subsequent interactions with the menu will use the
 * {@link nci-header~MobileMenuItem#path } property of any selected menu items.
 *
 * Below we will implement the
 * {@link nci-header~MobileMenuAdapter#getNavigationLevel | getNavigationLevel} method. The
 * implementation below assumes a .json file containing a single level of navigation
 * to display exists for each URL on the web site. See {@link nci-header~MobileMenuData} for
 * an example of the structure of a single level of navigation.
 *
 * ```js
 * class CustomMobileMenuAdapter {
 *   constructor() {
 *     this.useUrlForNavigationId = true;
 *   }
 *
 *   async getInitialMenuId() {
 * 	   return window.location.path;
 *   }
 *
 *   async getNavigationLevel(id) {
 *     const fetchUrl = '//' + window.location.host + '/' + id + '.json';
 *
 * 		 try {
 *       const res = await fetch(fetchUrl);
 *       if (!res.ok) {
 *         const menuData = await res.json();
 *         return menuData;
 *       }
 *     catch (error) {
 *       console.error('Menu data could not be fetched.');
 *     }
 *   }
 * }
 * ```
 *
 * Finally we import and initialize the NCIExtendedHeaderWithMegaMenu using our
 * new adapter.
 *
 * ```js
 * import { DefaultMegaMenuSource } from '@nciocpl/ncids-js/nci-header/mega-menu';
 * import {NCIExtendedHeaderWithMegaMenu} from '@nciocpl/ncids-js/nci-header/extended-with-mega-menu';
 *
 * class CustomMobileMenuAdapter {
 *   constructor() {
 *     this.useUrlForNavigationId = true;
 *   }
 *
 *   async getInitialMenuId() {
 * 	   return window.location.path;
 *   }
 *
 *   async getNavigationLevel(id) {
 *     const fetchUrl = '//' + window.location.host + '/' + id + '.json';
 *
 * 		 try {
 *       const res = await fetch(fetchUrl);
 *       if (!res.ok) {
 *         const menuData = await res.json();
 *         return menuData;
 *       }
 *     catch (error) {
 *       console.error('Menu data could not be fetched.');
 *       return null;
 *     }
 *   }
 * }
 *
 * // Find the header HTML element.
 * const header = document.querySelector('.nci-header.nci-header--extended');
 *
 * // Initialialize the component using our megaMenuSource and the default
 * // mobile menu source.
 * NCIExtendedHeaderWithMegaMenu.create(header, {
 *   megaMenuSource: new DefaultMegaMenuSource(),
 *   mobileMenuSource: new CustomMobileMenuAdapter(),
 * });
 * ```
 *
 * In a more feature rich implementation of an adapter, you would most likely
 * not want to make a web request for each menu item a visitor selects from the
 * the mobile menu. Each web request would introduce a pause betwen selecting
 * and item and loading the next menu. What could be done is to make a web
 * request for a .json file, or RESTFul API endpoint, containing the entire
 * navigation tree of the web site. This could be done on the first call to
 * `getNavigationLevel` and stored within the class. The `getNavigationLevel`
 * method would then build a {@link nci-header~MobileMenuData} structure from that
 * navigation tree. For example:
 *
 * ```js
 * class CustomMobileMenuAdapter {
 *
 *   constructor() {
 *     this.useUrlForNavigationId = true;
 *     this.navigationTree = null;
 *     this.errorFetchingTree = false;
 *   }
 *
 *   async getInitialMenuId() {
 * 	   return window.location.path;
 *   }
 *
 *   async fetchNavigationTree() {
 *     const fetchUrl = '//' + window.location.host + '/tree.json';
 *
 * 		 try {
 *       const res = await fetch(fetchUrl);
 *       if (!res.ok) {
 *         this.navigationTree = await res.json();
 *       }
 *     catch (error) {
 *       console.error('Menu data could not be fetched.');
 *       this.errorFetchingTree = true;
 *     }
 *   }
 *
 *   getNavigationLevelFromTree(id) {
 *     // Code to build a MobileMenuData object from the tree.
 *   }
 *
 *   async getNavigationLevel(id) {
 *     if (this.navigationTree === null && !this.errorFetchingTree) {
 *       await this.fetchNavigationTree();
 *     }
 *
 *     if (this.errorFetchingTree) {
 *       return null;
 *     }
 *
 *     return this.getNavigationLevelFromTree(id);
 *   }
 * }
 * ```
 *
 */
export interface MobileMenuAdapter {
	/**
	 * This defines what should be passed as the id to {@link getNavigationLevel}
	 * when requesting a level. If true then
	 * {@link nci-header~MobileMenuItem#path | MobileMenuItem.path} will be
	 * used, if false then {@link nci-header~MobileMenuItem#id | MobileMenuItem.id} will be used.
	 */
	useUrlForNavigationId: boolean;

	/**
	 * When a user opens the mobile menu the header calls this method in order
	 * to determine what should be initially requested to
	 * {@link getNavigationLevel}. You should return an ID consistent with the
	 * value of {@link useUrlForNavigationId}.
	 *
	 * @remarks
	 * Under most circumstances the initial "id" should represent the navigation
	 * level of the current URL lives in the navigation structure. It is important
	 * to give the web site visitor context as to where they are in the navigation
	 * structure.
	 */
	getInitialMenuId(): Promise<string | number>;

	/**
	 * This method returns a single level of navigation to be displayed in the
	 * mobile menu. See {@link nci-header~MobileMenuData | MobileMenuData} for an example of what to return
	 * for a level of navigation.
	 *
	 * @param id the id of the menu item. See {@link useUrlForNavigationId}.
	 * @returns A Promise that will resolve to a MobileMenuData representing a single level of navigation.
	 */
	getNavigationLevel(id: number | string): Promise<MobileMenuData>;
}
