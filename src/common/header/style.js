import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
import navItemBg from '../../statics/navi_bg.png'

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 99px;
  border-bottom: 1px solid #f0f0f0; 
`
export const Box = styled.div`
  position: relative;
  width: 1200px;
  height: 100%;

  box-sizing: border-box;
  margin: 0 auto;
`

export const Logo = styled.div`
  position: absolute;
  top: 23px;
  left: 0;
  display: block;
  width: 365px;
  height: 53px;
  line-height: 99px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  position: absolute;
  bottom: 5px;
  right: 0;
  width: 750px;
  height: 47px;
  margin: 0 auto;
`

// &.left 如果<NavItem/>组件上有left类名，就向左浮动
export const NavItem = styled.div`
  width: 92px;
  height: 47px;
  line-height: 47px;
  text-align: center;
  font-size: 14px;
  color: #666;
  &.left {
    float: left;
  }
  &:not(:last-child) {
    background: url(${navItemBg}) no-repeat right 16px;
  }

  &.active {
    color: #ea6f5a;
  }
`

export const LangBox =  styled.p`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 24px;
  background: #228f78;
  border-radius: 0 0 5px 5px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 24px;
`

export const SearchWarpper = styled.div`
  position: absolute;
  right: 0;
  bottom: 20px;
  width: 194px;
  height: 40px;
  box-sizing: border-box;
  font-size: 1em;
  backgounrd: transparnet;
`

export const SearchInput = styled.input.attrs({
  placeholder: '请输入⋯⋯'
})`
  float: right;
  font-size: 16px;
  box-sizing: border-box;
  width: 152px;
  height: 40px;
  border: none;
  outline: none;
  margin: 0;
  padding: 0 11px;
  background: #aaa;
  border-radius: 4px 0 0 4px;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
  &:hover {
    background: #2D2822;
  }
`

export const SearchIcon = styled.div`
float: right;
  box-sizing: border-box;
  width: 42px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 0 4px 4px 0;
  background: #228f78;
  i {
    font-size: 28px;
  }
`

// export const SearchWarpper = styled.div`
//   position: relative;  
//   float: riht;
//   .zoom {
//     position: absolute;
//     right: 5px;
//     bottom: 5px;
//     width: 30px;
//     line-height: 30px;
//     border-radius: 15px;
//     text-align: center;

//     &.focused {
//       background: #777;
//       color: #fff;
//     }
//   }
// `

// // &::placeholder 表示当前组件下的 placeholder
// export const NavSearch = styled.input.attrs({
//   placeholder: '搜索'
// })`
//   position: absolute;
//   right: 0;
//   top: 38px;
//   height: 38px;
//   width: 100px
//   border: none;
//   outline: none;
//   border-radius: 8px;
//   background: #eee;
//   margin-top: 9px;
//   padding: 0 38px 0 20px;
//   box-sizing: border-box;
//   font-size: 14px;
//   margin-left: 20px;
//   color: #666;
//   &::placeholder {
//     color: #999;
//   }
//   &.focused {
//     width: 260px;
//     .iconfont
//   }
//   &.slide-enter {
//     transition: all .33s ease-out;
//   }
//   &.slide-enter-active {
//     width: 260px;
//   }
//   &.slide-exit {
//     transition: all .33s ease-out;
//   }
//   &.slide-exit-active {
//     width: 180px;
//   }
// `

// export const SearchInfo = styled.div`
//   position: absolute;
//   top: 56px;
//   left: 0;
//   width: 240px;
//   padding: 0 20px;
//   box-shadow: 0 0 8px rgba(0,0,0,.2);
//   background: #fff;
// `

// export const SearchInfoTitle = styled.div`
//   margin-top: 20px;
//   margin-bottom: 15px;
//   line-height: 20px;
//   font-size: 14px;
//   color: #969696;
// `

// export const SearchInfoSwitch = styled.span`
//   float: right;
//   font-size: 13px;
//   cursor: pointer;
//   .spin {
//     display: block;
//     float: left;
//     font-size: 12px;
//     margin-right: 2px;
//     transition: all .28s ease-in;
//     transform: rotate(0deg);
//     transform-origin: center center;
//   }
// `
// export const SearchInfoList = styled.div`
//   overflow: hidden;
// `

// export const SearchInfoItem = styled.a`
//   display: block;
//   float: left;
//   line-height: 20px;
//   padding: 0 5px;
//   font-size: 12px;
//   border: 1px solid #ddd;
//   color: #787878;
//   border-radius: 3px;
//   margin-right: 10px;
//   margin-bottom: 10px;
// `

// export const SearchInfoContent = styled.div`

// `

// export const SearchInfoFooter = styled.div`

// `

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
