<script setup lang="ts">
const { data, execute, error } = await useFetch(
  '/api/error',
  {
    lazy: true,
  }
);

watchEffect(()=>{
  if(error.value){
    throw createError({...error.value,fatal: true})
  }
})


</script>
<template>
  <h1 class="text-3xl my-8">Users</h1>
  <pre>{{ data }}</pre>
  <UButton @click="execute">Refresh Data</UButton>
</template>
