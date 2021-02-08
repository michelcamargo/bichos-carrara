import React from 'react';
import { getAllSubscribers } from '../../database/dbHandler';

import { Container, SubscriberList, ListItem } from './styles';

interface Subscriber{
  name: string;
  email: string;
  phone: string;
  message: string;
}

let dataList = getAllSubscribers();
console.log('list:');
console.log(dataList);

export function Final(){
  return (
    <Container>
      <h1>Obrigado por se cadastrar!</h1>

      <SubscriberList>
        <ListItem>a</ListItem>
      </SubscriberList>
    </Container>
  );
}

export default Final;