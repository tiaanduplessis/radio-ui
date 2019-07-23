import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, flexbox } from 'styled-system'

import theme from './theme'

const StyledCard = styled.section`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.large};
  margin: 1em 0;
  padding: 1.5em;
  box-shadow: ${props => props.theme.shadows[0]};
  flex: 1;
  ${space}
  ${layout}
  ${flexbox}
`

const StyledCardHeader = styled.header`
  position: relative;
`

const StyledCardTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fonts[0]};
  border-left: 5px solid ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.extrabold};
  padding: 0 0.5em;
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.letterSpacings.tight};
  color: ${props => props.theme.colors.gray[4]};
  margin: 1em;
`

const StyledCardDescription = styled.p`
  margin: 1em 1em 2em;
  padding-bottom: 2em;
  border-bottom: 3px solid ${props => props.theme.colors.gray[0]};
  color: ${props => props.theme.colors.gray[3]};
  font-weight: ${props => props.theme.fontWeights.thin};
  font-size: ${props => props.theme.fontSizes.small};
  padding-right: 5em;
`

const StyledContent = styled.div`
  margin: 1em;
`

class Card extends React.PureComponent {
  static defaultProps = {
    title: '',
    description: '',
    theme: theme,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ...space.propTypes,
    ...layout.propTypes,
    ...flexbox.propTypes,
  }

  static Header = StyledCardHeader

  static Title = StyledCardTitle

  static Description = StyledCardDescription

  static Content = StyledContent

  render() {
    const {
      title,
      description,
      renderHeader,
      children,
      theme,
      ...props
    } = this.props

    return (
      <StyledCard  {...props}>
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
