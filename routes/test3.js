var routes = require("express").Router()
var test3Controller = require("../controller/test3Controller")


routes.post("/user",test3Controller.addUser)

routes.get("/user",test3Controller.getUsers)

routes.get("/user/:id",test3Controller.getUser)


module.exports = routes