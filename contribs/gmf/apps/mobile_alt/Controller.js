/**
 * @module app.mobile_alt.Controller
 */
/**
 * Application entry point.
 *
 * This file includes `goog.require`'s for all the components/directives used
 * by the HTML page and the controller to provide the configuration.
 */

import gmfControllersAbstractMobileController from 'gmf/controllers/AbstractMobileController.js';
import './less/main.less';
import appBase from '../appmodule.js';
import ngeoProjEPSG2056 from 'ngeo/proj/EPSG2056.js';
import ngeoProjEPSG21781 from 'ngeo/proj/EPSG21781.js';
import * as olBase from 'ol/index.js';
import olStyleFill from 'ol/style/Fill.js';
import olStyleRegularShape from 'ol/style/RegularShape.js';
import olStyleStroke from 'ol/style/Stroke.js';
import olStyleStyle from 'ol/style/Style.js';

if (!window.requestAnimationFrame) {
  alert('Your browser is not supported, please update it or use another one. You will be redirected.\n\n'
    + 'Votre navigateur n\'est pas supporté, veuillez le mettre à jour ou en utiliser un autre. Vous allez être redirigé.\n\n'
    + 'Ihr Browser wird nicht unterstützt, bitte aktualisieren Sie ihn oder verwenden Sie einen anderen. Sie werden weitergeleitet.');
  window.location = 'http://geomapfish.org/';
}

/**
 * @param {angular.Scope} $scope Scope.
 * @param {angular.$injector} $injector Main injector.
 * @constructor
 * @extends {gmf.controllers.AbstractMobileController}
 * @ngInject
 * @export
 */
const exports = function($scope, $injector) {
  gmfControllersAbstractMobileController.call(this, {
    autorotate: true,
    mapPixelRatio: 1,
    srid: 21781,
    mapViewConfig: {
      center: [632464, 185457],
      zoom: 3,
      resolutions: [250, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05]
    }
  }, $scope, $injector);

  /**
   * @type {Array.<gmf.mobile.measure.pointComponent.LayerConfig>}
   * @export
   */
  this.elevationLayersConfig = [
    {name: 'aster', unit: 'm'},
    {name: 'srtm', unit: 'm'}
  ];

  /**
   * @type {number}
   * @export
   */
  this.searchDelay = 50;

  /**
   * @type {Array.<string>}
   * @export
   */
  this.searchCoordinatesProjections = [ngeoProjEPSG21781, ngeoProjEPSG2056, 'EPSG:4326'];


  /**
   * @type {ol.style.Style}
   * @export
   */
  this.customMeasureStyle = new olStyleStyle({
    fill: new olStyleFill({
      color: 'rgba(255, 128, 128, 0.2)'
    }),
    stroke: new olStyleStroke({
      color: 'rgba(255, 0, 0, 0.5)',
      lineDash: [10, 10],
      width: 2
    }),
    image: new olStyleRegularShape({
      stroke: new olStyleStroke({
        color: 'rgba(255, 0, 0, 0.7)',
        width: 2
      }),
      points: 4,
      radius: 8,
      radius2: 0,
      angle: 0
    })
  });

};

olBase.inherits(exports, gmfControllersAbstractMobileController);


exports.module = angular.module('AppMobileAlt', [
  appBase.module.name,
  gmfControllersAbstractMobileController.module.name,
]);

exports.module.controller('AlternativeMobileController', exports);

(function() {
  const cacheVersion = '0';
  const urlElements = window.location.pathname.split('/');

  const angularLocaleScriptUrlElements = urlElements.slice(0, urlElements.length - 3);
  angularLocaleScriptUrlElements.push('build', `angular-locale_{{locale}}.js?cache_version=${cacheVersion}`);

  const gmfModule = angular.module('GmfAbstractAppControllerModule');
  gmfModule.constant('angularLocaleScript', angularLocaleScriptUrlElements.join('/'));

  const langUrls = {};
  ['en', 'fr', 'de'].forEach((lang) => {
    const langUrlElements = urlElements.slice(0, urlElements.length - 3);
    langUrlElements.push('build', `gmf-${lang}.json?cache_version=${cacheVersion}`);
    langUrls[lang] = langUrlElements.join('/');
  });

  const module = angular.module('AppMobileAlt');
  module.constant('defaultTheme', 'Demo');
  module.constant('defaultLang', 'en');
  module.constant('langUrls', langUrls);
  module.constant('cacheVersion', cacheVersion);
  module.constant('authenticationBaseUrl', 'https://geomapfish-demo.camptocamp.com/2.3/wsgi');
  module.constant('fulltextsearchUrl', 'https://geomapfish-demo.camptocamp.com/2.3/wsgi/fulltextsearch?limit=20&interface=mobile');
  module.constant('gmfTreeUrl', 'https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background&interface=mobile');
  module.constant('gmfLayersUrl', 'https://geomapfish-demo.camptocamp.com/2.3/wsgi/layers');
  module.constant('gmfRasterUrl', 'https://geomapfish-demo.camptocamp.com/2.3/wsgi/raster');
  module.constant('gmfShortenerCreateUrl', '');
  module.constant('gmfSearchGroups', []);
  // Requires that the gmfSearchGroups is specified
  module.constant('gmfSearchActions', []);
  module.constant('gmfTreeManagerModeFlush', false);
  module.value('ngeoWfsPermalinkOptions',
    /** @type {ngeox.WfsPermalinkOptions} */ ({
      url: 'https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy',
      wfsTypes: [
        {featureType: 'fuel', label: 'display_name'},
        {featureType: 'osm_scale', label: 'display_name'}
      ],
      defaultFeatureNS: 'http://mapserver.gis.umn.edu/mapserver',
      defaultFeaturePrefix: 'feature'
    }));
  module.constant('ngeoTilesPreloadingLimit', 0);
})();

export default exports;
