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
height: 100%;



img{

    width: 450px;
    border-radius: 50px;
    box-shadow: rgb(100 100 11/20%) 0px 7px 29px 0px;
animation: ${scale} 0.5s linear;


}


`




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


