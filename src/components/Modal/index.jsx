import PropTypes from 'prop-types';
import { Container, Background } from './styles';
import { useEffect, useState } from 'react';

import { getMovies } from '../../services/getData';

function Modal({movieId, setShowModal}){

  const [movie, setMovie] = useState();

  useEffect(()=>{
    async function getMoviesVideo() {
     setMovie(await getMovies(movieId))
    }


    getMoviesVideo();
  },[movieId])
  
 
  return (
    <Background onClick={() => setShowModal(false)}>   
    {movie && (
       <Container>
      <iframe src={`https://www.youtube.com/embed/${movie.key}`}
      title='Youtube Vídeo Player'
      height={'500px'}
      width={'100%'}
      >
       
        
      </iframe>
    </Container>
)}
    </Background>

  )
}

Modal.propTypes = {
  movieId: PropTypes.number.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default Modal
