var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

 readIndexData = function(){
	var txt="";
	fs.readFile('index.txt', function (err, data) {
  		if (err) throw err;
  		//console.log(data);
		txt=data.toString('utf8');
	});
	return txt;
};

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
	resptxt=readIndexData();
  	response.send(resptxt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
