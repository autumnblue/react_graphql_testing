import { NutritionInfo } from './nutrition-info';

export type Nutrition = {
  id: string;
  name: string;
  selected?: boolean;
  info: NutritionInfo;
};
