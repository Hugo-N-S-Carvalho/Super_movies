import PropTypes from 'prop-types';
import { Container } from './styles';
import { getImages } from '../../utils/getImages';



function Card({ item, style}){

return (

  <Container style={style}>
    
 <img src= {getImages(item.poster_path || item.profile_path || '')} />
        <h3> 
            {item.title || item.name}
        </h3>
    
  </Container>


)}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object,
  };

export default Card
