import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  & + div {
    margin-top: 1.875rem;
  }

  scroll-snap-align: start;
`
