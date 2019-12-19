import React, { useState } from 'react';
// import styled from 'styled-components';
import useValidation, { validators } from '../src';

// todo:
// 1. custom validators messages
// 2. async validators support
// 3. checkboxes, radio buttons

type State = {
  name: string;
  email: string;
  agree: boolean;
};

const FormComponent: React.FC = () => {
  const [form, setForm] = useState<State>({ name: '', email: '', agree: false });
  const [status, setStatus] = useState('Initial');

  const [errors, handleChange, handleBlur, runAllValidators] = useValidation<State>({
    validations: {
      name: [validators.validateRequired, validators.validateName],
      email: [validators.validateEmail],
      agree: [validators.validateIsTrue]
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
        <label htmlFor="name-inp">name:</label>
        <input
          id="name-inp"
          value={form.name}
          onChange={e => handleChange('name', e.target.value)}
          onBlur={e => handleBlur('name', e.target.value)}
        />
        {errors.name}
      </div>
      <div>
        <label htmlFor="email-inp">email:</label>
        <input
          id="email-inp"
          value={form.email}
          onChange={e => handleChange('email', e.target.value)}
          onBlur={e => handleBlur('email', e.target.value)}
        />
        {errors.email}
      </div>
      <div>
        <input
          id="agree"
          type="checkbox"
          checked={form.agree}
          onChange={e => handleChange('agree', e.target.checked)}
        />
        <label htmlFor="agree">Agree with the term?s</label>
        {errors.agree}
      </div>
      <button type="submit">Submit</button>
      <br />
      <br />
      <div>{status}</div>
    </form>
  );
};

export default FormComponent;
