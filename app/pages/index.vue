<script setup lang="ts">
const { data } = await useFetch<{
  users: {
    lastName: string;
    firstName: string;
  }[]
}>('https://dummyjson.com/users/', {
  transform(data) {
    return {
      users: data.users.map((user) => {
        return {
          firstName: user.firstName,
          lastName: user.lastName
        }
      })
    }

  }
});
</script>
<template>
  <h1 class="text-3xl my-8">Users</h1>
  <pre>{{ data }}</pre>
</template>
