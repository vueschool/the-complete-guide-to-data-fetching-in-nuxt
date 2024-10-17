<script setup lang="ts">
const { data: pokemons, status } = await useFetch("/api/hello", {
  lazy: true,
});
</script>
<template>
  <h1 class="text-3xl my-8">Pokemon</h1>
  <ul>
    <template v-if="status === 'pending'">
      <li v-for="n in 20" class="flex items-center space-x-4 h-[50px] pl-3">
        <USkeleton class="h-5 w-5" :ui="{ rounded: 'rounded-full' }" />
        <USkeleton class="h-2 w-[100px]" />
      </li>
    </template>
    <template v-else>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        <img :src="pokemon.image_url" width="50" />
        {{ pokemon.pokemon }}
      </li>
    </template>
  </ul>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
}
</style>
