import type { SiteAlertCloseButtonOptions } from './utils/site-alert-close-button-options';
import type { SiteAlertCollapseOptions } from './utils/site-alert-collapse-options';

/** NCISiteAlert component options. */
export type NCISiteAlertOptions = SiteAlertCloseButtonOptions &
	SiteAlertCollapseOptions & {
		/** Add close button to component. */
		closeable: boolean;
	};

export type { SiteAlertCloseButtonOptions, SiteAlertCollapseOptions };
