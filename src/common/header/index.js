import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group"
import { actionCreators } from "./store"
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Box,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoItem,
  SearchInfoList,
  SearchInfoTitle,
  SearchInfoSwitch,
  LangBox,
  SearchWarpper,
  SearchIcon,
  SearchInput
} from "./style";

class Header extends PureComponent {
  render() {
    const { isFocused, handleLogout, handleInputFocus, handleInputBlur, list, isLogined } = this.props;
    return (
      <HeaderWrapper>
        <Box>
          <Logo />
          <Nav>
            <NavItem className="left">首页</NavItem>
            <NavItem className="left">走进中农</NavItem>
            <NavItem className="left">新闻中心</NavItem>
            <NavItem className="left">企业品牌</NavItem>
            <NavItem className="left">加入中农</NavItem>
            <NavItem className="left">联系我们</NavItem>
          </Nav>
          <SearchWarpper>
            <SearchIcon>
              <i className="iconfont">&#xe62d;</i>
            </SearchIcon>
            <SearchInput></SearchInput>
          </SearchWarpper>
          {/* <SearchWarpper>
            <CSSTransition in={isFocused} timeout={330} classNames="slide">
              <NavSearch
                className={isFocused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={isFocused ? "iconfont focused zoom" : "iconfont zoom"}>
              &#xe62d;
            </i>
          </SearchWarpper> */}
          <LangBox>
            <a>中 \ </a>
            <a>English</a>
            <a> \ 旧</a>
          </LangBox>
        </Box>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMouseIn: state.getIn(['header', 'isMouseIn']),
    isFocused: state.getIn(['header', 'isFocused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    isLogined: state.getIn(['login', 'isLogined'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogout() {
      
    },
    handleInputFocus(list) {
      // 注意：这里的list是immutable-array，没有length的
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFoucs())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage - 1) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(0))
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
