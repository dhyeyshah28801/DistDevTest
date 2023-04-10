var routes = require("express").Router();
var test1 = require("./test1")
var test2 = require("./test2")
var test3 = require("./test3")

routes.use("/api/test1",test1)
routes.use("/api/test2",test2)
routes.use("/api/test3",test3)


module.exports = routes;