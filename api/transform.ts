import {
  DESCRIPTION_KEY_REGEX, DESCRIPTION_PROPERTY_REGEX, PROPERTY_MAPPING, SPLIT_DESCRIPTION_REGEX,
} from './constants';

const descriptionStringToArray = (description: string) => description.match(
  SPLIT_DESCRIPTION_REGEX,
);

type KeyTypes = keyof (typeof PROPERTY_MAPPING);

const mapPropertyAndStripHTML = (property: string) => PROPERTY_MAPPING[property.replace(/<[^>]*>?/gm, '') as KeyTypes];

const cleanValue = (value: string) => value.replace(/<[^>]*>?/gm, '').replace('\\n', '').replace('Inverkehrbringer: ', '');

const mapDescriptionToProperties = (description: string) => {
  const array = descriptionStringToArray(description);
  if (!array) return {};

  const object = {} as Record<string, string | string[]>;

  array.forEach((item) => {
    let key: string | undefined = item.match(DESCRIPTION_PROPERTY_REGEX)?.toString();
    let value: string | string[] | undefined = item.match(DESCRIPTION_KEY_REGEX)?.toString();

    if (key && value) {
      key = mapPropertyAndStripHTML(key);
      value = cleanValue(value);

      if (key === 'affected_states') {
        value = value.split(', ');
      }

      object[key] = value;
    }
  });

  return (object);
};

export const transformItem = (item: any, index: number) => {
  const string = JSON.stringify(item.description);
  return {
    id: index + 1,
    ...mapDescriptionToProperties(string),
    published: item.published,
    created: item.created,
    link: item.link,
  };
};

export const transform = (items: any[], metaFromApi: any) => {
  const transformedItems = items.map((item, index) => transformItem(item, index));

  const meta = {
    ...metaFromApi,
    count: transformedItems.length,
  };

  return {
    meta,
    data: transformedItems,
  };
};
