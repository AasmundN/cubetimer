<template>
  <button @click="signIn">Login</button>
</template>

<script>
import axios from "axios"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default {
  data() {
    return {}
  },
  methods: {
    signIn() {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()

      signInWithPopup(auth, provider)
        .then((result) => {
          result.user
            .getIdToken()
            .then((idToken) => {
              document.cookie = `idToken=${idToken}`
              axios
                .get("/api/user")
                .then((res) => {
                  console.log(res.data)
                })
                .catch((err) => {
                  console.log(err)
                })
            })
            .catch((err) => {
              console.log(err)
            })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.customData.email
          const credential = GoogleAuthProvider.credentialFromError(error)
        })
    },
  },
}
</script>

<style>
button {
  cursor: pointer;
}
</style>
