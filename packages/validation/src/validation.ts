import { useState } from 'react';

export type Error = JSX.Element | undefined;

export type HandleChange = (key: string, value: string) => void;

export type handleBlur = (key: string, value: string) => void;

export type runAllValidators = (state: Object) => boolean;

export interface Errors {
  [key: string]: Error;
}

export interface IValidator {
  (value?: string): JSX.Element | undefined;
}

export interface useValidationProps {
  validations: ValidationSchema;
  onStateChange: (name: string, value: string | boolean) => void;
}

export interface ValidationSchema {
  [key: string]: IValidator[];
}

const useValidation = ({
  validations = {},
  onStateChange
}: useValidationProps): [Errors, HandleChange, handleBlur, runAllValidators] => {
  const [errors, setErrors] = useState<Errors>({});
  const [watch, setWatch] = useState<{ [key: string]: boolean }>({});

  const runAllValidators = (state: any): boolean => {
    const validationKeys = Object.keys(validations);
    const stateKeys = Object.keys(state);
    let isValid = true;
    for (const key of validationKeys) {
      if (!stateKeys.includes(key)) {
        // todo: remove from errors if we add/remove state props
        continue;
      }
      const value = state[key];
      if (!validate(key, value)) {
        console.log('wtf!!');
        isValid = false;
      }
    }
    return isValid;
  };

  const validate = (key: string, value: string): boolean => {
    const validators = validations[key] || [];
    const result: Error = validators
      .map(v => v(value))
      .filter(v => v !== undefined)
      .pop(); // todo: show first or last?
    setErrors(prev => ({
      ...prev,
      [key]: result
    }));
    return result === undefined;
  };

  const handleChange = (key: string, value: string): void => {
    onStateChange(key, value);
    if (!watch[key]) return;
    validate(key, value);
  };

  const handleBlur = (key: string, value: string): void => {
    setWatch(prev => ({
      ...prev,
      [key]: true
    }));
    validate(key, value);
  };

  return [errors, handleChange, handleBlur, runAllValidators];
};

export default useValidation;
