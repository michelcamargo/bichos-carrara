import React from 'react';
import { Input } from '../Input';

import { FormModel } from './styles';

function Form(){
  return (
    <FormModel>
      <Input type="text" name="user_faccess" label="Seu nome de usuário" bgColor={"#fff"} />
      <Input type="email" name="email_faccess" label="Seu melhor e-mail" bgColor={"#fff"} />
      <Input type="text" name="pwd_faccess" label="Seu principal telefone" bgColor={"#fff"} />
      <Input type="textarea" name="pwd_faccess" label="Qual sua expectativa com o curso?" bgColor={"#fff"} />
    </FormModel>
  );
}

export default Form;