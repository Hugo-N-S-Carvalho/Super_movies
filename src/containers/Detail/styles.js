import styled from "styled-components";


export const Container = styled.div`
 
`



export const Background = styled.div`
background-image: url(${(props) => props.image});
height: 50vh;
background-position: center;
background-size: cover;





`


export const VideoBackground = styled.div`
  position: relative;
  min-height: 50vh;
  min-width: 100vw;
  object-fit: cover;
  
  


  iframe {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 50vh;
aspect-ratio: 16/9;

  }
`;