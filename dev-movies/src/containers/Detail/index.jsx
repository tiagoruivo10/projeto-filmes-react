import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Slider from '../../components/Slider'
import { Container, Background, Cover, Info, ContainerMovies } from './styles'
import {
  getMovieById,
  getMovieVideos,
  getMovieCredits,
  getMovieSimilar
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import SpanGenres from '../../components/SpanGenres'
import Credits from '../../components/Credits'

function Detail() {
  const { id, type } = useParams()

  const [movie, setMovie] = useState()
  const [videos, setMovieVideos] = useState()
  const [credits, setMovieCredits] = useState()
  const [similar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      try {
        const [movieData, videosData, creditsData, similarData] =
          await Promise.all([
            getMovieById(id, type),
            getMovieVideos(id, type),
            getMovieCredits(id, type),
            getMovieSimilar(id, type)
          ])

        setMovie(movieData)
        setMovieVideos(videosData)
        setMovieCredits(creditsData)
        setMovieSimilar(similarData)
      } catch (error) {
        console.error('Erro ao carregar os dados da página de detalhes:', error)
      }
    }

    getAllData()
  }, [id, type])

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title || movie.name}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={credits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {videos &&
              videos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {similar && <Slider info={similar} title={'Filmes Similares'} />}
        </>
      )}
    </>
  )
}

export default Detail
