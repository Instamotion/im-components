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
    const stateKeys = Object.keys(state) as Array<keyof S>;
    let isValid = true;
    for (const key of validationKeys) {
      if (!stateKeys.includes(key)) {
        // todo: remove from errors if we add/remove state props
        continue;
      }
      const value = state[key];
      if (!validate(key, value)) {
        isValid = false;
      }
    }
    return isValid;
  };

  const validate = <K extends keyof S>(key: K, value: S[K]): Error => {
    const validators = validations[key] || [];
    const res = validators
      .map(v => v(value))
      .filter(v => v !== undefined)
      .pop();
    return res;
  };

  const handleChange = <K extends keyof S>(
    key: K,
    value: S[K],
    forceValidation?: boolean
  ): void => {
    onStateChange(key, value);
    if (forceValidation) {
      setErrors(prev => ({
        ...prev,
        [key]: validate(key, value)
      }));
    } else {
      if (errors[key] !== undefined) {
        setErrors(prev => ({
          ...prev,
          [key]: validate(key, value)
        }));
      }
    }
  };

  const handleBlur = <K extends keyof S>(key: K, value: S[K]): void => {
    setErrors(prev => ({
      ...prev,
      [key]: validate(key, value)
    }));
  };

  return [errors, handleChange, handleBlur, runAllValidators];
};

export default useValidation;
