// SliderBackground.js

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CardBackground from '../../components/CardBackground'; // Importe o CardBackground
import { useRef } from 'react';
import PropTypes from 'prop-types';

export default function SliderBackground({ movies, handleShowModal   }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) { // Adicione essa verificação
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }};
  
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <CardBackground movie={movie} handleShowModal={handleShowModal} /> {/* Renderiza o CardBackground para cada filme */}
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
}
SliderBackground.propTypes = {
  movies: PropTypes.array.isRequired,
  handleShowModal:PropTypes.func.isRequired,
};