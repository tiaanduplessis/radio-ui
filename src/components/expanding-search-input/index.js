import React, { Component } from 'react'

import { ContainerAlt, InputAlt } from './styles'
import { SearchWeb } from '@lessondesk/material-icons'

import theme from '../theme.js'

const IconAltStyling = {
  position: 'absolute',
  right: '15px',
  height: '40px',
  width: '40px',
  borderRadius: '100%'
}

class ExpandingSearchInput extends Component {
  state = {
    expanded: false,
    value: ''
  }

  toggleExpanded = () => {
    const { expanded, value } = this.state
    this.setState({
      expanded: !expanded,
      value: expanded ? value : ''
    })

    if (!expanded) {
      this.input.focus()
    }
  }

  render () {
    const { expanded } = this.state
    return (
      <ContainerAlt>
        <InputAlt
          style={{ padding: '0 1em' }}
          placeholder='Search...'
          expanded={expanded}
          ref={input => (this.input = input)}
          onBlur={e => {
            if (e.target.value === '' && expanded) {
              this.toggleExpanded()
            }
          }}
          {...this.props}
        />
        <SearchWeb
          onClick={this.toggleExpanded}
          style={IconAltStyling}
          bg={'white'}
          size={theme.fontSizes.normal}
        />
      </ContainerAlt>
    )
  }
}

export default ExpandingSearchInput
