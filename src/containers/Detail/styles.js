import styled, { keyframes } from "styled-components";

const scale = keyframes`

from{

    transform: scale(0);
}

to{
    transform: scale(1);
}

`


export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: flex-start;
 height: 100%;
max-width: 1500px;
margin-top: -100px;

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
align-items: center;
    max-width: 100%;
    margin-top: 0;
    margin-top: -100px;
  }

  @media (max-width: 713px) {
    display: flex;
    flex-direction: column;
align-items: center;
margin-top: -250px;
  }

  @media (max-width: 660px){
    display: flex;
    flex-direction: column;
align-items: center;
margin-top: -150px;


    }

`

export const Info = styled.div`
padding: 20px;
width: 50%;
display: flex;
align-items: flex-start;
flex-direction: column;

@media (max-width: 824px) {
      margin-top: 200px;
}

@media (max-width: 713px) {
    
  }

h2{
    font-size: 4.5;
    font-weight: 700;
    color: #ffffff;


    

}

p{
    font-weight: 700;
    font-size: 2vw;
   
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 20px;
    text-justify: inter-word;

@media (max-width: 700px) {
      font-size: 14px;
}

}

`


export const Background = styled.div`
background-image: url(${(props) => props.image});
height: 50vh;
background-position: center;
background-size: cover;
position: relative;
background-repeat: no-repeat;

z-index: -1;



&::before{

content: '';
position: absolute;
top: 0;
left: 0;
width: 100vw;
min-height: 50vh;
background-color: rgba(0, 0, 0, 0.6);
 /* z-index: 1;  */
object-fit: cover;
}

&::after{

content: '';
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 150px;
background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
/* z-index: 99; */
background-repeat: no-repeat;

}




`
export const Cover = styled.div`
 
padding: 20px;
display: flex;
align-items: flex-start;
max-height: auto;
max-width: 350px;



img{

    width: 100%;
    min-width: 150px;
    object-fit: cover;
    border-radius: 50px;
    box-shadow: rgb(100 100 11/20%) 0px 7px 29px 0px;
animation: ${scale} 0.5s linear;


}

@media (max-width: 768px) {
    max-width: 35vw;
max-height: 30vh;

    }



`

export const ContainerMovies = styled.div`
 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
width: 100%;


div{
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 50px 0;
border-radius: 30px;
}


h4{
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
}

iframe{
    border: none;
    border-radius: 30px;
}

`


export const ProviderName = styled.p`
  color: #fff;
  font-size: 12px;
`;




// export const VideoBackground = styled.div`
//   position: relative;
//   max-height: 50vh;
//   min-width: 100vw;
//   object-fit: cover;
  

//   &::before{

//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     min-height: 80vh;
//     background-color: rgba(0, 0, 0, 0.7);
//      z-index: 1; 
//     object-fit: cover;
//   }

//   &::after{

//     content: '';
//     position: absolute;
//     top: calc(100% - 150px);
//     left: 0;
//     width: 100vw;
//     height: 150px;
//     background-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0.3));
//     z-index: 99;
//     background-repeat: no-repeat;
//     background-size: 100% 150px;
//   }
  


//    iframe {
//     position: absolute;
//     top: 0;
//     left: 0;
//     min-width: 100vw;
//     min-height: 50vh;
//     max-height: 80vh;
// aspect-ratio: 16/9;
// object-fit: cover;
// z-index: -100;
//   }
// `; 


