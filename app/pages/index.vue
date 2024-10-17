<script setup lang="ts">
console.time()

const { data } = await useAsyncData(()=>{
  return Promise.all([
    $fetch('/api/sleep/2000'),
    $fetch('/api/sleep/3000')
  ])
})

const author = computed(()=> data.value?.[0])
const comments = computed(()=> data.value?.[1])

console.timeEnd()

</script>
<template>
  <h1 class="text-3xl my-8">Users</h1>
  <pre>{{ author }}</pre>
  <pre>{{ comments }}</pre>
</template>
