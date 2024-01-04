
import { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { Background, Container, ContainerButtons, Div, Info, Poster } from "./styles";
import { Div, MoviesContainer} from "./styles";
// import Button from "../../components/Button";
import Slider from "../../components/Slider";
// import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { getMovieNow,   getMovie, getMoviesPopular,  getTopMovies,  getMoviesUpComing, getDiscoverSeries} from "../../services/getData";

import SliderBackground from "../../components/SliderBackground";
import Card from "../../components/Card";

// import handleShowModal from "../../components/Modal"

function Series() {
  

const customStyle = {
  width: '150px',
  
 
  
  margin: '0 50px',

}


const [discoverSeries, setDiscoverSeries] = useState();


  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState();
  
  // const [movieLists, setMovieLists] = useState();

  const [moviesPopular, setmoviesPopular] = useState();

  const [movieNow, setMovieNow] = useState();
// const navigate = useNavigate()
const [moviesUpComing, setMoviesUpComing] = useState();

const handleShowModal = (selectedMovie) => {
  setMovie(selectedMovie);
  setShowModal(true);
};




useEffect(()=>{
  async function getAllData() {
   

    

    Promise.all([
      getMovie(true), // Para obter um único filme
      getMovie(false), // Para obter um array de filmes
      getTopMovies(),
      getMoviesPopular(),
      getMovieNow(),
     getMoviesUpComing(),
     getDiscoverSeries()
    ]).then(([discoverSeries, movie, movies, topMovies, moviesPopular,movieNow, moviesUpComing ]) => {
        setDiscoverSeries(discoverSeries)
  
        setMovie(movie)
  setMovies(movies)
  console.log('movie:', movie)
  console.log('movies:', movies)
console.log('series:', discoverSeries)
  setTopMovies(topMovies)
   
    setmoviesPopular(moviesPopular)
    setMovieNow(movieNow)
    setMoviesUpComing(moviesUpComing)

    console.log(moviesUpComing)
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
      {discoverSeries && <SliderBackground movies={discoverSeries} handleShowModal={handleShowModal} />}
      </div>

      {movieNow && <Slider info={movieNow} title={'Filmes Em Cartaz'} />}
      {moviesPopular && <Slider info={moviesPopular} title={'Filmes Populares'} />}
     {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
    
     <MoviesContainer>
     {movies && movies.map((filme) => (
  <Card key={filme.id} item={filme} style={customStyle}/>
 
  
))}
      </MoviesContainer>
    
     {/* {movieLists && <Slider info={movieLists} title={'Filmes Em Cartaz'} />} */}
    
     </div>
     </Div>
     
    </>
  );
}

export default Series;
