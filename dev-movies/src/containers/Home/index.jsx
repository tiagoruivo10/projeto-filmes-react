import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
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
import {
  getNowPlaying,
  getPopularSeries,
  getTopMovies,
  getTrending
} from '../../services/getData'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [trending, setTrending] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [popularSeries, setPopularSeries] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      try {
        const [trendingData, nowPlayingData, topMoviesData, popularSeriesData] =
          await Promise.all([
            getTrending(),
            getNowPlaying(),
            getTopMovies(),
            getPopularSeries()
          ])

        const randomIndex = Math.floor(Math.random() * trendingData.length)
        setMovie(trendingData[randomIndex])

        // 2. Preenchendo os carrosséis
        setTrending(trendingData)
        setNowPlaying(nowPlayingData)
        setTopMovies(topMoviesData)
        setPopularSeries(popularSeriesData)
      } catch (error) {
        console.error('Erro ao carregar os dados:', error)
      }
    }

    getAllData()
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
                <Button
                  red
                  onClick={() =>
                    navigate(
                      `/detalhe/${movie.media_type || (movie.name ? 'tv' : 'movie')}/${movie.id}`
                    )
                  }
                >
                  Assista Agora
                </Button>
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
