var Memcached = require('memcached');
var config = require('../lib/configuration').get('memcached');

var memcached = module.exports = new Memcached(config.host + ':' + config.port);