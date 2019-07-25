import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import { DotsVertical } from '@lessondesk/material-icons'
import theme from './theme'

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    display: inline-block;
    margin: 0.4em 0;
  }
`

const OverflowMenu = ({ position, children }) => (
  <Popup
    contentStyle={{
      width: 'auto',
      padding: '0.5em 2em 0.5em 1em',
      borderRadius: '.4em',
      border: 'none',
      animation: '200ms fade-in ease-in'
    }}
    trigger={<DotsVertical color={theme.colors.gray.dark} />}
    position={position || 'left center'}
    arrow={false}
  >
    {closePopup => (
      <SettingsContainer>
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, {
            closePopup
          })
        })}
      </SettingsContainer>
    )}
  </Popup>
)

export default OverflowMenu
