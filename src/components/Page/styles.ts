import styled from 'styled-components'

import model3 from '../../assets/model3.jpg'
import models from '../../assets/models.jpg'
import modelx from '../../assets/modelx.jpg'
import modely from '../../assets/modely.webp'

import model3M from '../../assets/model3-mobile.jpg'
import modelsM from '../../assets/models-mobile.jpg'
import modelxM from '../../assets/modelx-mobile.jpg'
import modelyM from '../../assets/modely-mobile.jpg'

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

  @media (max-width: 600px) {
    .colored:nth-child(1) {
      background-image: url(${model3M});
      background-position: bottom left;
    }
    .colored:nth-child(2) {
      background-image: url(${modelsM});
    }
    .colored:nth-child(3) {
      background-image: url(${modelxM});
    }
    .colored:nth-child(4) {
      background-image: url(${modelyM});
      background-position: center right;
    }
  }
`
