<template>
  {{ testData }}
  <LoginBtn></LoginBtn>
</template>

<script>
import axios from "axios"

import LoginBtn from "./components/user/LoginBtn.vue"

export default {
  name: "App",
  components: {
    LoginBtn,
  },
  data() {
    return {
      testData: "",
    }
  },
  methods: {
    async getTestData() {
      await axios
        .get("/api/test")
        .then((res) => {
          this.testData = res.data.name
        })
        .catch((err) => {
          // handle error here
        })
    },
    async getUser() {
      await axios
        .get("/api/user")
        .then((res) => {
          // add user to store
        })
        .catch((err) => {
          // handle error here
        })
    },
  },
  created() {
    this.getTestData()
    this.getUser()
  },
}
</script>

<style lang="scss"></style>
