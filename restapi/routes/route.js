var express 	= require('express');
var router 		= express.Router();

require('./user')(router);
require('./group')(router);

module.exports = router;