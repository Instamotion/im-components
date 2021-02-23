import theme from '@im-ui/theme';
import { css } from '@im-ui/utils';
import styled from 'styled-components';
import Label from '@im-ui/label';
const { px2rem } = css;

export const StyledLabel = styled(Label)``;

export const Checkmark = styled.label<{ error: boolean }>`
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  vertical-align: middle;
  margin-left: -${px2rem(20)};
  width: ${px2rem(24)};
  height: ${px2rem(24)};
  margin-right: ${px2rem(3)};
  border: ${px2rem(0.5)} solid ${theme.color.silver};
  border-radius: ${px2rem(4)}
  background-color: ${theme.color.white};

  ::after {
    content: '';
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -63%, 0) rotate(45deg);
    width: ${px2rem(5)};
    height: ${px2rem(15)};
    border: solid #000;
    border-width: 0 3px 3px 0;
  }
`;

export const CheckboxWrapper = styled.div`
  padding-left: ${px2rem(20)};
`;

export const CheckboxInput = styled.input`
  position: absolute;
  display: none;
`;

export const CheckboxControl = styled.span`
  display: inline-flex;
  position: relative;
  user-select: none;
  flex-direction: column;

  & input:checked ~ ${Checkmark}::after {
    border-color: ${theme.color.downy};
  }

  & input:checked ~ ${Checkmark}:after {
    display: block;
  }
`;
