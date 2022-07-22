import { DefaultOverlayContent } from '../DefaultOverlayContent'
import { ModelSection, ModelsWrapper } from '../Model'
import { Container } from './styles'

const models = [
  'Model One',
  'Model two',
  'Model Three',
  'Model Four',
  'Model Five',
]

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
