import React from 'react';

// import { Input1, Selector } from './styles';

// interface Props{
//   type: string;
//   name: string;
//   value?: string;
//   height?: string;
//   width?: string;
//   label?: string;
//   bgColor?: string;
//   fontColor?: string;
//   min?: number;
//   max?: number;
//   onChange?: void;
//   onSubmit?: void;
//   className?: string;
// }

// export function Input({type, name, value, label, height, width, bgColor, fontColor}: Props){
  
//   const inputClass1 = ["text", "textarea", "email", "number", "password"];
//   const inputClass2 = ["checkbox", "radio"];

//   if(inputClass1.includes(type)){
//     return(
//       <Input1 type={type} name={name} value={value} height={height} width={width} placeholder={label} bgColor={bgColor} fontColor={fontColor} onChange={e => setInput(e.target.value)}/>
//     )
//   }

//   else if(inputClass2.includes(type)){
//     return (
//       <Selector type={type} name={name} value={value} placeholder={label} height={height} width={width} bgColor={bgColor} />
//     );
//   }

//   else{
//     return(
//       <input type={type} name={name} value={value} height={height} width={width} />
//     )
//   }

// }


interface Props{
  name: string,
  type: string,
  placeholder?: string;
  id?: string;
  onChange?: void;
}

export function Input({name, type, placeholder}: Props){

  return(
    <input type={type} name={name} placeholder={placeholder} />
  );

}