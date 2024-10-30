<script setup lang="ts">
import { parse } from "devalue"
const { data } = await useFetch('/api/currentDate', {
  transform(data) {
    const t = parse(data as unknown as string) as typeof data;
    return t;
  }
})

onMounted(() => {
  // alert(data.value?.createAt.getHours())
})
</script>
<template>
  <h1 class="text-3xl my-8">Users</h1>
  <pre>{{ data?.createAt.getMonth() }}</pre>
</template>
