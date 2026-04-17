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
