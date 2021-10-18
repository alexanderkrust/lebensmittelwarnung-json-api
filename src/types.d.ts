import { Category, States } from './constants';

type StatesType = typeof States;
type CategoryType = typeof Category;

interface GetUrlFunction {
  category?: keyof CategoryType;
  state?: keyof StatesType;
}
