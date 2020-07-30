import React from 'react';
import { useDispatch } from 'react-redux';
import * as uuid from 'uuid';

import * as action from 'store/nutrition/actions';

import { Nutrition } from 'models/nutrition';

type RowProps = {
  dessert?: Nutrition;
};

export const Row: React.FC<RowProps> = ({ dessert }) => {
  const dispatch = useDispatch();
  const labels = dessert ? [dessert.name, ...Object.values(dessert.info)] : [];
  labels.pop();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!dessert) return;

    dispatch(action.setSelected(dessert.id, !!e.target.checked));
  };

  return (
    <div className="nutrition-table__row">
      <div className="nutrition-table__select-body">
        <input className="mr2" type="checkbox" onChange={onChange} />
      </div>
      {labels.map((label) => (
        <span key={uuid.v4()} className="nutrition-table__label">
          {label}
        </span>
      ))}
    </div>
  );
};
