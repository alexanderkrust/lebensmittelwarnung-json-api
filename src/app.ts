import express from 'express';
import morgan from 'morgan';
import { parse } from 'rss-to-json';
import { transform } from './transform';
import { CategoryType, StatesType } from './types';
import { getUrl } from './urls';

export const app = express();
app.use(morgan('tiny'));

app.use(
  express.json({
    type: '*/*',
  }),
);

app.get('/api/warnings/:category?', async (req, res) => {
  const categoryParam = req.params.category as keyof CategoryType;
  const state = req.query.state as keyof StatesType;
  const url = getUrl({ category: categoryParam, state });

  const json = await parse(url, {
    method: 'GET',
  });

  const {
    items, title, description, link, image, category,
  } = json;

  const meta = {
    title, description, link, image, category,
  };

  const content = transform(items, meta);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.status(200).send(content);
});

if (process.env.NODE_ENV === 'development') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Server has started!');
  });
}
