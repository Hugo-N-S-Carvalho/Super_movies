
import { useState, useEffect } from "react";
import api from "../../services/api";

import { Background, Container, ContainerButtons, Info, Poster } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";

function Home() {
  const [movie, setMovie] = useState();

  const [topMovies, setTopMovies] = useState();

  const [topSeries, setTopSeries] = useState();

  const [popularSeries, setPopularSeries] = useState();

  const [popularPerson, setPopularPerson] = useState();

useEffect(()=>{
  async function getMovies() {
    const {data: {results}} = await api.get("/movie/popular");
    setMovie(results[0]);
   
  }


  async function getTopMovies() {
    const {data: {results}} = await api.get("/movie/top_rated");
    setTopMovies(results);

    console.log(results)
   
  }



  async function getTopSeries() {
    const {data: {results}} = await api.get("/tv/top_rated");
    setTopSeries(results);

    console.log(results)
   
  }

  
  async function getPopularSeries() {
    const {data: {results}} = await api.get("/tv/popular");
    setPopularSeries(results);

    console.log(results)
   
  }



  async function getPopularPerson() {
    const {data: {results}} = await api.get("/person/popular");
    setPopularPerson(results);

    console.log(results)
   
  }



  getMovies();
  getTopMovies()
  getTopSeries()
  getPopularSeries()
  getPopularPerson()
},[])

console.log(topMovies)
  console.log(movie)

 

 
  return (
    <>
      {movie && (
        <Background img= {getImages(movie.backdrop_path)}>
        <Container>
        <Info>
        
          <h1>{movie.title}</h1>

          <p>{movie.overview}</p>
          <ContainerButtons>

            <Button red= {true} >Assista Agora</Button>
            <Button red= {false}>Assista ao Trailer</Button>
          </ContainerButtons>
          </Info>
          <Poster>
            <img alt='capa-do-filme' src={getImages(movie.poster_path)}/>
          </Poster>
          </Container>
        </Background>
      )}
     {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
     {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
     {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
     {popularPerson && <Slider info={popularPerson} title={'Atores Populares'} />}
    </>
  );
}

export default Home;
