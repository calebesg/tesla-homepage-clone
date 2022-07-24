import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`

export const OverlayRoot = styled.div`
  position: sticky;
  inset: 0;
`

export const ModelOverlay = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  margin-top: -100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`
