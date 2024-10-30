import { stringify } from "devalue"
export default defineEventHandler(async (event) => {


  const data = {
    createAt: new Date(),
  }
  if (getHeader(event, 'Content-Type') === 'application/devalue') {
    // ...
  }

  const dataToJSON = {
    ...data,
    toJSON() {
      return this;
    }
  }
  return stringify(data) as unknown as typeof dataToJSON;
})
