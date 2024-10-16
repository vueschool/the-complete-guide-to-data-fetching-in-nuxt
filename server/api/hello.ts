export default defineEventHandler(async (event) => {
  await sleep(2000);
  return await $fetch("https://dummyapi.online/api/pokemon");
});

function sleep(milliseconds = 0) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
