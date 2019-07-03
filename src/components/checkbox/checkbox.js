import * as React from 'react'
import styled from 'styled-components'

import theme from '../../config/theme'

const { colors, borderRadius, fonts, fontSizes, lineHeight } = theme

const StyledInput = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  z-index: -1;
  position: absolute;
  left: -10px;
  top: -8px;
  display: block;
  margin: 0;
  border-radius: ${borderRadius.full};
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: none;
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.2s;

  &:checked,
  &:indeterminate {
    background-color: ${colors.primary};
  }

  &:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  /* eslint-disable-next-line no-use-before-define */
  &:active + ${StyledSpan}::before {
    border-color: ${colors.primary};
  }

  /* eslint-disable-next-line no-use-before-define */
  &:checked:active + ${StyledSpan}::before {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:disabled {
    opacity: 0;
  }

  /* eslint-disable-next-line no-use-before-define */
  &:disabled + ${StyledSpan} {
    color: rgba(0, 0, 0, 0.3);
    cursor: initial;
  }

  /* eslint-disable-next-line no-use-before-define */
  &:disabled + ${StyledSpan}::before {
    border-color: rgba(0, 0, 0, 0.3);
  }
`

const StyledLabel = styled.label`
  z-index: 0;
  position: relative;
  display: inline-block;
  color: rgba(0, 0, 0, 0.87);
  font-family: ${fonts.OpenSans};
  font-size: ${fontSizes.medium};
  line-height: ${lineHeight.normal};

  &:hover > ${StyledInput} {
    opacity: 0.04;
  }

  &:hover > ${StyledInput}:focus {
    opacity: 0.16;
  }
`

const StyledSpan = styled.span`
  display: inline-block;
  width: 100%;
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    margin: 3px 11px 3px 1px;
    border: solid 2px; /* Safari */
    border-color: rgba(0, 0, 0, 0.6);
    border-radius: ${borderRadius.xsmall};
    width: 18px;
    height: 18px;
    vertical-align: top;
    transition: border-color 0.2s, background-color 0.2s;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }

  ${StyledInput}:checked + &::before,
  ${StyledInput}:indeterminate + &::before {
    border-color: ${colors.primary};
    background-color: ${colors.primary};
  }

  ${StyledInput}:checked + &::after,
  ${StyledInput}:indeterminate + &::after {
    border-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  }

  ${StyledInput}:indeterminate + &::after {
    border-left: none;
    transform: translate(4px, 3px);
  }
`

class Checkbox extends React.PureComponent {
  render() {
    const { children, ...props } = this.props

    return (
      <StyledLabel>
        <StyledInput {...props} />
        <StyledSpan>{children}</StyledSpan>
      </StyledLabel>
    )
  }
}

export default Checkbox
