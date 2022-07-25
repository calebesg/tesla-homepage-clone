import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Heading = styled.div`
  margin-top: 16.5vh;
  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #393c41;
  }

  > h2 {
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #5c5e62;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  margin-bottom: 8.125rem; // 130px

  > button {
    width: 80%;
    background: #1a1720;
    color: white;
    opacity: 0.9;
    transition: opacity 0.2s ease-out;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.3);

    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 0.75rem 2.5rem;
    border-radius: 1.25rem;
    border: none;
    cursor: pointer;

    &.white {
      color: #1a1720;
      background-color: white;
    }

    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;

    > button {
      width: auto;
    }
  }
`
