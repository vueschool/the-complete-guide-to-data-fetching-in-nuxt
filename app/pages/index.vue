<script setup lang="ts">
const query = ref("");
const committedQuery = ref("");

const { data, status, execute} = await useFetch(
  'https://dummyjson.com/users/search',
  {
    lazy: true,
    query:{
      q: committedQuery
    }
  }
);

const users = computed(() => data.value?.users);
</script>
<template>
  <h1 class="text-3xl my-8">Users</h1>
  <UButton @click="execute">Refresh Data</UButton>
  <form @submit.prevent="committedQuery = query" class="form">
    <UInput type="text" v-model="query"/>
    <UButton type="submit">Search</UButton>
  </form>
  <ul>
    <template v-if="status === 'pending'">
      <li v-for="n in 20">
        <USkeleton class="h-5 w-5" :ui="{ rounded: 'rounded-full' }" />
        <USkeleton class="h-2 w-[100px]" />
      </li>
    </template>
    <template v-else>
      <li v-for="user in users" :key="user.id">
        <img
          :src="user.image"
          :alt="user.username"
          width="20"
          class="rounded-full"
        />
        <span>{{ user.firstName }} {{ user.lastName }}</span>
      </li>
    </template>
  </ul>
</template>

<style scoped>
li {
  @apply flex items-center space-x-4 h-[50px] pl-3;
}
.form {
  @apply flex items-center w-96 gap-2 mb-5;
}
</style>
