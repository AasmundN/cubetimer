import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3080

app.use(bodyParser.json())

app.get("/api/test", (req, res) => {
  res.send("Successful test!")
})

app.listen(port, () => {
  console.log("\n")
  console.log(`Server listening on port: ${port}`)
  console.log("\n")
})
