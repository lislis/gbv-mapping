'use strict';

/**
 * privacy-feature service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::privacy-feature.privacy-feature');
