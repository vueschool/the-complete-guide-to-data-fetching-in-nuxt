<script setup lang="ts">
const { data } = await useFetch('/api/currentDate')

onMounted(() => {
  alert(data.value?.getHours())
})
</script>
<template>
  <h1 class="text-3xl my-8">Users</h1>
  <pre>{{ data }}</pre>
</template>
