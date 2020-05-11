import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';

export interface HowItWorksProps {
  currentStep: number;
  items: string[];
  className?: string;
}

const List = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  counter-reset: item;

  ${theme.mediaQueries.whenTablet} {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`;

const Number = styled.span`
  width: 1rem;
  height: 1rem;
  margin: 0 0.75rem 0 0;
  line-height: 1rem;
  font-size: 0.75rem;
  text-align: center;
  color: ${theme.color.white};
  background-color: ${theme.color.downy};
  border-radius: 100%;
  font-weight: bold;

  ${theme.mediaQueries.whenTablet} {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    /* border: 0.5rem solid ${theme.color.lightGrey}; */
  }
`;

const Line = styled.div<{ linesCount: number; isActive: boolean }>`
  box-sizing: border-box;
  background-color: ${({ isActive }) => (isActive ? theme.color.downy : theme.color.brightGrey)};
  height: 0.55rem;
  width: 0.125rem;
  ${theme.mediaQueries.whenTablet} {
    height: 0.125rem;
    width: calc((100% - 1.5rem) / (${props => props.linesCount}));
  }
`;

const LineBefore = styled(Line)`
  margin: 0 0 0.4rem 0.44rem;
  ${theme.mediaQueries.whenTablet} {
    margin: 0.6875rem 0.5rem 0 0;
    padding-right: 0.5rem;
  }
`;

const LineAfter = styled(Line)`
  margin: 0.4rem 0 0 0.44rem;
  flex-grow: 1;
  ${theme.mediaQueries.whenTablet} {
    margin: 0.6875rem 0 0 0.5rem;
    padding-left: 0.5rem;
  }
`;

const NumberBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* box-sizing: border-box; */
  ${theme.mediaQueries.whenTablet} {
    &:first-child {
      margin-top: 0;
    }
    width: 100%;
    flex-direction: row;
  }
`;
const Text = styled.span`
  width: 70%;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0.75rem 0;
  ${theme.mediaQueries.whenTablet} {
    margin: 0;
  }
`;

const ListItem = styled.li<{ isActive: boolean; length: number; linesCount: number }>`
  display: flex;
  flex-direction: row;
  position: relative;
  color: ${theme.color.brightGrey};

  &:first-child ${NumberBlock} {
    margin-top: 0.95rem;
  }

  ${theme.mediaQueries.whenTablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(
      (
          (
              (100% - (1.5rem * ${props => props.length})) /* total length excluded number blocks */ /
                ((${props => props.length} - 1) * 2) /* divided by number of lines */
            ) * ${props => props.linesCount} /* multiplied by amount of lines in block */
        ) + 1.5rem
    ); /* added size of number */
    font-size: 1.125rem;
    text-align: center;

    &:first-child ${NumberBlock} {
      margin-top: 0;
    }

    &:first-child ${Text} {
      text-align: left;
      width: 100%;
      margin-top: 0;
    }

    &:last-child ${Text} {
      text-align: right;
      width: 100%;
    }
  }
  ${Number} {
    background-color: ${({ isActive }) => (isActive ? theme.color.downy : theme.color.brightGrey)};
  }
`;

interface ItemElementProps {
  item: string;
  index: number;
  currentStep: number;
  total: number;
}

const ItemElement: React.FC<ItemElementProps> = ({ item, index, currentStep, total }) => {
  const linesCount = index === 0 || index === total - 1 ? 1 : 2;
  const isActive = index < currentStep;
  return (
    <ListItem isActive={isActive} length={total} linesCount={linesCount}>
      <NumberBlock>
        {index > 0 && <LineBefore linesCount={linesCount} isActive={isActive} />}
        <Number>{1 + index}</Number>
        {index < total - 1 && <LineAfter linesCount={linesCount} isActive={isActive} />}
      </NumberBlock>
      <Text>{item}</Text>
    </ListItem>
  );
};

const HowItWorksComponent: React.FC<HowItWorksProps> = ({ items, currentStep }) => {
  // const lines = (items.length -1) * 2;
  // const circles = items.length * 1.5rem;
  // const total = lines + circles;
  // console.log(lines)
  // const lineWidth = 'calc((100% - (1.5rem * 4) ) / 6)'

  return (
    <List>
      {items.map((item, index) => (
        <ItemElement
          key={`hiw-${index}`}
          item={item}
          index={index}
          currentStep={currentStep}
          total={items.length}
        ></ItemElement>
      ))}
    </List>
  );
};

const HowItWorks = styled(HowItWorksComponent)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: ${theme.color.brightGrey};
  background: ${theme.color.lightGrey};
  border-top: 1px solid ${theme.color.silver};
  border-bottom: 1px solid ${theme.color.silver};

  ${theme.mediaQueries.whenTablet} {
    padding: 1.5rem 3rem;
  }
`;

export default HowItWorks;
