import * as React from 'react'
import styled from 'styled-components'

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
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  box-shadow: none;
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.2s;

  &:checked,
  &:indeterminate {
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  }

  &:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  &:active + ${StyledSpan}::before {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  }

  &:checked:active + ${StyledSpan}::before {
    border-color: transparent;
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  }

  &:disabled {
    opacity: 0;
  }

  &:disabled + ${StyledSpan} {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    cursor: initial;
  }

  &:disabled + ${StyledSpan}::before {
    border-color: currentColor;
  }

  &:checked:disabled
    + ${StyledSpan}::before,
    &:indeterminate:disabled
    + ${StyledSpan}::before {
    border-color: transparent;
    background-color: currentColor;
  }
`

const StyledLabel = styled.label`
  z-index: 0;
  position: relative;
  display: inline-block;
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  font-family: 'Roboto', 'Segoe UI', BlinkMacSystemFont, system-ui,
    -apple-system;
  font-size: 16px;
  line-height: 1.5;

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
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    border-radius: 2px;
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
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
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
