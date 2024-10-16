export default defineEventHandler(async (event) => {
  return await $fetch("https://dummyapi.online/api/pokemon");
});
