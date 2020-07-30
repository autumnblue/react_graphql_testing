import React from 'react';
import { shallow } from 'enzyme';

import { AddNutritionModal } from './AddNutritionModal';
import { Warning } from './Warning';

describe('AddNutritionModal component', () => {
  const values = {
    name: '',
    calories: '',
    carbs: '',
    fat: '',
    protein: '',
  };

  const props = {
    visible: true,
    submitHandler: () => {},
    closeHandler: () => {},
  };

  const warningProps = {
    text: 'Pease fill all details before you submit',
    visible: true,
  };

  const component = shallow(<AddNutritionModal {...props} />);
  const warning = shallow(<Warning {...warningProps} />);

  test('renders without crashes', () => {
    expect(component).toMatchSnapshot();
  });

  describe('renders default values: ', () => {
    test('name', () => {
      expect(component.find(`#name`).text()).toEqual(values.name);
    });

    test('calories', () => {
      expect(component.find(`#calories`).text()).toEqual(values.calories);
    });

    test('carbs', () => {
      expect(component.find(`#carbs`).text()).toEqual(values.carbs);
    });

    test('fat', () => {
      expect(component.find(`#fat`).text()).toEqual(values.fat);
    });

    test('protein', () => {
      expect(component.find(`#protein`).text()).toEqual(values.protein);
    });
  });

  test('shows warning if required fields are not filled', () => {
    expect(warning).toMatchSnapshot();
  });
});
