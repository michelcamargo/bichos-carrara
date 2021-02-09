import React from 'react';

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