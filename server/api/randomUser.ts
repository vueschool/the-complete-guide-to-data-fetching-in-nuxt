import { faker } from '@faker-js/faker';
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    await sleep(1000);
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        randomNum: query.randomNum
    };
});
