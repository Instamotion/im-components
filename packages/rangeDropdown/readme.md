# @im-ui/range-dropdown

Select a range within min/max

## How to use:

```
npm install @im-ui/range-dropdown
```

## API

```ts
type Range = [DropdownValue, DropdownValue];

type RangeDropdownProps = {
  className?: string;
  id: string;
  label?: string;
  placeholderFrom: string;
  placeholderTo: string;
  optionsFrom: DropdownOptionProps[];
  optionsTo: DropdownOptionProps[];
  onChange?: (range: Range) => void;
}
```
