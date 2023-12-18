
import { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { Background, Container, ContainerButtons, Div, Info, Poster } from "./styles";
import { Div} from "./styles";
// import Button from "../../components/Button";
import Slider from "../../components/Slider";
// import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { getMovieNow,   getMovie, getMoviesPopular,  getTopMovies} from "../../services/getData";

import SliderBackground from "../../components/SliderBackground";
// import handleShowModal from "../../components/Modal"

function Home() {
  
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();

  const [topMovies, setTopMovies] = useState();
  
  // const [movieLists, setMovieLists] = useState();

  const [moviesPopular, setmoviesPopular] = useState();

  const [movieNow, setMovieNow] = useState();
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
      getMoviesPopular(),
      getMovieNow(),
     
    ]).then(([movie, topMovies, moviesPopular,movieNow, ]) => {
  setMovie(movie)
    setTopMovies(topMovies)
   
    setmoviesPopular(moviesPopular)
    setMovieNow(movieNow)

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
      {movieNow && <SliderBackground movies={movieNow} handleShowModal={handleShowModal} />}
      </div>

      {movieNow && <Slider info={movieNow} title={'Filmes Em Cartaz'} />}
      {moviesPopular && <Slider info={moviesPopular} title={'Filmes Populares'} />}
     {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
     
     
    
     {/* {movieLists && <Slider info={movieLists} title={'Filmes Em Cartaz'} />} */}
    
     </div>
     </Div>
     
    </>
  );
}

export default Home;
