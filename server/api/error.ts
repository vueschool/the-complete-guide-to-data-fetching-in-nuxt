export default defineEventHandler(async (event) => {
    setResponseStatus(event, 500)
    return {
        requestedAt: Date.now()
    }
  });
  