<template>
  <button @click="login">Login</button>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    login() {
      console.log("Signing in")
    },
  },
}
</script>

<style>
button {
  cursor: pointer;
}
</style>
