<script setup lang="ts">
const { data, execute } = await useFetch('/api/randomUser', {
  immediate: false,
  dedupe: "defer",
  default: () => {
    return {
      firstName: "John",
      lastName: "Doe"
    }
  }
});
</script>
<template>
  <h1 class="text-3xl my-8">Users</h1>
  <button @click="execute()">Click me</button>
  <pre>{{ data }}</pre>
</template>
