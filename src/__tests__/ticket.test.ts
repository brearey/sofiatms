import axios from 'axios';

test('Create ticket', async () => {
  const response = await axios.post('http://localhost:3002/api/tickets/create', {
    topic: 'Jest topic',
    message: 'Testing with Jest'
  });
  expect(response.status).toBe(200);
});