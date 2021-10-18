import express from 'express';
import { parse } from 'rss-to-json';
import { transform } from '../src/transform';
import { CategoryType, StatesType } from '../src/types';
import { getUrl } from '../src/urls';

const router = express.Router({ mergeParams: true });

router.get('/api/warnings', async (req, res) => {
  const { state, category: categoryParam } = req.query;
  const url = getUrl({
    category: categoryParam as keyof CategoryType, state: state as keyof StatesType,
  });

  const json = await parse(url, {
    method: 'GET',
  });

  const {
    items, title, description, link, image, category,
  } = json;

  const meta = {
    title,
    description,
    link,
    image,
    category,
  };

  const content = transform(items, meta);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.status(200).send(content);
});

export default router;
