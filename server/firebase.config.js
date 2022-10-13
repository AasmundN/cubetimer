import { initializeApp, applicationDefault } from "firebase-admin/app"
import { getDatabase } from "firebase-admin/database"

import dotenv from "dotenv"
dotenv.config()

export default initializeApp({
  credential: applicationDefault(),
  databaseURL:
    "https://cubetimer-b318d-default-rtdb.europe-west1.firebasedatabase.app",
})

export const db = getDatabase()
