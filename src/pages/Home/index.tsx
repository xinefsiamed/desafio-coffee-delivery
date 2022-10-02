import { HeadAndTitle } from './components/HeadAndTitle'
import { ContentContainer, HeadlineContainer } from './styles'

export function Home() {
  return (
    <ContentContainer>
      <HeadlineContainer>
        <HeadAndTitle />
      </HeadlineContainer>
    </ContentContainer>
  )
}
