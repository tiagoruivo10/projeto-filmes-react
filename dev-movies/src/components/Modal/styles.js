import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const Container = styled.div`
  background: #000;
  width: 60%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 50px 20px 20px;
  border-radius: 12px;

  iframe {
    border: none;
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 44px 10px 10px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #ff0000;
  }
`
