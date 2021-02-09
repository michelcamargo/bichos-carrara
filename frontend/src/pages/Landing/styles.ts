import styled from 'styled-components';

import BGHero from '../../assets/img/bgbicho.jpg';
import BGSubscription from '../../assets/img/bgbicho.jpg';

export const HomeContent = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
`;

export const Hero = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100vh;
 
  background-image: url(${BGHero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Subscription = styled.section`
  display: flex;
  flex-direction: row;

  height: 100vh;

  align-content: center;
  align-items: center;

  background-image: url(${BGSubscription});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Panel = styled.div`
  background: ${props => props.theme.colors.secondaryAccent};
  opacity: .8;

  padding: 50px;
  margin: 0 auto;

  height: fit-content;

  border-radius: 10px;

  text-align: center;

  backdrop-filter: blur(55px);

  transition-duration: 250ms;

  &:hover{
    opacity: 1;
  }
`;

export const PanelTitle = styled.h3`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
`;

export const PanelSubtitle = styled.h4`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 300;

  margin-bottom: 25px;
`;