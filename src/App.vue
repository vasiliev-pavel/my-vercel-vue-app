<template>
  <div class="app">
    <h1>Hello from Vue + Vercel!</h1>
    <button @click="callApi">Call API</button>
    <p v-if="message">Message from API: {{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')

async function callApi() {
  const res = await fetch('/api/hello')
  const data = await res.json()
  message.value = data.message
}
</script>

<style scoped>
.app {
  padding: 2rem;
  font-family: sans-serif;
}
</style>
