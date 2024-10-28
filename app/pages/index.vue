<script setup lang="ts">
const { data } = await useFetch('/api/randomUser', {
  transform(data) {
    return {
      ...data,
      expiresAt: Date.now() + 10_000
    }
  },
  getCachedData(key, nuxtApp) {
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    if (Date.now() >= data?.expiresAt) return undefined;
    return data;
  },
  lazy: true,
});
</script>
<template>
  <h1 class="text-3xl my-8">Users</h1>
  <pre>{{ data }}</pre>
</template>
