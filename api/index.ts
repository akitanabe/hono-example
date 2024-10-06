import { Hono } from 'hono';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono dayo!',
  });
});
app.get('/user/:name', (c) => {
  const name = c.req.param().name;
  return c.json({
    message: `Hello Your Name is ${name} !`,
  });
});

export default app;
