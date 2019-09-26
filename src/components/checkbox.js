/* eslint no-use-before-define: 0 */
import * as React from 'react'
import styled, { css } from 'styled-components'
import { space, layout } from 'styled-system'
import { byTheme } from 'styled-funcs'

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
  border-radius: ${byTheme('radii.full')};
  width: 40px;
  height: 40px;
  box-shadow: none;
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.2s;

  &:checked,
  &:indeterminate {
    background-color: ${byTheme('colors.primary')};
  }

  &:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  &:active + span::before {
    border-color: ${byTheme('colors.primary')};
  }

  &:checked:active + span::before {
    border-color: transparent;
    background-color: ${byTheme('colors.gray[6]')};
  }

  &:disabled {
    opacity: 0;
  }

  &:disabled + span {
    color: rgba(0, 0, 0, 0.3);
    cursor: initial;
  }

  &:disabled + span::before {
    border-color: rgba(0, 0, 0, 0.3);
  }
`

const StyledLabel = styled.label`
  z-index: 0;
  position: relative;
  display: inline-block;
  color: ${byTheme('colors.gray[4]')};
  font-family: ${byTheme('fonts[0]')};
  font-size: ${byTheme('fontSizes.medium')};
  line-height: ${byTheme('lineHeights.normal')};

  &:hover > ${/* sc-selector */ StyledInput} {
    opacity: 0.04;
  }

  &:hover > ${/* sc-selector */ StyledInput}:focus {
    opacity: 0.16;
  }

  ${space}
  ${layout}
`

const StyledSpan = styled.span`
  display: inline-block;
  width: 100%;
  cursor: pointer;

  ${({ labelled }) => css`
    &::before {
      content: '';
      border-radius: 2px;
      display: inline-block;
      box-sizing: border-box;
      margin: ${labelled ? '3px 14px 3px 1px' : '3px 1px'};
      border: solid 2px; /* Safari */
      border-color: rgba(0, 0, 0, 0.6);
      border-radius: ${byTheme('radii.xsmall')};
      width: 18px;
      height: 18px;
      vertical-align: top;
      transition: border-color 0.2s, background-color 0.2s;
    }
  `}

  &::after {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: 4px;
    left: 2px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }

  ${/* sc-selector */ StyledInput}:checked + &::before,
  ${/* sc-selector */ StyledInput}:indeterminate + &::before {
    border-color: ${byTheme('colors.white')};
    background-color: ${byTheme('colors.white')};
  }

  ${/* sc-selector */ StyledInput}:checked + &::after,
  ${/* sc-selector */ StyledInput}:indeterminate + &::after {
    border-color: ${byTheme('colors.primary')};
  }

  ${/* sc-selector */ StyledInput}:indeterminate + &::after {
    border-left: none;
    transform: translate(4px, 3px);
  }
`

const Checkbox = ({ children, onChange, checked, onBlur, disabled, ...props }) => (
  <StyledLabel {...props}>
    <StyledInput onChange={onChange} onBlur={onBlur} checked={checked} disabled={disabled} />
    <StyledSpan labelled={children}>{children}</StyledSpan>
  </StyledLabel>
)

export default Checkbox
