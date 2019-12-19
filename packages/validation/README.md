# @im-ui/validation

This library can be used to validate an object (your state) against the set of rules.

```
import useValidation, { validators } from '@im-ui/validation';

...

type State = {
  name: string;
  email: string;
  agree: boolean;
};

...

const [form, setForm] = useState<State>({ name: '', email: '', agree: false });

...

const [errors, handleChange, handleBlur, runAllValidators] = useValidation<State>({
  validations: {
    name: [validators.validateRequired, validators.validateName],
    email: [validators.validateRequired, validators.validateEmail],
    agree: [validators.validateIsTrue]
  },
  onStateChange: (key, value) => {
    setForm({
      ...form,
      [key]: value
    });
  }
});

...

<label htmlFor="email-inp">Email:</label>
<input
  id="email-inp"
  value={form.email}
  onChange={e => handleChange('email', e.target.value)}
  onBlur={e => handleBlur('email', e.target.value)}
/>
<div>{errors.email}</div>
```
