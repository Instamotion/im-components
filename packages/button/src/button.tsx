import styled from 'styled-components';
import theme from '@im-ui/theme';

export const Button = styled.button`
  background-color: ${theme.button.primary.background};
  border: ${`${theme.button.primary.border.width}px solid ${theme.button.primary.border.color}`};
  border-radius: ${`${theme.button.primary.border.radius}px`};

  color: ${theme.button.primary.color};
  font-size: ${`${theme.button.primary.font.size}px`};
  letter-spacing: ${`${theme.button.primary.font.spacing}px`};
  font-weight: ${theme.button.primary.font.weight};

  text-transform: uppercase;
  cursor: pointer;

  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  width: 100%;

  transition: all 0.2s linear;

  &:hover {
    box-shadow: ${theme.button.primary.hover.shadow};
  }

  :disabled {
    border-color: ${theme.color.silver};
    background-color: ${theme.button.primary.background};
    color: ${theme.color.silver};
    cursor: no-drop;
  }
`;

export default Button;
