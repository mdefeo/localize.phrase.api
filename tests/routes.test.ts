import request from 'supertest';
import express from 'express';
import routes from '../src/routes';
import { Phrase } from '../src/data';

const app = express();
app.use(express.json());
app.use('/api', routes);

describe('Phrase API', () => {
  it('should return a phrase object without translations', async () => {
    const res = await request(app).get('/api/phrase/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
    expect(res.body).not.toHaveProperty('translations');
  });

  it('should return a translation of a phrase', async () => {
    const res = await request(app).get('/api/phrase/1/fr');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('translation', 'Salut, je suis une phrase');
  });

  it('should return phrases that contain the search text', async () => {
    const res = await request(app).get('/api/phrase/search?query=Hi');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should return phrases that contain the search text', async () => {
    const res = await request(app).get('/api/phrase/search?query=earn&status=spam');
    expect(res.status).toBe(200);
    const phraseFound = (res.body as Phrase[]).find((p: Phrase) => p.phrase === 'Earn money fast');
    expect(phraseFound).toBeDefined();
  });

});
