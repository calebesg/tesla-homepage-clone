import { useTransform } from 'framer-motion'
import useWrapperScroll from '../Model/useWrapperScroll'
import { Container, Header, Footer, Logo, Burger } from './styles'

export function UniqueOverlay() {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with love</a>
          </li>
          <li>
            <a href="#">by Calebe SG</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}
