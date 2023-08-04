import styled from "styled-components"

export const Container = styled.div`
  min-height: 100px;
  width: 100vw;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props['data-changebackground'] ? '#000000' : 'transparent'};
  transition: background-color 1s ease-in-out;
  img {
    width: 25%;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    
    img {
      width: 20%;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    img {
      width: 20%;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;

  @media screen and (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    gap: 10px;
  }
`

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${props => (props.isactive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);

    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
