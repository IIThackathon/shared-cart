var express 	= require('express');
var router 		= express.Router();

require('./user')(router);
require('./group')(router);
require('./item')(router);

module.exports = router;