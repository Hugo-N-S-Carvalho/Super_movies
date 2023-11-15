import  styled  from "styled-components";










export const Background = styled.div`

background-image: url(${props => props.img});

background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
gap: 10%;
object-fit: cover;
position: relative;
  /* overflow: hidden; */
  z-index: 0;
  min-height: 70vh;
min-width: 100%;
&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    min-width:100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.7)
}


@media (max-width: 720px) {
  max-width: 100vw;
    width: 100vw;
    height: 80vh;
    display: flex;
flex-direction: column-reverse;
position: relative;
justify-content: flex-end;
gap: 2%;
  }


/* @media (max-width: 620px) {
  max-width: 100vw;
    width: 100vw;
    height: 80vh;
    display: flex;
flex-direction: column-reverse;
position: relative;
justify-content: flex-end;
gap: 2%;
  } */


  
`


export const Container = styled.div`

display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    min-width: 100%;
    margin: 0 auto;
    background-size: contain;


@media (max-width: 720px) {
    flex-direction: column-reverse;
    
  }

`





export const Info = styled.div`
z-index: 2;
padding: 20px;
width: 50%;
text-align: left;


h1{

font-size: 2vw;
font-weight: 700;
color: #ffffff;

@media (max-width: 768px) {
  margin: 20px 20px;
  font-size: 1.8vw;
}

@media (max-width: 620px) {
  margin: 20px 20px;
  font-size: 0.8rem;
}


}



p{

    font-size: 0.8rem,;
    font-weight: 500;
    color: #ffffff;
    margin-top:30px;
    margin-bottom: 20px;
    text-align: justify;
  text-justify: inter-word;

    @media (max-width: 1255px) {
  margin: 20px 20px;
  font-size: 0.75rem;
}

@media (max-width: 890px) {
  margin: 20px 20px;
  font-size: 0.70rem;
}
    
    @media (max-width: 768px) {
  margin: 20px 20px;
  font-size: 0.70rem;
}

@media (max-width: 735px) {
  /* margin: 20px 20px; */
  font-size: 0.70rem;
}

@media (max-width: 469px) {
  /* margin: 20px 20px; */
  font-size: 2.4vw;
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
max-width: 20vw;
min-width: 15vw;
max-height: 30em;
border-radius: 40px;
overflow: hidden; /* Adicionamos um overflow para esconder qualquer conteúdo que ultrapasse o limite do Poster */
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Adicionamos uma sombra para dar destaque ao poster */
margin-top: 20px;

img {

    width: 15em;
    height: 25em;
  
    object-fit: cover;
    
}





@media (max-width: 768px) {
    max-width: 50vw;
max-height: 30vh;
margin-top: 100px;
margin-right: 50px;
    }
  
    @media (max-width: 620px) {
    
margin-right: 0px;
    }


`

export const ContainerButtons = styled.div`
display: flex;
gap: 20px;
margin-top:30px;
z-index:1;


@media (max-width: 768px) {
  width: 100%;
    /* display: flex;
   flex-direction: column;
    align-items: center; */
   
}

@media (max-width: 433px) {
  width: 100%;
    /* display: flex;
    flex-direction: row; */
    
   
}


`
