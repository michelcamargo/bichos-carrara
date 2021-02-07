import React from 'react';

import { ContentModel } from './styles';

interface Props{
  children?: React.ReactNode;
}

function DefaultUI({children}: Props){
  return(
    <ContentModel>
      {children}
    </ContentModel>
  )
}

export default DefaultUI;