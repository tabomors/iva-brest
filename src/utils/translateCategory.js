import { CATEGORIES_DICT } from '../constants';

export default function translateCategory(category) {
  const translatedCategory = CATEGORIES_DICT[category];
  if (!translatedCategory) {
    console.error('Вы забили перевести перевести на русский новую категорию!');
    return category;
  }
  return translatedCategory;
}
