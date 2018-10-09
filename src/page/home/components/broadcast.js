import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { BroadcastWrapper } from '../styled'

class Broadcast extends PureComponent {
  render() {
    return (
      <BroadcastWrapper></BroadcastWrapper>
    ) 
  }
}

const mapState = (state) => ({
})

const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(Broadcast)