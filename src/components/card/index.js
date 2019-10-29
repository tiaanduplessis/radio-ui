import * as React from 'react'
import PropTypes from 'prop-types'
import { space, layout, flexbox } from 'styled-system'
import Plus from '@lessondesk/material-icons/dist/Plus'

import {
  StyledCardHeader,
  StyledCardTitle,
  StyledContent,
  StyledCard,
  StyledIndicator,
  StyledCardDivider,
  TitleContainer,
  Container,
  ActionsContainer,
  StyledCardDescription,
  StyledButton
} from './styles'

class Card extends React.PureComponent {
  static defaultProps = {
    title: '',
    actions: [],
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    actions: PropTypes.array,
    ...space.propTypes,
    ...layout.propTypes,
    ...flexbox.propTypes,
  }

  render() {
    const { title, actions, renderHeader, viewState, children, onAdd, description, showDivider, ...props } = this.props

    return (
      <StyledCard {...props}>
        {typeof renderHeader === 'function'
          ? renderHeader({ title })
          : title && (
            <StyledCardHeader>
              <Container>
                <TitleContainer>
                  <StyledIndicator />
                  <StyledCardTitle>{title}</StyledCardTitle>
                </TitleContainer>
                {description && !viewState && (
                  <StyledCardDescription>{description}</StyledCardDescription>
                )}
                <ActionsContainer>
                  {actions}
                  {onAdd && !viewState && (
                    <StyledButton onClick={onAdd} type='button'>
                      <Plus />
                    </StyledButton>
                  )}
                </ActionsContainer>
              </Container>
              <StyledCardDivider showDivider={showDivider} />
            </StyledCardHeader>
          )}
        <StyledContent>{children}</StyledContent>
      </StyledCard>
    )
  }
}

export default Card

