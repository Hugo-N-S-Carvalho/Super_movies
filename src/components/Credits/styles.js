import styled from "styled-components"

export const Container = styled.div`

  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-around;
  
  margin-top: 30px;
  gap: 10px;
overflow: auto;

  div{
display: flex;
flex-direction: column;
  margin: 10px; // Adiciona um pouco de espaço ao redor de cada item
    text-align: center; // Centraliza o texto dentro de cada item
width: 7rem;
  }


p{
  color: #ffff;
}

img{
  height: 200px;
  border-radius: 30px;
}

`;

export const Title = styled.h4`

font-size: 28;
font-weight: 700;
color: #ffff;




`;
