import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from { transform: scale(0); }
  to   { transform: scale(1); }
`

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 40px 60px;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 100px 24px 50px;
    gap: 24px;
  }
`

export const Info = styled.div`
  z-index: 2;
  width: 55%;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 15px;
      -webkit-line-clamp: 4;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`

export const Poster = styled.div`
  z-index: 2;

  img {
    width: 325px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }

  @media (max-width: 900px) {
    img {
      width: 180px;
      border-radius: 16px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 140px;
    }
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }
`

export const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
`
