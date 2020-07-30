import React from 'react';
import { useDispatch } from 'react-redux';
import * as uuid from 'uuid';

import * as action from 'store/nutrition/actions';

import { SortIcon } from 'assets/components/SortIcon';
import { sortOptions } from './sort-options';

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const onSort = (name: string) => {
    dispatch(action.sortNutrition(name));
  };

  return (
    <div className="nutrition-table__header nutrition-table__row">
      <div />
      {sortOptions.map(({ title, name }) => (
        <div
          onClick={() => onSort(name)}
          key={uuid.v4()}
          className="nutrition-table__label nutrition-table__label_sortable">
          <span>{title}</span>
          <SortIcon />
        </div>
      ))}
    </div>
  );
};
