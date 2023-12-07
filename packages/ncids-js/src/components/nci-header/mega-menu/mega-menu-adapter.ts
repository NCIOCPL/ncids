/**
 * A mega menu adapter is a class that implements the MegaMenuAdapter
 * interface and is used to create a mega menu source for the
 * {@link nci-header~NCIExtendedHeaderWithMegaMenu | NCIExtendedHeaderWithMegaMenu }
 * component. The design system does not force
 * you to have to build your backend systems in any specific way. You can
 * build a mega menu adapter that fetches the data for your menus how ever
 * your site needs it to be fetched. The only thing we require is that you
 * return the HTML for the mega menu contents prebuilt using the correct
 * design system elements.
 *
 * The header's mega menu functionality is driven by the primary navigation HTML.
 * The header finds all links with the `nci-header-nav__primary-link` class and
 * if the link also has a `data-menu-id` attribute the link will be converted
 * into a mega menu button. Which a user clicks a mega menu button, the
 * {@link nci-header~MegaMenuAdapter#getMegaMenuContent | getMegaMenuContent} method of your implementation
 * is called, passing in the `data-menu-id` value and expecting a Promise
 * resolving to the HTML of the menu to be returned.
 *
 * You may use whatever you want for the `data-menu-id` as your adapter defines
 * how to fetch the HTML.
 *
 * @example Sample Mega Menu Adapter Implementation
 *
 * The below html is a snippet from the full header HTML.
 * ```html
 *   <nav aria-label="Primary Navigation" class="nci-header-nav">
 *     <div class="nci-header-nav__inner">
 *       <ul class="nci-header-nav__primary">
 *         <li class="nci-header-nav__primary-item">
 *           <a href="/section-1" data-menu-id="1" class="nci-header-nav__primary-link">
 *            <span>Current section</span>
 *          </a>
 *        </li>
 *        <li class="nci-header-nav__primary-item">
 *          <a href="/section-1" data-menu-id="2" class="nci-header-nav__primary-link">
 *            <span>Second Section</span>
 *          </a>
 *        </li>
 *        <li class="nci-header-nav__primary-item">
 *          <a href="/section-1" data-menu-id="3" class="nci-header-nav__primary-link">
 *            <span>Third Section</span>
 *          </a>
 *        </li>
 *       </ul>
 *     </div>
 *   </nav>
 * ```
 *
 * Below is a very simple example of a adapter that returns HTML when a requested
 * ID is matched.
 * ```js
 * import { DefaultMobileMenuSource } from '@nciocpl/ncids-js/nci-header';
 * import { NCIExtendedHeaderWithMegaMenu } from '@nciocpl/ncids-js/nci-header';
 *
 * // This is just a method to demonstrate creating an HTMLElement from
 * // a string.
 * const createHtmlFromString = (htmlString) => {
 * 	const wrapper = document.createElement('div');
 *  wrapper.innerHtml = htmlString
 *  return wrapper.firstElementChild;
 * };
 *
 * // Create the menus. The '... menu X html ...' strings should be replaced
 * // with mega menu HTML.
 * const menu1 = createHtmlFromString('... menu 1 html ...');
 * const menu2 = createHtmlFromString('... menu 2 html ...');
 * const menu3 = createHtmlFromString('... menu 3 html ...');
 *
 * // Sample megaMenuSource class.
 * const megaMenuSource = class {
 *    useUrlForNavigationId=false;
 *
 *    async getMegaMenuContent(id) {
 *      if (id === "1") {
 *        return menu1;
 *      } else if (id === "2") {
 *        return menu2;
 *      } else if (id === "3") {
 *        return menu3;
 *      }
 *    }
 * }
 *
 * // Find the header HTML element.
 * const header = document.querySelector('.nci-header.nci-header--extended');
 *
 * // Initialize the component using our megaMenuSource and the default
 * // mobile menu source.
 * NCIExtendedHeaderWithMegaMenu.create(header, {
 *   megaMenuSource: new megaMenuSource(),
 *   mobileMenuSource: new DefaultMobileMenuSource(),
 * });
 *
 * ```
 *
 * In a real implementation the getMegaMenuContent method would call a web
 * service and generate the HTML based on the data returned, or even fetch
 * content from a web page.
 *
 */
export interface MegaMenuAdapter {
	/**
	 * This defines what should be passed to the adapter for fetching menus. If
	 * this is true then the HREF of the navigation link will be provided to
	 * the adapter. If this is false then the header will use the data-menu-id
	 * attribute of the navigation link instead. It is helpful to use an ID if
	 * you have some dynamic system which only allows you to fetch menu
	 * information by ID instead of a path.
	 *
	 * @deprecated Support for using the href for mega menu sources will be removed in a future version.
	 */
	useUrlForNavigationId: boolean;

	/**
	 * Gets the mega menu contents for the given id or URL.
	 * @param id the id of the menu to fetch
	 * @returns A Promise that resolves to an HTMLElement. You should never implement a mega menu that returns null.
	 */
	getMegaMenuContent(id: number | string): Promise<HTMLElement> | null;
}
