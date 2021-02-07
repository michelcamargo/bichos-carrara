import styled from 'styled-components';

interface Props{
  color?: string;
};

export const FormModel = styled.form<Props>`
  display: flex;
  flex-direction: column;
`;
