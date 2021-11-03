// const request = require('supertest');
// const server = require('../server/server.ts');
import 'regenerator-runtime/runtime';

const supertest = require('supertest');
import app from '../server/server';
//import userRouter from '../server/routes/userRouter';
//import userController from '../server/controllers/userController';
beforeAll(() => jest.setTimeout(20 * 1000));

afterAll((done) => {
  done();
});

describe('userRouter', () => {
  test('GET /api/user', (done) => {
    supertest(app)
      .get('/api/user')
      .expect(200, JSON.stringify({ hello: 'hello from userRouter' }))
      .end(done);
  });
});
describe('userRouter', () => {
  test('POST /api/user/signup', (done) => {
    supertest(app)
      .post('/api/user/signup')
      .send({ username: 'doobert', password: 'scoobert' })
      .expect(200)
      .end(done);
  });
});
describe('userRouter', () => {
  test('POST /api/user/login', (done) => {
    supertest(app)
      .post('/api/user/login')
      .send({ username: 'doobert', password: 'scoobert' })
      .expect(
        200,
        JSON.stringify({
          verified: true,
          user: { user_id: 44, username: 'doobert' },
        })
      )
      .end(done);
  });
});
