import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import api from '../../services/api'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getVideos() {
      try {
        let videoData = null

        // 1ª Tentativa: Busca como FILME
        try {
          const { data } = await api.get(`/movie/${movieId}/videos`)
          videoData = data.results
        } catch (error) {
          // Se der erro (como 404 Not Found), não faz nada e passa para a próxima tentativa
        }

        // 2ª Tentativa: Se não achou nada, busca como SÉRIE
        if (!videoData || videoData.length === 0) {
          try {
            const { data } = await api.get(`/tv/${movieId}/videos`)
            videoData = data.results
          } catch (error) {
            console.error('Erro ao buscar vídeos da série:', error)
          }
        }

        // Se falhou nos dois, encerra a função
        if (!videoData || videoData.length === 0) {
          console.log('Nenhum vídeo encontrado para este título.')
          return
        }

        // Lógica para achar o Trailer Oficial (mesma que já tínhamos)
        let videoDesejado = videoData.find(
          (video) => video.site === 'YouTube' && video.type === 'Trailer'
        )

        if (!videoDesejado) {
          videoDesejado = videoData.find((video) => video.site === 'YouTube')
        }

        setMovie(videoDesejado)
      } catch (error) {
        console.error('Erro geral no Modal:', error)
      }
    }

    getVideos()
  }, [movieId])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container onClick={(e) => e.stopPropagation()}> 
          {/* O e.stopPropagation() evita que clicar no vídeo feche o modal */}
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal