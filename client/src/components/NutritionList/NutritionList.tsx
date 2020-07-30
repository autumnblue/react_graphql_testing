import React, { useState } from 'react';
import * as uuid from 'uuid';
import { useSelector } from 'react-redux';
import * as selector from './selectors';

import { AddNutritionModal } from 'components/AddNutritionModal';
import { NutritionHeader } from 'components/NutritionHeader';
import { NutritionTable } from 'components/NutritionTable';
import { Nutrition } from 'models/nutrition';

import { CREATE_NUTRITION } from 'graphql/queries/nutrition/nutrition-mutations';
import { GET_NUTRITION } from 'graphql/queries/nutrition/nutrition-queries';

import './NutritionList.css';
import { useMutation } from 'react-apollo';

export const NutritionList = () => {
  const [showModal, setShowModal] = useState(false);
  const [addNutrition] = useMutation(CREATE_NUTRITION, { refetchQueries: [{ query: GET_NUTRITION }] });
  const nutritionList: Nutrition[] | undefined = useSelector(selector.getNutritionList);

  const onSubmit = (values: { [x: string]: string }) => {
    const newNutrition: Nutrition = {
      id: uuid.v4(),
      name: values.name,
      info: {
        calories: +values.calories,
        fat: +values.fat,
        protein: +values.protein,
        carbs: +values.carbs,
      },
    };

    addNutrition({ variables: { newNutrition } });
    setShowModal(false);
  };

  return (
    <>
      <AddNutritionModal visible={showModal} closeHandler={() => setShowModal(false)} submitHandler={onSubmit} />
      <div className="nutrition-list">
        <NutritionHeader openModal={() => setShowModal(true)} />
        <NutritionTable nutritionList={nutritionList} />
      </div>
    </>
  );
};
