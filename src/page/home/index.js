import React, { Component, Fragment } from 'react'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import Swiper from './components/swiper'
import Boradcast from './components/broadcast'
import { HomeWrapper } from './styled'

class Home extends Component {
  render() {
    return(
      <Fragment>
        <Swiper></Swiper>
        <Boradcast></Boradcast>
      </Fragment>
    ) 
  }

  componentDidMount() {
    this.props.fetchHomeData()
  }

  componentWillUnmount() {
    this.unbindEvents()
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  fetchHomeData() {
    dispatch(actionCreators.fetchHomeData())
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)