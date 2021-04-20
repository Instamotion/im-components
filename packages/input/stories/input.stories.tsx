import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { IntlProvider } from 'react-intl';
// import deLocaleData from 'react-intl/locale-data/de';
// import enLocaleData from 'react-intl/locale-data/en';
import Checkbox from '@im-ui/checkbox';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import Input, { InputProps, checkPhoneValidation } from '../src';
import styled from 'styled-components';
// import translations from '../../i18n';

// addLocaleData([...deLocaleData, ...enLocaleData]);
// const messages = translations.de;

const TitleEl = styled.div`
  margin-bottom: 16px;
  font-weight: bold;
`;

type ValueType = string | number;

const PhoneInputDemo = (): React.ReactElement => {
  const [value, setValue] = React.useState(text('value', ''));
  const [validation, setValidation] = React.useState(boolean('validation', false));

  const props: InputProps = {
    value,
    type: 'tel',
    label: 'Your phone',
    onChange: (val: ValueType) => {
      setValue(val as string);
      action('Input changed')(val);
      setValidation(checkPhoneValidation(val as string));
    }
  };

  return renderWithThemeAndI18n(
    <div style={{ fontSize: '16px' }}>
      <div>{validation ? 'match to validation' : 'not match to validation'}</div>
      <TitleEl>Phone input</TitleEl>
      <Input {...props} />
      <TitleEl>Phone input with absolute error</TitleEl>
      <Input {...props} isAbsoluteError errorMessage={<>some error</>} />
      <TitleEl>Phone input with error</TitleEl>
      <Input {...props} errorMessage={<>some error</>} />
      <TitleEl>Phone input disabled</TitleEl>
      <Input {...props} disabled={true} />
      to test if not affected
      <TitleEl>Phone input float label</TitleEl>
      <Input isFloatLabel id="tel" {...props} />
      <TitleEl>Phone input float label with error</TitleEl>
      <Input isFloatLabel id="tel2" {...props} errorMessage={<>some error</>} />
      <TitleEl>Phone input float label disabled</TitleEl>
      <Input disabled id="tel3" {...props} />
    </div>
  );
};

const TextInputDemo = (): React.ReactElement => {
  const [value, setValue] = React.useState(text('value', 'Hello'));

  const props: InputProps = {
    value,
    type: 'text',
    label: 'Hello',
    inputProps: {
      placeholder: 'Example placeholder'
    },
    onChange: (val: ValueType) => {
      setValue(val as string);
      action('Input changed')(val);
    }
  };

  return renderWithThemeAndI18n(
    <div style={{ fontSize: '16px' }}>
      <TitleEl>input label</TitleEl>
      <Input {...props} />

      <TitleEl>input label with absolute error</TitleEl>
      <Input {...props} isAbsoluteError errorMessage={<>some error</>} />

      <TitleEl>input label with error</TitleEl>
      <Input {...props} errorMessage={<>some error</>} />

      <TitleEl>input label disabled</TitleEl>
      <Input {...props} value={null} disabled={true} />
    </div>
  );
};

const TextInputFloatDemo = (): React.ReactElement => {
  const [value, setValue] = React.useState(text('value', 'Hello'));

  const props: InputProps = {
    isFloatLabel: true,
    value,
    type: 'text',
    label: 'Hello',
    required: true,
    onChange: (val: ValueType) => {
      setValue(val as string);
      action('Input changed')(val);
    }
  };

  return renderWithThemeAndI18n(
    <div style={{ fontSize: '16px' }}>
      <TitleEl>input float label</TitleEl>
      <Input {...props} />

      <TitleEl>input float label with absolute error</TitleEl>
      <Input {...props} isAbsoluteError errorMessage={<>some error</>} />

      <TitleEl>input float label with error</TitleEl>
      <Input {...props} errorMessage={<>some error</>} />

      <TitleEl>input float label disabled</TitleEl>
      <Input {...props} value={null} disabled={true} />
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
    onChange: (val: ValueType): void => {
      setRequiredValue(val as string);
      action('Input changed')(val);
    },
    placeholder: 'Full name',
    required: true
  };

  const minLengthProps: InputProps = {
    value: minLengthValue,
    type: 'text',
    label: 'input[type=text] with minimum length 5',
    onChange: (val: ValueType): void => {
      setMinLengthValue(val as string);
      action('Input changed')(val);
    },
    placeholder: 'Full name',
    required: true,
    inputProps: {
      minLength: 5
    }
  };

  const patternProps: InputProps = {
    value: patternValue,
    type: 'tel',
    label: 'input[type=text] with specific format',
    onChange: (val: ValueType): void => {
      setPatternValue(val as string);
      action('Input changed')(val);
    },
    placeholder: 'Phone number in format 123-456',
    required: true
  };

  const emailProps: InputProps = {
    value: emailValue,
    type: 'email',
    label: 'input[type=email]',
    onChange: (val: ValueType): void => {
      setEmailValue(val as string);
      action('Input changed')(val);
    },
    placeholder: 'E-mail address',
    required: true
  };

  const urlProps: InputProps = {
    value: urlValue,
    type: 'url',
    label: 'input[type=url]',
    onChange: (val: ValueType): void => {
      setUrlValue(val as string);
      action('Input changed')(val);
    },
    placeholder: 'Url',
    required: true
  };

  const numberProps: InputProps = {
    value: numberValue,
    type: 'number',
    label: 'input[type=number] with minimum length 5',
    onChange: (val: ValueType): void => {
      setNumberValue(val as string);
      action('Input changed')(val);
    },
    placeholder: 'Zip code',
    required: true,
    inputProps: {
      pattern: '[0-9]{5}'
    }
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
    minLength: 0,
    maxLength: maxVal,
    label: `Range: ${value}/${maxVal}`,
    onChange: (val: ValueType) => {
      setValue(val as number);
      action('Input changed')(val);
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
  .add('phone', () => <PhoneInputDemo />)
  .add('text', () => <TextInputDemo />)
  .add('text floatLabel', () => <TextInputFloatDemo />)
  .add('validation', () => <TextInputValidationDemo />)
  .add('overwrite html5 validation', () => <InputCustomValidation />)
  .add('range', () => <RangeInputDemo />);
