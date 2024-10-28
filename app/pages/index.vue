<script setup lang="ts">

const { data } = await useAsyncData(Math.random().toString(), () =>
  $fetch(`/api/randomUser?randomNum=${Math.random()}`),
  {
    lazy: true,
  })
</script>
<template>
  <h1 class="text-3xl my-8">Users</h1>
  <pre>{{ data }}</pre>
</template>
