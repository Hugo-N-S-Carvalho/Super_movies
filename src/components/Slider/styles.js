import styled   from "styled-components"







export const Container = styled.div`

background: #000000;
padding: 0 20px;
overflow: auto;
/* height: 300px; */








h2{
    color: #ffffff;
    font-size: 24px;
    margin: 50px 0 20px 20px;
   width: 100vh;
}






.swiper {
  width: 100%;
  padding-top: 50px; 
   padding-bottom: 50px;
}

.swiper-slide {
  background-position: right;
  background-size: cover;
  width: 250px;
  height: 400px;
}

.swiper-slide img {
  display: block;
  width: 10em;
  height: 20em;
}

.swiper-3d {
    perspective: 1000px;



    @media (max-width: 768px) {
  perspective: 200px;
  }
}

&::-webkit-scrollbar {
    height:5px; /* Largura da barra de rolagem */
    width: 5px;
  }


  &::-webkit-scrollbar-track {
    background-color: transparent; /* Fundo transparente */
  }


  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Cor do "thumb" transparente */
    border-radius: 5px; /* Borda arredondada para o "thumb" */
  }
`