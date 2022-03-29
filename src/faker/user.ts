import { faker } from '@faker-js/faker';

export function userGenerator(quantity: number){
  const users = Array.from(Array(quantity)).map(() => (
    {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.city()
    }
  ));

  return users;
}