import  styled  from "styled-components";






export const Div = styled.div`

display: flex;
flex-direction: column;
position: relative;
z-index:0;
overflow: hidden;


`



export const Background = styled.div`

background-image: url(${props => props.img});

background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

position: relative;
  overflow: hidden;
  z-index: 0;
  min-height: 50vh;
  
&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7)
}
@media (max-width: 768px) {
  max-width: 100vw;
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: flex-start;
  }


  @media (max-width: 768px) {
    height: 85vh;
  }


  @media (max-width: 438px) {
  
  height: 50em;
  
} 



@media (max-width: 422px) {
  
  height: 52em;
  
} 
  /* @media (max-width: 582px) {
  
    height: 87vh;
    
  }

  @media (max-width: 483px) {
  
  height: 98vh;
  
}

@media (max-width: 437px) {
  
  height: 80em;
  
} */
`


export const Container = styled.div`

display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 100px 0px;

   

@media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 100px;
    
    }
`





export const Info = styled.div`
z-index: 2;
padding: 20px;
width: 50%;
text-align: left;


h1{

font-size:  200%;
font-weight: 700;
color: #ffffff;

@media (max-width: 768px) {
  margin: 20px 20px;
  
}
}



p{

    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top:30px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
  margin: 20px 20px;
  
}
    }


    @media (max-width: 768px) {
      width: 100vw;
    max-height: 30vh;
    padding: 0px 50px;
    
        
      }




`




export const Poster = styled.div`
z-index: 2;
max-width: 400px;
max-height: 600px;
border-radius: 40px;
overflow: hidden; /* Adicionamos um overflow para esconder qualquer conteúdo que ultrapasse o limite do Poster */
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Adicionamos uma sombra para dar destaque ao poster */

img {

    width: 100%;
    height: 100%;
  
    object-fit: cover;
    
}

@media (max-width: 768px) {
    img {

      max-width: 50vw; /* Ajuste o tamanho da imagem para dispositivos menores */
      max-height: 300px;
    }
  }

`

export const ContainerButtons = styled.div`
display: flex;
gap: 20px;
margin-top:30px;
z-index:1;


@media (max-width: 768px) {
  width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}




.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

.swiper {
  min-width: 100%;
  min-height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  min-width: 100%;
  min-height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}


`
