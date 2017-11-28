var express = require('express'); 
var app = express();
app.use(express.static(__dirname + '/' ,{index : 'Index.html'}));

app.get('/login',function(req,res){
	console.log('this is login api');
	res.send('LoginPage');
	
});

app.get('/home',function(req,res){
	console.log('this is home api, request is done');
	if(req.query.Name == 'Miracle'){
		res.send({Report:"success"});
	}
	else{
		res.send({Report:"fail"});
	}
	//res.send('HomePage');
	
});

app.listen( 5005, function(){
	console.log('port no: 5005');
});

