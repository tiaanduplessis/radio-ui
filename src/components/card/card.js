import * as React from 'react'
import PropTypes from 'prop-types'

import {
  StyledCard,
  StyledCardHeader,
  StyledCardTitle,
  StyledCardDescription,
  StyledContent,
} from './styles'

class Card extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    padding: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: '',
    description: '',
  }

  static Header = StyledCardHeader

  static Title = StyledCardTitle

  static Description = StyledCardDescription

  static Content = StyledContent

  render() {
    const { title, description, renderHeader, children } = this.props

    return (
      <StyledCard {...props}>
        {typeof renderHeader === 'function' ? (
          renderHeader({ title, description })
        ) : (
          <Card.Header>
            <Card.Title>{title}</Card.Title>
            {description.length > 0 && (
              <Card.Description>{description}</Card.Description>
            )}
          </Card.Header>
        )}
        <Card.Content>{children}</Card.Content>
      </StyledCard>
    )
  }
}

export default Card
