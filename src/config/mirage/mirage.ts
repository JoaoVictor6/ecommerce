import { createServer } from 'miragejs';
import { todoGenerator, userGenerator } from '../../faker';

export default function makeServer () {
  createServer({
    routes() {
      this.get('/api/reminders', () => ({
        reminders: todoGenerator(5),
      })),
      this.get('/api/users', () => {
        return userGenerator(10);
      });
    },
  });
}
