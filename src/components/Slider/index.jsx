
import { Container } from './styles';
import {Swiper, SwiperSlide} from 'swiper/react'
import PropTypes from 'prop-types';
// import { getImages } from '../../utils/getImages';
import Card from '../Card';

function Slider({info, title }){

return (


<Container>
  
<h2>{title}</h2>

<Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'} className='swiper' >

{Array.isArray(info) && info.map((item, index) => (

<SwiperSlide key={index}>
    
   <Card item={item}/>

</SwiperSlide>
))}



</Swiper>

</Container>

)





}
Slider.propTypes = {
    info: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };

export default Slider
