import { useEffect, useState } from 'react'
import { getGenres, getItemsByGenre } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, ContainerGenders, ContainerGrid, Poster } from './styles'
import Button from '../../components/Button'

function Series() {
  const [genres, setGenres] = useState([])
  const [series, setSeries] = useState([])

  // Nossos estados para controlar a página e o filtro
  const [activeGenre, setActiveGenre] = useState(0)
  const [page, setPage] = useState(1)

  // useEffect 1: Puxa os gêneros de SÉRIES ('tv') quando a tela abre
  useEffect(() => {
    async function loadGenres() {
      const genresData = await getGenres('tv')
      setGenres([{ id: 0, name: 'Todos' }, ...genresData])
    }
    loadGenres()
  }, [])

  // useEffect 2: Puxa as séries sempre que a página ou o filtro mudarem
  useEffect(() => {
    async function loadSeries() {
      // Pedimos 'tv' para a API!
      const seriesData = await getItemsByGenre('tv', activeGenre, page)

      if (page === 1) {
        setSeries(seriesData)
      } else {
        setSeries([...series, ...seriesData])
      }
    }
    loadSeries()
  }, [activeGenre, page])

  // Função do clique no botão
  function handleGenreClick(genreId) {
    if (genreId === activeGenre) return
    setActiveGenre(genreId)
    setPage(1)
  }

  return (
    <Container>
      <ContainerGenders>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={genre.id === activeGenre ? 'active' : ''}
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </ContainerGenders>

      <ContainerGrid>
        {series.map((serie) => (
          <Poster key={serie.id}>
            {/* Nas séries, lembre que usamos serie.name! */}
            <img src={getImages(serie.poster_path)} alt={serie.name} />
            <p>{serie.name}</p>
          </Poster>
        ))}
      </ContainerGrid>

      {/* Botão Carregar Mais */}
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
      >
        <Button red onClick={() => setPage(page + 1)}>
          Carregar Mais Séries
        </Button>
      </div>
    </Container>
  )
}

export default Series
