import { AppState } from 'store';
import { Nutrition } from 'models/nutrition';

export const getNutritionList = ({ nutrition }: AppState): Nutrition[] | undefined => nutrition.nutritionList;
