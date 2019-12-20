import React from 'react';
import styled from 'styled-components';
import Icon, { IconWrapper, AvailableIcons } from '@im-ui/icon';
import TagManager, { DataLayerArgs } from 'react-gtm-module';
import theme, { AvailableColors } from '@im-ui/theme';

interface Props {
  className?: string;
  text?: JSX.Element | string;
  path?: string;
  icon?: AvailableIcons;
  track?: string;
  showChildren?: boolean;
  onClick?: () => void;
}

export const LinkComponent: React.FC<Props> = ({
  className,
  path,
  text,
  icon,
  track,
  children,
  showChildren,
  onClick
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
        {icon && <Icon iconName={icon} size={16} color={'white'} />}
        {text}
        {children && <Icon className="chevron" iconName={'chevronUp'} size={14} color={'white'} />}
      </a>
      {showChildren && <ChildrenItems>{children}</ChildrenItems>}
    </div>
  );
};

const Link = styled(LinkComponent)`
  display: flex;
  position: relative;
  flex-direction: column;
  a {
    color: ${AvailableColors.white};
    cursor: pointer;
    user-select: none;
    text-transform: uppercase;
    ${theme.mediaQueries.whenDesktop} {
      margin-right: 1.5rem;
    }
    ${theme.mediaQueries.whenDesktopXL} {
      margin-right: 2rem;
    }
    transition: color 0.2s ease;
    text-decoration: none;
    ${IconWrapper} {
      margin-bottom: 0.1rem;
      margin-right: 0.5rem;
    }
    &:hover {
      color: ${AvailableColors.downy};
    }
    .chevron {
      transition: all 0.3s ease;
      margin-left: 0.5rem;
      margin-right: 0;
      float: right;
      transform: ${({ showChildren }) => (showChildren ? 'rotate(180deg)' : 'rotate(0)')};
    }
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
