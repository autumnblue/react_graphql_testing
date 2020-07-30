import React, { useMemo } from 'react';
import { useMutation } from 'react-apollo';
import { useSelector, useDispatch } from 'react-redux';

import * as selector from './selectors';
import * as action from 'store/nutrition/actions';

import { GET_NUTRITION } from 'graphql/queries/nutrition/nutrition-queries';
import { DELETE_NUTRITION, RESET_NUTRITION } from 'graphql/queries/nutrition/nutrition-mutations';

import './NutritionHeader.css';

type Props = {
  openModal: () => void;
};

export const NutritionHeader: React.FC<Props> = ({ openModal }) => {
  const dispatch = useDispatch();
  const selectedIds = useSelector(selector.getSelectedIds);

  const [deleteNutrition] = useMutation(DELETE_NUTRITION, { refetchQueries: [{ query: GET_NUTRITION }] });
  const [reset] = useMutation(RESET_NUTRITION, { refetchQueries: [{ query: GET_NUTRITION }] });

  const disabled = useMemo(() => selectedIds.length === 0, [selectedIds]);

  const onReset = () => {
    reset();
  };

  const onDelete = () => {
    if (disabled) return;
    deleteNutrition({ variables: { ids: selectedIds } });
    dispatch(action.clearSelected());
  };

  return (
    <div className="nutrition-header">
      <div className="nutrition-header__row nutrition-header">
        <div className="nutrition-header__column">
          <h2 className="nutrition-header__title">Nutrition List</h2>
        </div>
        <div className="nutrition-header__column">
          <button onClick={onReset} className="nutrition-header__reset">
            Reset data
          </button>
        </div>
      </div>
      <div className="nutrition-header__row nutrition-header__cta">
        <div className="nutrition-header__column">
          <span className="nutrition-header__number-selected">{selectedIds.length} selected</span>
        </div>
        <div className="nutrition-header__column">
          <div className="nutrition-header__actions">
            <button onClick={openModal} className="nutrition-header__action nutrition-header__action_add">
              Add new
            </button>
            <button
              onClick={onDelete}
              className="nutrition-header__action nutrition-header__action_delete"
              disabled={disabled}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
