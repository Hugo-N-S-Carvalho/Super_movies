
import { useEffect, useState } from 'react';
import {  Background, Container, Cover, Info,  } from './styles';
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideo, getMoviesVideos } from '../../services/getData';
import { useParams } from 'react-router-dom';
import { getImages } from '../../utils/getImages';
import SpanGenres from '../../components/SpanGenres';
import Credits from '../../components/Credits';



function Detail(){
    const {id} = useParams()

const [movieVideo, setMovieVideo] = useState()

const [movieById, setMovieById] = useState()

const [moviesVideos, setMoviesVideos] = useState()

const [moviesCredits, setMoviesCredits] = useState()

const [moviesSimilar, setMoviesSimilar] = useState()
    useEffect(()=>{
        async function getAllData() {
         
      // console.time('time')
      
      Promise.all([
        getMovieVideo(id),
        getMovieById(id),
        getMoviesVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ]).then(([video, movie, videos, credits, similar]) => {
        
        console.log([video, movie, videos, credits, similar])
            setMovieVideo(video)
          setMovieById(movie)
          setMoviesVideos(videos)
          setMoviesCredits(credits)
          setMoviesSimilar(similar)
      })
      .catch((error) => console.error(error))
      
      
      
          // console.timeEnd('time')
        }
      
      
        
      
      
      
        getAllData();
        
      },[])




return (
<>
 {movieById && 
                <Background image={getImages(movieById.backdrop_path)} /> }
                   
                    
             
            
            <Container>
                
                {movieById && 

                <Cover>
                    <img src={getImages(movieById.poster_path)}/>
                </Cover>}
                <Info>

                    <h2>
                       {movieById?.title} 
                    </h2>
                    {movieById &&
                    <SpanGenres genres={movieById.genres} />}
                    
                    <p>
                        {movieById?.overview}
                    </p>
                    <div>
{movieById &&                       
 <Credits credits={moviesCredits}/>

}

                    </div>
                </Info>
            </Container>
           

</>
)





}


export default Detail
