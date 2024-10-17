export default defineEventHandler(async (event) => {
  const duration = getRouterParam(event, 'duration')
  await sleep(Number(duration))
  return `Hello ${duration}`
})
function sleep(milliseconds = 0) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}