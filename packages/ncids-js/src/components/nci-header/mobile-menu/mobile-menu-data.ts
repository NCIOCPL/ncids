import { MobileMenuItem } from './mobile-menu-item';

/**
 * Represents a level of mobile navigation.
 *
 * @example
 * The image below shows a level of navigation.
 *
 * ![Image displaying a single level of navigation showing a back button, Explore A.1 above two child links, A.1.1 and A.1.2](media://mobile_nav_level.png)
 *
 * The javascript object representing this level of navigation would be:
 * ```js
 * const navigationLevel = {
 *   parent: {
 *      id: 123,
 *      label: 'Back',
 *      path: '/a',
 *      langcode: 'en',
 *      hasChildren: true,
 *   },
 *   id: 124,
 *	 label: 'Explore A.1',
 *   path: '/a/1',
 *   langcode: 'en',
 *   hasChildren: true,
 *   items: [
 *     {
 *      id: 130,
 *      label: 'A.1.1',
 *      path: '/a/1/1',
 *      langcode: 'en',
 *      hasChildren: true,
 *     },
 *     {
 *      id: 131,
 *      label: 'A.1.2',
 *      path: '/a/1/2',
 *      langcode: 'en',
 *      hasChildren: false,
 *     },
 *   ],
 * };
 * ```
 */
export interface MobileMenuData extends MobileMenuItem {
	/** Array of navigation items to display. */
	items: MobileMenuItem[];
	/** Parent navigation item. This can be null if you are showing the top level of navigation. */
	parent: MobileMenuItem | null;
}
