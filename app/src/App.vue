<template>
  {{ testData }}
  <LoginBtn />
</template>

<script setup>
// import dependencies
import { ref } from "vue"
import axios from "axios"

// import components
import LoginBtn from "./components/user/LoginBtn.vue"

// reactive data
const testData = ref("")

// methods
async function getTestData() {
  await axios
    .get("/api/test")
    .then((res) => {
      testData.value = res.data.name
    })
    .catch((err) => {
      // handle error here
    })
}

async function getUser() {
  await axios
    .get("/api/user")
    .then((res) => {
      // add user to store
      console.log(res.data.name)
    })
    .catch((err) => {
      // handle error here
    })
}

// code to run upon creation of component
getTestData()
getUser()
</script>

<style lang="scss"></style>
