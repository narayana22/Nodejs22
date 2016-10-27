var http = require("http");

var server = http.createServer(function(req,res){
	res.writeHead(200, {"cpntent-type" : "text/plain"});
	res.end("Hello hyderabad")
});
server.listen(8081, function()
{
	console.log("running");
});