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
      try {
        const respons = await axios.get("/api/test")
        this.testData = respons.data.name
      } catch (err) {
        console.log(err)
      }
    },
    async getUser() {
      axios
        .get("/api/user")
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
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
