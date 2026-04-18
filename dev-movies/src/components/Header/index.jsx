import { Container, Menu, Li, HamburgerButton, Overlay } from './styles'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo-movies.png'
import { useState, useEffect } from 'react'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 150
        ? setChangeBackground(true)
        : setChangeBackground(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function fecharMenu() {
    setIsOpen(false)
  }

  return (
    <>
      <Overlay isOpen={isOpen} onClick={fecharMenu} />

      <Container changeBackground={changeBackground}>
        <img src={Logo} alt="logo-dev-movies" />

        <HamburgerButton
          className={isOpen ? 'open' : ''}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>

        <Menu isOpen={isOpen}>
          <Li isActive={pathname === '/'}>
            <Link to="/" onClick={fecharMenu}>
              Home
            </Link>
          </Li>
          <Li isActive={pathname.includes('filmes')}>
            <Link to="/filmes" onClick={fecharMenu}>
              Filmes
            </Link>
          </Li>
          <Li isActive={pathname.includes('series')}>
            <Link to="/series" onClick={fecharMenu}>
              Séries
            </Link>
          </Li>
        </Menu>
      </Container>
    </>
  )
}

export default Header
