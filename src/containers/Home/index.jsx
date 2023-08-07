
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Background, Container, ContainerButtons, Div, Info, Poster } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { getMovie, getMoviesPopular, getPopularPerson, getPopularSeries, getTopMovies, getTopSeries, } from "../../services/getData";


function Home() {

  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();

  const [topMovies, setTopMovies] = useState();

  const [topSeries, setTopSeries] = useState();

  const [popularSeries, setPopularSeries] = useState();

  const [popularPerson, setPopularPerson] = useState();

  const [moviesPopular, setmoviesPopular] = useState();
const navigate = useNavigate()


useEffect(()=>{
  async function getAllData() {
   
// console.time('time')

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



    // console.timeEnd('time')
  }


  



  getAllData();
  
},[])




  return (
    <>
   <Div >
    
      {movie && (
        <Background img= {getImages(movie.backdrop_path)}>
           <Container>
        <Info>
        
          <h1>{movie.title}</h1>

          <p>{movie.overview}</p>
          <ContainerButtons>

            <Button onClick={() => navigate(`/super_movies/detalhe/${movie.id}`) }  red= {true} >Assista Agora</Button>
            <Button onClick={() => setShowModal(true)} red= {false} >Assista ao Trailer</Button>
          </ContainerButtons>
          </Info>
          <Poster>
            <img alt='capa-do-filme' src={getImages(movie.poster_path)}/>
          </Poster>
          </Container>
        </Background>
      )}
      
      {showModal &&  <Modal movieId={movie.id} setShowModal={setShowModal} />}
     
      <div >
      
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
