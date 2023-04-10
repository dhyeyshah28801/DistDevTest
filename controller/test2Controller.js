var http = require("http")

exports.getUser = function(req,res){
    var header = {
        hostname: "https://reqres.in/api/users",
        path: "",
        method: "GET"
    };
    var req = http.request(header,function(res){
        console.log(res)
    })
}