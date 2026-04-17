import { useEffect, useState } from 'react'
import { Container, Background, CloseButton } from './styles'
import { getMovieVideos } from '../../services/getData'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function fetchVideos() {
      const results = await getMovieVideos(movieId)

      if (results.length === 0) return

      // Acha o trailer certinho
      let videoDesejado = results.find(
        (video) => video.site === 'YouTube' && video.type === 'Trailer'
      )

      if (!videoDesejado) {
        videoDesejado = results.find((video) => video.site === 'YouTube')
      }

      setMovie(videoDesejado)
    }

    fetchVideos()
  }, [movieId])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>

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
