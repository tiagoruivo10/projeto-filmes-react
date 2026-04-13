import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '6cb9da70e30dde7536123750bb03fb73',
    language: 'pt-BR',
    page: 1
  }
})

export default api
