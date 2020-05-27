import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';
import Icon from '@im-ui/icon';
import TagManager, { DataLayerArgs } from 'react-gtm-module';

interface Props {
  title?: JSX.Element | string;
  subTitle?: JSX.Element | string;
  linkText?: JSX.Element;
  linkHref: string;
}

const MailContentComponent: React.FC<Props> = ({ title, subTitle, linkText, linkHref }) => {
  const [email, setEmail] = useState('');
  const [subtitle, setSubtitle] = useState(subTitle);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const subscriptionLink = 'https://www.instamotion.com/component/70/data/subscribe';
  const tag = (): void => {
    const dataLayer: DataLayerArgs = {
      dataLayer: {
        event: 'newsletter_suscription'
      }
    };
    TagManager.dataLayer(dataLayer);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch(subscriptionLink, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${encodeURIComponent(email)}`
    })
      .then(res => res.json())
      .then(r => {
        if (!r.success) {
          throw new Error('Error subscribing to newsletter from footer due to response fail');
        }

        tag();
        setSubtitle(r.message);
        setIsSubscribed(true);
      })
      .catch(e => {
        throw new Error('Error subscribing to newsletter from footer');
      });
  };

  return (
    <>
      <FooterMailTitle>{title}</FooterMailTitle>
      {!isSubscribed ? (
        <FooterMailSubTitle>
          {subtitle}
          <a href={linkHref}>{linkText}</a>
        </FooterMailSubTitle>
      ) : (
        <FooterMailSubTitle>{subtitle}</FooterMailSubTitle>
      )}
      {!isSubscribed ? (
        <form
          action={subscriptionLink}
          method="post"
          style={{ display: 'flex' }}
          onSubmit={handleSubmit}
        >
          <FooterMailInput
            placeholder="E-Mail"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <FooterMailSubmit type="submit">
            <Icon icon="paperPlane" color="oil" />
          </FooterMailSubmit>
        </form>
      ) : (
        ''
      )}
    </>
  );
};

const FooterMailInput = styled.input`
  font-size: 1rem;
  width: 100%;
  border: solid 1px ${theme.color.downy};
  padding: 0.75rem;
  border-radius: 0.25rem 0 0 0.25rem;
  border-right: 0;
`;

export const FooterMailSubmit = styled.button`
  cursor: pointer;
  width: 4rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  padding: 0.75rem;
  border: solid 1px ${theme.color.downy};
  background-color: ${theme.color.downy};
`;

export const FooterMailSubmitIcon = styled(Icon)`
  font-size: 1rem;
`;

const FooterMailTitle = styled.div`
  color: ${theme.color.oil};
  white-space: pre-line;
  font-size: 1rem;
  letter-spacing: 0;
  font-weight: bold;
`;

const FooterMailSubTitle = styled.div`
  white-space: pre-line;
  & a {
    color: rgba(50, 51, 48, 0.6);
  }
  font-size: 12px;
  line-height: 1.67;
  font-weight: 500;
  color: rgba(50, 51, 48, 0.6);
  margin-top: 0.3rem;
  margin-bottom: 0.75rem;
`;

export default MailContentComponent;
