import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {  } from '../styled'

class Topic extends PureComponent {
  render() {
    return (
      <div>
        <img src="http://www1.sino-agri.com/uploadfile/2018/0530/20180530101340802.jpg" alt="sino"/>
      </div>
    ) 
  }
}

const mapState = (state) => ({
})

const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(Topic)