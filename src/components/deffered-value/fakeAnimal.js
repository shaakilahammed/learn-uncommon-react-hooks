import { faker } from '@faker-js/faker';

export const animals = Array.from(Array(10000), () => ({
    id: faker.string.uuid(),
    name: faker.animal.snake(),
}));
