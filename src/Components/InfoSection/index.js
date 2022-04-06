import React, {useState, useEffect} from 'react';

import {Container, ImgBlock, Img, AttractionName, SocialMedia, TicketmasterLink, 
  Link, SocialTitle} from './styles';

function InfoSection (attractionInfo) {

  const [attraction, setAttraction] = useState([]);

  useEffect(() => {
    setAttraction(attractionInfo.attraction)
  }, [attractionInfo]);

  return(
    <Container show={attraction.name? true : false}>
      <ImgBlock> 
       { attraction.images ? 
        <Img src={attraction.images[0].url} width={attraction.images[0].width} height={attraction.images[0].height} alt="img"/>
        :
        <></>
        }
      </ImgBlock>
      <AttractionName>{attraction.name}</AttractionName>
      {
        attraction.externalLinks ? 
        <SocialMedia>
          <SocialTitle>Social Title</SocialTitle>
          <Link href={attraction.externalLinks.instagram[0].url} target="_blank" rel="noreferrer" >Instagram</Link>
          <Link href={attraction.externalLinks.homepage[0].url} target="_blank" rel="noreferrer" >Homepage</Link>
          <Link href={attraction.externalLinks.spotify[0].url} target="_blank" rel="noreferrer" >Spotify</Link>
        </SocialMedia>
        :
        <SocialMedia>
          {/* <span>TicketMaster does not have the Social Media for this attraction</span> */}
        </SocialMedia>
      }
      {
        !attraction.url ? 
        <></>
        :
        <TicketmasterLink>
          <span>Feel free to check in TicketMaster Page</span>
          <Link href={attraction.url} target="_blank" rel="noreferrer">{attraction.name} at TicketMaster</Link>
        </TicketmasterLink>
      }
    </Container>
  )
}

export default InfoSection;
