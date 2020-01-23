const express = require('express');
const app     = express();
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest


var router = express.Router()
app.use('/', router)
app.use('/data', router)

router.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html')
});

router.get('/data', function(req, res) {
	res.sendFile(__dirname + '/data.json')
})


app.listen(3100)


