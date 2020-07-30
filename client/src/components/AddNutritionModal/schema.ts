type Field = {
  label: string;
  name: string;
  type: string;
};

const createField = (label: string, name: string, type: string): Field => ({ label, name, type });

export const fields = {
  name: 'name',
  calories: 'calories',
  fat: 'fat',
  carbs: 'carbs',
  protein: 'protein',
};

export const schema: Field[] = [
  createField('Dessert Name', fields.name, 'text'),
  createField('Calories', fields.calories, 'number'),
  createField('Fat', fields.fat, 'number'),
  createField('Carbs', fields.carbs, 'number'),
  createField('Protein', fields.protein, 'number'),
];

export const defaultValues = {
  [fields.name]: '',
  [fields.calories]: '',
  [fields.carbs]: '',
  [fields.fat]: '',
  [fields.protein]: '',
};
