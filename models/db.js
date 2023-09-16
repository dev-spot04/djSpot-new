const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:spotadmin2408@cluster0.6onfc.mongodb.net/dj-spot-new?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) =>{
	if (!err) {
		console.log('Database Connection Succeeded') 
	}else{
		console.log(err)
	}

});