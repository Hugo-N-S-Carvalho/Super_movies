
import { Container, Menu, Li } from './styles';
import {Link, useLocation} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useState } from 'react';


function Header(){


const [changeBackground, setChangeBackground] = useState(false)

  const{pathname} = useLocation()


  window.onscroll = () => {
    
    if(!changeBackground && window.scrollY > 150){
    setChangeBackground(true)
  } 
  
  if(changeBackground && window.scrollY <= 150){
    setChangeBackground(false)
  }
  }

return (

  <Container data-changebackground={changeBackground} >
    <img  src= {Logo} />
 <Menu>
  <Li isactive={pathname === '/' ? "true" : undefined} >
    <Link to='/'>Home</Link>
   
  </Li>

  <Li isactive={pathname.includes('filmes') ? "true" : undefined}>
    <Link to='/filmes'>Filmes</Link>
   
  </Li>

  <Li isactive={pathname.includes('series') ? "true" : undefined}>
    <Link to='/series'>Séries</Link>
   
  </Li>
 </Menu>
  </Container>


)}


export default Header
