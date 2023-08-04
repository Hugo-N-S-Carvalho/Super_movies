import  styled  from "styled-components";






export const Div = styled.div`

z-index: -90;


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
    background-color: rgba(0, 0, 0, 0.5)
}
@media (max-width: 768px) {
  min-height:60rem;
  }
`


export const Container = styled.div`


display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
max-width: 1500px;
margin: 0 auto;
padding:20px;


@media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 20px;
  }

`





export const Info = styled.div`
z-index: 2;
padding: 20px;
width: 50%;



h1{

font-size: 5rem;
font-weight: 700;
color: #ffffff;
}



p{

    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top:30px;
    margin-bottom: 20px;
    }


    @media (max-width: 768px) {
        width: 100%;
        max-height: 200px;
        text-align: justify;
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
`
