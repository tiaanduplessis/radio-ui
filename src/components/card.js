import * as React from 'react'
import PropTypes from 'prop-types'
import { Plus } from '@lessondesk/material-icons'
import styled from 'styled-components'
import theme from './theme'
import { space, layout, flexbox } from 'styled-system'

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

const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 50%;
  width: 3.6em;
  height: 3.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em;
`

const ActionsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 1em;
  display: flex;
  align-item: center;
`

class Card extends React.PureComponent {
  static defaultProps = {
    title: '',
    description: '',
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

  static AddButton = StyledButton

  render() {
    const {
      title,
      description,
      onAdd,
      actions = [],
      viewState,
      renderHeader,
      children,
      ...props
    } = this.props

    return (
      <StyledCard {...props}>
        {typeof renderHeader === 'function' ? (
          renderHeader({ title, description })
        ) : (
          <Card.Header>
            <TitleContainer>
              <Card.Title>{title}</Card.Title>
              <ActionsContainer>
                {actions}
                {onAdd && !viewState && (
                  <Card.AddButton onClick={onAdd}>
                    <Plus color={theme.colors.white}/>
                  </Card.AddButton>
                )}
              </ActionsContainer>
            </TitleContainer>
            {description.length > 0 && !viewState && (
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
