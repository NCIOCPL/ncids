import { MobileMenuData } from './mobile-menu-data';

/**
 * A mobile menu adapter is a class that implements the MobileMenuAdaptor interface.
 * The design system does not force you to have to build your backend systems in any
 * specific way. You can build a mobile menu adapter that fetches the data for the
 * mobile menu however your site needs it to be fetched. The only thing we require
 * is that the menu information conform to a NavItem structure item and only be the
 * data for a single "level" within the navigation.
 * (i.e. not the entire navigation tree)
 */
export interface MobileMenuAdaptor {
	/**
	 * This defines what should be passed to the adapter for fetching menus. If
	 * this is true then the HREF of the navigation link will be provided to the
	 * adapter. If this is false then the header will use the data-menu-id
	 * attribute of the navigation link instead. It is helpful to use an ID if
	 * you have some dynamic system which only allows you to fetch menu
	 * information by ID instead of a path.
	 * */
	useUrlForNavigationId: boolean;

	/*
	 * As users navigate the menu items, the header will request the corresponding menu
	 * from the adapter. It can do this since it is the one drawing the menu items. However,
	 * on initial click of the Mobile Menu Button, the header will not know what menu to fetch.
	 * This method is provided for just that purpose. See Sequence of Events for a Mobile
	 * Menu Adapter below for more information.
	 */
	getInitialMenuId(): Promise<string | number>;

	/**
	 * This method returns a level of navigation to be displayed in the mobile menu.
	 * This should include the "Explore ABC".
	 *
	 * @param id mobile menu `data-menu-id`
	 */
	getNavigationLevel(id: number | string): Promise<MobileMenuData>;
}
