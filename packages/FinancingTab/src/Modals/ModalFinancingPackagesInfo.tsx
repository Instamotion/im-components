import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import { Classic, EasyGo } from './packages';
import { ModalCloseButton } from '@im-ui/modal';
import Icon from '@im-ui/icon';

interface ModalFinancingPackagesInfoProps {
  closeModal: () => void;
}

export const ModalFinancingPackagesInfo = ({ closeModal }: ModalFinancingPackagesInfoProps) => {
  const Wrapper = styled.div`
    box-sizing: border-box;
    background-color: ${theme.color.white};
    width: 85%;
    padding: 2rem 1.5rem;

    ${theme.mediaQueries.whenDesktop} {
      padding: 4rem 3.81rem 4.125rem 3.5rem;
      border-radius: 0.25rem;
      width: 65.18rem;
    }
  `;

  const Title = styled.div`
    font-size: 1.5rem;
    font-family: ${theme.font.bentonRegular.family};
    font-weight: ${theme.font.bentonRegular.weight};
    color: ${theme.color.typo};

    ${theme.mediaQueries.whenDesktop} {
      font-size: 2.5rem;
    }
  `;

  const PackagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    ${theme.mediaQueries.whenDesktop} {
      flex-direction: row;
      margin-top: 3.25rem;

      div:first-child {
        border-right: solid 1px ${theme.color.primary};
      }
    }
  `;

  const Package = styled.div`
    box-sizing: border-box;
    margin-top: 2rem;

    ${theme.mediaQueries.whenDesktop} {
      padding-right: 2.125rem;
      margin: 0;
    }

    &:first-child {
      margin: 0 0 0.75rem 0;
      ${theme.mediaQueries.whenDesktop} {
        margin: 0 2rem 0 0;
      }
    }
  `;

  const Highlights = styled.ul`
    font-family: ${theme.font.bentonRegular.family};
    font-weight: ${theme.font.bentonRegular.weight};
    color: ${theme.color.typo};
    font-size: 1rem;
    margin: 0.5rem 0 0.5rem 0;
    padding: 0;
    list-style-type: none;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0.625rem 0 0 0;
      text-align: left;
    }
  `;

  const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.color.downy};
    height: 1.25rem;
    min-width: 1.25rem;
    border-radius: 50%;
    margin-right: 1.375rem;

    svg {
      color: ${theme.color.white};
      height: 0.8rem;
    }
  `;

  const ImageWrapper = styled.div`
    margin: 1.5rem auto 0.5rem auto;

    svg {
      width: 100%;
    }
  `;

  const PackageParagraph = styled.p`
    font-family: ${theme.font.bentonRegular.family};
    font-weight: ${theme.font.bentonRegular.weight};
    font-size: 1rem;
    line-height: 1.375rem;
    color: ${theme.color.typo};
    margin: 0.5rem 0 0;
    padding-bottom: 0.5rem;
    text-align: left;
    width: 100%;

    br {
      display: block;
      content: '';
      margin-top: 0.5rem;
    }
  `;

  const PackageTitle = styled.h2`
    font-family: ${theme.font.bentonMedium.family};
    font-weight: ${theme.font.bentonMedium.weight};
    font-size: 1.5rem;
    color: ${theme.color.typo};
    margin: 0 auto 1.5rem auto;
  `;

  const StyledIcon = styled(Icon)`
    height: 2rem;
    fill: none;
  `;

  return (
    <>
      <ModalCloseButton onClick={closeModal}>
        <StyledIcon icon="modalClose" />
      </ModalCloseButton>
      <Wrapper>
        <Title>Unsere Finanzierungsarsten erklärt</Title>
        <PackagesWrapper>
          <Package>
            <PackageTitle>EasyGo</PackageTitle>
            <PackageParagraph>
              Die EasyGo Finanzierung ist ideal für Käufer, die eine niedrige monatliche Belastung
              bevorzugen.
            </PackageParagraph>

            <Highlights>
              <li>
                <IconWrapper>
                  <Icon icon="check" />
                </IconWrapper>
                Kleine Belastung während der Laufzeit
              </li>
              <li>
                <IconWrapper>
                  <Icon icon="check" />
                </IconWrapper>
                Mit/ohne Anzahlung
              </li>
              <li>
                <IconWrapper>
                  <Icon icon="check" />
                </IconWrapper>
                Kreditrückzahlung weit in der Zukunft​
              </li>
            </Highlights>

            <ImageWrapper>
              <EasyGo />
            </ImageWrapper>
            <PackageParagraph>
              Du entscheidest was passiert zum Vertragsende:​ <br />
              <strong>Option 1:</strong> Die Schlussrate zahlen und das Fahrzeug übernehmen. <br />
              <strong>Option 2:</strong> Die Schlussrate zu günstigen Konditionen
              weiterfinanzieren*.
            </PackageParagraph>
          </Package>

          <Package>
            <PackageTitle>Classic</PackageTitle>
            <PackageParagraph>
              Diese Finanzierung bietet dir planbare monatliche Belastungen und niedrige
              Kreditkosten.
            </PackageParagraph>

            <Highlights>
              <li>
                <IconWrapper>
                  <Icon icon="check" />
                </IconWrapper>
                Niedrige Kreditkosten
              </li>
              <li>
                <IconWrapper>
                  <Icon icon="check" />
                </IconWrapper>
                Mit/ohne Anzahlung
              </li>
              <li>
                <IconWrapper>
                  <Icon icon="check" />
                </IconWrapper>
                Kredit nach Laufzeit getilgt
              </li>
            </Highlights>

            <ImageWrapper>
              <Classic />
            </ImageWrapper>
            <PackageParagraph>
              Zum Vertragsende ist die Finanzierung abgeschlossen und das Fahrzeug gehört Dir.
            </PackageParagraph>
          </Package>
        </PackagesWrapper>
      </Wrapper>
    </>
  );
};

export default ModalFinancingPackagesInfo;
