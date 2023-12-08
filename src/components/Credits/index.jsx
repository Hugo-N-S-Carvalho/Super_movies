
import PropTypes from 'prop-types';
import { getImages } from '../../utils/getImages';
import { Container, Title } from './styles';



 function Credits({ credits}){

  if (!Array.isArray(credits)) {
    return null;
  }




return (
<>
  <Title>Créditos</Title>
  {credits && (
<Container>

  {credits.slice(0, 5).map((artist) => (
    <div key={artist.id}>
      <img src={getImages(artist.profile_path)} />
      <p>{artist.original_name}</p>
    </div>
  ))}
</Container>
  )}

</>


)





}

Credits.propTypes = {
  credits: PropTypes.array.isRequired  
};

export default Credits
