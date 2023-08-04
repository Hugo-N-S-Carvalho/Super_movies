import styled from "styled-components";

export const Background = styled.div`
  min-height: 200%;
  width: 100vw;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  height: 2em;
  width: 5%;
  
  background-color: rgba(0, 0, 0, );

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  font-size: 200%;
  cursor: pointer;
  color:red;
`;

export const Container = styled.div`
  background: #000000;
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  position: fixed;
  padding: 50px;
  max-width: 1200px;
  flex-direction: row-reverse;
    align-items: flex-start;
margin-top: 20%;
  iframe{
    border:none;
    width: 120%;
    max-height: 100%;
  }
`;


