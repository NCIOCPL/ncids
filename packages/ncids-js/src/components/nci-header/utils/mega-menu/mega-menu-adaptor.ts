/**
 * A mega menu adapter is a class that implements the MegaMenuAdapter
 * interface. The design system does not force you to have to build your
 * backend systems in any specific way. You can build a mega menu adapter that
 * fetches the data for your menus however your site needs it to be fetched.
 * The only thing we require is that you return the HTML for the mega menu
 * contents prebuilt using the correct design system elements.
 */
export interface MegaMenuAdaptor {
	/**
	 * This defines what should be passed to the adapter for fetching menus. If
	 * this is true then the HREF of the navigation link will be provided to
	 * the adapter. If this is false then the header will use the data-menu-id
	 * attribute of the navigation link instead. It is helpful to use an ID if
	 * you have some dynamic system which only allows you to fetch menu
	 * information by ID instead of a path.
	 */
	useUrlForNavigationId: boolean;

	/**
	 * Gets the mega menu contents (as an HtmlElement) for the given id or URL.
	 * @param id mega menu `data-menu-id`
	 */
	getMegaMenuContent(id: number | string): Promise<HTMLElement>;
}
