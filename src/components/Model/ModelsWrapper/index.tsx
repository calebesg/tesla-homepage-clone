import { Container } from './styles'

interface Props {
  children: any
}

export function ModelsWrapper({ children }: Props) {
  return <Container>{children}</Container>
}
