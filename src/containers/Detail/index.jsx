
import { useEffect, useState } from 'react';
import {  Container, VideoBackground } from './styles';
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideo, getMoviesVideos } from '../../services/getData';
import { useParams } from 'react-router-dom';
import { getImages } from '../../utils/getImages';



function Detail(){
    const {id} = useParams()

const [movieVideo, setMovieVideo] = useState()

const [movieMovieById, setMovieById] = useState()

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
{movieMovieById && 
                <VideoBackground>
                    <iframe 
                        src={`https://www.youtube.com/embed/${movieVideo.key}?autoplay=1&mute=1&loop=1&playlist=${movieVideo.key}&controls=0&modestbranding=1&rel=0&showinfo=0`}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        
                    />
                </VideoBackground>
            }
            <Container>
                <div>Detalhe</div>
            </Container>


</>
)





}


export default Detail
