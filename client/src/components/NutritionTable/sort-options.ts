const createOption = (title: string, name: string) => ({ title, name });

export const sortOptions = [
  createOption('Dessert(100g)', 'name'),
  createOption('Calories', 'calories'),
  createOption('Carbs', 'carbs'),
  createOption('Fat', 'fat'),
  createOption('Protein', 'protein'),
];
