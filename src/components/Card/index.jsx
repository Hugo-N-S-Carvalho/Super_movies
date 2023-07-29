import PropTypes from 'prop-types';
import { Container } from './styles';
import { getImages } from '../../utils/getImages';



function Card({ item}){

return (

  <Container>
 <img src= {getImages(item.poster_path || item.profile_path || '')} />
        <h3> 
            {item.title || item.name}
        </h3>
    
  </Container>


)}

Card.propTypes = {
  item: PropTypes.object.isRequired,
    
  };

export default Card
