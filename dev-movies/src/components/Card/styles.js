import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 30px;
    width: 300px;
    height: 100%;
    margin-right: 5px;
  }

  h3 {
    color: #ffffff;
    margin-top: 15px;
    font-size: 14px;
    text-align: center;
    max-width: 200px;
  }

  @media (max-width: 768px) {
    img {
      width: 140px;
      border-radius: 14px;
    }

    h3 {
      font-size: 12px;
      max-width: 140px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 120px;
    }
    h3 {
      max-width: 120px;
    }
  }
`
