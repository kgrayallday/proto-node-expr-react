const express = require('express');
const app = express();
const homeRoutes = express.Router();

// basic routing 
// app.METHOD(PATH, HANDLER)
// - app is instance of express
// - method is http req meth: post or get
// - path is a path to the server
// - handler is the function exec when the route is matched

module.exports = function(){
	homeRoutes.get('/', function(req, res) {
		res.send('you are home');
	}
}
