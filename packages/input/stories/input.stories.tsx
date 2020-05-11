import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { IntlProvider } from 'react-intl';
// import deLocaleData from 'react-intl/locale-data/de';
// import enLocaleData from 'react-intl/locale-data/en';
import Checkbox from '@im-ui/checkbox';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import Input, { InputProps } from '../src';
// import translations from '../../i18n';

// addLocaleData([...deLocaleData, ...enLocaleData]);
// const messages = translations.de;

const TextInputDemo = (): React.ReactElement => {
  const [value, setValue] = React.useState(text('value', 'Hello'));

  const props: InputProps = {
    value,
    type: 'text',
    label: 'Hello',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const fromInput = (e.target as HTMLInputElement).value;
      setValue(fromInput);
      action('Input changed')(fromInput);
    }
  };

  return renderWithThemeAndI18n(
    <div style={{ fontSize: '16px' }}>
      <Input {...props} />
    </div>
  );
};

const TextInputValidationDemo = (): React.ReactElement => {
  const [requiredValue, setRequiredValue] = React.useState('');
  const [minLengthValue, setMinLengthValue] = React.useState('');
  const [patternValue, setPatternValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [urlValue, setUrlValue] = React.useState('');
  const [numberValue, setNumberValue] = React.useState('');

  const requiredProps: InputProps = {
    value: requiredValue,
    type: 'text',
    label: 'input[type=text] with required value',
    onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
      const fromInput = (e.target as HTMLInputElement).value;
      setRequiredValue(fromInput);
      action('Input changed')(fromInput);
    },
    placeholder: 'Full name',
    required: true
  };

  const minLengthProps: InputProps = {
    value: minLengthValue,
    type: 'text',
    label: 'input[type=text] with minimum length 5',
    onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
      const fromInput = (e.target as HTMLInputElement).value;
      setMinLengthValue(fromInput);
      action('Input changed')(fromInput);
    },
    placeholder: 'Full name',
    required: true,
    minLength: 5
  };

  const patternProps: InputProps = {
    value: patternValue,
    type: 'tel',
    label: 'input[type=text] with specific format',
    onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
      const fromInput = (e.target as HTMLInputElement).value;
      setPatternValue(fromInput);
      action('Input changed')(fromInput);
    },
    placeholder: 'Phone number in format 123-456',
    required: true,
    pattern: '[0-9]{3}-[0-9]{3}'
  };

  const emailProps: InputProps = {
    value: emailValue,
    type: 'email',
    label: 'input[type=email]',
    onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
      const fromInput = (e.target as HTMLInputElement).value;
      setEmailValue(fromInput);
      action('Input changed')(fromInput);
    },
    placeholder: 'E-mail address',
    required: true
  };

  const urlProps: InputProps = {
    value: urlValue,
    type: 'url',
    label: 'input[type=url]',
    onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
      const fromInput = (e.target as HTMLInputElement).value;
      setUrlValue(fromInput);
      action('Input changed')(fromInput);
    },
    placeholder: 'Url',
    required: true
  };

  const numberProps: InputProps = {
    value: numberValue,
    type: 'number',
    label: 'input[type=number] with minimum length 5',
    onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
      const fromInput = (e.target as HTMLInputElement).value;
      setNumberValue(fromInput);
      action('Input changed')(fromInput);
    },
    placeholder: 'Zip code',
    required: true,
    pattern: '[0-9]{5}'
  };

  return (
    <IntlProvider locale="de" messages={{}}>
      <div style={{ fontSize: '16px' }}>
        <Input {...requiredProps} />
        <Input {...minLengthProps} />
        <Input {...patternProps} />
        <Input {...emailProps} />
        <Input {...urlProps} />
        <Input {...numberProps} />
      </div>
    </IntlProvider>
  );
};

const RangeInputDemo = (): React.ReactElement => {
  const [value, setValue] = React.useState(number('Value', 10));
  const maxVal = number('Max value', 100);
  const stepVal = number('Step', 5);

  const props: InputProps = {
    value,
    type: 'range',
    min: 0,
    max: maxVal,
    step: stepVal,
    label: `Range: ${value}/${maxVal}`,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const fromInput = Number((e.target as HTMLInputElement).value);
      setValue(fromInput);
      action('Input changed')(fromInput);
    }
  };

  return renderWithThemeAndI18n(
    <div style={{ fontSize: '16px' }}>
      <Input {...props} />
    </div>
  );
};

const InputCustomValidation = (): React.ReactElement => {
  const [withCustomValid, setWithCustomValid] = React.useState(true);
  const [isValid, setIsValid] = React.useState(false);
  return renderWithThemeAndI18n(
    <div>
      <h3>How it works</h3>
      <p>
        The input can accept <code>isValid</code> and <code>validationMessage</code> from the
        outside. This means that one can augment HTML5 default validation.
      </p>
      <div>
        <Checkbox
          id="overwrite-validation"
          checked={withCustomValid}
          onChange={i => setWithCustomValid(i)}
          label="Use additional validation"
        />
      </div>
      <div>
        <Checkbox
          id="is-it-valid"
          checked={isValid}
          onChange={i => setIsValid(i)}
          label="Is input valid"
        />
      </div>
      <Input
        required
        errorMessage={withCustomValid ? <div>You input is not correct.</div> : undefined}
        type="email"
      />
      <p>Here, email is valid according to HTML5 validation rules:</p>
      <Input
        required
        value="test.email@localhost.com"
        errorMessage={withCustomValid ? <div>You input is not correct.</div> : undefined}
        type="email"
      />
      <p>This input is not required</p>
      <Input
        value="test.email@localhost"
        errorMessage={withCustomValid ? <div>You input is not correct.</div> : undefined}
        type="email"
      />
    </div>
  );
};

storiesOf('Input', module)
  .add('text', () => <TextInputDemo />)
  .add('validation', () => <TextInputValidationDemo />)
  .add('overwrite html5 validation', () => <InputCustomValidation />)
  .add('range', () => <RangeInputDemo />);
