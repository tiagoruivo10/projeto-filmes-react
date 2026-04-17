import api from './api'

export async function getTrending() {
  const {
    data: { results }
  } = await api.get('/trending/all/week')

  return results
}

export async function getNowPlaying() {
  const {
    data: { results }
  } = await api.get('/movie/now_playing')

  return results
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getMovieVideos(movieId, type) {
  const {
    data: { results }
  } = await api.get(`/${type}/${movieId}/videos`)

  return results
}

export async function getMovieCredits(movieId, type) {
  const {
    data: { cast }
  } = await api.get(`/${type}/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId, type) {
  const {
    data: { results }
  } = await api.get(`/${type}/${movieId}/similar`)

  return results
}

export async function getMovieById(movieId, type) {
  const { data } = await api.get(`/${type}/${movieId}`)

  return data
}

// 1. Puxa os botões de categorias (Ação, Terror, Romance...)
export async function getGenres(type) {
  const {
    data: { genres }
  } = await api.get(`/genre/${type}/list`)

  return genres
}

// 2. O Motor de Busca: Puxa os títulos filtrados por Gênero e por Página!
export async function getItemsByGenre(type, genreId, page = 1) {
  // Se o usuário clicou num gênero, adicionamos na URL. Se não, busca tudo misturado.
  const genreQuery = genreId ? `&with_genres=${genreId}` : ''

  const {
    data: { results }
  } = await api.get(`/discover/${type}?page=${page}${genreQuery}`)

  return results
}
