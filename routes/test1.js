var routes = require("express").Router()
var test1Controller = require("../controller/test1Controller")


routes.get("/counter",test1Controller.counter)


module.exports = routes