//dependencies
import express from "express"
const router = express.Router()

//database
import db from "../config.js"
const usersRef = db.ref("Users")

async function getData(req, res) {
  usersRef.once("value", (snapshot) => {
    const value = snapshot.val()
    const fKey = Object.keys(snapshot.val())[0]
    console.log(value[fKey])
    res.status(200).json(value[fKey])
  })
}

// /GET/api/test
router.get("/test", (req, res) => {
  getData(req, res)
})

export default router
