import { useCallback, useRef, useState } from 'react'
import ModelsContext, { CarModel } from '../ModelsContext'

import { ModelOverlay } from '../'

import { Container, OverlayRoot } from './styles'

interface Props {
  children: any
}

export function ModelsWrapper({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state =>
      state.filter(model => model.modelName !== modelName)
    )
  }, [])

  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModels.find(model => model.modelName === modelName) || null
      )
    },
    [registeredModels]
  )

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlayRoot>
          {registeredModels.map(model => (
            <ModelOverlay key={model.modelName} model={model}>
              {model.overlayNode}
            </ModelOverlay>
          ))}
        </OverlayRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  )
}
