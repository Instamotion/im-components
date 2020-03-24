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

  ${theme.mediaQueries.whenDesktop} {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const List = styled.ol`
  padding: 0;
  list-style: none;
  counter-reset: item;

  ${theme.mediaQueries.whenDesktop} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`;

const ListItem = styled.li`
  position: relative;
  counter-increment: item;
  color: ${theme.color.brightGrey};
  line-height: 1rem;

  ${theme.mediaQueries.whenDesktop} {
    font-size: ${px2rem(18)};
  }

  &:before {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 0.75rem;
    font-size: 0.75rem;
    content: counter(item);
    text-align: center;
    vertical-align: middle;
    color: ${theme.color.white};
    background: ${theme.color.downy};
    border-radius: 100%;

    ${theme.mediaQueries.whenDesktop} {
      display: block;
      margin: 0 auto 1rem;
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
      border: 0.5rem solid ${theme.color.lightGrey};
    }
  }
`;

const DesktopDivider = styled.hr`
  display: none;

  ${theme.mediaQueries.whenDesktop} {
    display: block;
    color: ${theme.color.downy};
    width: 89%;
    margin-bottom: -2.25rem;
  }
`;

const MobileDivider = styled.span`
  display: inline-block;
  margin: 0.3rem 0 0 0.4rem;
  color: ${theme.color.downy};

  ${theme.mediaQueries.whenDesktop} {
    display: none;
  }
`;

const TooltipText = styled.div`
  display: none;
  position: fixed;
  margin: -0.5rem 0 0 0.25rem;
  padding: 0.5rem;
  background-color: ${theme.color.white};
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1);

  ${theme.mediaQueries.whenDesktop} {
    position: absolute;
    width: 150%;
    left: -25%;
    top: 5.5rem;
  }
`;

const TooltipIcon = styled(Icon)`
  color: ${theme.color.niagara};
`;

const Tooltip = styled.span`
  display: inline-block;
  margin-left: 0.5rem;

  &:hover {
    cursor: pointer;

    ${TooltipText} {
      display: inline;
    }
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
        <FormattedMessage id="how_it_works.step_1" />
        <Tooltip>
          <TooltipIcon icon={'infoCircle'} />
          <TooltipText>
            <FormattedMessage id="how_it_works.tooltip_1" />
          </TooltipText>
        </Tooltip>
      </ListItem>

      <MobileDivider>|</MobileDivider>

      <ListItem>
        <FormattedMessage id="how_it_works.step_2" />
        <Tooltip>
          <TooltipIcon icon={'infoCircle'} />
          <TooltipText>
            <FormattedMessage id="how_it_works.tooltip_2" />
          </TooltipText>
        </Tooltip>
      </ListItem>

      <MobileDivider>|</MobileDivider>

      <ListItem>
        <FormattedMessage id="how_it_works.step_3" />
        <Tooltip>
          <TooltipIcon icon={'infoCircle'} />
          <TooltipText>
            <FormattedMessage id="how_it_works.tooltip_3" />
          </TooltipText>
        </Tooltip>
      </ListItem>

      <MobileDivider>|</MobileDivider>

      <ListItem>
        <FormattedMessage id="how_it_works.step_4" />
        <Tooltip>
          <TooltipIcon icon={'infoCircle'} />
          <TooltipText>
            <FormattedMessage id="how_it_works.tooltip_4" />
          </TooltipText>
        </Tooltip>
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

  ${theme.mediaQueries.whenDesktop} {
    padding: 1.5rem 3rem;
  }

  /* todo: delete fonts ijection */
  font-family: Roboto, sans-serif;
`;

export default HowItWorks;
