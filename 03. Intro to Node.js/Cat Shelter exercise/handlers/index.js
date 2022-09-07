const homeHandlers = require('./home');
const staticFiles = require('./static-files');
const catHandler = require('./cat')

module.exports = [homeHandlers, staticFiles, catHandler];