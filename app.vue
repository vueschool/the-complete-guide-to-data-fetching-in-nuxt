<script setup lang="ts">
const { data: pokemons } = await useFetch(
  "https://dummyapi.online/api/pokemon"
);
</script>
<template>
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
