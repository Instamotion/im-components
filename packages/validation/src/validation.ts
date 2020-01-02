import { useState } from 'react';

export type Error = JSX.Element | undefined;

export type Errors<S extends Object> = {
  [K in keyof S]?: Error;
};

export type HandleChange<S> = <K extends keyof S>(
  key: K,
  value: S[K],
  forceValidation?: boolean
) => void;

export type HandleBlur<S> = <K extends keyof S>(key: K, value: S[K]) => void;

export type runAllValidators<S> = (state: S) => boolean;

export interface Validator<V> {
  (value?: V): JSX.Element | undefined;
}

export interface useValidationProps<S> {
  validations: ValidationSchema<S, keyof S>;
  onStateChange: <K extends keyof S>(name: K, value: S[K]) => void;
}

export type ValidationSchema<S, K extends keyof S> = {
  [key in K]: Validator<S[K]>[];
};

export type ReturnType<S> = [Errors<S>, HandleChange<S>, HandleBlur<S>, runAllValidators<S>];

const useValidation = <S>({ validations, onStateChange }: useValidationProps<S>): ReturnType<S> => {
  const [errors, setErrors] = useState<Errors<S>>({});

  const runAllValidators = (state: S): boolean => {
    const validationKeys = Object.keys(validations) as Array<keyof S>;
    let isValid = true;
    for (const key of validationKeys) {
      const res = validate(key, state[key]);
      if (res !== undefined) {
        isValid = false;
      }
    }
    return isValid;
  };

  const validate = <K extends keyof S>(key: K, value: S[K]): Error => {
    const validators = validations[key] || [];
    const error = validators
      .map(v => v(value))
      .filter(v => v !== undefined)
      .pop();
    setErrors(prev => ({
      ...prev,
      [key]: error
    }));
    return error;
  };

  const handleChange = <K extends keyof S>(
    key: K,
    value: S[K],
    forceValidation?: boolean
  ): void => {
    onStateChange(key, value);
    if (errors[key] !== undefined || forceValidation) {
      validate(key, value);
    }
  };

  const handleBlur = <K extends keyof S>(key: K, value: S[K]): void => {
    validate(key, value);
  };

  return [errors, handleChange, handleBlur, runAllValidators];
};

export default useValidation;
