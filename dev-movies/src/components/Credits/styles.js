import styled from 'styled-components'

export const Title = styled.h4`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 30px;
  gap: 20px;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }

  p {
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    max-width: 80px;
    margin-top: 6px;
  }

  img {
    height: 200px;
    width: 100px;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    img {
      height: 80px;
      width: 56px;
    }
  }
`
