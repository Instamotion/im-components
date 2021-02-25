import React from 'react';
import styled from 'styled-components';
import Icon, { AvailableIcons, IconStyled } from '@im-ui/icon';
import TagManager from 'react-gtm-module';
import theme from '@im-ui/theme';

interface Props {
  className?: string;
  text?: JSX.Element | string;
  extra?: JSX.Element;
  path?: string;
  icon?: AvailableIcons;
  track?: string;
  showChildren?: boolean;
  onClick?: () => void;
  linkColor?: string;
}

export const LinkComponent: React.FC<Props> = ({
  className,
  path,
  text,
  extra,
  icon,
  track,
  children,
  showChildren,
  onClick,
  linkColor
}) => {
  const tag = (): void => {
    if (track) {
      TagManager.dataLayer({
        dataLayer: {
          event: track
        }
      });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={className}>
      <a href={path} onClick={() => tag()}>
        {icon && <Icon icon={icon} color="white" />}
        {text}
        {extra}
        {children && (
          <Chevron showChildren={showChildren}>
            <Icon icon={'chevronUp'} color="white" />
          </Chevron>
        )}
      </a>
      {showChildren && <ChildrenItems>{children}</ChildrenItems>}
    </div>
  );
};

const Link = styled(LinkComponent)`
  display: flex;
  position: relative;
  flex-direction: column;
  ${IconStyled} {
    margin-right: 0.5rem;
  }
  a {
    color: ${props => props.linkColor || theme.color.white};
    cursor: pointer;
    user-select: none;
    text-transform: uppercase;
    ${theme.mediaQueries.whenDesktop} {
      font-size: 0.77rem;
      margin-right: 1.5em;
    }
    ${theme.mediaQueries.whenDesktopXL} {
      font-size: 0.875rem;
    }
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
      color: #054256;
    }
  }
`;

const Chevron = styled.div<{ showChildren?: boolean }>`
  float: right;
  margin-left: 0.5rem;
  ${IconStyled} {
    transition: transform 0.3s ease;
    transform: ${({ showChildren }) => (showChildren ? 'rotate(0)' : 'rotate(180deg)')};
    margin-right: 0;
  }
`;

export const ChildrenItems = styled.div`
  margin: 0.5rem 1.5rem;
  ${theme.mediaQueries.whenDesktop} {
    margin: 0;
    position: absolute;
    top: 3.55rem;
    right: 0;
    display: inline-flex;
  }
  ${Link} a {
    text-transform: none;
  }
`;

export default Link;
