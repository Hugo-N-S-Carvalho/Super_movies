import styled from "styled-components";

export const Background = styled.div`
  min-height: 200%;
  width: 100vw;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
export const Button = styled.button`
  height: 1em;
  width: 1em;
  z-index: 99999;
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
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: flex-start;

  position: relative;
  padding: 20px;
  max-width: 1200px;
  flex-direction: row-reverse;
    align-items: flex-start;
margin-top: 20%;
  iframe{
    border:none;
    width: 120%;
    max-height: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 40vh;
    width:100vw;
    margin-top: 350px;
    iframe {
      min-width: 100%;
      min-height: 100%;
      height:100%;
      width: 100%;

    }
  }
`;


