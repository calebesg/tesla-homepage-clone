import styled from 'styled-components'

import model3 from '../../assets/model3.jpg'
import models from '../../assets/models.jpg'
import modelx from '../../assets/modelx.jpg'
import modely from '../../assets/modely.webp'

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${model3});
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(2) {
    background-image: url(${models});
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(3) {
    background-image: url(${modelx});
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(4) {
    background-image: url(${modely});
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(5) {
    background: #a9fdac;
  }
  .colored:nth-child(6) {
    background: #90f29c;
  }
  .colored:nth-child(7) {
    background: #77e68c;
  }
`
