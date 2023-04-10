var express = require("express");
var app = express();
var routes = require("./routes/index")



app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/",routes);

app.listen(3000,()=>{
    console.log(
        "Server Initiated on port 3000"
    )
})