import styled from 'styled-components'

export const ArticleContainer = styled.article`
  display: flex;

  max-width: 70rem;
  gap: 3.5rem;

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

export const TitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
`

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ArticleFooter = styled.ul`
  margin-top: 4.125rem;

  display: flex;
  flex-wrap: wrap;

  gap: 1.25rem 0;
`

export const ItemContainer = styled.li`
  display: flex;
  flex: 1 0 50%;

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
