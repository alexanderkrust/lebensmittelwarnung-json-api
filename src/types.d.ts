import { Category, States } from './constants';

type StatesType = typeof States;
type CategoryType = typeof Category;

type ValueOf<T> = T[keyof T];
type CategoryValueTypes = ValueOf<CategoryType>;
type StatesValueTypes = ValueOf<StatesType>;

interface GetUrlFunction {
  category?: keyof CategoryType;
  state?: keyof StatesType;
}
