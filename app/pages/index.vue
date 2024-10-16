<script setup lang="ts">
const { data: pokemons } = await useFetch("/api/hello", {
  lazy: true,
});
</script>
<template>
  <h1>Pokemon</h1>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon.id">
      <img :src="pokemon.image_url" width="50" />
      {{ pokemon.pokemon }}
    </li>
  </ul>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
}
</style>
