import faker from '@faker-js/faker';

export function todoGenerator(quantity: number){
  const todos = Array.from(Array(quantity)).map(() => (
    {
      id: faker.datatype.uuid(),
      text: faker.lorem.sentences(3),
    }
  ));

  return todos;
}