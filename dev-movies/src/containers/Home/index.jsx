import { useState, useEffect } from 'react'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster,
  Wrapper
} from './styles'
import Modal from '../../components/Modal'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [trending, setTrending] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [popularSeries, setPopularSeries] = useState([])

  useEffect(() => {
    async function getTrending() {
      const {
        data: { results }
      } = await api.get('/trending/all/week')

      setTrending(results)
      setMovie(results[0])
    }

    async function getNowPlaying() {
      const {
        data: { results }
      } = await api.get('/movie/now_playing')

      setNowPlaying(results)
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      setTopMovies(results)
    }

    async function getPopularSeries() {
      const {
        data: { results }
      } = await api.get('/tv/popular')

      setPopularSeries(results)
    }

    getTrending()
    getNowPlaying()
    getTopMovies()
    getPopularSeries()
  }, [])

  return (
    <Wrapper>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title || movie.name}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red>Assista Agora</Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-destaque" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}

      {/* Nossos 4 novos carrosséis dinâmicos */}
      {trending.length > 0 && (
        <Slider info={trending} title={'Em Alta na Semana'} />
      )}
      {nowPlaying.length > 0 && (
        <Slider info={nowPlaying} title={'Nos Cinemas'} />
      )}
      {topMovies.length > 0 && <Slider info={topMovies} title={'Top Filmes'} />}
      {popularSeries.length > 0 && (
        <Slider info={popularSeries} title={'Séries Populares'} />
      )}
    </Wrapper>
  )
}

export default Home
