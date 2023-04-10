var routes = require("express").Router()
var test2Controller = require("../controller/test2Controller")


routes.get("/users",test2Controller.getUser)


module.exports = routes