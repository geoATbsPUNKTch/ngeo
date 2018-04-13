goog.provide('ngeo.interaction.MeasureLengthMobile');

goog.require('ngeo.interaction.MeasureLength');
goog.require('ngeo.interaction.MobileDraw');
goog.require('ol');
goog.require('ol.obj');


/**
 * @classdesc
 * Interaction dedicated to measure length on mobile devices.
 *
 * @constructor
 * @struct
 * @extends {ngeo.interaction.MeasureLength}
 * @param {!ngeox.unitPrefix} format The format function
 * @param {!angularGettext.Catalog} gettextCatalog Gettext catalog.
 * @param {ngeox.interaction.MeasureOptions=} opt_options Options
 */
ngeo.interaction.MeasureLengthMobile = function(format, gettextCatalog, opt_options) {

  const options = opt_options !== undefined ? opt_options : {};

  ol.obj.assign(options, {displayHelpTooltip: false});

  ngeo.interaction.MeasureLength.call(this, format, gettextCatalog, options);

};
ol.inherits(
  ngeo.interaction.MeasureLengthMobile, ngeo.interaction.MeasureLength);


/**
 * @inheritDoc
 */
ngeo.interaction.MeasureLengthMobile.prototype.createDrawInteraction = function(style, source) {
  return new ngeo.interaction.MobileDraw({
    type: /** @type {ol.geom.GeometryType} */ ('LineString'),
    style: style,
    source: source
  });
};
