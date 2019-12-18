import React from 'react';
import { FormattedMessage } from 'react-intl';
import { IValidator } from './validation';

export const validateRequired: IValidator = value => {
  if (value === undefined) {
    return undefined;
  }
  if (value.length >= 1) {
    return undefined;
  }
  return <FormattedMessage id="validation.value_missing"></FormattedMessage>;
};

export const validateName: IValidator = value => {
  if (!value) return undefined;
  if (value.length >= 2) {
    return undefined;
  }
  return <FormattedMessage id="validation.value_missing"></FormattedMessage>;
};

export const validateEmail: IValidator = value => {
  if (!value) return undefined;
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  ) {
    return undefined;
  }
  return <FormattedMessage id="validation.wrong_email"></FormattedMessage>;
};
