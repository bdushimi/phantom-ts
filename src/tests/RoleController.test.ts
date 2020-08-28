/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { expect } from 'chai';
import 'mocha';
import { agent as request } from 'supertest';
import app from '../server';

describe('Role Controller', () => {
  it('Request to /api should return a Welcome message', async () => {
    const res = await request(app).get('/api');
    expect(res.status).to.equal(200);
    expect(res.body.response).to.equal('Welcome to Phantom');
  });
});
