//dependencies
import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

//import all routes
import test from "./test.js"
import user from "./user.js"

//setup routes for use
export default (app) => {
  //place midleware here
  app.use(bodyParser.json())
  app.use(cookieParser())

  //setup endpoints
  app.use("/api", test)
  app.use("/api", user)
}
