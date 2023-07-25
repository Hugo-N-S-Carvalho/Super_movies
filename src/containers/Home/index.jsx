import { useState } from 'react';
import api from "../../services/api"

import { Background } from "./styles";



function Home() {
  const [movie, setMovie] = useState()



  async function getMovies() {
    const data = await api.get("/movie/popular")
setMovie(data.data.results[1])
    console.log(movie);
  }

  getMovies();
 
  return (
 
    <>

    {movie && (
 <Background img='https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg'>
      <h1>Home</h1>

      <p>Essa é a Home</p>
    </Background>
  )}
    </>
  
  )
}

export default Home
