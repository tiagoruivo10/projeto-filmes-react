import { useEffect, useState } from 'react'
import { getGenres, getItemsByGenre } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, ContainerGenders, ContainerGrid, Poster } from './styles'
import Button from '../../components/Button'

function Movies() {
  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([])

  const [activeGenre, setActiveGenre] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function loadGenres() {
      const genresData = await getGenres('movie')

      setGenres([{ id: 0, name: 'Todos' }, ...genresData])
    }
    loadGenres()
  }, [])

  useEffect(() => {
    async function loadMovies() {
      const moviesData = await getItemsByGenre('movie', activeGenre, page)

      if (page === 1) {
        setMovies(moviesData)
      } else {
        setMovies([...movies, ...moviesData])
      }
    }
    loadMovies()
  }, [activeGenre, page])

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
        {movies.map((movie) => (
          <Poster key={movie.id}>
            <img src={getImages(movie.poster_path)} alt={movie.title} />
            <p>{movie.title}</p>
          </Poster>
        ))}
      </ContainerGrid>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
      >
        <Button red onClick={() => setPage(page + 1)}>
           Carregar Mais Filmes
         </Button>
      </div>
    </Container>
  )
}

export default Movies
