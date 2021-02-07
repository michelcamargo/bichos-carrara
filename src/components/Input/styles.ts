import styled from 'styled-components';

interface Props{
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  bgColor?: string;
  fontColor?: string;
  height?: string;
  width?: string;
  minWidth?: string;
}

export const Input1 = styled.input<Props>`
  height: ${props => props.height || "40px"};

  padding: 5px 10px;
  margin: 5px 10px;

  background-color: ${props => (props.bgColor ? props.bgColor : props.theme.colors.fallbackWhite)};
  color: ${props => (props.color ? props.color : props.theme.colors.textDark)};
  border: none;
  border-radius: 4px;

`;

export const Selector = styled.input<Props>`
  background-color: red;
  color: yellow;
`;
