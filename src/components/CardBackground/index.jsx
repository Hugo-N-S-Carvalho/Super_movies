// CardBackground.js

import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { getImages } from '../../utils/getImages';
import PropTypes from 'prop-types';
import { Background, Container, Info, ContainerButtons, Poster } from './styles'



export default function CardBackground({ movie, handleShowModal  }) {
  const navigate = useNavigate();

  return (
    <Container className="swiper-slide"> {/* Estilos diretamente no elemento */}
      <Background className="container-background" style={{ backgroundImage: `url(${getImages(movie.backdrop_path)})` }}>
        <Info className="info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <ContainerButtons className="container-buttons">
            <Button onClick={() => navigate(`/super_movies/detalhe/${movie.id}`)} red={true}>
              Assista Agora
            </Button>
            <Button onClick={() => handleShowModal(movie)} red= {false} >Assista ao Trailer</Button>
            
          </ContainerButtons>
        </Info>
        <Poster className="poster">
          <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
        </Poster>
      </Background>
    </Container>
  );
}

CardBackground.propTypes = {
  movie: PropTypes.object.isRequired,
  handleShowModal: PropTypes.func.isRequired,
};
