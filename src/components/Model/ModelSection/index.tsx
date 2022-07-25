import { useEffect, useRef } from 'react'
import useModel from '../useModel'
import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
}

export function ModelSection({
  modelName,
  overlayNode,
  children,
  ...props
}: Props) {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      })
    }
  }, [modelName, overlayNode, sectionRef])

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  )
}
