import * as http from 'http';
import app from '../src/app';
import request from 'supertest';

describe('simple crud api server', () => {
  const server = http.createServer(app);

  test('POST api/users is used to create record about new user and store it in database', async () => {
    const res = await request(server)
      .post('/api/users')
      .send('username=test&age=20&hobbies=test,test');
    const user =
      '{"id":"0","username":"test","age":20,"hobbies":["test,test"]}';
    expect(res.statusCode).toBe(201);
    expect(res.text).toBe(user);
  });
});
