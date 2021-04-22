import React from 'react';
import styled from 'styled-components';
import ButtonToggle from '@im-ui/button-toggle';
import { IMTheme as theme } from '@im-ui/theme';
import IMDropdown from '@im-ui/dropdown';

export interface IMonthsSelection {
  label: string;
  value: number;
  disabled?: boolean;
}

interface MontlyRateChooserProps {
  items: IMonthsSelection[];
  selected: number;
  onChange: (selected: number) => void;
}

const DesktopWrapper = styled.div`
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: block;
  }
`;

const MobileWrapper = styled.div`
  display: block;
  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

const filterDisabledItems = (items: IMonthsSelection[]) => {
  return items.filter((item: IMonthsSelection) => item.disabled !== true);
};

const MontlyRateChooser: React.FC<MontlyRateChooserProps> = ({ items, selected, onChange }) => {
  const handleDropdownSelect = (e: { target: { value: string } }) => {
    onChange(Number(e.target.value));
  };

  return (
    <>
      <DesktopWrapper>
        <ButtonToggle selected={selected} onChange={onChange} items={items} />
      </DesktopWrapper>
      <MobileWrapper>
        <IMDropdown
          options={filterDisabledItems(items)}
          onChange={handleDropdownSelect}
          selected={String(selected)}
        />
      </MobileWrapper>
    </>
  );
};

export default MontlyRateChooser;
