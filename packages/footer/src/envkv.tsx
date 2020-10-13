import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled, { css } from 'styled-components';
import { Link, Text } from '@im-ui/typography';
import theme from '@im-ui/theme';

const ENVKVLink = styled(Link)`
  font-size: 0.75rem;
`;

const ENVKVText = styled(Text)`
  position: relative;
  font-size: 0.75rem;
  line-height: 1.33;
  margin: 1rem auto;
  max-width: 80rem;
  padding: 0 2rem 0 2rem;
  color: ${theme.color.brightGrey};

  &::before {
    content: '*';
    position: absolute;
    font-size: 1.25rem;
    left: 1rem;
    top: -0.25rem;
  }

  ${theme.mediaQueries.whenMobileL} {
    padding-left: 2.5rem;
    box-sizing: border-box;
  }
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
