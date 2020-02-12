///console.log("Hola");

var querystring=require("querystring");

var {info,error} =require("./modules/my-log");
var http = require("http");
var { countries }=require("countries-list");
var url= require("url");


var server = http.createServer(function(request, response) {
var parsed=url.parse(request.url);
console.log("parsed",parsed);    
var pathname = parsed.pathname;
// response.writeHead(200,{"Content-type": "application/json"});
    // response.write(JSON.stringify(countries.EC));
    // response.end();
var query =querystring.parse(parsed.query)
console.log("query",query)
 if (pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><head><title>pagina principal</title></head><body>HOME PAGE<cp></cp></body></html>");
    response.end();
  }else if(pathname==="/Exit"){
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><head><title>pagina principal</title></head><body>BYE<cp></cp></body></html>");
    response.end();
  }else if(pathname==="/info"){
          var result = info(pathname);
          response.writeHead(200,{"Content-Type":"text/html"});
          response.write(result);
          response.end();


  } else if(pathname==="/error"){
            var result = error(pathname);
            response.writeHead(200,{"Content-type":"text/html"});
            response.write(result);
            response.end();
  }else if(pathname==="/country"){
    response.writeHead(200,{"Content-type": "application/json"});
    response.write(JSON.stringify(countries[query.code]));
    response.end();                

  }else{
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<html><head><title>pagina principal</title></head><body>NOT FOUND<cp></cp></body></html>");
    response.end();
  }
  
});
server.listen(4000);

console.log("runing on 4000");

/*function suma(num1, num2) {
  return num1 + num2;
}
var result = suma(3, 4);

console.log("la suma es", result);
*/
