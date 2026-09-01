'use strict';

/**
 * transparency service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transparency.transparency');
