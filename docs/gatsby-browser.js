//export {default as wrapPageElement} from './src/components/layouts/common/wrap-page-element'
export { default as wrapRootElement } from './src/components/layouts/wrap-root-element';
import './src/index.scss';
import { NCIFooter, NCISiteAlert } from '@nciocpl/ncids-js';

// Push the NCIDS components onto the window so that we can use them to initialize instances
// on our HTML examples. The name of this object should match whatever we end up using as
// the namespace for the CDN version of ncids-js.
window.ncids = {
	NCIFooter,
	NCISiteAlert,
};
