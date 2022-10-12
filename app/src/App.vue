<template>
  {{ testData }}
  <LoginBtn></LoginBtn>
</template>

<script>
import axios from "axios"

import LoginBtn from "./components/usr/LoginBtn.vue"

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
  },
  created() {
    this.getTestData()
  },
}
</script>

<style lang="scss"></style>
