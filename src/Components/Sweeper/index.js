import React from 'react';
import SearchBox from '../SearchBox';
import VidSection from '../VidSection';
import InfoSection from '../InfoSection';

import {Container, ContentSection} from "./styles"

function Sweeper () {
  return(
    <Container>
      <SearchBox/>
      <ContentSection>
        <VidSection/>
        <InfoSection/>
      </ContentSection>
    </Container>
  )
}

export default Sweeper;
