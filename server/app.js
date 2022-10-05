//dependencies
import express from "express"
import dotenv from "dotenv"
import apiRouter from "./routes/index.js"

//get global variables
dotenv.config()
const PORT = process.env.PORT

const app = express()

//initialize routes
apiRouter(app)

app.listen(PORT, () => {
  console.log("\n")
  console.log(`Server listening on port: ${PORT}`)
  console.log("\n")
})
