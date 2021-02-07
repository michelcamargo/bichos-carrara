import React from 'react';
import Form from '../../components/Form';

import { HomeContent, Hero, Subscription, Panel, PanelTitle, PanelSubtitle } from './styles';

import Agostinho from '../../assets/img/agostinho.png';
import Headtitle from '../../assets/img/headtitle.png';

function Landing(){
  return(
    <HomeContent>
      <Hero>
        <img src={Headtitle} alt="Bichos Carrara" style={{height: "25vh"}} />

        <h2>Invista com sabedoria</h2>

        <img src={Agostinho} alt="Agostinho e Ferrari"/>

      </Hero>

      <Subscription>
        <Panel> 
          <PanelTitle>Garanta sua vaga</PanelTitle>
          <PanelSubtitle>Turmas limitadas</PanelSubtitle>
          
          <Form />
        </Panel>
        
      </Subscription>
    </HomeContent>
  );
}

export default Landing;