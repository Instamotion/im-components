import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { css } from '@im-ui/utils';
import theme from '@im-ui/theme';
import { Heading, Link } from '@im-ui/typography';
import Icon from '@im-ui/icon';

const { px2rem } = css;

export interface HowItWorksProps {
  className?: string;
}

const Header = styled(Heading)`
  margin: 0 0 1rem;
  font-weight: bold;

  ${theme.mediaQueries.whenTablet} {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

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

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  position: relative;
  color: ${theme.color.brightGrey};

  ${theme.mediaQueries.whenTablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    font-size: ${px2rem(18)};
    text-align: center;

    &:first-child {
      align-items: flex-start;
    }

    &:last-child {
      align-items: flex-end;
    }
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
  background: ${theme.color.downy};
  border-radius: 100%;

  ${theme.mediaQueries.whenTablet} {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    border: 0.5rem solid ${theme.color.lightGrey};
  }
`;

const Text = styled.span``;

const TooltipText = styled.div`
  display: none;
  position: fixed;
  margin: -0.5rem 0 0 0.25rem;
  padding: 0.5rem;
  background-color: ${theme.color.white};
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1);

  ${theme.mediaQueries.whenTablet} {
    position: absolute;
    top: 5.5rem;
    left: 0;
  }
`;

const TooltipIcon = styled(Icon)`
  color: ${theme.color.niagara};
`;

const Tooltip = styled.span`
  display: inline-block;
  margin-left: 0.5rem;

  &:hover,
  &:active {
    cursor: pointer;

    ${TooltipText} {
      display: inline;
    }
  }
`;

const DesktopDivider = styled.hr`
  display: none;

  ${theme.mediaQueries.whenTablet} {
    display: block;
    color: ${theme.color.downy};
    width: 99%;
    margin-bottom: -2.3rem;
  }
`;

const MobileDivider = styled.span`
  display: inline-block;
  margin: 0.2rem 0.4rem 0.3rem;
  color: ${theme.color.downy};

  ${theme.mediaQueries.whenTablet} {
    display: none;
  }
`;

const MoreLink = styled(Link)`
  align-self: flex-end;
  color: ${theme.color.niagara};
`;

const HowItWorksComponent: React.FC<HowItWorksProps> = ({ className }) => (
  <section className={className}>
    <Header size="xxs">
      <FormattedMessage id="how_it_works.heading" />
    </Header>

    <DesktopDivider />

    <List>
      <ListItem>
        <Number>1</Number>
        <Text>
          <FormattedMessage id="how_it_works.step_1" />
          <Tooltip>
            <TooltipIcon icon={'infoCircle'} />
            <TooltipText>
              <FormattedMessage id="how_it_works.tooltip_1" />
            </TooltipText>
          </Tooltip>
        </Text>
      </ListItem>

      <MobileDivider>|</MobileDivider>

      <ListItem>
        <Number>2</Number>
        <Text>
          <FormattedMessage id="how_it_works.step_2" />
          <Tooltip>
            <TooltipIcon icon={'infoCircle'} />
            <TooltipText>
              <FormattedMessage id="how_it_works.tooltip_2" />
            </TooltipText>
          </Tooltip>
        </Text>
      </ListItem>

      <MobileDivider>|</MobileDivider>

      <ListItem>
        <Number>3</Number>
        <Text>
          <FormattedMessage id="how_it_works.step_3" />
          <Tooltip>
            <TooltipIcon icon={'infoCircle'} />
            <TooltipText>
              <FormattedMessage id="how_it_works.tooltip_3" />
            </TooltipText>
          </Tooltip>
        </Text>
      </ListItem>

      <MobileDivider>|</MobileDivider>

      <ListItem>
        <Number>4</Number>
        <Text>
          <FormattedMessage id="how_it_works.step_4" />
          <Tooltip>
            <TooltipIcon icon={'infoCircle'} />
            <TooltipText>
              <FormattedMessage id="how_it_works.tooltip_4" />
            </TooltipText>
          </Tooltip>
        </Text>
      </ListItem>
    </List>

    <MoreLink href="https://www.instamotion.com/so-funktionierts" target="_blank">
      <FormattedMessage id="how_it_works.more" />
    </MoreLink>
  </section>
);

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
