import * as React from 'react'
import PropTypes from 'prop-types'
import { space, layout, flexbox } from 'styled-system'

import { StyledCardHeader, StyledCardTitle, StyledContent, StyledCard, StyledIndicator, TitleContainer, Container, ActionsContainer  } from './styles'

class Card extends React.PureComponent {
  static defaultProps = {
    title: '',
    actions: []
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    actions: PropTypes.array,
    ...space.propTypes,
    ...layout.propTypes,
    ...flexbox.propTypes,
  }

  static Header = StyledCardHeader
  static Title = StyledCardTitle
  static Content = StyledContent

  render() {
    const {
      title,
      actions,
      renderHeader,
      children,
      ...props
    } = this.props

    return (
      <StyledCard {...props}>
        {typeof renderHeader === 'function' ? (
          renderHeader({ title })
        ) : title && (
          <Card.Header>

            <Container>
              <TitleContainer>
                <StyledIndicator />
                <Card.Title>{title}</Card.Title>
              </TitleContainer>
              <ActionsContainer>
                {actions}
              </ActionsContainer>
            </Container>
          </Card.Header>
        )}
        <Card.Content>{children}</Card.Content>
      </StyledCard>
    )
  }
}

export default Card
