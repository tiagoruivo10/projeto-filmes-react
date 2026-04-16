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
`

export const Container = styled.div`
  background: #000;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;
  position: relative;

  iframe {
    border: none;
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
