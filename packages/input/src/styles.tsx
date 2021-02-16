import styled from 'styled-components';
import Label from '@im-ui/label';
import theme from '@im-ui/theme';
import Icon from '@im-ui/icon';

type StyledInputType = {
  value: string | number;
  error?: boolean;
  isPhone?: boolean;
};

export const StyledInput = styled.div<StyledInputType>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: ${({ isPhone }) =>
    !isPhone ? `${theme.input.border.width}px solid ${theme.input.border.color}` : 'none'};
  font-family: ${theme.font.sans.family};
  font-size: ${theme.input.font.size}px;
  padding: 1rem 0.5rem;
  color: ${theme.color.oil};
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
  margin: 0;

  &[type='text'],
  &[type='password'],
  &[type='email'],
  &[type='tel'],
  &[type='url'],
  &[type='number'] {
    :focus {
      border-color: ${theme.color.downy};
    }
  }

  ${theme.mediaQueries.whenTablet} {
    padding: ${({ isPhone }) => (isPhone ? '.25rem 0' : '.25rem 1rem')};
  }

  ${props =>
    props.value &&
    `
    border-color: ${theme.color.downy};
  `}

  ${(props: { error?: boolean }) =>
    props.error &&
    `
    border-color: ${theme.color.flamePea};
  `}
`;

export const InputComponentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const InputElements = styled.input<{ type: string }>`
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  height: inherit;
  width: 100%;
  padding: 0;
  ${({ type }) =>
      type === 'tel' &&
      `
    z-index: 1;
    flex: none;
    margin-left: 5rem;
    width: calc(100% - 8rem);
    padding-left: .5rem;
    
    &+svg {
      z-index: 1;
    }
    
    ${theme.mediaQueries.whenTablet} {
      margin-left: 5.5rem;
    }
  `}
    :focus {
    outline: none;
  }
`;

export const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

export const StyledLabel = styled(Label)`
  ${(props: { error?: boolean }) => props.error && `color: ${theme.color.flamePea};`}
`;

export const ErrorMessage = styled.span`
  color: ${theme.color.flamePea};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  z-index: 1;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 2rem;
`;
