import  styled  from "styled-components";






export const Div = styled.div`

display: flex;
flex-direction: column;
position: relative;
z-index:0;



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
  min-height:50vh;

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

font-size: 200%;
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

`
export const MoviesContainer = styled.div`
  margin: 10px;
  padding: 100px;
  border: 1px solid black;
  display: flex;
gap: 20px;
flex-wrap: wrap;
justify-content: space-around;
width: 100vw;

`;