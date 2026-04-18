import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100px;
  width: 100%;
  z-index: 9999;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: ${(props) =>
    props.changeBackground ? '#000000' : 'transparent'};
  transition: background-color 0.5s ease-in-out;

  img {
    width: 180px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;

    img {
      width: 130px;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 30px;
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background-color: #111;
    padding: 80px 30px 30px;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.8);
    z-index: 9998;
  }
`

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    transition: width 0.5s ease-in-out;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

export const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 9999;
  padding: 5px;

  span {
    display: block;
    width: 28px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  &.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9997;
  }
`
