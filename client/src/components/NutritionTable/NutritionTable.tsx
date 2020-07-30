import React from 'react';
import * as uuid from 'uuid';

import { Nutrition } from 'models/nutrition';
import { Header } from './Header';
import { Row } from './Row';

import './NutritionTable.css';

type Props = {
  nutritionList?: Nutrition[];
};

export const NutritionTable: React.FC<Props> = ({ nutritionList }) => {
  return (
    <div className="nutrition-table">
      <Header />
      {nutritionList?.map((dessert) => (
        <Row key={uuid.v4()} dessert={dessert} />
      ))}
    </div>
  );
};
