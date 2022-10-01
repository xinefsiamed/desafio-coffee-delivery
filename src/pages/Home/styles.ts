import styled from 'styled-components'

export const ContentContainer = styled.main`
  max-width: 70rem;

  display: flex;
  flex-direction: column;
`

export const HeadlineContainer = styled.section`
  display: flex;

  gap: 3.5rem;
  margin-top: 5.8rem;
`

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    text-align: left;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto';
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;

    font-stretch: 100;
  }
`

export const ArticleFooter = styled.footer`
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;

  margin-top: 4.125rem;
  gap: 1.25rem;
`

export const SpecificationItem = styled.div``

export const ItemContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 0.75rem;
`

const BACKGROUND_ITEM_COLOR = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IITemImageContainerProps {
  background_item_color: keyof typeof BACKGROUND_ITEM_COLOR
}

export const ItemImageContainer = styled.div<IITemImageContainerProps>`
  display: flex;

  width: 2rem;
  height: 2rem;

  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${(props) =>
    props.theme[BACKGROUND_ITEM_COLOR[props.background_item_color]]};

  svg {
    color: ${(props) => props.theme.white};
  }
`
