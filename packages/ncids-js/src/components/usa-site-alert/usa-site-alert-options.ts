import type { SiteAlertCloseButtonOptions } from './utils/site-alert-close-button-options';
import type { SiteAlertCollapseOptions } from './utils/site-alert-collapse-options';

/** USASiteAlert component options. */
export type USASiteAlertOptions = SiteAlertCloseButtonOptions &
	SiteAlertCollapseOptions & {
		/** Add close button to component. */
		closeable: boolean;
	};

export type { SiteAlertCloseButtonOptions, SiteAlertCollapseOptions };
