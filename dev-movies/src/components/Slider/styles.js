import styled from 'styled-components'

export const Container = styled.div`
  background: #000;
  padding: 0 16px 30px;

  h2 {
    color: #ffffff;
    font-size: 24px;
    margin: 50px 0 20px 20px;
  }

  .swiper-wrapper {
    display: flex;
  }

  @media (max-width: 768px) {
    padding: 0 10px 20px;

    h2 {
      font-size: 18px;
      margin: 28px 0 12px 4px;
    }
  }
`
