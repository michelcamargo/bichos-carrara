/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import Form, { FormField } from '../../components/Form';

import { HomeContent, Hero, Subscription, Panel, PanelTitle, PanelSubtitle } from './styles';

import Agostinho from '../../assets/img/agostinho.png';
import Headtitle from '../../assets/img/headtitle.png';
import { setSubscriber, getAllSubscribers } from '../../database/dbHandler';
import { Link } from 'react-router-dom';

interface Subscriber{
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: Subscriber = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function Landing(){

  // const [subscribers, setSubscribers] = useState<Subscriber[]>([]); // Array novo, não utilizar valor já existente em useState
  const [subValues, setSubValues] = useState(initialValues);

  // Set values dinâmico
  function setValue(chave: string, valor: any){ 
    //chave: nome, descricao, etc...
    setSubValues({
      ...subValues,
      [chave]: valor, // Chave assume valor dinâmico para chave no momento de execução (similar ao array)
    })
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>){
    console.log('[e.target]', event.target);
    const { name , value } = event.target;

    setValue(name, value);
  }

  function formSubmitHandler(event: React.FormEvent<HTMLInputElement>){
    event.preventDefault();
    console.log(`${subValues.email} cadastrado.`);

    setSubscriber(subValues);

    // Destructuring de array []
    // setSubscribers( [
    //   ...subscribers, // Array com itens existentes
    //   subValues // Inserir novo item no array da função setSubscribers
    // ] );

    setSubValues(initialValues); // Reset values

    return false;
  }

  return(
    <HomeContent>
      <Hero>
        <img src={Headtitle} alt="Bichos Carrara" style={{height: "25vh"}} />

        {/* <h2>Invista com sabedoria</h2> */}

        <img src={Agostinho} alt="Agostinho e Ferrari"/>

      </Hero>

      <Subscription>
        <Panel> 
          <PanelTitle>Garanta sua vaga</PanelTitle>
          <PanelSubtitle>Turmas limitadas</PanelSubtitle>
          
          <Form onSubmit={(event: React.FormEvent<HTMLInputElement>) => formSubmitHandler(event)}>
            
            <FormField
              label="Nome"
              type="text"
              name="name"
              value={subValues.name}
              onChange={changeHandler}
            />

            <FormField
              label="E-mail"
              type="text"
              name="email"
              value={subValues.email}
              onChange={changeHandler}
            />

            <FormField
              label="Telefone"
              type="text"
              name="phone"
              value={subValues.phone}
              onChange={changeHandler}
            />

            <FormField
              label="Descrição"
              type="text"
              name="message"
              value={subValues.message}
              onChange={changeHandler}
            />

            <FormField 
              type="submit" 
              value="Cadastrar-se"
              name="subscribe"
            />

          </Form>

            <Link to="/done">
              Final
            </Link>


        </Panel>
        
      </Subscription>
    </HomeContent>
  );
}

export default Landing;