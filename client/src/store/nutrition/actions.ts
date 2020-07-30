import { Nutrition } from 'models/nutrition';
import * as type from './types';

type SetNutritionAction = {
  type: typeof type.SET_NUTRITION;
  payload?: Nutrition[];
};

type SetSelectedAction = {
  type: typeof type.SET_SELECTED;
  payload: { id: string; selected: boolean };
};

type ClearSelectedAction = {
  type: typeof type.CLEAR_SELECTED;
};

type SortNutritionAction = {
  type: typeof type.SORT_NUTRITION;
  payload: string;
};

export const setNutrition = (nutrition?: Nutrition[]): SetNutritionAction => ({
  type: type.SET_NUTRITION,
  payload: nutrition,
});

export const setSelected = (id: string, selected: boolean): SetSelectedAction => ({
  type: type.SET_SELECTED,
  payload: { id, selected },
});

export const clearSelected = (): ClearSelectedAction => ({
  type: type.CLEAR_SELECTED,
});

export const sortNutrition = (name: string): SortNutritionAction => ({
  type: type.SORT_NUTRITION,
  payload: name,
});

export type NutritionActionTypes = SetNutritionAction | SetSelectedAction | ClearSelectedAction | SortNutritionAction;
