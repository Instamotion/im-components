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
    margin: 0 0 0.4rem !important;
  }

  > div {
    padding-bottom: 1.5rem;
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
      padding-bottom: 0.2rem;
    }
    > div:nth-last-child {
      padding-bottom: 0;
    }
  }
`;

export const LineBreak = styled.span`
  display: none;
  ${theme.mediaQueries.whenDesktop} {
    display: block;
    height: 0.125rem;
    background: #f3f3f3;
    margin-bottom: 1.5rem;
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
