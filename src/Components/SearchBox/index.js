import React, { useState } from 'react';
import {Container, SearchBar, Title, SubmitBtn, InputSection} from './styles'

function SearchBox () {
  const [key, setKey] = useState('')

  return(
    <Container>
      <Title>Band Sweeper</Title>
      <InputSection>
        <SearchBar type='text' value={key} onChange={(e) => {setKey(e.target.value) }} />
        <SubmitBtn type='submit'>Search</SubmitBtn>
      </InputSection>
    </Container>
  )
}

export default SearchBox;
