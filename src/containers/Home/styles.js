import  styled  from "styled-components";


export const Background = styled.div`

background-image: url(${props => props.img});
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
 

&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5)
}
`


export const Container = styled.div`


display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
max-width: 1500px;

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
    margin-botton: 20px;
    }


    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
      }




`




export const Poster = styled.div`
z-index: 2;
img {

    width: 400px;
    border-radius: 40px;
    
}

@media (max-width: 768px) {
    img {
      width: 250px; /* Ajuste o tamanho da imagem para dispositivos menores */
    }
  }

`


