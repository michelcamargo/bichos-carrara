import React from 'react';

// import { Input } from '../Input';

import { FormModel } from './styles';

interface FormProps{
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface FieldProps{
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({children}: FormProps){
  return (
    <FormModel id="subForm">
      {children}
    </FormModel>
  );
}

export function FormField({ label, type, name ,value, onChange }: FieldProps){
  return(
    <label>
      {label && label}
      <input 
        type={type || 'text'} 
        name={name} // Utilizado como chave em setValue
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </label>
  )
}



// const Form = (props: any) => {
//   const [subUsername, setSubUsername] = useState('');
//   const [subEmail, setSubEmail] = useState('');
//   const [subPhoneNumber, setSubPhoneNumber] = useState('');
//   const [subMessage, setSubMessage] = useState('');



//   const handleChangeUsername = (e: { target: { value: React.SetStateAction<string> } }) => {
//     setSubUsername(e.target.value);
//   };

//   const handleChangeEmail = (e: { target: { value: React.SetStateAction<string> } }) => {
//     setSubEmail(e.target.value);
//   };

//   const handleChangePhoneNumber = (e: { target: { value: React.SetStateAction<string> } }) => {
//     setSubPhoneNumber(e.target.value);
//   };

//   const handleChangeMessage = (e: { target: { value: React.SetStateAction<string> } }) => {
//     setSubMessage(e.target.value);
//   };


//   const handleSubmit = (event: { preventDefault: () => void }) => {
//     alert(subUsername)
//     event.preventDefault()
//   }

//   return (
//     <FormModel id="subForm" onSubmit={handleSubmit}>
//       <Input id="in_username" type="text" name="input_username" placeholder="Seu nome de usuário" onChange={e => handleChangeUsername(e.target.value)} />
//       <Input id="in_email" type="email" name="input_email" placeholder="Seu melhor e-mail" />
//       <Input id="in_phone" type="text" name="input_phone" placeholder="Seu telefone principal" />
//       <Input id="in_details" type="textarea" name="input_details" placeholder="Quais são suas expectativas com o curso?" />
        
//       <br />
//       <input id="submiter" type="submit" value="Cadastrar-se" style={{ height: "35px", width: "150px", margin: "0 auto" }} />
//     </FormModel>
//   );

// }

// export default Form;


