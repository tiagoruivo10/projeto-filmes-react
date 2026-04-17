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

export async function getMovieVideos(movieId) {
  try {
    let videoData = null

    try {
      const { data } = await api.get(`/movie/${movieId}/videos`)
      videoData = data.results
    } catch {
      // Se der erro, não faz nada e passa para a próxima
    }

    if (!videoData || videoData.length === 0) {
      try {
        const { data } = await api.get(`/tv/${movieId}/videos`)
        videoData = data.results
      } catch (error) {
        console.error('Erro ao buscar vídeos da série:', error)
      }
    }

    return videoData || []
  } catch (error) {
    console.error('Erro geral ao buscar vídeos:', error)
    return []
  }
}
