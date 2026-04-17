import styled from 'styled-components'

export const Container = styled.div`
  padding: 100px 50px 50px 50px; /* Um espaço no topo para o Header não cobrir tudo */
  min-height: 100vh;
  background-color: #000;
`

export const ContainerGenders = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap; /* Se tiver muito botão, eles descem de linha sozinhos */
  margin-bottom: 40px;

  button {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    padding: 8px 20px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
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
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    border-radius: 15px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  p {
    color: #fff;
    margin-top: 10px;
    font-weight: 600;
  }
`
