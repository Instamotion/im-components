import React from 'react';
import styled from 'styled-components';
import Icon, { AvailableIcons, IconStyled } from '@im-ui/icon';
import TagManager from 'react-gtm-module';
import theme, { AvailableColors } from '@im-ui/theme';

interface Props {
  className?: string;
  text?: JSX.Element | string;
  extra?: JSX.Element;
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
  extra,
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

      if (track === 'callFromHeader') {
        TagManager.dataLayer({
          dataLayer: {
            event: 'click',
            schema: 'interaction',
            interaction: {
              category: 'contact',
              action: 'call',
              label: 'from_header',
              variant: undefined
            }
          }
        });
      }
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
    margin-right: 0.5em;
  }
  a {
    color: ${AvailableColors.white};
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
      color: ${AvailableColors.downy};
    }
  }
`;

const Chevron = styled.div<{ showChildren?: boolean }>`
  float: right;
  margin-left: 0.5em;
  ${IconStyled} {
    transition: transform 0.3s ease;
    transform: ${({ showChildren }) => (showChildren ? 'rotate(0)' : 'rotate(180deg)')};
    margin-right: 0;
  }
`;

export const ChildrenItems = styled.div`
  margin: 0.5em 1.5em;
  ${theme.mediaQueries.whenDesktop} {
    margin: 0;
    position: absolute;
    top: 3.55em;
    right: 0;
    display: inline-flex;
  }
  ${Link} a {
    text-transform: none;
  }
`;

export default Link;
