# @im-ui/dropdown

Select the value

## How to use:

```
npm install @im-ui/dropdown
```

## API

```ts
type DropdownValue = number | string;

interface DropdownOptionProps {
  value: DropdownValue;
  label: string;
}

type DropdownProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id?: string;
  options: DropdownOptionProps[];
  label?: string;
  disabled?: boolean;
  selected?: string;
  value?: DropdownValue;
  width?: string;
  errorMessage?: JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
```
