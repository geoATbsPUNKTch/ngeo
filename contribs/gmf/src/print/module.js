/**
 * @module gmf.print.module
 */
import gmfPrintComponent from 'gmf/print/component.js';

import './print.less';

/**
 * @type {!angular.Module}
 */
const exports = angular.module('gmfPrintModule', [
  gmfPrintComponent.name,
]);


export default exports;
