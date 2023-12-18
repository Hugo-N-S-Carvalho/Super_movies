
import { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { Background, Container, ContainerButtons, Div, Info, Poster } from "./styles";
import { Div} from "./styles";
// import Button from "../../components/Button";
import Slider from "../../components/Slider";
// import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { getMovie, getMoviesPopular, getPopularPerson, getPopularSeries, getTopMovies, getTopSeries, } from "../../services/getData";
import SliderBackground from "../../components/SliderBackground";
// import handleShowModal from "../../components/Modal"

function Home() {

  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();

  const [topMovies, setTopMovies] = useState();

  const [topSeries, setTopSeries] = useState();

  const [popularSeries, setPopularSeries] = useState();

  const [popularPerson, setPopularPerson] = useState();

  const [moviesPopular, setmoviesPopular] = useState();
// const navigate = useNavigate()


const handleShowModal = (selectedMovie) => {
  setMovie(selectedMovie);
  setShowModal(true);
};

useEffect(()=>{
  async function getAllData() {
   


Promise.all([
  getMovie(),
  getTopMovies(),
  getTopSeries(),
  getPopularSeries(),
  getPopularPerson(),
  getMoviesPopular()
]).then(([movie, topMovies, topSeries, popularSeries, popularPerson, moviesPopular]) => {
  setMovie(movie)
    setTopMovies(topMovies)
    setTopSeries(topSeries)
    setPopularSeries(popularSeries)
    setPopularPerson(popularPerson)
    setmoviesPopular(moviesPopular)
})
.catch((error) => console.error(error))



    
  }


  



  getAllData();
  
},[])




  return (
    <>
   <Div >
    
      
      
      {showModal &&  <Modal movieId={movie.id} setShowModal={setShowModal} />}
     
      <div >
      <div>
      {moviesPopular && <SliderBackground movies={moviesPopular} handleShowModal={handleShowModal} />}
      </div>
      {moviesPopular && <Slider info={moviesPopular} title={'Filmes Populares'} />}
     {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
     {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
     {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
     {popularPerson && <Slider info={popularPerson} title={'Atores Populares'} />}
     </div>
     </Div>
    </>
  );
}

export default Home;
