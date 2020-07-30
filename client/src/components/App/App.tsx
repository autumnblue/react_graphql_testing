import React, { useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { useDispatch } from 'react-redux';

import * as action from 'store/nutrition/actions';
import { NutritionList } from 'components/NutritionList';

import { Nutrition } from 'models/nutrition';
import { GET_NUTRITION } from 'graphql/queries/nutrition/nutrition-queries';

interface GetNutrition {
  nutrition: Nutrition[];
}

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useQuery<GetNutrition>(GET_NUTRITION);

  useEffect(() => {
    dispatch(action.setNutrition(data?.nutrition));
  }, [data, dispatch]);

  return <NutritionList />;
};
