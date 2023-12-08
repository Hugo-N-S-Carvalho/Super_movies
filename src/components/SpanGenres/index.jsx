
import PropTypes from 'prop-types';
import { Container } from './styles';



function SpanGenres({ genres}){

  if (!Array.isArray(genres)) {
    return null;
  }




return (
<Container>
{genres && genres.map( (genre) => (
  <span key = {genre.id}>{genre.name}</span>)) }
</Container>

)





}

SpanGenres.propTypes = {
  genres: PropTypes.array.isRequired  
};

export default SpanGenres
