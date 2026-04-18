import styled from 'styled-components'

export const Container = styled.div`
  padding: 100px 50px 50px 50px;
  min-height: 100vh;
  background-color: #000;

  @media (max-width: 768px) {
    padding: 80px 16px 40px;
  }
`

export const ContainerGenders = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  button {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    padding: 8px 20px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: 0.3s;

    &:hover {
      background-color: #ff0000;
      border-color: #ff0000;
    }

    &.active {
      background-color: #ff0000;
      border-color: #ff0000;
    }
  }

  @media (max-width: 480px) {
    gap: 8px;

    button {
      padding: 6px 14px;
      font-size: 12px;
    }
  }
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 12px;
  }
`

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    border-radius: 12px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  p {
    color: #fff;
    margin-top: 8px;
    font-weight: 600;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    p {
      font-size: 11px;
    }
  }
`
