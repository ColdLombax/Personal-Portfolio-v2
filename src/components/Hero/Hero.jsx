import React from 'react';
import Button from '../UI/Button';
import {
  HeroContainer, Details, Header, Heading, ButtonsContainer, LostOnline,
} from './HeroElements';

import Info from './Info';

export default function Hero() {
  return (
    <HeroContainer>
      <Details>
        <Header>
          <Heading>John Phillips</Heading>
        </Header>
        <Info />
        <ButtonsContainer>
          <Button />
        </ButtonsContainer>
      </Details>
      <LostOnline />
    </HeroContainer>
  );
}
