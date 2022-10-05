import admin from "firebase-admin"
import serviceAccount from "./cubetimer-b318d-firebase-adminsdk-7wcux-e49f72b728.js"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://cubetimer-b318d-default-rtdb.europe-west1.firebasedatabase.app",
})

export default admin.database()
