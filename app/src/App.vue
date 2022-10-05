<template>
  {{ testData }}
</template>

<script>
import axios from "axios"

export default {
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
