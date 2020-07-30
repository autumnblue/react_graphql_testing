import { Nutrition } from 'models/nutrition';
import { NutritionActionTypes } from './actions';
import * as type from './types';

interface INutritionState {
  nutritionList?: Nutrition[];
  selectedIds: string[];
}

const initialState: INutritionState = {
  nutritionList: [],
  selectedIds: [],
};

const sort = (array: any[], prop: string): any[] => {
  const _array = [...array];

  for (let i = 0; i < _array.length; ++i) {
    for (let j = i + 1; j < _array.length; ++j) {
      if (_array[i][prop] < _array[j][prop]) {
        [_array[i], _array[j]] = [_array[j], _array[i]];
      }
    }
  }

  return _array;
};

export const nutrition = (state: INutritionState = initialState, action: NutritionActionTypes): INutritionState => {
  switch (action.type) {
    case type.SET_NUTRITION:
      return {
        ...state,
        nutritionList: action.payload,
      };

    case type.SET_SELECTED: {
      const { selectedIds } = state;
      const { selected, id } = action.payload;
      const ids = selected ? [...selectedIds, id] : selectedIds.filter((_id) => _id !== id);

      return {
        ...state,
        selectedIds: ids,
      };
    }

    case type.CLEAR_SELECTED:
      return {
        ...state,
        selectedIds: [],
      };

    case type.SORT_NUTRITION: {
      const name = action.payload;
      const flat = state.nutritionList?.map(({ id, name, info }) => ({ id, name, ...info })) ?? [];
      const sorted = sort(flat, name);
      const nutritionList = sorted.map(({ id, name, ...info }) => ({ id, name, info })) as Nutrition[];

      return {
        ...state,
        nutritionList,
        selectedIds: [],
      };
    }

    default:
      return state;
  }
};
