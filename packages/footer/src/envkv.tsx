import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled, { css } from 'styled-components';
import { Link, Text } from '@im-ui/typography';

const ENVKVLink = styled(Link)`
  font-size: 0.75rem;
`;

const ENVKVText = styled(Text)`
  position: relative;
  font-size: 0.75rem;
  padding-left: 1rem;
  line-height: 1.33;
  margin: 1rem 1.5rem;

  ${({ theme }) => css`
    color: ${theme.color.brightGrey};
  `}

  &::before {
    content: '*';
    position: absolute;
    font-size: 1.25rem;
    left: 0rem;
    top: -0.25rem;
  }

  ${({ theme }) => `
    ${theme.mediaQueries.whenMobileL} {
       padding-left: 1.5rem;
    }
  `}
`;

export default () => {
  return (
    <ENVKVText>
      <FormattedMessage
        id="default.footer.finePrint"
        values={{
          link: (
            <ENVKVLink
              target="_blank"
              href="https://www.dat.de/angebote/verlagsprodukte/leitfaden-kraftstoffverbrauch.html"
            >
              www.dat.de/angebote/verlagsprodukte/leitfaden-kraftstoffverbrauch.html
            </ENVKVLink>
          )
        }}
      />
    </ENVKVText>
  );
};
