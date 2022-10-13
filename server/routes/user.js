import express from "express"
const router = express.Router()

import { getAuth } from "firebase-admin/auth"

async function getUser(req, res) {
  const idToken = req.cookies.idToken

  if (typeof idToken === "undefined") res.status(401).json("Undefined idToken")

  // fix that is no token provided then it crashes!
  getAuth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      res.status(200).json(decodedToken.name)
    })
    .catch((err) => {
      res.status(401).json("Could not resolve idToken")
    })
}

// /GET/api/user
router.get("/user", (req, res) => {
  getUser(req, res)
})

export default router
