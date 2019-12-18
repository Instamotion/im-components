import React, { useState } from 'react';
// import styled from 'styled-components';
import useValidation from '../src';
import { validateRequired, validateName, validateEmail } from '../src/validators';

// todo:
// 1. custom validators messages
// 2. async validators support
// 3. checkboxes, radio buttons

const FormComponent: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('Initial');

  const [errors, handleChange, handleBlur, runAllValidators] = useValidation({
    validations: {
      name: [validateRequired, validateName],
      email: [validateEmail]
    },
    onStateChange: (key, value) => {
      setForm({
        ...form,
        [key]: value
      });
    }
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = runAllValidators(form);
    if (isValid) {
      setStatus('SUBMITTED');
    } else {
      setStatus('Validation failed');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>name:</label>
        <input
          value={form.name}
          onChange={e => handleChange('name', e.target.value)}
          onBlur={e => handleBlur('name', e.target.value)}
        ></input>
        {errors.name}
      </div>
      <div>
        <label>email:</label>
        <input
          value={form.email}
          onChange={e => handleChange('email', e.target.value)}
          onBlur={e => handleBlur('email', e.target.value)}
        ></input>
        {errors.email}
      </div>
      <button type="submit">Submit</button>
      <br />
      <br />
      <div>{status}</div>
    </form>
  );
};

export default FormComponent;
