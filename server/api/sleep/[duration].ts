export default defineEventHandler(async (event) => {
  const duration = getRouterParam(event, 'duration')
  await sleep(Number(duration))
  return `Hello ${duration}`
})