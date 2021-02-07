import React from 'react';

import { Input1, Selector } from './styles';

interface Props{
  type: string;
  name: string;
  value?: string;
  height?: string;
  width?: string;
  label?: string;
  bgColor?: string;
  fontColor?: string;
  min?: number;
  max?: number;
}

export function Input({type, name, value, label, height, width, bgColor, fontColor}: Props){
  
  const inputClass1 = ["text", "textarea", "email", "number", "password"];
  const inputClass2 = ["checkbox", "radio"];

  if(inputClass1.includes(type)){
    return(
      <Input1 type={type} name={name} value={value} height={height} width={width} placeholder={label} bgColor={bgColor} fontColor={fontColor} />
    )
  }

  else if(inputClass2.includes(type)){
    return (
      <Selector type={type} name={name} value={value} placeholder={label} height={height} width={width} bgColor={bgColor} />
    );
  }

  else{
    return(
      <input type={type} name={name} value={value} height={height} width={width} />
    )
  }

}
