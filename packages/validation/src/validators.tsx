import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Validator } from './validation';

export const validateRequired: Validator<any> = value => {
  if (value === undefined || value === null || value === '') {
    return <FormattedMessage id="validation.value_missing" />;
  }
  return undefined;
};

export const validateName: Validator<string> = value => {
  if (!value) return undefined;
  if (value.length >= 2) {
    return undefined;
  }
  return <FormattedMessage id="validation.value_missing" />;
};

export const validateIsTrue: Validator<boolean> = value => {
  if (typeof value === 'undefined' || value !== true) {
    return <FormattedMessage id="validation.value_missing" />;
  }
  return undefined;
};

export const validateEmail: Validator<string> = value => {
  if (!value) return undefined;
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  ) {
    return undefined;
  }
  return <FormattedMessage id="validation.wrong_email" />;
};
