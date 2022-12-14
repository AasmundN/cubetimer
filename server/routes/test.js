//dependencies
import express from "express"
const router = express.Router()

//database
import { db } from "../firebase.config.js"
const usersRef = db.ref("Users")

async function getData(req, res) {
  const snapshot = await usersRef.once("value")
  const value = snapshot.val()
  const fKey = Object.keys(snapshot.val())[0]
  res.status(200).json(value[fKey])
}

// /GET/api/test
router.get("/test", (req, res) => {
  getData(req, res)
})

export default router
