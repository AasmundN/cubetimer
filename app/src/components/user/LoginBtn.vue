<template>
  <button @click="signIn">{{ buttonTxt }}</button>
</template>

<script setup>
import { ref } from "vue"

import axios from "axios"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const buttonTxt = ref("Login")

async function signIn() {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  await signInWithPopup(auth, provider)
    .then(async (result) => {
      const idToken = await result.user.getIdToken()

      // probably find a better way to deal with cookies
      document.cookie = `idToken=${idToken}`

      axios
        .get("/api/user")
        .then((res) => {
          // add user to store
          console.log(res.data.name)
        })
        .catch((err) => {
          // handle error here
        })
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.customData.email
      const credential = GoogleAuthProvider.credentialFromError(error)
    })
}
</script>

<style>
button {
  cursor: pointer;
}
</style>
