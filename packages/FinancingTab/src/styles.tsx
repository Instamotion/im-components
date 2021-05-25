import styled, { css } from 'styled-components';
import Label from '@im-ui/label';
import { IMTheme as theme } from '@im-ui/theme';

export const Col = styled.div`
  flex: 1;
`;

export const FinancingTabWrap = styled.div`
  flex: 50%;
`;

export const FinancingTabContainer = styled.div`
  display: flex;
  background-color: ${theme.color.white};
`;

export const TabPanel = styled.div`
  padding: 0rem 1.5rem;
  ${theme.mediaQueries.whenDesktop} {
    padding: unset;
  }
`;

export const ToggleWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const CalculatorPane = styled(Col as any)`
  display: flex;
  flex-direction: column;
  justify-content: start;

  label {
    display: block;
    margin: 1.5rem 0 0.4rem !important;
  }

  #schlussrate label span {
    text-transform: none;
    font-weight: normal;
    font-size: 1rem;
  }

  ${theme.mediaQueries.whenDesktop} {
    > div {
      padding-bottom: 2rem;
    }
    > div:first-child {
      padding-bottom: 0.4rem;
    }
    > div:nth-last-child {
      padding-bottom: 0;
    }
  }
`;

export const LineBreak = styled.span`
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    width: 100%;
    display: block;
    height: 0.125rem;
    background: #f3f3f3;
  }
`;

export const AdjustLineBreak = styled(LineBreak as any)<{ top: boolean }>`
  ${theme.mediaQueries.whenDesktop} {
    margin-top: ${props => (props.top ? '1.5' : '1')}rem;
    margin-bottom: ${props => (props.top ? '1' : '0')}rem;
  }
`;

export const StyledLabel = styled(Label)`
  font-family: ${theme.font.bentonBold.family} !important;
  font-weight: bold !important;
  font-size: 1em !important;
  line-height: 1.625rem !important;
  text-transform: capitalize !important;
  color: ${theme.color.typo} !important;
`;

export const StyledLink = styled.span`
  font-family: ${theme.font.bentonBold.family};
  font-weight: ${theme.font.bentonBold.weight};
  font-size: 1em;
  line-height: 1.625rem;
  text-transform: initial;
  color: ${theme.color.typo};
  text-decoration: underline;
  padding-bottom: 2rem;
  cursor: pointer;
  width: fit-content;
  ${theme.mediaQueries.whenDesktop} {
    padding-bottom: 1rem;
  }
`;

export const AdjustFinancingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0rem !important;

  div:nth-child(3) {
    margin-left: auto;
  }
`;

export const AdjustFinancingTitle = styled.p`
  font-size: 1rem;
  line-height: 1rem;
  color: ${theme.color.typography};
  font-family: ${theme.font.bentonMedium.family};
  font-weight: ${theme.font.bentonMedium.weight};
  margin: 0;
`;

export const AdjustFinancingDivider = styled.div`
  display: flex;
  flex: 1;
`;

export const AdjustFinancingLink = styled.span`
  margin-top: 0.5rem;
  font-family: ${theme.font.bentonRegular.family};
  font-weight: ${theme.font.bentonRegular.weight};
  font-size: 0.75rem;
  line-height: 0.7575rem;
  color: ${theme.color.primary};
  cursor: pointer;
`;

export const AdjustFinancingRight = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-left: auto;
  }
`;

export const FinancingCalcPane = styled.div<{ open: boolean }>`
  padding: ${props => (props.open ? '0.5rem' : '0')};
  max-height: ${props => (props.open ? '50rem' : '0')};
  transition: max-height 0.25s ${props => (props.open ? 'ease-in' : 'ease-out')},
    padding 1s ${props => (props.open ? 'ease-in' : 'ease-out')};

  overflow: hidden;
`;
