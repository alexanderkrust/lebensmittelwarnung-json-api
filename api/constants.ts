export const SPLIT_DESCRIPTION_REGEX = /<b>(.*?)<br\/>/g;
export const DESCRIPTION_PROPERTY_REGEX = /<b>(.*?)<\/b>/g;
export const DESCRIPTION_KEY_REGEX = /<\/b>(.*?)<br\/>/g;

export const PROPERTY_MAPPING = {
  'Produktbezeichnung:': 'description',
  'Typ:': 'type',
  'Hersteller (Inverkehrbringer):': 'manufacturer',
  'Grund der Warnung:': 'reason_of_warning',
  'Betroffene Länder:': 'affected_states',
};

export enum Category {
  default = 'alle',
  food = 'lebensmittel',
  cosmetics = 'kosmetische+mittel',
  consumer_goods = 'bedarfsgegenstaende',
  tattoo_goods = 'mittel+zum+taetowieren',
}

export enum States {
  default = 'alle_bundeslaender.rss',
  'baden_wuerttemberg' = 'baden_wuerttemberg.rss',
}
