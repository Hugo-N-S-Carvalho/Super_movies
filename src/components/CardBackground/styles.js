import  styled  from "styled-components";










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
flex-direction: column-reverse;
position: relative;
justify-content: flex-end;
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
   


@media (max-width: 768px) {
    flex-direction: column-reverse;
    
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
max-width: 13em;
max-height: 20em;
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
    max-width: 13em;
max-height: 20em;
margin-top: 100px;
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

@media (max-width: 433px) {
  width: 100%;
    display: flex;
    flex-direction: row;
    
   
}


`
