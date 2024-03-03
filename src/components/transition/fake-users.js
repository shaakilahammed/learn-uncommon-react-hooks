import { faker } from '@faker-js/faker';

export const users = Array.from(Array(2000), () => ({
    id: crypto.randomUUID(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
}));
