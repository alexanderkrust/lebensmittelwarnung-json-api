import { Response } from 'express';

module.exports = (_: any, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
};
