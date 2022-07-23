import { DefaultOverlayContent } from '../DefaultOverlayContent'
import { ModelSection, ModelsWrapper } from '../Model'
import { Container } from './styles'

const models = ['Model 3', 'Model S', 'Model X', 'Model Y']

export function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map((modelName, index) => (
            <ModelSection
              key={index}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Only for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  )
}
