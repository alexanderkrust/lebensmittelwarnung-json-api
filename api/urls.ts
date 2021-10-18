import { Category, States } from './constants';
import { GetUrlFunction } from './types';

export const getUrl = ({
  category, state,
}: GetUrlFunction) => `https://www.lebensmittelwarnung.de/bvl-lmw-de/opensaga/feed/${category
  ? Category[category] : Category.default}/${state
  ? States[state] : States.default}`;
