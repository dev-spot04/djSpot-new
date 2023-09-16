require('./models/db');

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const router = require('./routes/api');
var cors = require('cors');  


var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.use(express.static(__dirname + '/public'));
app.use(cors());


//Route File
// View Engine Setup 
app.set("views",path.join(__dirname,"views")) 
app.set("view engine","ejs") 

app.use('/', router);

app.listen(3000, () => {
	console.log('Server Started at port: 3000');
});