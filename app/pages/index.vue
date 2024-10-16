<script setup lang="ts">
// useFetch vs $fetch vs useAsyncData

function handleClick() {
  $fetch("/api/hello");
}

const { data: pokemons } = await useFetch(
  "https://dummyapi.online/api/pokemon"
);

async function myClientLibrary() {
  return "my data";
}

const { data } = useAsyncData(async () => {
  return await myClientLibrary();
});
</script>
<template>
  <h1>Pokemon</h1>
  {{ data }}
  <button @click="handleClick">Click Me</button>
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
