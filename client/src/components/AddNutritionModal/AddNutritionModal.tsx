import React, { useState, useMemo, useEffect } from 'react';

import { schema, defaultValues } from './schema';

import './AddNutritionModal.css';
import { Warning } from './Warning';

type Props = {
  visible: boolean;
  submitHandler: (values: { [x: string]: string }) => void;
  closeHandler: () => void;
};

export const AddNutritionModal: React.FC<Props> = ({ visible, submitHandler, closeHandler }) => {
  const [values, setValues] = useState(defaultValues);
  const disabled = useMemo(() => Object.values(values).some((value) => !!!value), [values]);

  useEffect(() => {
    if (!visible) setValues(defaultValues);
  }, [visible, setValues]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (disabled) return;
    submitHandler(values);
  };

  if (!visible) return null;

  return (
    <div className="modal">
      <div className="modal__body">
        <div className="modal__close" onClick={closeHandler} />
        <Warning visible={disabled} text="Pease fill all details before you submit" />
        <div className="add-nutrition">
          {schema.map(({ name, label, type }) => (
            <div key={name} className="add-nutrition__field">
              <label htmlFor={name} className="add-nutrition__label">
                {label}
              </label>
              <input type={type} id={name} name={name} onChange={onChange} value={values[name]} />
            </div>
          ))}
          <button onClick={onSubmit} className="add-nutrition__submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
