import { useEffect, useState } from 'react';
import {  Background, Container, ContainerMovies, Cover, Info,  } from './styles';
import { getMovieById, getMovieCredits, getMovieSimilar,  getMoviesVideos } from '../../services/getData';
import { useParams } from 'react-router-dom';
import { getImages } from '../../utils/getImages';
import SpanGenres from '../../components/SpanGenres';
import Credits from '../../components/Credits';
import Slider from '../../components/Slider';

function Detail(){
    const {id} = useParams()

    const [movieById, setMovieById] = useState()
    const [moviesVideos, setMoviesVideos] = useState()
    const [moviesCredits, setMoviesCredits] = useState()
    const [moviesSimilar, setMoviesSimilar] = useState()
    // const [watchMovie, setwatchMovie] = useState();

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMoviesVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),
               
            ]).then(([ movie, videos, credits, similar]) => {
                setMovieById(movie)
                setMoviesVideos(videos)
                setMoviesCredits(credits)
                setMoviesSimilar(similar)
                // setwatchMovie(watchMovie)
                // console.log('Watch Movies:', watchMovie);
            })
            .catch((error) => console.error(error))
        }
        getAllData();
    }, [id])

    return (
        <>
            {movieById && <Background image={getImages(movieById.backdrop_path)} />}
            <Container>
                {movieById && 
                    <Cover>
                        <img src={getImages(movieById.poster_path)}/>
                    </Cover>
                }
                <Info>
                    <h2>{movieById?.title}</h2>
                    {movieById && <SpanGenres genres={movieById.genres} />}
                    <p>{movieById?.overview}</p>
                    <div>
                        {movieById && <Credits credits={moviesCredits}/>}
                    </div>
                   
                </Info>
            </Container>
            <ContainerMovies>
                {moviesVideos && moviesVideos.map( (videos) =>( 
                    <div key={videos.id}>
                        <h4>{videos.name}</h4>
                        <iframe src={`https://www.youtube.com/embed/${videos.key}`}
                            title='Youtube Vídeo Player'
                            height={'500px'}
                            width={'100%'}
                        >
                        </iframe>
                    </div>
                ))}
            </ContainerMovies>
            {moviesSimilar && <Slider info={moviesSimilar} title={'Filmes Similares'} />}
        </>
    )
}

export default Detail;
