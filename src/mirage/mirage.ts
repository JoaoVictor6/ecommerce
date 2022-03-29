import { createServer } from 'miragejs';
import { todoGenerator, userGenerator } from '../faker';

export default function makeServer () {
  createServer({
    environment: 'development',
    routes() {
      this.namespace = 'api';
      this.get('/reminders', () => ({
        reminders: todoGenerator(5),
      })),
      this.get('/users', () => {
        return userGenerator(10);
      });

      this.namespace = '';
      this.passthrough();
    },
  });
}
