//dependencies
import express from "express"
import bodyParser from "body-parser"

//import all routes
import test from "./test.js"

//setup routes for use
export default (app) => {
  //place midleware here
  app.use(bodyParser.json())

  //setup endpoints
  app.use("/api", test)
}
